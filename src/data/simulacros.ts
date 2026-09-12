import { Simulacro } from '../types';
import { simulacroUNIQuestions, simulacroMarinaQuestions } from './questions';

export const simulacros: Simulacro[] = [
  {
    id: 'sim01',
    number: 'N°01',
    title: 'Simulacro UNI',
    subtitle: 'Universidad Nacional de Ingeniería',
    institution: 'UNI',
    totalQuestions: 10,
    duration: 180,
    status: 'active',
    theme: {
      primary: 'from-blue-600 to-indigo-700',
      gradient: 'from-blue-900 via-indigo-900 to-blue-800',
      headerBg: 'from-blue-800 to-indigo-900',
    },
    blocks: [
      {
        id: 'sim01-block1',
        name: 'Banco Completo',
        day: 'Único',
        description: 'Matemática, Razonamiento Verbal, Física, Química, Historia, Geografía',
        questions: simulacroUNIQuestions,
        duration: 180,
        status: 'active',
        questionCount: 10,
      },
    ],
  },
  {
    id: 'sim02',
    number: 'N°02',
    title: 'Simulacro Marina',
    subtitle: 'Escuela de Oficiales de la Marina de Guerra del Perú',
    institution: 'ESMGP',
    totalQuestions: 5,
    duration: 120,
    status: 'active',
    theme: {
      primary: 'from-slate-700 to-blue-900',
      gradient: 'from-slate-900 via-blue-950 to-slate-900',
      headerBg: 'from-slate-800 via-blue-900 to-slate-800',
    },
    blocks: [
      {
        id: 'sim02-block1',
        name: 'Banco Completo',
        day: 'Único',
        description: 'Razonamiento, Conocimientos Navales, Inglés',
        questions: simulacroMarinaQuestions,
        duration: 120,
        status: 'active',
        questionCount: 5,
      },
    ],
  },
];

export const getSimulacroById = (id: string): Simulacro | undefined => {
  return simulacros.find((s) => s.id === id);
};

export const APP_CONFIG = {
  name: 'SimulacrUx',
  tagline: 'Plataforma de Simulacros de Admisión',
  project: '4. Simulación Exámenes PRE',
};
