import { useState, useEffect, useRef } from 'react';
import { User, Question, Attempt, UserRole } from './types';
import { simulacros, getSimulacroById } from './data/simulacros';
import { authenticateUser, getRoleInfo, getMaxAttempts, saveUserData, loadUserData } from './data/users';

type AppState = 'login' | 'dashboard' | 'exam' | 'results';

interface AppData {
  user: User | null;
  currentQuestions: Question[];
  currentSimulacroId: string;
  currentBlockId: string;
  answers: (number | null)[];
  timeUsed: number;
  showProfile: boolean;
  showQuickTest: boolean;
  isQuickTest: boolean;
}

export default function App() {
  const [state, setState] = useState<AppState>('login');
  const [data, setData] = useState<AppData>({
    user: null,
    currentQuestions: [],
    currentSimulacroId: '',
    currentBlockId: '',
    answers: [],
    timeUsed: 0,
    showProfile: false,
    showQuickTest: false,
    isQuickTest: false,
  });

  const handleLogin = (username: string, password: string) => {
    const user = authenticateUser(username, password);
    if (user) {
      const saved = loadUserData(user.id);
      const userWithData = {
        ...user,
        profile: saved.profile || user.profile,
        attempts: saved.attempts || user.attempts,
      };
      setData(prev => ({ ...prev, user: userWithData }));
      setState('dashboard');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const handleContinueAsGuest = () => {
    const guestUser: User = {
      id: 'guest-' + Date.now(),
      username: 'guest',
      password: '',
      role: 'guest',
      displayName: 'Invitado',
      allowedSimulacros: ['sim01', 'sim02'],
      profile: { fullName: 'Invitado', phone: '', email: '' },
      attempts: [],
    };
    setData(prev => ({ ...prev, user: guestUser }));
    setState('dashboard');
  };

  const handleLogout = () => {
    setData({
      user: null,
      currentQuestions: [],
      currentSimulacroId: '',
      currentBlockId: '',
      answers: [],
      timeUsed: 0,
      showProfile: false,
      showQuickTest: false,
      isQuickTest: false,
    });
    setState('login');
  };

  const handleSelectBlock = (simulacroId: string, blockId: string, questions: Question[]) => {
    const userRole = data.user?.role || 'guest';
    const block = getSimulacroById(simulacroId)?.blocks.find(b => b.id === blockId);
    const duration = block?.duration || 180;
    
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    
    setData(prev => ({
      ...prev,
      currentSimulacroId: simulacroId,
      currentBlockId: blockId,
      currentQuestions: shuffled,
      answers: new Array(shuffled.length).fill(null),
      isQuickTest: false,
    }));
    setState('exam');
  };

  const handleFinish = (answers: (number | null)[], timeUsed: number) => {
    if (data.user && data.user.role !== 'guest') {
      const correct = answers.reduce<number>((acc, answer, idx) => {
        return acc + (answer === data.currentQuestions[idx].correctAnswer ? 1 : 0);
      }, 0);
      
      const attempt: Attempt = {
        id: `attempt-${Date.now()}`,
        blockId: data.currentBlockId,
        simulacroId: data.currentSimulacroId,
        date: new Date().toISOString(),
        answers,
        timeUsed,
        score: Math.round((correct / data.currentQuestions.length) * 100),
        correct,
        total: data.currentQuestions.length,
        questionOrder: data.currentQuestions.map(q => q.id),
      };
      
      const updatedUser = {
        ...data.user,
        attempts: [...data.user.attempts, attempt],
      };
      
      setData(prev => ({ ...prev, user: updatedUser, answers, timeUsed }));
      saveUserData(updatedUser.id, updatedUser.profile, updatedUser.attempts);
    } else {
      setData(prev => ({ ...prev, answers, timeUsed }));
    }
    
    setState('results');
  };

  const handleRetry = () => {
    const simulacro = getSimulacroById(data.currentSimulacroId);
    const block = simulacro?.blocks.find(b => b.id === data.currentBlockId);
    if (!block) return;
    
    const shuffled = [...block.questions].sort(() => Math.random() - 0.5);
    
    setData(prev => ({
      ...prev,
      currentQuestions: shuffled,
      answers: new Array(shuffled.length).fill(null),
    }));
    setState('exam');
  };

  const handleBackToDashboard = () => {
    setData(prev => ({
      ...prev,
      currentQuestions: [],
      currentSimulacroId: '',
      currentBlockId: '',
      answers: [],
      timeUsed: 0,
      isQuickTest: false,
    }));
    setState('dashboard');
  };

  const handleStartQuickTest = (questionCount: number, areas: string[], simulacroId: string) => {
    const simulacro = getSimulacroById(simulacroId);
    if (!simulacro) return;
    
    let allQuestions = simulacro.blocks.flatMap(b => b.questions);
    if (areas.length > 0) {
      allQuestions = allQuestions.filter(q => areas.includes(q.area));
    }
    
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, questionCount);
    
    // Calcular tiempo proporcional basado en cantidad y dificultad
    const avgDifficulty = selected.reduce((sum, q) => {
      return sum + (q.difficulty === 'fácil' ? 1.5 : q.difficulty === 'medio' ? 2 : 3);
    }, 0) / selected.length;
    
    const timeInMinutes = Math.ceil(selected.length * avgDifficulty);
    
    setData(prev => ({
      ...prev,
      currentSimulacroId: simulacroId,
      currentBlockId: 'quick-test',
      currentQuestions: selected,
      answers: new Array(selected.length).fill(null),
      isQuickTest: true,
    }));
    setState('exam');
  };

  return (
    <div className="min-h-screen">
      {state === 'login' && (
        <LoginScreen
          onLogin={handleLogin}
          onContinueAsGuest={handleContinueAsGuest}
        />
      )}
      
      {state === 'dashboard' && data.user && (
        <Dashboard
          user={data.user}
          onSelectBlock={handleSelectBlock}
          onLogout={handleLogout}
          onStartQuickTest={handleStartQuickTest}
        />
      )}
      
      {state === 'exam' && data.user && data.currentQuestions.length > 0 && (
        <ExamScreen
          user={data.user}
          questions={data.currentQuestions}
          onFinish={handleFinish}
          simulacroId={data.currentSimulacroId}
          blockId={data.currentBlockId}
          isQuickTest={data.isQuickTest}
        />
      )}
      
      {state === 'results' && data.user && data.currentQuestions.length > 0 && (
        <ResultsScreen
          user={data.user}
          questions={data.currentQuestions}
          answers={data.answers}
          timeUsed={data.timeUsed}
          onRetry={handleRetry}
          onBackToDashboard={handleBackToDashboard}
          simulacroId={data.currentSimulacroId}
          blockId={data.currentBlockId}
          isQuickTest={data.isQuickTest}
        />
      )}
    </div>
  );
}

// Componente de Login
function LoginScreen({ onLogin, onContinueAsGuest }: { onLogin: (u: string, p: string) => void; onContinueAsGuest: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mb-4 shadow-lg">
            <span className="text-4xl">🎓</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">SimulacrUx</h1>
          <p className="text-blue-200">Plataforma de Simulacros de Admisión</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Iniciar Sesión</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Usuario</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Ingrese su usuario"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Ingrese su contraseña"
              />
            </div>

            <button
              onClick={() => onLogin(username, password)}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition"
            >
              Iniciar Sesión
            </button>

            <button
              onClick={onContinueAsGuest}
              className="w-full bg-gray-100 text-gray-700 font-medium py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Continuar como Invitado
            </button>
          </div>
        </div>

        <div className="text-center mt-6 text-blue-300/60 text-sm">
          <p>Preparando el futuro, un simulacro a la vez 🎓</p>
          <p className="mt-1">© 2026 SimulacrUx — Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
}

// Componente Dashboard
function Dashboard({ user, onSelectBlock, onLogout, onStartQuickTest }: any) {
  const [showQuickTest, setShowQuickTest] = useState(false);
  const roleInfo = getRoleInfo(user.role);
  const isPlus = user.role === 'plus' || user.role === 'admin';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-xl">🎓</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">SimulacrUx</h1>
              <p className="text-xs text-blue-300">4. Simulación Exámenes PRE</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className={`px-3 py-1 rounded-full text-xs ${roleInfo.bg} ${roleInfo.color} border ${roleInfo.border}`}>
              {roleInfo.icon} {roleInfo.label}
            </div>
            <button
              onClick={onLogout}
              className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg text-sm transition"
            >
              Salir
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Hola, {user.displayName}</h2>
          <p className="text-blue-200">{roleInfo.description}</p>
        </div>

        {isPlus && (
          <div className="mb-6 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-400/30 rounded-2xl p-6">
            <h3 className="text-purple-300 font-bold text-lg mb-2">⚡ Pruebas Rápidas Personalizadas</h3>
            <p className="text-purple-100/80 text-sm mb-3">
              Crea pruebas rápidas de 5, 10 o 15 preguntas filtradas por área.
            </p>
            <button
              onClick={() => setShowQuickTest(true)}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold px-6 py-2 rounded-lg hover:opacity-90 transition"
            >
              🎯 Crear Prueba Rápida
            </button>
          </div>
        )}

        <div className="space-y-6">
          {simulacros.map(sim => (
            <div key={sim.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className={`bg-gradient-to-r ${sim.theme.headerBg} p-6`}>
                <h3 className="text-xl font-bold text-white">{sim.title}</h3>
                <p className="text-blue-200 text-sm">{sim.subtitle}</p>
              </div>
              <div className="p-6">
                {sim.blocks.map(block => (
                  <button
                    key={block.id}
                    onClick={() => onSelectBlock(sim.id, block.id, block.questions)}
                    className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl p-4 transition"
                  >
                    <h4 className="text-white font-semibold">{block.name}</h4>
                    <p className="text-blue-200/60 text-sm">{block.description}</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-yellow-400 font-bold">{block.questionCount} preguntas</span>
                      <span className="text-blue-200/60">{block.duration} min</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <footer className="text-center mt-12 pb-8 text-blue-300/40 text-sm">
          <p>Preparando el futuro, un simulacro a la vez 🎓</p>
          <p className="mt-1">© 2026 SimulacrUx — Todos los derechos reservados</p>
        </footer>
      </main>

      {showQuickTest && (
        <QuickTestModal
          user={user}
          onStart={handleStartQuickTest}
          onClose={() => setShowQuickTest(false)}
        />
      )}
    </div>
  );

  function handleStartQuickTest(questionCount: number, areas: string[], simulacroId: string) {
    onStartQuickTest(questionCount, areas, simulacroId);
    setShowQuickTest(false);
  }
}

// Modal de Pruebas Rápidas
function QuickTestModal({ user, onStart, onClose }: any) {
  const [step, setStep] = useState(1);
  const [selectedSimulacro, setSelectedSimulacro] = useState('');
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [questionCount, setQuestionCount] = useState(10);

  const availableSimulacros = simulacros.filter(s => 
    user.role === 'admin' || user.allowedSimulacros.includes(s.id)
  );

  const availableAreas = selectedSimulacro 
    ? [...new Set(getSimulacroById(selectedSimulacro)?.blocks.flatMap(b => b.questions).map(q => q.area) || [])]
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">⚡ Prueba Rápida</h2>
            <button onClick={onClose} className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6">
          {step === 1 && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Paso 1: Selecciona un Simulacro</h3>
              <div className="space-y-3">
                {availableSimulacros.map(sim => (
                  <button
                    key={sim.id}
                    onClick={() => { setSelectedSimulacro(sim.id); setStep(2); }}
                    className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition"
                  >
                    <p className="font-bold text-gray-800">{sim.title}</p>
                    <p className="text-sm text-gray-600">{sim.subtitle}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Paso 2: Selecciona Áreas (opcional)</h3>
              <div className="space-y-2 mb-6">
                {availableAreas.map(area => (
                  <label key={area} className="flex items-center gap-2 p-3 rounded-lg border-2 border-gray-200 hover:border-purple-500 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedAreas.includes(area)}
                      onChange={() => {
                        setSelectedAreas(prev => 
                          prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
                        );
                      }}
                      className="w-5 h-5"
                    />
                    <span className="text-gray-800">{area}</span>
                  </label>
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition">
                  ← Atrás
                </button>
                <button onClick={() => setStep(3)} className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition">
                  Siguiente →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Paso 3: Cantidad de Preguntas</h3>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[5, 10, 15].map(count => (
                  <button
                    key={count}
                    onClick={() => setQuestionCount(count)}
                    className={`py-6 rounded-xl border-2 transition ${
                      questionCount === count ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <p className="text-3xl font-bold text-gray-800">{count}</p>
                    <p className="text-sm text-gray-600">preguntas</p>
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(2)} className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition">
                  ← Atrás
                </button>
                <button
                  onClick={() => onStart(questionCount, selectedAreas, selectedSimulacro)}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition"
                >
                  🚀 Iniciar Prueba
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Componente de Examen
function ExamScreen({ user, questions, onFinish, simulacroId, blockId, isQuickTest }: any) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [timeRemaining, setTimeRemaining] = useState(questions.length * 2 * 60);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const simulacro = getSimulacroById(simulacroId);
  const isPlus = user.role === 'plus' || user.role === 'admin';

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onFinish(answers, questions.length * 2 * 60);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [answers, onFinish, questions.length, isPaused]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const question = questions[currentQuestion];
  const answeredCount = answers.filter(a => a !== null).length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className={`bg-gradient-to-r ${simulacro?.theme.headerBg || 'from-slate-800 to-blue-900'} text-white shadow-sm sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">{user.profile.fullName}</p>
            <p className="text-xs text-white/70">{simulacro?.institution || 'SimulacrUx'}</p>
          </div>
          
          <div className="flex items-center gap-3">
            {isPlus && (
              <button
                onClick={() => setIsPaused(!isPaused)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition ${
                  isPaused ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                {isPaused ? '▶️ Reanudar' : '⏸️ Pausar'}
              </button>
            )}
            
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono font-bold text-lg ${
              isPaused ? 'bg-yellow-500/30 text-yellow-200' : 'bg-white/20 text-white'
            }`}>
              ⏰ {formatTime(timeRemaining)}
              {isPaused && <span className="text-xs">(PAUSADO)</span>}
            </div>

            <button
              onClick={() => setShowConfirm(true)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Terminar
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 md:p-8 max-w-3xl mx-auto w-full">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
              question.difficulty === 'fácil' ? 'bg-green-100 text-green-700 border-green-200' :
              question.difficulty === 'medio' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
              'bg-red-100 text-red-700 border-red-200'
            }`}>
              {question.difficulty}
            </span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
              {question.area}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <p className="text-lg text-gray-800 leading-relaxed font-medium">{question.question}</p>
        </div>

        <div className="space-y-3 mb-8">
          {question.options.map((option: string, idx: number) => (
            <button
              key={idx}
              onClick={() => {
                const newAnswers = [...answers];
                newAnswers[currentQuestion] = idx;
                setAnswers(newAnswers);
              }}
              className={`w-full text-left p-4 rounded-xl border-2 transition ${
                answers[currentQuestion] === idx
                  ? 'border-blue-500 bg-blue-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  answers[currentQuestion] === idx ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className={answers[currentQuestion] === idx ? 'text-blue-800 font-medium' : 'text-gray-700'}>
                  {option}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-40 transition font-medium"
          >
            ← Anterior
          </button>

          <span className="text-sm text-gray-500">{answeredCount}/{questions.length}</span>

          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
            >
              Siguiente →
            </button>
          ) : (
            <button
              onClick={() => setShowConfirm(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-green-600 text-white hover:bg-green-700 transition font-medium"
            >
              Finalizar ✓
            </button>
          )}
        </div>
      </div>

      {/* Botón Reportar Falla Arrastrable */}
      <DraggableReportButton
        simulacroId={simulacroId}
        blockId={blockId}
        questionId={question.id}
        questionNumber={currentQuestion + 1}
        userId={user.id}
      />

      {isPaused && isPlus && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">⏸️</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Examen Pausado</h2>
            <p className="text-gray-600 mb-6">Tiempo restante: {formatTime(timeRemaining)}</p>
            <button
              onClick={() => setIsPaused(false)}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition"
            >
              ▶️ Reanudar Examen
            </button>
          </div>
        </div>
      )}

      {showConfirm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">¿Terminar examen?</h3>
            <p className="text-gray-500 mb-6">
              Has respondido {answeredCount} de {questions.length} preguntas.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition"
              >
                Seguir
              </button>
              <button
                onClick={() => onFinish(answers, questions.length * 2 * 60 - timeRemaining)}
                className="flex-1 px-4 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
              >
                Terminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Botón Reportar Falla Arrastrable
function DraggableReportButton({ simulacroId, blockId, questionId, questionNumber, userId }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 }); // Posición inicial (bottom-right)
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    offsetRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const newX = e.clientX - offsetRef.current.x;
    const newY = e.clientY - offsetRef.current.y;
    
    // Limitar a los bordes de la pantalla
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 60;
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    const touch = e.touches[0];
    offsetRef.current = {
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    };
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    const newX = touch.clientX - offsetRef.current.x;
    const newY = touch.clientY - offsetRef.current.y;
    
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 60;
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY)),
    });
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <>
      <div
        ref={dragRef}
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          zIndex: 40,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <button
          onClick={(e) => {
            if (!isDragging) {
              e.stopPropagation();
              setIsOpen(true);
            }
          }}
          className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-full shadow-lg border border-gray-200 transition-all hover:shadow-xl flex items-center gap-2 text-sm font-medium"
          title="Arrastra para mover • Click para reportar"
        >
          🐛 Reportar
        </button>
      </div>

      {isOpen && (
        <ReportBugModal
          onClose={() => setIsOpen(false)}
          simulacroId={simulacroId}
          blockId={blockId}
          questionId={questionId}
          questionNumber={questionNumber}
          userId={userId}
        />
      )}
    </>
  );
}

// Modal de Reporte de Fallas
function ReportBugModal({ onClose, questionNumber }: any) {
  const [type, setType] = useState('incompleta');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-5 rounded-t-2xl sticky top-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">🐛 Reportar Falla</h2>
              <p className="text-orange-100 text-sm">Pregunta #{questionNumber}</p>
            </div>
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-5">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">¡Reporte enviado!</h3>
              <p className="text-gray-600 text-sm mb-6">Gracias por tu reporte.</p>
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition"
              >
                ✓ Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de reporte</label>
                <select
                  value={type}
                  onChange={e => setType(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none"
                >
                  <option value="incompleta">📝 Pregunta incompleta</option>
                  <option value="falta-grafico">📊 Falta gráfico</option>
                  <option value="respuesta-incorrecta">❌ Respuesta incorrecta</option>
                  <option value="otro">💬 Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descripción (opcional)</label>
                <textarea
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="Describe el problema..."
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none resize-none"
                  rows={3}
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2.5 rounded-lg border-2 border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition"
                >
                  ✕ Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-2.5 rounded-lg hover:opacity-90 transition"
                >
                  ✓ Enviar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// Componente de Resultados
function ResultsScreen({ user, questions, answers, timeUsed, onRetry, onBackToDashboard, simulacroId, blockId, isQuickTest }: any) {
  const simulacro = getSimulacroById(simulacroId);
  const roleInfo = getRoleInfo(user.role);
  const isPlus = user.role === 'plus' || user.role === 'admin';
  
  const correct = answers.reduce((acc: number, answer: number | null, idx: number) => {
    return acc + (answer === questions[idx].correctAnswer ? 1 : 0);
  }, 0);
  
  const percentage = Math.round((correct / questions.length) * 100);
  const blockAttempts = user.attempts.filter((a: Attempt) => a.blockId === blockId).length;
  const maxAttempts = getMaxAttempts(user.role);
  const canRetry = blockAttempts < maxAttempts;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} min ${secs} seg`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className={`bg-gradient-to-r ${simulacro?.theme.headerBg || 'from-slate-800 to-blue-900'} text-white py-8 px-4`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold">{isQuickTest ? '⚡ Prueba Rápida' : 'Resultados'}</h1>
          <p className="text-blue-200 mt-1">{user.profile.fullName} — {simulacro?.institution || 'SimulacrUx'}</p>
          <div className={`mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs border ${roleInfo.bg} ${roleInfo.color} ${roleInfo.border}`}>
            {roleInfo.icon} {roleInfo.label}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <svg className="w-40 h-40 transform -rotate-90">
                <circle cx="80" cy="80" r="70" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                <circle
                  cx="80" cy="80" r="70" fill="none"
                  stroke={percentage >= 50 ? '#3b82f6' : '#ef4444'}
                  strokeWidth="12"
                  strokeDasharray={`${(percentage / 100) * 440} 440`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-gray-800">{percentage}%</span>
                <span className="text-sm text-gray-500">puntaje</span>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-green-50 rounded-xl">
                <p className="text-2xl font-bold text-green-600">{correct}</p>
                <p className="text-xs text-green-700 font-medium">Correctas</p>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-xl">
                <p className="text-2xl font-bold text-red-600">{questions.length - correct}</p>
                <p className="text-xs text-red-700 font-medium">Incorrectas</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-xl">
                <p className="text-2xl font-bold text-blue-600">{questions.length}</p>
                <p className="text-xs text-blue-700 font-medium">Total</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <p className="text-2xl font-bold text-gray-600">{formatTime(timeUsed)}</p>
                <p className="text-xs text-gray-700 font-medium">Tiempo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Intentos restantes */}
        {user.role !== 'guest' && (
          <div className="mb-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">📊</span>
                <span className="text-sm font-medium text-blue-900">
                  Intentos: {blockAttempts}/{maxAttempts === Infinity ? '∞' : maxAttempts}
                </span>
              </div>
              <span className="text-sm text-blue-700">
                {maxAttempts === Infinity ? 'Intentos ilimitados' : `${maxAttempts - blockAttempts} intento(s) restante(s)`}
              </span>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {canRetry ? (
            <button
              onClick={onRetry}
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2 shadow-md"
            >
              🔄 Intentar de nuevo {maxAttempts !== Infinity && `(${maxAttempts - blockAttempts - 1} restante${maxAttempts - blockAttempts - 1 !== 1 ? 's' : ''})`}
            </button>
          ) : (
            <div className="flex-1 bg-gray-200 text-gray-500 font-bold py-3 rounded-xl flex items-center justify-center gap-2">
              🔒 Sin intentos disponibles
            </div>
          )}

          {isPlus ? (
            <button
              onClick={onBackToDashboard}
              className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              📖 Ver explicaciones
            </button>
          ) : (
            <div className="flex-1 bg-gray-100 border border-gray-200 text-gray-500 font-bold py-3 rounded-xl flex items-center justify-center gap-2">
              🔒 Explicaciones no disponibles
            </div>
          )}

          <button
            onClick={onBackToDashboard}
            className="flex-1 bg-gray-100 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-200 transition flex items-center justify-center gap-2"
          >
            🏠 Volver al inicio
          </button>
        </div>

        <footer className="text-center mt-8 pb-8 text-gray-400 text-sm">
          <p>Preparando el futuro, un simulacro a la vez 🎓</p>
          <p className="mt-1">© 2026 SimulacrUx — Todos los derechos reservados</p>
        </footer>
      </div>
    </div>
  );
}
