import { User } from '../types';

// Usuarios piloto del sistema SimulacrUx
export const pilotUsers: User[] = [
  {
    id: 'admin-001',
    username: 'Admin',
    password: 'Admin1234',
    role: 'admin',
    displayName: 'Administrador del Sistema',
    allowedSimulacros: ['sim01', 'sim02'],
    profile: {
      fullName: 'Administrador SimulacrUx',
      phone: '999999999',
      email: 'admin@simulacrx.com'
    },
    attempts: [],
  },
  {
    id: 'plus-uni-001',
    username: 'P_UNI_PLUS',
    password: 'Puni1234',
    role: 'plus',
    displayName: 'Usuario PLUS - UNI',
    allowedSimulacros: ['sim01'],
    profile: {
      fullName: 'Postulante UNI PLUS',
      phone: '987654321',
      email: 'plus.uni@simulacrx.com'
    },
    attempts: [],
  },
  {
    id: 'plus-mgp-001',
    username: 'P_MGP_PLUS',
    password: 'Pmgp1234',
    role: 'plus',
    displayName: 'Usuario PLUS - Marina',
    allowedSimulacros: ['sim02'],
    profile: {
      fullName: 'Postulante Marina PLUS',
      phone: '987654322',
      email: 'plus.mgp@simulacrx.com'
    },
    attempts: [],
  },
  {
    id: 'basic-uni-001',
    username: 'P_UNI_BASIC',
    password: 'Puni1234',
    role: 'basic',
    displayName: 'Usuario BASIC - UNI',
    allowedSimulacros: ['sim01'],
    profile: {
      fullName: 'Postulante UNI BASIC',
      phone: '987654323',
      email: 'basic.uni@simulacrx.com'
    },
    attempts: [],
  },
  {
    id: 'basic-mgp-001',
    username: 'P_MGP_BASIC',
    password: 'Pmgp1234',
    role: 'basic',
    displayName: 'Usuario BASIC - Marina',
    allowedSimulacros: ['sim02'],
    profile: {
      fullName: 'Postulante Marina BASIC',
      phone: '987654324',
      email: 'basic.mgp@simulacrx.com'
    },
    attempts: [],
  },
];

export const authenticateUser = (username: string, password: string): User | null => {
  const user = pilotUsers.find(
    u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
  );
  return user ? { ...user } : null; // Retornar copia para no mutar el original
};

export const getRoleInfo = (role: string) => {
  switch (role) {
    case 'admin':
      return {
        label: 'Administrador',
        color: 'text-purple-600',
        bg: 'bg-purple-100',
        border: 'border-purple-300',
        icon: '👑',
        description: 'Acceso total a todos los simulacros y funciones administrativas',
      };
    case 'plus':
      return {
        label: 'Usuario PLUS',
        color: 'text-blue-600',
        bg: 'bg-blue-100',
        border: 'border-blue-300',
        icon: '⭐',
        description: 'Intentos ilimitados con explicaciones detalladas',
      };
    case 'basic':
      return {
        label: 'Usuario BASIC',
        color: 'text-green-600',
        bg: 'bg-green-100',
        border: 'border-green-300',
        icon: '🎯',
        description: '1 intento por bloque, sin explicaciones',
      };
    case 'guest':
      return {
        label: 'Invitado',
        color: 'text-gray-600',
        bg: 'bg-gray-100',
        border: 'border-gray-300',
        icon: '👤',
        description: '10% de preguntas aleatorias de prueba',
      };
    default:
      return {
        label: 'Desconocido',
        color: 'text-gray-600',
        bg: 'bg-gray-100',
        border: 'border-gray-300',
        icon: '?',
        description: '',
      };
  }
};

// Persistencia de intentos en localStorage
const STORAGE_KEY = 'simulacrx_user_data';

export const saveUserData = (userId: string, profile: User['profile'], attempts: User['attempts']) => {
  try {
    const allData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    allData[userId] = { profile, attempts };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
  } catch (e) {
    console.error('Error saving user data:', e);
  }
};

export const loadUserData = (userId: string): { profile?: User['profile']; attempts?: User['attempts'] } => {
  try {
    const allData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return allData[userId] || {};
  } catch (e) {
    console.error('Error loading user data:', e);
    return {};
  }
};
