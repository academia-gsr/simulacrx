import React, { useState } from 'react';
import { User, UserProfile } from '../types';
import { getRoleInfo } from '../data/users';

interface ProfileProps {
  user: User;
  onUpdateProfile: (profile: UserProfile) => void;
  onClose: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onUpdateProfile, onClose }) => {
  const [fullName, setFullName] = useState(user.profile.fullName);
  const [phone, setPhone] = useState(user.profile.phone);
  const [email, setEmail] = useState(user.profile.email);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [saved, setSaved] = useState(false);

  const roleInfo = getRoleInfo(user.role);

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    if (!fullName.trim()) newErrors.fullName = 'El nombre es obligatorio';
    if (!phone.trim()) newErrors.phone = 'El teléfono es obligatorio';
    else if (!/^\d{9}$/.test(phone)) newErrors.phone = 'Debe tener exactamente 9 dígitos';
    if (!email.trim()) newErrors.email = 'El email es obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Email inválido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onUpdateProfile({
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim(),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  const totalAttempts = user.attempts.length;
  const avgScore = totalAttempts > 0
    ? Math.round(user.attempts.reduce((sum, a) => sum + a.score, 0) / totalAttempts)
    : 0;
  const bestScore = totalAttempts > 0
    ? Math.max(...user.attempts.map(a => a.score))
    : 0;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 to-blue-900 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                {user.profile.fullName.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-xl font-bold">Mi Perfil</h2>
                <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs mt-1 ${roleInfo.bg} ${roleInfo.color} border ${roleInfo.border}`}>
                  {roleInfo.icon} {roleInfo.label}
                </div>
              </div>
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
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-blue-50 rounded-xl p-3 text-center border border-blue-100">
              <p className="text-2xl font-bold text-blue-600">{totalAttempts}</p>
              <p className="text-xs text-blue-700 font-medium">Intentos</p>
            </div>
            <div className="bg-green-50 rounded-xl p-3 text-center border border-green-100">
              <p className="text-2xl font-bold text-green-600">{avgScore}%</p>
              <p className="text-xs text-green-700 font-medium">Promedio</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-3 text-center border border-yellow-100">
              <p className="text-2xl font-bold text-yellow-600">{bestScore}%</p>
              <p className="text-xs text-yellow-700 font-medium">Mejor</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg border ${errors.fullName ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition`}
                placeholder="Ej: Juan Pérez García"
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono (9 dígitos)
              </label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 9))}
                className={`w-full px-4 py-2.5 rounded-lg border ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition`}
                placeholder="987654321"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg border ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition`}
                placeholder="correo@ejemplo.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-xs text-gray-500">
                <strong>Usuario:</strong> @{user.username}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                <strong>Simulacros disponibles:</strong> {user.allowedSimulacros.join(', ')}
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                {saved ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ¡Guardado!
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                    Guardar Cambios
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition"
              >
                Cerrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
