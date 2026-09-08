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
