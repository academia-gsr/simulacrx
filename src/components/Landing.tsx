import React from 'react';
import { StudentInfo } from '../types';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
            <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zM12 14v7" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Simulacro UNI
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-200 font-medium">
            Ingeniería Civil
          </h2>
          <div className="mt-3 inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-green-300 text-sm font-medium">Piloto Activo — Proyecto 4. Simulación Exámenes PRE</span>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
            <div className="text-3xl font-bold text-yellow-400">40</div>
            <div className="text-blue-200 text-sm mt-1">Preguntas</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
            <div className="text-3xl font-bold text-yellow-400">90</div>
            <div className="text-blue-200 text-sm mt-1">Minutos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
            <div className="text-3xl font-bold text-yellow-400">10</div>
            <div className="text-blue-200 text-sm mt-1">Áreas</div>
          </div>
        </div>

        {/* Areas */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 mb-8">
          <h3 className="text-white font-semibold mb-3">Áreas evaluadas:</h3>
          <div className="flex flex-wrap gap-2">
            {['Matemática', 'Física', 'Química', 'Biología', 'Geometría', 'Álgebra', 'R. Verbal', 'R. Matemático', 'Inglés', 'Economía'].map(area => (
              <span key={area} className="bg-blue-500/30 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-400/20">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-1">Registro del Postulante</h3>
          <p className="text-gray-500 text-sm mb-6">Completa tus datos para iniciar el simulacro</p>
          
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
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3.5 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg mt-2"
            >
              🚀 Iniciar Simulacro
            </button>
          </form>

          <p className="text-center text-gray-400 text-xs mt-4">
            Al iniciar aceptas las condiciones del examen. No podrás pausar el temporizador.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-blue-300/60 text-sm">
          <p>Universidad Nacional de Ingeniería — Centro Preuniversitario</p>
          <p className="mt-1">Proyecto: 4. Simulación Exámenes PRE | Piloto v1.0</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
