import React from 'react';
import { Simulacro, Block, APP_CONFIG } from '../data/simulacros';
import { Question } from '../types';

interface DashboardProps {
  simulacros: Simulacro[];
  isAdmin: boolean;
  onSelectBlock: (simulacroId: string, blockId: string, questions: Question[]) => void;
  onAdminLogin: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ simulacros, isAdmin, onSelectBlock, onAdminLogin }) => {
  const [showAdminLogin, setShowAdminLogin] = React.useState(false);
  const [adminPass, setAdminPass] = React.useState('');
  const [adminError, setAdminError] = React.useState('');

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPass === 'simulacrx2026') {
      onAdminLogin();
      setShowAdminLogin(false);
      setAdminError('');
    } else {
      setAdminError('Contraseña incorrecta');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{APP_CONFIG.name}</h1>
              <p className="text-xs text-blue-300">{APP_CONFIG.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {isAdmin && (
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs border border-green-400/30">
                👤 Administrador
              </span>
            )}
            {!isAdmin && (
              <button
                onClick={() => setShowAdminLogin(!showAdminLogin)}
                className="text-blue-300 hover:text-white text-sm flex items-center gap-1 transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Admin
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Admin Login Modal */}
        {showAdminLogin && (
          <div className="mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-md mx-auto">
            <h3 className="text-white font-bold mb-3">Acceso Administrador</h3>
            <form onSubmit={handleAdminSubmit} className="space-y-3">
              <input
                type="password"
                value={adminPass}
                onChange={e => setAdminPass(e.target.value)}
                placeholder="Contraseña de administrador"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              {adminError && <p className="text-red-400 text-sm">{adminError}</p>}
              <div className="flex gap-2">
                <button type="submit" className="flex-1 bg-yellow-500 text-slate-900 font-bold py-2 rounded-lg hover:bg-yellow-400 transition">
                  Ingresar
                </button>
                <button type="button" onClick={() => setShowAdminLogin(false)} className="px-4 py-2 rounded-lg border border-white/20 text-white/60 hover:text-white transition">
                  Cancelar
                </button>
              </div>
            </form>
            <p className="text-white/30 text-xs mt-3">Acceso exclusivo para revisión técnico-pedagógica</p>
          </div>
        )}

        {/* Project Info */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-green-300 text-sm font-medium">Piloto Activo — {APP_CONFIG.project}</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Seleccione un Simulacro</h2>
          <p className="text-blue-200">Elija el simulacro y bloque que desea rendir</p>
        </div>

        {/* Simulacros Grid */}
        <div className="space-y-8">
          {simulacros.map(sim => (
            <div key={sim.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              {/* Simulacro Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-bold border border-yellow-400/30">
                        {sim.number}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        sim.status === 'active' ? 'bg-green-500/20 text-green-300 border-green-400/30' :
                        sim.status === 'pending' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30' :
                        'bg-gray-500/20 text-gray-300 border-gray-400/30'
                      }`}>
                        {sim.status === 'active' ? '● Activo' : sim.status === 'pending' ? '◐ Parcial' : '○ Completado'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{sim.title}</h3>
                    <p className="text-blue-200 text-sm mt-1">{sim.subtitle}</p>
                  </div>
                  <div className="flex gap-4 text-center">
                    <div className="bg-white/5 rounded-lg px-4 py-2 border border-white/10">
                      <p className="text-xl font-bold text-yellow-400">{sim.totalQuestions}</p>
                      <p className="text-xs text-blue-200">Preguntas</p>
                    </div>
                    <div className="bg-white/5 rounded-lg px-4 py-2 border border-white/10">
                      <p className="text-xl font-bold text-yellow-400">{sim.blocks.length}</p>
                      <p className="text-xs text-blue-200">Bloques</p>
                    </div>
                    <div className="bg-white/5 rounded-lg px-4 py-2 border border-white/10">
                      <p className="text-xl font-bold text-yellow-400">{sim.duration}</p>
                      <p className="text-xs text-blue-200">Min</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blocks */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {sim.blocks.map((block: Block) => (
                    <div
                      key={block.id}
                      className={`rounded-xl border p-4 transition-all ${
                        block.status === 'active'
                          ? 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-blue-400/50 cursor-pointer'
                          : 'bg-white/[0.02] border-white/5 opacity-60'
                      }`}
                      onClick={() => block.status === 'active' && onSelectBlock(sim.id, block.id, block.questions)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-400/20">
                          {block.day}
                        </span>
                        <span className={`text-xs ${block.status === 'active' ? 'text-green-400' : 'text-yellow-400'}`}>
                          {block.status === 'active' ? '✓ Disponible' : '⏳ Pendiente'}
                        </span>
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-1">{block.name}</h4>
                      <p className="text-blue-200/60 text-xs mb-3 line-clamp-2">{block.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-400 font-bold text-sm">{block.questionCount} preguntas</span>
                        <span className="text-blue-200/60 text-xs">{block.duration} min</span>
                      </div>
                      {block.status === 'active' && (
                        <button className="mt-3 w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-2 rounded-lg transition">
                          Iniciar →
                        </button>
                      )}
                      {block.status === 'pending' && (
                        <div className="mt-3 w-full bg-yellow-500/10 border border-yellow-400/20 text-yellow-300 text-sm font-medium py-2 rounded-lg text-center">
                          Próximamente
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Admin Panel */}
        {isAdmin && (
          <div className="mt-8 bg-white/5 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-6">
            <h3 className="text-yellow-400 font-bold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Panel de Administración
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-white font-semibold">Total Simulacros</p>
                <p className="text-3xl font-bold text-yellow-400 mt-1">{simulacros.length}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-white font-semibold">Bloques Activos</p>
                <p className="text-3xl font-bold text-green-400 mt-1">
                  {simulacros.reduce((acc, s) => acc + s.blocks.filter(b => b.status === 'active').length, 0)}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-white font-semibold">Total Preguntas</p>
                <p className="text-3xl font-bold text-blue-400 mt-1">
                  {simulacros.reduce((acc, s) => acc + s.blocks.reduce((a, b) => a + b.questions.length, 0), 0)}
                </p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-400/20 rounded-lg">
              <p className="text-yellow-200 text-sm">
                <strong>Estado del Proyecto:</strong> El administrador tiene acceso a todos los simulacros y bloques. 
                Simulacro N°01 UNI: Día 1 ✓ | Día 2 ✓ | Día 3 (pendiente: 40 preguntas Física y Química).
                Simulacro N°02 ESMGP: Completo ✓.
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-12 pb-8 text-blue-300/40 text-sm">
          <p className="font-medium text-blue-300/60">{APP_CONFIG.name}</p>
          <p className="mt-1">{APP_CONFIG.project} | Piloto v2.0</p>
          <p className="mt-1">Sistema de simulacros de admisión para preparación preuniversitaria</p>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
