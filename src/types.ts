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

export interface UserProfile {
  fullName: string;
  phone: string;
  email: string;
}

export type UserRole = 'admin' | 'plus' | 'basic' | 'guest';

export interface Attempt {
  id: string;
  blockId: string;
  simulacroId: string;
  date: string; // ISO string
  answers: (number | null)[];
  timeUsed: number; // segundos
  score: number; // porcentaje
  correct: number;
  total: number;
  questionOrder: number[]; // IDs de preguntas en el orden que se presentaron
}

export interface User {
  id: string;
  username: string;
  password: string;
  role: UserRole;
  displayName: string;
  allowedSimulacros: string[];
  profile: UserProfile;
  attempts: Attempt[];
  expiresAt?: string;
  promoMessage?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}
