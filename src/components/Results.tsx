import React, { useState } from 'react';
import { StudentInfo, Question } from '../types';

interface ResultsProps {
  studentInfo: StudentInfo;
  answers: (number | null)[];
  timeUsed: number;
  questions: Question[];
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ studentInfo, answers, timeUsed, questions, onRestart }) => {
  const [showReview, setShowReview] = useState(false);
  const [filterArea, setFilterArea] = useState<string>('Todas');

  const areas = [...new Set(questions.map(q => q.area))];

  const totalCorrect: number = answers.reduce<number>((acc, answer, idx) => {
    return acc + (answer === questions[idx].correctAnswer ? 1 : 0);
  }, 0);

  const totalAnswered: number = answers.filter(a => a !== null).length;
  const totalWrong: number = totalAnswered - totalCorrect;
  const totalBlank: number = questions.length - totalAnswered;
  const percentage: number = Math.round((totalCorrect / questions.length) * 100);

  const scoreByArea = areas.map(area => {
    const areaQuestions = questions.filter(q => q.area === area);
    const areaCorrect: number = areaQuestions.reduce<number>((acc, q) => {
      const globalIdx = questions.indexOf(q);
      return acc + (answers[globalIdx] === q.correctAnswer ? 1 : 0);
    }, 0);
    return {
      area,
      correct: areaCorrect,
      total: areaQuestions.length,
      percentage: Math.round((areaCorrect / areaQuestions.length) * 100)
    };
  });

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} min ${secs} seg`;
  };

  const getGrade = () => {
    if (percentage >= 90) return { label: 'Excelente', color: 'text-green-600', bg: 'bg-green-100' };
    if (percentage >= 70) return { label: 'Muy Bueno', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (percentage >= 50) return { label: 'Bueno', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    if (percentage >= 30) return { label: 'Regular', color: 'text-orange-600', bg: 'bg-orange-100' };
    return { label: 'Necesita mejorar', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const grade = getGrade();

  const filteredQuestions = filterArea === 'Todas' 
    ? questions 
    : questions.filter(q => q.area === filterArea);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Resultados del Simulacro</h1>
              <p className="text-blue-200 mt-1">{studentInfo.name} — SimulacrUx</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-200">Tiempo utilizado</p>
              <p className="text-xl font-mono font-bold">{formatTime(timeUsed)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Score Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Circular Score */}
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

            {/* Stats */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-green-50 rounded-xl">
                <p className="text-2xl font-bold text-green-600">{totalCorrect}</p>
                <p className="text-xs text-green-700 font-medium">Correctas</p>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-xl">
                <p className="text-2xl font-bold text-red-600">{totalWrong}</p>
                <p className="text-xs text-red-700 font-medium">Incorrectas</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <p className="text-2xl font-bold text-gray-600">{totalBlank}</p>
                <p className="text-xs text-gray-700 font-medium">Sin responder</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-xl">
                <p className="text-2xl font-bold text-blue-600">{questions.length}</p>
                <p className="text-xs text-blue-700 font-medium">Total</p>
              </div>
            </div>
          </div>

          {/* Grade Badge */}
          <div className="mt-6 text-center">
            <span className={`inline-block px-6 py-2 rounded-full text-lg font-bold ${grade.bg} ${grade.color}`}>
              {grade.label}
            </span>
          </div>
        </div>

        {/* Score by Area */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Rendimiento por Área</h2>
          <div className="space-y-4">
            {scoreByArea.map(({ area, correct, total, percentage: pct }) => (
              <div key={area}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{area}</span>
                  <span className="text-sm text-gray-500">{correct}/{total} ({pct}%)</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      pct >= 70 ? 'bg-green-500' : pct >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={() => setShowReview(!showReview)}
            className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {showReview ? 'Ocultar revisión' : 'Revisar respuestas'}
          </button>
          <button
            onClick={onRestart}
            className="flex-1 bg-gray-100 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-200 transition flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
            </svg>
            Volver al inicio
          </button>
        </div>

        {/* Review Section */}
        {showReview && (
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <h2 className="text-xl font-bold text-gray-800">Revisión de Respuestas</h2>
              <select
                value={filterArea}
                onChange={e => setFilterArea(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 text-sm"
              >
                <option value="Todas">Todas las áreas</option>
                {areas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            <div className="space-y-6">
              {filteredQuestions.map((question) => {
                const globalIdx = questions.indexOf(question);
                const userAnswer = answers[globalIdx];
                const isCorrect = userAnswer === question.correctAnswer;
                const isBlank = userAnswer === null;

                return (
                  <div key={question.id} className={`border rounded-xl p-5 ${
                    isCorrect ? 'border-green-200 bg-green-50/50' : 
                    isBlank ? 'border-gray-200 bg-gray-50/50' : 
                    'border-red-200 bg-red-50/50'
                  }`}>
                    <div className="flex items-start gap-3 mb-3">
                      <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                        isCorrect ? 'bg-green-500' : isBlank ? 'bg-gray-400' : 'bg-red-500'
                      }`}>
                        {globalIdx + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">{question.area}</span>
                          {isCorrect && <span className="text-xs text-green-600 font-medium">✓ Correcta</span>}
                          {isBlank && <span className="text-xs text-gray-500 font-medium">— Sin responder</span>}
                          {!isCorrect && !isBlank && <span className="text-xs text-red-600 font-medium">✗ Incorrecta</span>}
                        </div>
                        <p className="text-gray-800 font-medium">{question.question}</p>
                      </div>
                    </div>

                    <div className="ml-10 space-y-1.5">
                      {question.options.map((opt, optIdx) => (
                        <div
                          key={optIdx}
                          className={`text-sm px-3 py-1.5 rounded-lg ${
                            optIdx === question.correctAnswer
                              ? 'bg-green-100 text-green-800 font-medium border border-green-200'
                              : optIdx === userAnswer && !isCorrect
                              ? 'bg-red-100 text-red-800 line-through border border-red-200'
                              : 'text-gray-600'
                          }`}
                        >
                          <span className="font-medium">{String.fromCharCode(65 + optIdx)})</span> {opt}
                          {optIdx === question.correctAnswer && ' ✓'}
                        </div>
                      ))}
                    </div>

                    <div className="ml-10 mt-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-sm text-blue-800">
                        <strong>Explicación:</strong> {question.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8 pb-8 text-gray-400 text-sm">
          <p>SimulacrUx — Plataforma de Simulacros de Admisión</p>
          <p className="mt-1">4. Simulación Exámenes PRE | Piloto v2.0</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
