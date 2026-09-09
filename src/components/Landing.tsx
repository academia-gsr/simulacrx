import React from 'react';
import { StudentInfo, UserRole } from '../types';
import { Simulacro } from '../data/simulacros';
import { getRoleInfo } from '../data/users';

interface LandingProps {
  onStart: (info: StudentInfo) => void;
  simulacro: Simulacro | null | undefined;
  userRole: UserRole;
  questionCount: number;
}

const Landing: React.FC<LandingProps> = ({ onStart, simulacro, userRole, questionCount }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [errors, setErrors] = React.useState<{[key: string]: string}>({});
  const roleInfo = getRoleInfo(userRole);
  const isGuest = userRole === 'guest';
  const isBasic = userRole === 'basic';

  const theme = simulacro?.theme;
  const gradientClass = theme?.gradient || 'from-slate-900 via-blue-950 to-slate-900';

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    if (!name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!email.trim()) newErrors.email = 'El email es obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Email inválido';
    if (!phone.trim()) newErrors.phone = 'El teléfono es obligatorio';
    else if (!/^\d{9}$/.test(phone)) newErrors.phone = 'Debe tener 9 dígitos';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onStart({ name: name.trim(), email: email.trim(), phone: phone.trim() });
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${gradientClass} flex items-center justify-center p-4`}>
      <div className="max-w-lg w-full">
        {/* Header */}
        <div className="text-center mb-6">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-3 shadow-lg ${
            simulacro?.institution === 'UNI' 
              ? 'bg-gradient-to-br from-blue-500 to-indigo-600' 
              : 'bg-gradient-to-br from-slate-600 to-blue-800'
          }`}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">{simulacro?.title || 'Simulacro'}</h1>
          <p className="text-blue-200 text-sm">{simulacro?.subtitle}</p>
          <div className={`mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs border ${roleInfo.bg} ${roleInfo.color} ${roleInfo.border}`}>
            {roleInfo.icon} {roleInfo.label}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
            <div className="text-xl font-bold text-yellow-400">{questionCount}</div>
            <div className="text-blue-200 text-xs mt-1">Preguntas</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
            <div className="text-xl font-bold text-yellow-400">{simulacro?.blocks[0]?.duration || 60}</div>
            <div className="text-blue-200 text-xs mt-1">Minutos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
            <div className="text-xl font-bold text-yellow-400">5</div>
            <div className="text-blue-200 text-xs mt-1">Alternativas</div>
          </div>
        </div>

        {/* Role restrictions info */}
        {isGuest && (
          <div className="mb-4 bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-4">
            <p className="text-yellow-200 text-sm">
              <strong>⚠️ Modo Invitado:</strong> Solo responderás {questionCount} preguntas (10% del total). 
              Para acceder al simulacro completo, adquiere un plan BASIC (S/35) o PLUS (S/50).
            </p>
          </div>
        )}
        {isBasic && (
          <div className="mb-4 bg-orange-500/10 border border-orange-400/30 rounded-xl p-4">
            <p className="text-orange-200 text-sm">
              <strong>🎯 Modo BASIC:</strong> Tienes 1 intento. No se mostrarán explicaciones de las respuestas. 
              Para intentos ilimitados y explicaciones, mejora a PLUS (S/50).
            </p>
          </div>
        )}

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-1">Datos del Postulante</h3>
          <p className="text-gray-500 text-sm mb-4">Complete sus datos para iniciar</p>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg border ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition text-sm`}
                placeholder="Nombre completo"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg border ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition text-sm`}
                placeholder="Correo electrónico"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 9))}
                className={`w-full px-4 py-2.5 rounded-lg border ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition text-sm`}
                placeholder="Teléfono (9 dígitos)"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <button
              type="submit"
              className={`w-full bg-gradient-to-r ${simulacro?.theme.primary || 'from-blue-600 to-indigo-600'} text-white font-bold py-3 rounded-lg transition shadow-md hover:opacity-90`}
            >
              {isGuest ? '🎲 Iniciar Prueba (10%)' : '🚀 Iniciar Evaluación'}
            </button>
          </form>
        </div>

        <p className="text-center text-blue-300/40 text-xs mt-4">
          No podrá pausar el temporizador una vez iniciado.
        </p>
      </div>
    </div>
  );
};

export default Landing;
