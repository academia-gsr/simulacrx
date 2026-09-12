import { User } from '../types';

export const pilotUsers: User[] = [
  {
    id: 'admin-001',
    username: 'Admin',
    password: 'Admin1234',
    role: 'admin',
    displayName: 'Administrador',
    allowedSimulacros: ['sim01', 'sim02'],
    profile: {
      fullName: 'Administrador del Sistema',
      phone: '999999999',
      email: 'admin@simulacrx.com',
    },
    attempts: [],
  },
  {
    id: 'plus-001',
    username: 'P_UNI_PLUS',
    password: 'Puni1234',
    role: 'plus',
    displayName: 'Usuario PLUS UNI',
    allowedSimulacros: ['sim01'],
    profile: {
      fullName: 'Juan Pérez García',
      phone: '987654321',
      email: 'juan.perez@email.com',
    },
    attempts: [],
  },
  {
    id: 'basic-001',
    username: 'P_UNI_BASIC',
    password: 'Puni1234',
    role: 'basic',
    displayName: 'Usuario BASIC UNI',
    allowedSimulacros: ['sim01'],
    profile: {
      fullName: 'María López Torres',
      phone: '912345678',
      email: 'maria.lopez@email.com',
    },
    attempts: [],
  },
];

export const authenticateUser = (username: string, password: string): User | null => {
  const user = pilotUsers.find(
    (u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password
  );
  return user ? { ...user } : null;
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
        description: '3 intentos de prueba',
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

export const getMaxAttempts = (role: string): number => {
  switch (role) {
    case 'admin':
    case 'plus':
      return Infinity;
    case 'basic':
      return 1;
    case 'guest':
      return 3;
    default:
      return 0;
  }
};

export const saveUserData = (userId: string, profile: User['profile'], attempts: User['attempts']) => {
  try {
    const allData = JSON.parse(localStorage.getItem('simulacrx_user_data') || '{}');
    allData[userId] = { profile, attempts };
    localStorage.setItem('simulacrx_user_data', JSON.stringify(allData));
  } catch (e) {
    console.error('Error saving user data', e);
  }
};

export const loadUserData = (userId: string): { profile?: User['profile']; attempts?: User['attempts'] } => {
  try {
    const allData = JSON.parse(localStorage.getItem('simulacrx_user_data') || '{}');
    return allData[userId] || {};
  } catch (e) {
    console.error('Error loading user data', e);
    return {};
  }
};
