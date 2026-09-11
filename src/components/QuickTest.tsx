import React, { useState } from 'react';
import { Question } from '../types';

interface QuickTestProps {
  allQuestions: Question[];
  onStartTest: (questions: Question[]) => void;
  onClose: () => void;
}

const QuickTest: React.FC<QuickTestProps> = ({ allQuestions, onStartTest, onClose }) => {
  const [selectedArea, setSelectedArea] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [questionCount, setQuestionCount] = useState<number>(10);

  // Extraer áreas únicas
  const areas = [...new Set(allQuestions.map(q => q.area))].sort();

  // Extraer temas del área seleccionada (basado en el campo area por ahora)
  // En el futuro, esto vendrá de un campo "topic" en las preguntas
  const topics = selectedArea 
    ? [...new Set(allQuestions.filter(q => q.area === selectedArea).map(q => q.area))].sort()
    : [];

  // Filtrar preguntas según selección
  const getFilteredQuestions = (): Question[] => {
    let filtered = allQuestions;
    
    if (selectedArea) {
      filtered = filtered.filter(q => q.area === selectedArea);
    }
    
    if (selectedTopic) {
      // Por ahora, topic es igual a area. En el futuro será un campo separado
      filtered = filtered.filter(q => q.area === selectedTopic);
    }
    
    // Mezclar aleatoriamente y tomar la cantidad solicitada
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(questionCount, shuffled.length));
  };

  const handleStart = () => {
    const questions = getFilteredQuestions();
    if (questions.length === 0) {
      alert('No hay preguntas disponibles con los filtros seleccionados');
      return;
    }
    onStartTest(questions);
  };

  const availableQuestions = selectedArea 
    ? allQuestions.filter(q => selectedTopic ? q.area === selectedTopic : q.area === selectedArea).length
    : allQuestions.length;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2">
                ⚡ Prueba Rápida
              </h2>
              <p className="text-purple-100 text-sm mt-1">
                Personaliza tu práctica por área y cantidad de preguntas
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Selección de Área */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              📚 Selecciona un Área (opcional)
            </label>
            <select
              value={selectedArea}
              onChange={(e) => {
                setSelectedArea(e.target.value);
                setSelectedTopic('');
              }}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
            >
              <option value="">Todas las áreas</option>
              {areas.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </div>

          {/* Selección de Tema */}
          {selectedArea && topics.length > 0 && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🎯 Selecciona un Tema específico (opcional)
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
              >
                <option value="">Todo el área</option>
                {topics.map(topic => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>
          )}

          {/* Cantidad de preguntas */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              📊 Cantidad de preguntas
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[5, 10, 15].map(count => (
                <button
                  key={count}
                  onClick={() => setQuestionCount(count)}
                  className={`py-4 rounded-xl border-2 transition font-bold text-lg ${
                    questionCount === count
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300'
                  }`}
                >
                  {count} preguntas
                </button>
              ))}
            </div>
          </div>

          {/* Información de preguntas disponibles */}
          <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-900 font-medium">
                Preguntas disponibles:
              </span>
              <span className="text-lg font-bold text-blue-700">
                {availableQuestions}
              </span>
            </div>
            {availableQuestions < questionCount && (
              <p className="text-xs text-blue-600 mt-2">
                ⚠️ Solo hay {availableQuestions} preguntas disponibles. Se usarán todas.
              </p>
            )}
          </div>

          {/* Botones */}
          <div className="flex gap-3">
            <button
              onClick={handleStart}
              disabled={availableQuestions === 0}
              className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              🚀 Iniciar Prueba Rápida
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTest;
