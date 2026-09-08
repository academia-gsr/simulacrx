import React, { useState } from 'react';
import Landing from './components/Landing';
import Exam from './components/Exam';
import Results from './components/Results';
import { StudentInfo } from './types';

type AppState = 'landing' | 'exam' | 'results';

interface AppData {
  studentInfo: StudentInfo | null;
  answers: (number | null)[];
  timeUsed: number;
}

function App() {
  const [state, setState] = useState<AppState>('landing');
  const [data, setData] = useState<AppData>({
    studentInfo: null,
    answers: [],
    timeUsed: 0
  });

  const handleStart = (info: StudentInfo) => {
    setData(prev => ({ ...prev, studentInfo: info }));
    setState('exam');
  };

  const handleFinish = (answers: (number | null)[], timeUsed: number) => {
    setData(prev => ({ ...prev, answers, timeUsed }));
    setState('results');
  };

  const handleRestart = () => {
    setData({ studentInfo: null, answers: [], timeUsed: 0 });
    setState('landing');
  };

  return (
    <>
      {state === 'landing' && <Landing onStart={handleStart} />}
      {state === 'exam' && data.studentInfo && (
        <Exam studentInfo={data.studentInfo} onFinish={handleFinish} />
      )}
      {state === 'results' && data.studentInfo && (
        <Results
          studentInfo={data.studentInfo}
          answers={data.answers}
          timeUsed={data.timeUsed}
          onRestart={handleRestart}
        />
      )}
    </>
  );
}

export default App;
