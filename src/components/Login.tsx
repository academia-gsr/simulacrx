import React, { useState } from 'react';
import { User, UserRole } from '../types';
import { authenticateUser, getRoleInfo } from '../data/users';
import { APP_CONFIG } from '../data/simulacros';

interface LoginProps {
  onLogin: (user: User) => void;
  onContinueAsGuest: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onContinueAsGuest }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const user = authenticateUser(username, password);
    if (user) {
      onLogin(user);
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mb-4 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-1">{APP_CONFIG.name}</h1>
          <p className="text-blue-200 text-sm">{APP_CONFIG.tagline}</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h2 className="text-xl font-bold text-slate-800">Control de Acceso</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Usuario</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Ingrese su usuario"
                autoFocus
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition pr-12"
                  placeholder="Ingrese su contraseña"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition shadow-md"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <button
              onClick={onContinueAsGuest}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 rounded-lg transition flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Continuar como Invitado
            </button>
            <p className="text-xs text-slate-500 text-center mt-2">
              Acceso limitado al 10% de preguntas de prueba
            </p>
          </div>
        </div>

        {/* Role Info Cards */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">⭐</span>
              <span className="text-white font-semibold text-sm">PLUS</span>
            </div>
            <p className="text-blue-200 text-xs">Intentos ilimitados + explicaciones</p>
            <p className="text-yellow-400 font-bold text-sm mt-1">S/ 50</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">🎯</span>
              <span className="text-white font-semibold text-sm">BASIC</span>
            </div>
            <p className="text-blue-200 text-xs">1 intento por bloque</p>
            <p className="text-yellow-400 font-bold text-sm mt-1">S/ 35</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-blue-300/40 text-xs">
          <p>{APP_CONFIG.project} | Piloto v2.1</p>
          <p className="mt-1">Próximamente: Login con Google y pagos vía PLIN/YAPE</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
