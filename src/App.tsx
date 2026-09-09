import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import Exam from './components/Exam';
import Results from './components/Results';
import { StudentInfo, User, Question } from './types';
import { simulacros, getSimulacroById, Block } from './data/simulacros';
import { getRoleInfo } from './data/users';

type AppState = 'login' | 'dashboard' | 'landing' | 'exam' | 'results';

interface AppData {
  user: User | null;
  studentInfo: StudentInfo | null;
  answers: (number | null)[];
  timeUsed: number;
  currentQuestions: Question[];
  currentSimulacroId: string;
  currentBlockId: string;
  currentBlock: Block | null;
  originalQuestions: Question[];
}

function App() {
  const [state, setState] = useState<AppState>('login');
  const [data, setData] = useState<AppData>({
    user: null,
    studentInfo: null,
    answers: [],
    timeUsed: 0,
    currentQuestions: [],
    currentSimulacroId: '',
    currentBlockId: '',
    currentBlock: null,
    originalQuestions: [],
  });

  const handleLogin = (user: User) => {
    setData(prev => ({ ...prev, user }));
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
    };
    setData(prev => ({ ...prev, user: guestUser }));
    setState('dashboard');
  };

  const handleLogout = () => {
    setData({
      user: null,
      studentInfo: null,
      answers: [],
      timeUsed: 0,
      currentQuestions: [],
      currentSimulacroId: '',
      currentBlockId: '',
      currentBlock: null,
      originalQuestions: [],
    });
    setState('login');
  };

  const prepareQuestions = (questions: Question[], userRole: string): Question[] => {
    // Reordenar aleatoriamente manteniendo numeración ascendente visual
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    
    if (userRole === 'guest') {
      // Invitados: solo 10% de preguntas
      const count = Math.ceil(shuffled.length * 0.1);
      return shuffled.slice(0, count);
    }
    
    return shuffled;
  };

  const handleSelectBlock = (simulacroId: string, blockId: string, questions: Question[]) => {
    const userRole = data.user?.role || 'guest';
    const preparedQuestions = prepareQuestions(questions, userRole);
    
    const simulacro = getSimulacroById(simulacroId);
    const block = simulacro?.blocks.find(b => b.id === blockId) || null;
    
    setData(prev => ({
      ...prev,
      currentSimulacroId: simulacroId,
      currentBlockId: blockId,
      currentBlock: block,
      currentQuestions: preparedQuestions,
      originalQuestions: questions,
    }));
    setState('landing');
  };

  const handleStart = (info: StudentInfo) => {
    setData(prev => ({ ...prev, studentInfo: info }));
    setState('exam');
  };

  const handleFinish = (answers: (number | null)[], timeUsed: number) => {
    setData(prev => ({ ...prev, answers, timeUsed }));
    setState('results');
  };

  const handleRestart = () => {
    setData(prev => ({
      ...prev,
      studentInfo: null,
      answers: [],
      timeUsed: 0,
      currentQuestions: [],
      currentSimulacroId: '',
      currentBlockId: '',
      currentBlock: null,
      originalQuestions: [],
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
      
      {state === 'dashboard' && (
        <Dashboard
          simulacros={simulacros}
          user={data.user}
          onSelectBlock={handleSelectBlock}
          onLogout={handleLogout}
        />
      )}

      {state === 'landing' && data.currentQuestions.length > 0 && (
        <Landing
          onStart={handleStart}
          simulacro={currentSimulacro}
          userRole={userRole}
          questionCount={data.currentQuestions.length}
          block={data.currentBlock}
        />
      )}

      {state === 'exam' && data.studentInfo && data.currentQuestions.length > 0 && (
        <Exam
          studentInfo={data.studentInfo}
          questions={data.currentQuestions}
          onFinish={handleFinish}
          simulacro={currentSimulacro}
          block={data.currentBlock}
        />
      )}

      {state === 'results' && data.studentInfo && data.currentQuestions.length > 0 && (
        <Results
          studentInfo={data.studentInfo}
          answers={data.answers}
          timeUsed={data.timeUsed}
          questions={data.currentQuestions}
          onRestart={handleRestart}
          userRole={userRole}
          simulacro={currentSimulacro}
        />
      )}
    </div>
  );
}

export default App;
