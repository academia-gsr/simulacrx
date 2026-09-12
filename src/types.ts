export interface Question {
  id: number;
  area: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'fácil' | 'medio' | 'difícil';
}

export type UserRole = 'admin' | 'plus' | 'basic' | 'guest';

export interface User {
  id: string;
  username: string;
  password: string;
  role: UserRole;
  displayName: string;
  allowedSimulacros: string[];
  profile: {
    fullName: string;
    phone: string;
    email: string;
  };
  attempts: Attempt[];
}

export interface Attempt {
  id: string;
  blockId: string;
  simulacroId: string;
  date: string;
  answers: (number | null)[];
  timeUsed: number;
  score: number;
  correct: number;
  total: number;
  questionOrder: number[];
}

export interface Block {
  id: string;
  name: string;
  day: string;
  description: string;
  questions: Question[];
  duration: number;
  status: 'active' | 'pending';
  questionCount: number;
}

export interface Simulacro {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  institution: string;
  totalQuestions: number;
  duration: number;
  status: 'active' | 'pending';
  theme: {
    primary: string;
    gradient: string;
    headerBg: string;
  };
  blocks: Block[];
}
