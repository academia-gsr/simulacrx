import { questionsDay1 } from '../../bancos/simulacro-01-uni/dia1-aptitud-humanidades';
import { questionsDay2 } from '../../bancos/simulacro-01-uni/dia2-matematica';
import { questionsDay3 } from '../../bancos/simulacro-01-uni/dia3-fisica-quimica';
import { questionsDay1 as questionsSimulacro02Day1 } from '../../bancos/simulacro-02-esmgp/dia1-aptitud-academica';
import { questionsDay2 as questionsSimulacro02Day2 } from '../../bancos/simulacro-02-esmgp/dia2-conocimientos';
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
  duration: number;
  status: 'active' | 'pending' | 'completed';
  theme: SimulacroTheme;
}

export interface SimulacroTheme {
  primary: string; // color principal (bg, botones)
  secondary: string; // color secundario
  accent: string; // acento
  gradient: string; // gradiente de fondo
  headerBg: string; // fondo del header
  textColor: string; // color de texto principal
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

// Colorimetría UNI: Azul/Índigo (mantener la inicial)
const uniTheme: SimulacroTheme = {
  primary: 'from-blue-600 to-indigo-700',
  secondary: 'blue',
  accent: 'yellow',
  gradient: 'from-blue-900 via-indigo-900 to-blue-800',
  headerBg: 'from-blue-800 to-indigo-900',
  textColor: 'text-blue-700',
};

// Colorimetría Marina/Global: Slate/Azul oscuro (mantener la actual)
const mgpTheme: SimulacroTheme = {
  primary: 'from-slate-700 to-blue-900',
  secondary: 'slate',
  accent: 'yellow',
  gradient: 'from-slate-900 via-blue-950 to-slate-900',
  headerBg: 'from-slate-800 via-blue-900 to-slate-800',
  textColor: 'text-slate-700',
};

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
    duration: 180,
    status: 'active',
    theme: uniTheme,
    blocks: [
      {
        id: 'sim01-day1',
        name: 'Aptitud Académica y Humanidades',
        day: 'Día 1',
        description: 'Razonamiento Matemático, Razonamiento Verbal, Lógico-Algorítmico, Comunicación, Literatura, Historia, Geografía, Economía, Inglés, Filosofía, Lógica, Actualidad, Ciencia y Tecnología, Realidad Nacional',
        questions: questionsDay1,
        duration: 180,
        status: 'active',
        questionCount: 100
      },
      {
        id: 'sim01-day2',
        name: 'Matemática',
        day: 'Día 2',
        description: 'Aritmética, Álgebra, Geometría, Trigonometría, Nociones de Cálculo Diferencial',
        questions: questionsDay2,
        duration: 180,
        status: 'active',
        questionCount: 40
      },
      {
        id: 'sim01-day3',
        name: 'Física y Química',
        day: 'Día 3',
        description: 'Mecánica, Termodinámica, Electromagnetismo, Óptica, Estructura Atómica, Tabla Periódica, Enlaces, Reacciones, Estequiometría',
        questions: questionsDay3,
        duration: 180,
        status: 'active',
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
    totalQuestions: 200,
    duration: 240,
    status: 'active',
    theme: mgpTheme,
    blocks: [
      {
        id: 'sim02-day1',
        name: 'Examen de Aptitud Académica',
        day: 'Día 1',
        description: 'Razonamiento Matemático (50 preguntas) + Razonamiento Verbal (50 preguntas)',
        questions: questionsSimulacro02Day1,
        duration: 120,
        status: 'active',
        questionCount: 100
      },
      {
        id: 'sim02-day2',
        name: 'Examen de Conocimientos',
        day: 'Día 2',
        description: 'Geometría, Aritmética, Álgebra, Trigonometría, Física, Química, Lengua y Literatura, Informática, Historia, Geografía, Inglés',
        questions: questionsSimulacro02Day2,
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
