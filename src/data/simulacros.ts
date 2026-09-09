import { questionsDay1 } from './simulacro01-day1';
import { questionsDay2 } from './simulacro01-day2';
import { questionsDay3 } from './simulacro01-day3';
import { questionsSimulacro02 } from './simulacro02-questions';
import { Question } from '../types';

export interface Simulacro {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  institution: string;
  project: string;
  version: string;
  blocks: Block[];
  totalQuestions: number;
  duration: number; // minutes
  status: 'active' | 'pending' | 'completed';
}

export interface Block {
  id: string;
  name: string;
  day: string;
  description: string;
  questions: Question[];
  duration: number; // minutes
  status: 'active' | 'pending';
  questionCount: number;
}

export const simulacros: Simulacro[] = [
  {
    id: 'sim01',
    number: 'N°01',
    title: 'Simulacro de Admisión P_UNI 2027',
    subtitle: 'Universidad Nacional de Ingeniería',
    institution: 'UNI',
    project: '4. Simulación Exámenes PRE',
    version: 'v1.0',
    totalQuestions: 180,
    duration: 180, // 3 días
    status: 'active',
    blocks: [
      {
        id: 'sim01-day1',
        name: 'Aptitud Académica y Humanidades',
        day: 'Día 1',
        description: 'Razonamiento Matemático, Razonamiento Verbal, Lógico-Algorítmico, Comunicación, Literatura, Historia, Geografía, Economía, Inglés, Filosofía, Lógica, Actualidad, Ciencia y Tecnología, Realidad Nacional',
        questions: questionsDay1,
        duration: 60,
        status: 'active',
        questionCount: 100
      },
      {
        id: 'sim01-day2',
        name: 'Matemática',
        day: 'Día 2',
        description: 'Aritmética, Álgebra, Geometría, Trigonometría, Nociones de Cálculo Diferencial',
        questions: questionsDay2,
        duration: 60,
        status: 'active',
        questionCount: 40
      },
      {
        id: 'sim01-day3',
        name: 'Física y Química',
        day: 'Día 3',
        description: 'Mecánica, Termodinámica, Electromagnetismo, Óptica, Estructura Atómica, Tabla Periódica, Enlaces, Reacciones, Estequiometría',
        questions: questionsDay3,
        duration: 60,
        status: 'active' as const,
        questionCount: 40
      }
    ]
  },
  {
    id: 'sim02',
    number: 'N°02',
    title: 'Simulacro de Admisión',
    subtitle: 'Escuela de Oficiales de la Marina de Guerra del Perú',
    institution: 'ESMGP',
    project: '4. Simulación Exámenes PRE',
    version: 'v2.0',
    totalQuestions: 100,
    duration: 120,
    status: 'active',
    blocks: [
      {
        id: 'sim02-block1',
        name: 'Banco 1 - Completo',
        day: 'Único',
        description: 'Razonamiento Matemático, Razonamiento Verbal, Geometría, Aritmética, Álgebra, Trigonometría, Física, Química, Lengua y Literatura, Informática, Historia, Geografía, Inglés',
        questions: questionsSimulacro02,
        duration: 120,
        status: 'active',
        questionCount: 100
      }
    ]
  }
];

export const getSimulacroById = (id: string): Simulacro | undefined => {
  return simulacros.find(s => s.id === id);
};

export const getBlockById = (simulacroId: string, blockId: string): Block | undefined => {
  const sim = getSimulacroById(simulacroId);
  return sim?.blocks.find(b => b.id === blockId);
};

export const APP_CONFIG = {
  name: 'SimulacrUx',
  tagline: 'Plataforma de Simulacros de Admisión',
  project: '4. Simulación Exámenes PRE'
};
