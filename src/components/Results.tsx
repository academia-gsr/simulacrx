import React, { useState } from 'react';
import { User, UserRole } from '../types';
import { Simulacro, Block } from '../data/simulacros';
import { Question } from '../types';
import { getRoleInfo } from '../data/users';

interface ResultsProps {
  user: User;
  answers: (number | null)[];
  timeUsed: number;
  questions: Question[];
  onRetry: () => void;
  onBackToDashboard: () => void;
  userRole: UserRole;
  simulacro: Simulacro | null | undefined;
  blockId: string;
}

const Results: React.FC<ResultsProps> = ({ user, answers, timeUsed, questions, onRetry, onBackToDashboard, userRole, simulacro, blockId }) => {
  const [showReview, setShowReview] = useState(false);
  const [filterArea, setFilterArea] = useState<string>('Todas');
  const [showHistory, setShowHistory] = useState(false);

  const isPlus = userRole === 'plus';
  const isAdmin = userRole === 'admin';
  const isBasic = userRole === 'basic';
  const isGuest = userRole === 'guest';
  const canSeeExplanations = isPlus || isAdmin;
  const canRetry = userRole === 'plus' || userRole === 'admin';
  const roleInfo = getRoleInfo(userRole);

  const theme = simulacro?.theme;
  const headerGradient = theme?.headerBg || 'from-slate-800 via-blue-900 to-slate-800';

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

  // Intentos del usuario para este bloque específico
  const blockAttempts = user.attempts.filter(a => a.blockId === blockId);
  const currentAttemptNumber = blockAttempts.length;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} min ${secs} seg`;
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString('es-PE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getGrade = () => {
    if (percentage >= 90) return { label: 'Excelente', color: 'text-green-600', bg: 'bg-green-100' };
    if (percentage >= 70) return { label: 'Muy Bueno', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (percentage >= 50) return { label: 'Bueno', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    if (percentage >= 30) return { label: 'Regular', color: 'text-orange-600', bg: 'bg-orange-100' };
    return { label: 'Necesita mejorar', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const grade = getGrade();
  const filteredQuestions = filterArea === 'Todas' ? questions : questions.filter(q => q.area === filterArea);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${headerGradient} text-white py-8 px-4`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Resultados</h1>
              <p className="text-blue-200 mt-1">{user.profile.fullName} — {simulacro?.institution || 'SimulacrUx'}</p>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs border ${roleInfo.bg} ${roleInfo.color} ${roleInfo.border}`}>
                  {roleInfo.icon} {roleInfo.label}
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-white/20 text-white border border-white/30">
                  📝 Intento #{currentAttemptNumber}
                </div>
              </div>
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

          <div className="mt-6 text-center">
            <span className={`inline-block px-6 py-2 rounded-full text-lg font-bold ${grade.bg} ${grade.color}`}>
              {grade.label}
            </span>
          </div>
        </div>

        {/* Historial de intentos */}
        {blockAttempts.length > 0 && !isGuest && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="w-full flex items-center justify-between"
            >
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                📊 Historial de Intentos ({blockAttempts.length})
              </h2>
              <svg className={`w-5 h-5 text-gray-500 transition-transform ${showHistory ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showHistory && (
              <div className="mt-4 space-y-2">
                {[...blockAttempts].reverse().map((attempt, idx) => {
                  const attemptNumber = blockAttempts.length - idx;
                  const isCurrentAttempt = attempt.id === blockAttempts[blockAttempts.length - 1]?.id;
                  return (
                    <div
                      key={attempt.id}
                      className={`flex items-center justify-between p-3 rounded-lg border ${
                        isCurrentAttempt ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                          attempt.score >= 70 ? 'bg-green-100 text-green-700' :
                          attempt.score >= 50 ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          #{attemptNumber}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {attempt.score}% — {attempt.correct}/{attempt.total} correctas
                          </p>
                          <p className="text-xs text-gray-500">{formatDate(attempt.date)}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">{formatTime(attempt.timeUsed)}</p>
                        {isCurrentAttempt && (
                          <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">Actual</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Upgrade banners for non-PLUS users */}
        {(isGuest || isBasic) && (
          <div className="mb-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/30 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div className="flex-1">
                <h3 className="text-yellow-800 font-bold mb-1">
                  {isGuest ? '¡Obtén acceso completo!' : '¡Mejora a PLUS!'}
                </h3>
                <p className="text-yellow-700/80 text-sm mb-3">
                  {isGuest 
                    ? 'Acabas de ver el 10% de las preguntas. Con un plan BASIC (S/35) accedes a 1 intento, o con PLUS (S/50) tienes intentos ilimitados con explicaciones detalladas.'
                    : 'Como usuario BASIC tienes 1 intento y no ves explicaciones. Con PLUS (S/50) obtienes intentos ilimitados y explicaciones detalladas de cada respuesta.'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {!isBasic && (
                    <div className="bg-white/60 rounded-lg px-3 py-2 border border-green-400/30">
                      <p className="text-green-700 font-bold text-sm">🎯 BASIC - S/ 35</p>
                      <p className="text-gray-600 text-xs">1 intento por bloque</p>
                    </div>
                  )}
                  <div className="bg-white/60 rounded-lg px-3 py-2 border border-yellow-400/30">
                    <p className="text-yellow-700 font-bold text-sm">⭐ PLUS - S/ 50</p>
                    <p className="text-gray-600 text-xs">Intentos ilimitados + explicaciones</p>
                  </div>
                </div>
                <p className="text-yellow-600/60 text-xs mt-2">💳 Próximamente: pagos vía PLIN o YAPE</p>
              </div>
            </div>
          </div>
        )}

        {/* Score by Area */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
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
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Botón Intentar de nuevo - solo para PLUS y Admin */}
          {canRetry && (
            <button
              onClick={onRetry}
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2 shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              🔄 Intentar de nuevo
            </button>
          )}

          {/* Review button - only for PLUS and Admin */}
          {canSeeExplanations ? (
            <button
              onClick={() => setShowReview(!showReview)}
              className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {showReview ? 'Ocultar revisión' : '📖 Revisar con explicaciones'}
            </button>
          ) : (
            <div className="flex-1 bg-gray-100 border border-gray-200 text-gray-500 font-bold py-3 rounded-xl flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              🔒 Explicaciones no disponibles ({isGuest ? 'Invitado' : 'BASIC'})
            </div>
          )}

          <button
            onClick={onBackToDashboard}
            className="flex-1 bg-gray-100 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-200 transition flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
            </svg>
            Volver al inicio
          </button>
        </div>

        {/* Review Section - Only visible for PLUS/Admin */}
        {showReview && canSeeExplanations && (
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <h2 className="text-xl font-bold text-gray-800">📖 Revisión con Explicaciones</h2>
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
                        <strong>💡 Explicación:</strong> {question.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Locked review notice for BASIC/Guest */}
        {!canSeeExplanations && (
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {isBasic ? 'Revisión no disponible en plan BASIC' : 'Revisión no disponible para invitados'}
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              {isBasic 
                ? 'Las explicaciones detalladas están disponibles solo en el plan PLUS.'
                : 'Adquiere un plan para acceder a las explicaciones del solucionario.'}
            </p>
            <div className="inline-block bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2">
              <p className="text-yellow-700 text-sm font-medium">⭐ Plan PLUS: S/ 50 — Intentos ilimitados + explicaciones</p>
            </div>
          </div>
        )}

        <div className="text-center mt-8 pb-8 text-gray-400 text-sm">
          <p>SimulacrUx — Plataforma de Simulacros de Admisión</p>
          <p className="mt-1">{simulacro?.project || '4. Simulación Exámenes PRE'} | Piloto v2.2</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
