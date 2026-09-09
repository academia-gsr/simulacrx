import React from 'react';
import { StudentInfo } from '../types';
import { EXAM_CONFIG } from '../data/questions';

interface LandingProps {
  onStart: (info: StudentInfo) => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [errors, setErrors] = React.useState<{[key: string]: string}>({});

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full mb-4 border-2 border-yellow-400/50">
            <svg className="w-14 h-14 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">
            {EXAM_CONFIG.title}
          </h1>
          <h2 className="text-lg md:text-xl text-blue-200 font-medium">
            {EXAM_CONFIG.subtitle}
          </h2>
          <div className="mt-3 inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-green-300 text-sm font-medium">Piloto Activo — {EXAM_CONFIG.project}</span>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
            <div className="text-2xl font-bold text-yellow-400">{EXAM_CONFIG.totalQuestions}</div>
            <div className="text-blue-200 text-xs mt-1">Preguntas</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
            <div className="text-2xl font-bold text-yellow-400">{EXAM_CONFIG.duration}</div>
            <div className="text-blue-200 text-xs mt-1">Minutos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
            <div className="text-2xl font-bold text-yellow-400">13</div>
            <div className="text-blue-200 text-xs mt-1">Áreas</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
            <div className="text-2xl font-bold text-yellow-400">5</div>
            <div className="text-blue-200 text-xs mt-1">Alternativas</div>
          </div>
        </div>

        {/* Areas */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 mb-8">
          <h3 className="text-white font-semibold mb-3">Áreas evaluadas:</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'R. Matemático', 'R. Verbal', 'Geometría', 'Aritmética', 
              'Álgebra', 'Trigonometría', 'Física', 'Química',
              'Lengua y Literatura', 'Informática', 'Historia', 'Geografía', 'Inglés'
            ].map(area => (
              <span key={area} className="bg-blue-500/30 text-blue-200 px-2.5 py-1 rounded-full text-xs border border-blue-400/20">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-1">Registro del Postulante</h3>
          <p className="text-gray-500 text-sm mb-6">Complete sus datos para iniciar el simulacro</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
                placeholder="Ej: Juan Pérez García"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
                placeholder="correo@ejemplo.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono (9 dígitos)</label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 9))}
                className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
                placeholder="987654321"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-bold py-3.5 rounded-lg hover:from-blue-800 hover:to-indigo-800 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg mt-2"
            >
              ⚓ Iniciar Simulacro
            </button>
          </form>

          <p className="text-center text-gray-400 text-xs mt-4">
            Al iniciar acepta las condiciones del examen. No podrá pausar el temporizador.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-blue-300/60 text-sm">
          <p>Escuela de Oficiales de la Marina de Guerra del Perú</p>
          <p className="mt-1">Proyecto: {EXAM_CONFIG.project} | Piloto v2.0</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
