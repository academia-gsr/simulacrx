import React, { useState } from 'react';

export interface BugReport {
  id: string;
  timestamp: string;
  simulacroId: string;
  blockId: string;
  questionId: number;
  questionNumber: number;
  type: 'incompleta' | 'falta-grafico' | 'falta-texto' | 'respuesta-incorrecta' | 'otro';
  description: string;
  userId: string;
  status: 'pending' | 'reviewed' | 'resolved';
}

interface ReportBugProps {
  simulacroId: string;
  blockId: string;
  questionId: number;
  questionNumber: number;
  userId: string;
}

const STORAGE_KEY = 'simulacrx_bug_reports';

const saveReport = (report: BugReport) => {
  try {
    const reports = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    reports.push(report);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
  } catch (e) {
    console.error('Error saving bug report', e);
  }
};

export const getReports = (): BugReport[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (e) {
    return [];
  }
};

const ReportBug: React.FC<ReportBugProps> = ({
  simulacroId,
  blockId,
  questionId,
  questionNumber,
  userId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<BugReport['type']>('incompleta');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const report: BugReport = {
      id: `report-${Date.now()}`,
      timestamp: new Date().toISOString(),
      simulacroId,
      blockId,
      questionId,
      questionNumber,
      type,
      description: description.trim(),
      userId,
      status: 'pending',
    };

    saveReport(report);
    setSubmitted(true);
    
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setDescription('');
      setType('incompleta');
    }, 2000);
  };

  const reportTypes = [
    { value: 'incompleta', label: '📝 Pregunta incompleta', desc: 'Falta información en el enunciado' },
    { value: 'falta-grafico', label: '📊 Falta gráfico', desc: 'La pregunta requiere una imagen o gráfico' },
    { value: 'falta-texto', label: '📄 Falta texto', desc: 'Falta un texto o contexto necesario' },
    { value: 'respuesta-incorrecta', label: '❌ Respuesta incorrecta', desc: 'La respuesta marcada es errónea' },
    { value: 'otro', label: '💬 Otro / Comentario', desc: 'Sugerencia u otra observación' },
  ];

  return (
    <>
      {/* Botón flotante no invasivo */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-full shadow-lg border border-gray-200 transition-all hover:shadow-xl flex items-center gap-2 text-sm font-medium"
          title="Reportar falla, comentario o sugerencia"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Reportar falla
        </button>
      )}

      {/* Modal de reporte */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-5 rounded-t-2xl sticky top-0">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    🐛 Reportar Falla
                  </h2>
                  <p className="text-orange-100 text-sm mt-1">
                    Pregunta #{questionNumber}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setSubmitted(false);
                    setDescription('');
                    setType('incompleta');
                  }}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all hover:scale-110"
                  aria-label="Cerrar"
                  title="Cerrar"
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
                  <p className="text-gray-600 text-sm mb-6">
                    Gracias por tu reporte. Será revisado por el equipo técnico.
                  </p>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setSubmitted(false);
                      setDescription('');
                      setType('incompleta');
                    }}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition shadow-md"
                  >
                    ✓ Cerrar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Tipo de reporte */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de reporte
                    </label>
                    <div className="space-y-2">
                      {reportTypes.map(rt => (
                        <label
                          key={rt.value}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition ${
                            type === rt.value
                              ? 'border-orange-400 bg-orange-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="type"
                            value={rt.value}
                            checked={type === rt.value}
                            onChange={() => setType(rt.value as BugReport['type'])}
                            className="mt-0.5"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-800">{rt.label}</p>
                            <p className="text-xs text-gray-500">{rt.desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Descripción */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Descripción (opcional)
                    </label>
                    <textarea
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      placeholder="Describe el problema, comentario o sugerencia..."
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition text-sm resize-none"
                      rows={3}
                    />
                  </div>

                  {/* Info */}
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-xs text-blue-700">
                    <strong>ℹ️ Nota:</strong> Tu reporte será revisado por el equipo técnico. 
                    No afecta tu examen ni tus resultados.
                  </div>

                  {/* Botones */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        setDescription('');
                        setType('incompleta');
                      }}
                      className="flex-1 px-4 py-2.5 rounded-lg border-2 border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition"
                    >
                      ✕ Cancelar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-2.5 rounded-lg hover:opacity-90 transition shadow-md"
                    >
                      ✓ Enviar Reporte
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportBug;
