import React, { useState, useEffect } from 'react';
import { getReports, BugReport } from './ReportBug';

interface AdminBugReportsProps {
  onClose: () => void;
}

const AdminBugReports: React.FC<AdminBugReportsProps> = ({ onClose }) => {
  const [reports, setReports] = useState<BugReport[]>([]);
  const [filter, setFilter] = useState<'all' | 'pending' | 'reviewed' | 'resolved'>('all');

  useEffect(() => {
    setReports(getReports());
  }, []);

  const updateReportStatus = (reportId: string, status: BugReport['status']) => {
    const updated = reports.map(r => r.id === reportId ? { ...r, status } : r);
    setReports(updated);
    localStorage.setItem('simulacrx_bug_reports', JSON.stringify(updated));
  };

  const filteredReports = filter === 'all' ? reports : reports.filter(r => r.status === filter);

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleString('es-PE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getTypeLabel = (type: BugReport['type']) => {
    const labels = {
      'incompleta': '📝 Pregunta incompleta',
      'falta-grafico': '📊 Falta gráfico',
      'falta-texto': '📄 Falta texto',
      'respuesta-incorrecta': '❌ Respuesta incorrecta',
      'otro': '💬 Otro / Comentario',
    };
    return labels[type];
  };

  const getStatusBadge = (status: BugReport['status']) => {
    const badges = {
      pending: { label: 'Pendiente', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
      reviewed: { label: 'Revisado', color: 'bg-blue-100 text-blue-700 border-blue-200' },
      resolved: { label: 'Resuelto', color: 'bg-green-100 text-green-700 border-green-200' },
    };
    return badges[status];
  };

  const pendingCount = reports.filter(r => r.status === 'pending').length;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2">
                🐛 Reportes de Fallas
              </h2>
              <p className="text-orange-100 text-sm mt-1">
                {reports.length} reportes totales • {pendingCount} pendientes
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
          {/* Filtros */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {(['all', 'pending', 'reviewed', 'resolved'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  filter === f
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {f === 'all' && `Todos (${reports.length})`}
                {f === 'pending' && `Pendientes (${reports.filter(r => r.status === 'pending').length})`}
                {f === 'reviewed' && `Revisados (${reports.filter(r => r.status === 'reviewed').length})`}
                {f === 'resolved' && `Resueltos (${reports.filter(r => r.status === 'resolved').length})`}
              </button>
            ))}
          </div>

          {/* Lista de reportes */}
          {filteredReports.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-500">No hay reportes en esta categoría</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredReports.map(report => {
                const statusBadge = getStatusBadge(report.status);
                return (
                  <div key={report.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                            Pregunta #{report.questionNumber}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${statusBadge.color}`}>
                            {statusBadge.label}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-800">
                          {getTypeLabel(report.type)}
                        </p>
                        {report.description && (
                          <p className="text-sm text-gray-600 mt-1 italic">
                            "{report.description}"
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                      <div>
                        <span className="font-medium">Usuario:</span> {report.userId}
                      </div>
                      <div>
                        <span className="font-medium">Fecha:</span> {formatDate(report.timestamp)}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      {report.status !== 'reviewed' && (
                        <button
                          onClick={() => updateReportStatus(report.id, 'reviewed')}
                          className="px-3 py-1.5 rounded-lg bg-blue-100 text-blue-700 text-xs font-medium hover:bg-blue-200 transition"
                        >
                          Marcar como revisado
                        </button>
                      )}
                      {report.status !== 'resolved' && (
                        <button
                          onClick={() => updateReportStatus(report.id, 'resolved')}
                          className="px-3 py-1.5 rounded-lg bg-green-100 text-green-700 text-xs font-medium hover:bg-green-200 transition"
                        >
                          Marcar como resuelto
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminBugReports;
