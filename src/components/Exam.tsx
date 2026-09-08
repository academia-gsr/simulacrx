import React, { useState, useEffect, useCallback } from 'react';
import { Question, StudentInfo } from '../types';
import { questions } from '../data/questions';

interface ExamProps {
  studentInfo: StudentInfo;
  onFinish: (answers: (number | null)[], timeUsed: number) => void;
}

const EXAM_DURATION = 90 * 60; // 90 minutes in seconds

const Exam: React.FC<ExamProps> = ({ studentInfo, onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [timeRemaining, setTimeRemaining] = useState(EXAM_DURATION);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showQuestionNav, setShowQuestionNav] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onFinish(answers, EXAM_DURATION);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [answers, onFinish]);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleFinish = useCallback(() => {
    const timeUsed = EXAM_DURATION - timeRemaining;
    onFinish(answers, timeUsed);
  }, [answers, timeRemaining, onFinish]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const answeredCount = answers.filter(a => a !== null).length;
  const progress = (answeredCount / questions.length) * 100;
  const question = questions[currentQuestion];

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'fácil': return 'bg-green-100 text-green-700 border-green-200';
      case 'medio': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'difícil': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const isTimeLow = timeRemaining < 300; // Less than 5 minutes

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Bar */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <p className="text-sm font-semibold text-gray-800">{studentInfo.name}</p>
              <p className="text-xs text-gray-500">Simulacro UNI - Ing. Civil</p>
            </div>
          </div>
          
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono font-bold text-lg ${isTimeLow ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-blue-100 text-blue-700'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {formatTime(timeRemaining)}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowQuestionNav(!showQuestionNav)}
              className="md:hidden bg-gray-100 p-2 rounded-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button
              onClick={() => setShowConfirm(true)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Terminar
            </button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1 bg-gray-100">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Sidebar - Question Navigator (Desktop) */}
        <div className="hidden md:block w-64 bg-white border-r overflow-y-auto">
          <div className="p-4">
            <h3 className="font-semibold text-gray-700 mb-3 text-sm">Navegación</h3>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentQuestion(idx)}
                  className={`w-9 h-9 rounded-lg text-xs font-medium transition-all ${
                    idx === currentQuestion
                      ? 'bg-blue-600 text-white shadow-md scale-110'
                      : answers[idx] !== null
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            <div className="mt-4 space-y-2 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-green-100 rounded border border-green-200"></span>
                Respondidas ({answeredCount})
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-gray-100 rounded"></span>
                Sin responder ({questions.length - answeredCount})
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Question Nav Overlay */}
        {showQuestionNav && (
          <div className="fixed inset-0 z-50 bg-black/50 md:hidden" onClick={() => setShowQuestionNav(false)}>
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-white p-4 overflow-y-auto" onClick={e => e.stopPropagation()}>
              <h3 className="font-semibold text-gray-700 mb-3">Navegación</h3>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setCurrentQuestion(idx); setShowQuestionNav(false); }}
                    className={`w-10 h-10 rounded-lg text-xs font-medium transition-all ${
                      idx === currentQuestion
                        ? 'bg-blue-600 text-white'
                        : answers[idx] !== null
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8 max-w-3xl mx-auto w-full">
          {/* Question Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Pregunta {currentQuestion + 1} de {questions.length}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(question.difficulty)}`}>
                {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
              </span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                {question.area}
              </span>
            </div>
          </div>

          {/* Question */}
          <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              {question.question}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  answers[currentQuestion] === idx
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    answers[currentQuestion] === idx
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className={`text-base ${answers[currentQuestion] === idx ? 'text-blue-800 font-medium' : 'text-gray-700'}`}>
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Anterior
            </button>

            <span className="text-sm text-gray-500">
              {answeredCount}/{questions.length} respondidas
            </span>

            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
              >
                Siguiente
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
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
      </div>

      {/* Confirm Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">¿Terminar examen?</h3>
              <p className="text-gray-500 mt-2">
                Has respondido <strong>{answeredCount}</strong> de {questions.length} preguntas.
                {answeredCount < questions.length && (
                  <span className="text-red-500 block mt-1">
                    ⚠️ Tienes {questions.length - answeredCount} preguntas sin responder.
                  </span>
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition"
              >
                Seguir respondiendo
              </button>
              <button
                onClick={handleFinish}
                className="flex-1 px-4 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
              >
                Terminar ahora
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exam;
