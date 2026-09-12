import React, { useState, useMemo } from 'react';
import { Question, User } from '../types';
import { simulacros, getSimulacroById } from '../data/simulacros';

interface QuickTestProps {
  user: User;
  onStartTest: (questions: Question[], simulacroId: string, testName: string) => void;
  onClose: () => void;
}

const QuickTest: React.FC<QuickTestProps> = ({ user, onStartTest, onClose }) => {
  const [selectedSimulacro, setSelectedSimulacro] = useState<string>('');
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Filtrar simulacros disponibles para el usuario
  const availableSimulacros = useMemo(() => {
    return simulacros.filter(sim => 
      user.role === 'admin' || user.allowedSimulacros.includes(sim.id)
    );
  }, [user]);

  // Obtener áreas del simulacro seleccionado
  const availableAreas = useMemo(() => {
    if (!selectedSimulacro) return [];
    const simulacro = getSimulacroById(selectedSimulacro);
    if (!simulacro) return [];
    
    const allQuestions = simulacro.blocks.flatMap(block => block.questions);
    const areas = [...new Set(allQuestions.map(q => q.area))].sort();
    return areas;
  }, [selectedSimulacro]);

  // Obtener todas las preguntas disponibles según selección
  const getFilteredQuestions = (): Question[] => {
    if (!selectedSimulacro) return [];
    
    const simulacro = getSimulacroById(selectedSimulacro);
    if (!simulacro) return [];
    
    let allQuestions: Question[] = [];
    
    if (selectedAreas.length === 0) {
      // Todas las preguntas del simulacro
      allQuestions = simulacro.blocks.flatMap(block => block.questions);
    } else {
      // Solo preguntas de las áreas seleccionadas
      allQuestions = simulacro.blocks
        .flatMap(block => block.questions)
        .filter(q => selectedAreas.includes(q.area));
    }
    
    return allQuestions;
  };

  const availableQuestionsCount = getFilteredQuestions().length;

  // Generar preguntas aleatorias
  const generateRandomQuestions = (): Question[] => {
    const allQuestions = getFilteredQuestions();
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(questionCount, shuffled.length));
  };

  // Toggle selección de área
  const toggleArea = (area: string) => {
    setSelectedAreas(prev => 
      prev.includes(area) 
        ? prev.filter(a => a !== area)
        : [...prev, area]
    );
  };

  // Seleccionar todas las áreas
  const selectAllAreas = () => {
    setSelectedAreas(availableAreas);
  };

  // Deseleccionar todas las áreas
  const deselectAllAreas = () => {
    setSelectedAreas([]);
  };

  // Iniciar prueba
  const handleStart = () => {
    const questions = generateRandomQuestions();
    if (questions.length === 0) {
      alert('No hay preguntas disponibles con los filtros seleccionados');
      return;
    }
    
    const simulacro = getSimulacroById(selectedSimulacro);
    const testName = selectedAreas.length === 0 
      ? `Prueba Rápida - ${simulacro?.subtitle}`
      : `Prueba Rápida - ${selectedAreas.join(', ')}`;
    
    onStartTest(questions, selectedSimulacro, testName);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                ⚡ Prueba Rápida
              </h2>
              <p className="text-purple-100 text-sm mt-1">
                Personaliza tu práctica con preguntas aleatorias
              </p>
            </div>
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all hover:scale-110"
              aria-label="Cerrar"
              title="Cerrar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Indicador de pasos */}
          <div className="flex items-center gap-2 mt-4">
            <div className={`flex-1 h-2 rounded-full ${step >= 1 ? 'bg-white' : 'bg-white/30'}`}></div>
            <div className={`flex-1 h-2 rounded-full ${step >= 2 ? 'bg-white' : 'bg-white/30'}`}></div>
            <div className={`flex-1 h-2 rounded-full ${step >= 3 ? 'bg-white' : 'bg-white/30'}`}></div>
          </div>
        </div>

        <div className="p-6">
          {/* Paso 1: Seleccionar Simulacro */}
          {step === 1 && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Paso 1: Selecciona un Simulacro
              </h3>
              <div className="space-y-3">
                {availableSimulacros.map(sim => (
                  <button
                    key={sim.id}
                    onClick={() => {
                      setSelectedSimulacro(sim.id);
                      setSelectedAreas([]);
                      setStep(2);
                    }}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      selectedSimulacro === sim.id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-bold text-gray-800">{sim.title}</p>
                        <p className="text-sm text-gray-600 mt-1">{sim.subtitle}</p>
                        <div className="flex gap-2 mt-2">
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            {sim.totalQuestions} preguntas
                          </span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            {sim.blocks.length} bloques
                          </span>
                        </div>
                      </div>
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Paso 2: Seleccionar Áreas */}
          {step === 2 && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Paso 2: Selecciona las Áreas (opcional)
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Deja todas deseleccionadas para incluir todas las áreas del simulacro
              </p>
              
              <div className="flex gap-2 mb-4">
                <button
                  onClick={selectAllAreas}
                  className="text-sm bg-purple-100 text-purple-700 px-3 py-1.5 rounded-lg hover:bg-purple-200 transition"
                >
                  ✓ Seleccionar todas
                </button>
                <button
                  onClick={deselectAllAreas}
                  className="text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-200 transition"
                >
                  ✕ Deseleccionar todas
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-96 overflow-y-auto">
                {availableAreas.map(area => (
                  <button
                    key={area}
                    onClick={() => toggleArea(area)}
                    className={`text-left p-3 rounded-lg border-2 transition-all ${
                      selectedAreas.includes(area)
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        selectedAreas.includes(area)
                          ? 'bg-purple-500 border-purple-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedAreas.includes(area) && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-800">{area}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition"
                >
                  ← Atrás
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition shadow-md"
                >
                  Siguiente →
                </button>
              </div>
            </div>
          )}

          {/* Paso 3: Cantidad de Preguntas */}
          {step === 3 && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Paso 3: Cantidad de Preguntas
              </h3>
              
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[5, 10, 15].map(count => (
                  <button
                    key={count}
                    onClick={() => setQuestionCount(count)}
                    className={`py-6 rounded-xl border-2 transition-all ${
                      questionCount === count
                        ? 'border-purple-500 bg-purple-50 shadow-md'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <p className="text-3xl font-bold text-gray-800">{count}</p>
                    <p className="text-sm text-gray-600 mt-1">preguntas</p>
                  </button>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-900 font-medium">
                    Preguntas disponibles:
                  </span>
                  <span className="text-lg font-bold text-blue-700">
                    {availableQuestionsCount}
                  </span>
                </div>
                {availableQuestionsCount < questionCount && (
                  <p className="text-xs text-blue-600 mt-2">
                    ⚠️ Solo hay {availableQuestionsCount} preguntas disponibles. Se usarán todas.
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition"
                >
                  ← Atrás
                </button>
                <button
                  onClick={handleStart}
                  disabled={availableQuestionsCount === 0}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
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
};

export default QuickTest;
