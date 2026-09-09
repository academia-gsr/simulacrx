export interface Question {
  id: number;
  area: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'fácil' | 'medio' | 'difícil';
}

export interface ExamState {
  currentQuestion: number;
  answers: (number | null)[];
  timeRemaining: number;
  isFinished: boolean;
  startedAt: Date | null;
  finishedAt: Date | null;
}

export interface StudentInfo {
  name: string;
  email: string;
  phone: string;
}

export type UserRole = 'admin' | 'plus' | 'basic' | 'guest';

export interface User {
  id: string;
  username: string;
  password: string;
  role: UserRole;
  displayName: string;
  allowedSimulacros: string[]; // IDs de simulacros permitidos
  attempts?: { [blockId: string]: number }; // intentos por bloque
  expiresAt?: string; // fecha de expiración para BASIC promocional
  promoMessage?: string; // mensaje promocional
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}
