import React, { useState } from 'react';
import { Simulacro, Block, APP_CONFIG } from '../data/simulacros';
import { Question, User } from '../types';
import { getRoleInfo } from '../data/users';

interface DashboardProps {
  simulacros: Simulacro[];
  user: User | null;
  onSelectBlock: (simulacroId: string, blockId: string, questions: Question[]) => void;
  onLogout: () => void;
  onOpenProfile: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ simulacros, user, onSelectBlock, onLogout, onOpenProfile }) => {
  const [selectedSimulacro, setSelectedSimulacro] = useState<string | null>(null);
  const roleInfo = user ? getRoleInfo(user.role) : getRoleInfo('guest');
  const isGuest = !user || user.role === 'guest';
  const isAdmin = user?.role === 'admin';

  const canAccessSimulacro = (sim: Simulacro): boolean => {
    if (isAdmin) return true;
    if (isGuest) return true; // invitados pueden ver todo pero con limitaciones
    if (user) return user.allowedSimulacros.includes(sim.id);
    return false;
  };

  const canAccessBlock = (sim: Simulacro, block: Block): boolean => {
    if (!canAccessSimulacro(sim)) return false;
    if (isAdmin) return true;
    if (isGuest) return true; // invitados pueden acceder al 10%
    if (user?.role === 'plus') return true;
    if (user?.role === 'basic') {
      // BASIC tiene 1 intento
      const blockAttempts = user.attempts.filter(a => a.blockId === block.id).length;
      return blockAttempts < 1;
    }
    return false;
  };

  const getAttemptsInfo = (block: Block): string | null => {
    if (!user || user.role === 'admin' || user.role === 'plus' || isGuest) return null;
    if (user.role === 'basic') {
      const blockAttempts = user.attempts.filter(a => a.blockId === block.id).length;
      if (blockAttempts >= 1) return 'Ya utilizado';
      return '1 intento disponible';
    }
    return null;
  };

  const handleBlockClick = (sim: Simulacro, block: Block) => {
    if (!canAccessBlock(sim, block)) return;
    if (block.status !== 'active') return;
    onSelectBlock(sim.id, block.id, block.questions);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">{APP_CONFIG.name}</h1>
              <p className="text-xs text-blue-300">{APP_CONFIG.project}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className={`px-3 py-1.5 rounded-full text-xs font-medium ${roleInfo.bg} ${roleInfo.color} border ${roleInfo.border}`}>
              {roleInfo.icon} {roleInfo.label}
            </div>
            {user && (
              <div className="hidden md:block text-right">
                <p className="text-sm text-white font-medium">{user.displayName}</p>
                <p className="text-xs text-blue-300">@{user.username}</p>
              </div>
            )}
            <button
              onClick={onOpenProfile}
              className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg text-sm transition flex items-center gap-1"
              title="Mi Perfil"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="hidden md:inline">Mi Perfil</span>
            </button>
            <button
              onClick={onLogout}
              className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg text-sm transition flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="hidden md:inline">Salir</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Welcome */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {isGuest ? 'Bienvenido Invitado' : `Hola, ${user?.displayName}`}
          </h2>
          <p className="text-blue-200">
            {isGuest
              ? 'Tienes acceso al 10% de preguntas de prueba. ¡Mejora tu plan!'
              : roleInfo.description}
          </p>
        </div>

        {/* Guest Promo Banner */}
        {isGuest && (
          <div className="mb-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎁</span>
              </div>
              <div className="flex-1">
                <h3 className="text-yellow-300 font-bold text-lg mb-1">¡Mejora tu experiencia!</h3>
                <p className="text-yellow-100/80 text-sm mb-3">
                  Como invitado solo puedes responder el 10% de preguntas. Adquiere un plan para acceder a todo el contenido.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white/10 rounded-lg px-4 py-2 border border-white/10">
                    <p className="text-white font-bold">🎯 BASIC</p>
                    <p className="text-yellow-400 font-bold text-lg">S/ 35</p>
                    <p className="text-blue-200 text-xs">1 intento por bloque</p>
                  </div>
                  <div className="bg-white/10 rounded-lg px-4 py-2 border border-yellow-400/30">
                    <p className="text-white font-bold">⭐ PLUS</p>
                    <p className="text-yellow-400 font-bold text-lg">S/ 50</p>
                    <p className="text-blue-200 text-xs">Intentos ilimitados + explicaciones</p>
                  </div>
                </div>
                <p className="text-yellow-200/60 text-xs mt-3">
                  💳 Próximamente: pagos vía PLIN o YAPE
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Simulacros */}
        <div className="space-y-6">
          {simulacros.map(sim => {
            const hasAccess = canAccessSimulacro(sim);
            const theme = sim.theme;
            
            return (
              <div key={sim.id} className={`rounded-2xl overflow-hidden border ${hasAccess ? 'border-white/10' : 'border-white/5 opacity-60'}`}>
                {/* Simulacro Header con colorimetría propia */}
                <div className={`bg-gradient-to-r ${theme.headerBg} p-6`}>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-bold border border-yellow-400/30">
                          {sim.number}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          sim.institution === 'UNI' 
                            ? 'bg-blue-500/20 text-blue-300 border-blue-400/30' 
                            : 'bg-slate-500/20 text-slate-300 border-slate-400/30'
                        }`}>
                          {sim.institution}
                        </span>
                        <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium border border-green-400/30">
                          ● Activo
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{sim.title}</h3>
                      <p className="text-blue-200 text-sm mt-1">{sim.subtitle}</p>
                    </div>
                    <div className="flex gap-3 text-center">
                      <div className="bg-white/10 rounded-lg px-3 py-2 border border-white/10">
                        <p className="text-lg font-bold text-yellow-400">{sim.totalQuestions}</p>
                        <p className="text-xs text-blue-200">Preguntas</p>
                      </div>
                      <div className="bg-white/10 rounded-lg px-3 py-2 border border-white/10">
                        <p className="text-lg font-bold text-yellow-400">{sim.blocks.length}</p>
                        <p className="text-xs text-blue-200">Bloques</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blocks */}
                <div className="bg-white/5 p-6">
                  {!hasAccess && (
                    <div className="text-center py-4 mb-4 bg-red-500/10 border border-red-400/20 rounded-lg">
                      <p className="text-red-300 text-sm">
                        🔒 No tienes acceso a este simulacro con tu plan actual
                      </p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {sim.blocks.map((block: Block) => {
                      const blockAccessible = canAccessBlock(sim, block);
                      const attemptsInfo = getAttemptsInfo(block);
                      
                      return (
                        <div
                          key={block.id}
                          className={`rounded-xl border p-4 transition-all ${
                            blockAccessible && block.status === 'active'
                              ? `bg-white/5 border-white/20 hover:bg-white/10 cursor-pointer`
                              : 'bg-white/[0.02] border-white/5 opacity-60'
                          }`}
                          onClick={() => handleBlockClick(sim, block)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${
                              sim.institution === 'UNI'
                                ? 'bg-blue-500/20 text-blue-300 border-blue-400/20'
                                : 'bg-slate-500/20 text-slate-300 border-slate-400/20'
                            }`}>
                              {block.day}
                            </span>
                            {block.status === 'active' ? (
                              <span className="text-xs text-green-400">✓ Disponible</span>
                            ) : (
                              <span className="text-xs text-yellow-400">⏳ Pendiente</span>
                            )}
                          </div>
                          <h4 className="text-white font-semibold text-sm mb-1">{block.name}</h4>
                          <p className="text-blue-200/60 text-xs mb-3 line-clamp-2">{block.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-yellow-400 font-bold text-sm">
                              {isGuest ? `${Math.ceil(block.questionCount * 0.1)} de ${block.questionCount}` : block.questionCount} preguntas
                            </span>
                            <span className="text-blue-200/60 text-xs">{block.duration} min</span>
                          </div>
                          
                          {attemptsInfo && (
                            <div className="mt-2 text-xs text-orange-300 bg-orange-500/10 border border-orange-400/20 rounded px-2 py-1">
                              {attemptsInfo}
                            </div>
                          )}

                          {blockAccessible && block.status === 'active' ? (
                            <button className={`mt-3 w-full bg-gradient-to-r ${sim.theme.primary} text-white text-sm font-medium py-2 rounded-lg transition hover:opacity-90`}>
                              {isGuest ? '🎲 Probar (10%)' : 'Iniciar →'}
                            </button>
                          ) : block.status === 'active' ? (
                            <div className="mt-3 w-full bg-white/5 border border-white/10 text-white/40 text-sm font-medium py-2 rounded-lg text-center">
                              🔒 Sin acceso
                            </div>
                          ) : (
                            <div className="mt-3 w-full bg-yellow-500/10 border border-yellow-400/20 text-yellow-300 text-sm font-medium py-2 rounded-lg text-center">
                              Próximamente
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Admin Panel */}
        {isAdmin && (
          <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-2xl p-6">
            <h3 className="text-purple-300 font-bold mb-4 flex items-center gap-2">
              👑 Panel de Administración
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-white/60 text-xs">Simulacros</p>
                <p className="text-2xl font-bold text-yellow-400">{simulacros.length}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-white/60 text-xs">Bloques Activos</p>
                <p className="text-2xl font-bold text-green-400">
                  {simulacros.reduce((acc, s) => acc + s.blocks.filter(b => b.status === 'active').length, 0)}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-white/60 text-xs">Total Preguntas</p>
                <p className="text-2xl font-bold text-blue-400">
                  {simulacros.reduce((acc, s) => acc + s.blocks.reduce((a, b) => a + b.questions.length, 0), 0)}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-white/60 text-xs">Usuarios Piloto</p>
                <p className="text-2xl font-bold text-purple-400">5</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-white/80 text-sm font-medium mb-2">Usuarios Piloto Registrados:</p>
              <ul className="text-white/60 text-xs space-y-1">
                <li>• <span className="text-purple-300">Admin</span> - Administrador (acceso total)</li>
                <li>• <span className="text-blue-300">P_UNI_PLUS</span> - PLUS (UNI, intentos ilimitados)</li>
                <li>• <span className="text-blue-300">P_MGP_PLUS</span> - PLUS (Marina, intentos ilimitados)</li>
                <li>• <span className="text-green-300">P_UNI_BASIC</span> - BASIC (UNI, 1 intento)</li>
                <li>• <span className="text-green-300">P_MGP_BASIC</span> - BASIC (Marina, 1 intento)</li>
              </ul>
            </div>
            <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-400/20 rounded-lg">
              <p className="text-yellow-200 text-sm">
                <strong>Próximas iteraciones:</strong> Login con Google + Pagos PLIN/YAPE para automatizar upgrades de Invitado → BASIC/PLUS.
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-12 pb-8 text-blue-300/40 text-sm">
          <p className="font-medium text-blue-300/60">{APP_CONFIG.name}</p>
          <p className="mt-1">{APP_CONFIG.project} | Piloto v2.1</p>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
