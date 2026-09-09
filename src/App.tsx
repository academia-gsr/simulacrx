import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Exam from './components/Exam';
import Results from './components/Results';
import Profile from './components/Profile';
import { User, UserProfile, Question, Attempt } from './types';
import { simulacros, getSimulacroById, Block } from './data/simulacros';
import { authenticateUser, saveUserData, loadUserData } from './data/users';

type AppState = 'login' | 'dashboard' | 'exam' | 'results';

interface AppData {
  user: User | null;
  answers: (number | null)[];
  timeUsed: number;
  currentQuestions: Question[]; // preguntas en el orden presentado
  currentSimulacroId: string;
  currentBlockId: string;
  currentBlock: Block | null;
  showProfile: boolean;
  questionOrder: number[]; // índices originales de las preguntas
}

function App() {
  const [state, setState] = useState<AppState>('login');
  const [data, setData] = useState<AppData>({
    user: null,
    answers: [],
    timeUsed: 0,
    currentQuestions: [],
    currentSimulacroId: '',
    currentBlockId: '',
    currentBlock: null,
    showProfile: false,
    questionOrder: [],
  });

  // Cargar datos guardados al iniciar sesión
  useEffect(() => {
    if (data.user && data.user.role !== 'guest') {
      const saved = loadUserData(data.user.id);
      if (saved.profile || saved.attempts) {
        setData(prev => ({
          ...prev,
          user: prev.user ? {
            ...prev.user,
            profile: saved.profile || prev.user.profile,
            attempts: saved.attempts || prev.user.attempts,
          } : null,
        }));
      }
    }
  }, [data.user?.id]);

  const handleLogin = (user: User) => {
    // Cargar datos guardados del usuario
    const saved = loadUserData(user.id);
    const userWithData = {
      ...user,
      profile: saved.profile || user.profile,
      attempts: saved.attempts || user.attempts,
    };
    setData(prev => ({ ...prev, user: userWithData }));
    setState('dashboard');
  };

  const handleContinueAsGuest = () => {
    const guestUser: User = {
      id: 'guest-' + Date.now(),
      username: 'guest',
      password: '',
      role: 'guest',
      displayName: 'Invitado',
      allowedSimulacros: ['sim01', 'sim02'],
      profile: {
        fullName: 'Invitado',
        phone: '',
        email: '',
      },
      attempts: [],
    };
    setData(prev => ({ ...prev, user: guestUser }));
    setState('dashboard');
  };

  const handleLogout = () => {
    setData({
      user: null,
      answers: [],
      timeUsed: 0,
      currentQuestions: [],
      currentSimulacroId: '',
      currentBlockId: '',
      currentBlock: null,
      showProfile: false,
      questionOrder: [],
    });
    setState('login');
  };

  const handleUpdateProfile = (profile: UserProfile) => {
    if (!data.user) return;
    const updatedUser = { ...data.user, profile };
    setData(prev => ({ ...prev, user: updatedUser }));
    // Persistir
    saveUserData(updatedUser.id, profile, updatedUser.attempts);
  };

  const prepareQuestions = (questions: Question[], userRole: string): { orderedQuestions: Question[]; order: number[] } => {
    // Crear array de índices y mezclar aleatoriamente
    const indices = questions.map((_, i) => i);
    const shuffledIndices = [...indices].sort(() => Math.random() - 0.5);
    
    let finalIndices = shuffledIndices;
    
    if (userRole === 'guest') {
      // Invitados: solo 10% de preguntas
      const count = Math.ceil(shuffledIndices.length * 0.1);
      finalIndices = shuffledIndices.slice(0, count);
    }
    
    const orderedQuestions = finalIndices.map(i => questions[i]);
    return { orderedQuestions, order: finalIndices };
  };

  const handleSelectBlock = (simulacroId: string, blockId: string, questions: Question[]) => {
    const userRole = data.user?.role || 'guest';
    const { orderedQuestions, order } = prepareQuestions(questions, userRole);
    
    const simulacro = getSimulacroById(simulacroId);
    const block = simulacro?.blocks.find(b => b.id === blockId) || null;
    
    setData(prev => ({
      ...prev,
      currentSimulacroId: simulacroId,
      currentBlockId: blockId,
      currentBlock: block,
      currentQuestions: orderedQuestions,
      questionOrder: order,
    }));
    setState('exam');
  };

  const handleFinish = (answers: (number | null)[], timeUsed: number) => {
    setData(prev => ({ ...prev, answers, timeUsed }));
    
    // Registrar intento si el usuario no es invitado
    if (data.user && data.user.role !== 'guest') {
      const totalQuestions = data.currentQuestions.length;
      const correct = answers.reduce<number>((acc, answer, idx) => {
        return acc + (answer === data.currentQuestions[idx].correctAnswer ? 1 : 0);
      }, 0);
      const score = Math.round((correct / totalQuestions) * 100);
      
      const newAttempt: Attempt = {
        id: `attempt-${Date.now()}`,
        blockId: data.currentBlockId,
        simulacroId: data.currentSimulacroId,
        date: new Date().toISOString(),
        answers: [...answers],
        timeUsed,
        score,
        correct,
        total: totalQuestions,
        questionOrder: [...data.questionOrder],
      };
      
      const updatedUser = {
        ...data.user,
        attempts: [...data.user.attempts, newAttempt],
      };
      
      setData(prev => ({ ...prev, user: updatedUser }));
      // Persistir
      saveUserData(updatedUser.id, updatedUser.profile, updatedUser.attempts);
    }
    
    setState('results');
  };

  const handleRetry = () => {
    // Reintentar el mismo bloque con nuevo orden aleatorio
    if (!data.currentBlock) return;
    const simulacro = getSimulacroById(data.currentSimulacroId);
    if (!simulacro) return;
    
    const block = simulacro.blocks.find(b => b.id === data.currentBlockId);
    if (!block) return;
    
    const userRole = data.user?.role || 'guest';
    const { orderedQuestions, order } = prepareQuestions(block.questions, userRole);
    
    setData(prev => ({
      ...prev,
      answers: [],
      timeUsed: 0,
      currentQuestions: orderedQuestions,
      questionOrder: order,
    }));
    setState('exam');
  };

  const handleBackToDashboard = () => {
    setData(prev => ({
      ...prev,
      answers: [],
      timeUsed: 0,
      currentQuestions: [],
      currentSimulacroId: '',
      currentBlockId: '',
      currentBlock: null,
      questionOrder: [],
    }));
    setState('dashboard');
  };

  const currentSimulacro = data.currentSimulacroId ? getSimulacroById(data.currentSimulacroId) : null;
  const userRole = data.user?.role || 'guest';

  return (
    <div className="min-h-screen">
      {state === 'login' && (
        <Login onLogin={handleLogin} onContinueAsGuest={handleContinueAsGuest} />
      )}
      
      {state === 'dashboard' && data.user && (
        <Dashboard
          simulacros={simulacros}
          user={data.user}
          onSelectBlock={handleSelectBlock}
          onLogout={handleLogout}
          onOpenProfile={() => setData(prev => ({ ...prev, showProfile: true }))}
        />
      )}

      {state === 'exam' && data.user && data.currentQuestions.length > 0 && (
        <Exam
          user={data.user}
          questions={data.currentQuestions}
          onFinish={handleFinish}
          simulacro={currentSimulacro}
          block={data.currentBlock}
        />
      )}

      {state === 'results' && data.user && data.currentQuestions.length > 0 && (
        <Results
          user={data.user}
          answers={data.answers}
          timeUsed={data.timeUsed}
          questions={data.currentQuestions}
          onRetry={handleRetry}
          onBackToDashboard={handleBackToDashboard}
          userRole={userRole}
          simulacro={currentSimulacro}
          blockId={data.currentBlockId}
        />
      )}

      {/* Panel de Perfil */}
      {data.showProfile && data.user && (
        <Profile
          user={data.user}
          onUpdateProfile={handleUpdateProfile}
          onClose={() => setData(prev => ({ ...prev, showProfile: false }))}
        />
      )}
    </div>
  );
}

export default App;
