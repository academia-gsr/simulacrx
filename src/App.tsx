import React, { useState } from 'react';
import Landing from './components/Landing';
import Exam from './components/Exam';
import Results from './components/Results';
import Dashboard from './components/Dashboard';
import { StudentInfo } from './types';
import { Question } from './types';
import { APP_CONFIG, simulacros } from './data/simulacros';

type AppState = 'dashboard' | 'landing' | 'exam' | 'results';

interface AppData {
  studentInfo: StudentInfo | null;
  answers: (number | null)[];
  timeUsed: number;
  currentQuestions: Question[];
  currentSimulacroId: string;
  currentBlockId: string;
  isAdmin: boolean;
}

function App() {
  const [state, setState] = useState<AppState>('dashboard');
  const [data, setData] = useState<AppData>({
    studentInfo: null,
    answers: [],
    timeUsed: 0,
    currentQuestions: [],
    currentSimulacroId: '',
    currentBlockId: '',
    isAdmin: false
  });

  const handleSelectBlock = (simulacroId: string, blockId: string, questions: Question[]) => {
    setData(prev => ({
      ...prev,
      currentSimulacroId: simulacroId,
      currentBlockId: blockId,
      currentQuestions: questions
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
    setData({
      studentInfo: null,
      answers: [],
      timeUsed: 0,
      currentQuestions: [],
      currentSimulacroId: '',
      currentBlockId: '',
      isAdmin: data.isAdmin
    });
    setState('dashboard');
  };

  const handleAdminLogin = () => {
    setData(prev => ({ ...prev, isAdmin: true }));
  };

  return (
    <div className="min-h-screen">
      {/* Header global */}
      {state !== 'dashboard' && (
        <div className="bg-slate-900 text-white py-2 px-4 text-center text-xs">
          <span className="font-bold text-yellow-400">{APP_CONFIG.name}</span>
          <span className="text-slate-400 ml-2">| {APP_CONFIG.project}</span>
        </div>
      )}

      {state === 'dashboard' && (
        <Dashboard
          simulacros={simulacros}
          isAdmin={data.isAdmin}
          onSelectBlock={handleSelectBlock}
          onAdminLogin={handleAdminLogin}
        />
      )}
      {state === 'landing' && data.currentQuestions.length > 0 && (
        <Landing onStart={handleStart} />
      )}
      {state === 'exam' && data.studentInfo && data.currentQuestions.length > 0 && (
        <Exam
          studentInfo={data.studentInfo}
          questions={data.currentQuestions}
          onFinish={handleFinish}
        />
      )}
      {state === 'results' && data.studentInfo && data.currentQuestions.length > 0 && (
        <Results
          studentInfo={data.studentInfo}
          answers={data.answers}
          timeUsed={data.timeUsed}
          questions={data.currentQuestions}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
