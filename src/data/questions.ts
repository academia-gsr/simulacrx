import { Question } from '../types';

// Simulacro UNI - Banco de preguntas (ejemplo reducido)
export const simulacroUNIQuestions: Question[] = [
  {
    id: 1,
    area: 'Matemática',
    question: 'Si 2x + 3 = 11, ¿cuál es el valor de x?',
    options: ['2', '3', '4', '5', '6'],
    correctAnswer: 2,
    explanation: '2x + 3 = 11 → 2x = 8 → x = 4',
    difficulty: 'fácil'
  },
  {
    id: 2,
    area: 'Matemática',
    question: '¿Cuál es el área de un triángulo con base 10 cm y altura 6 cm?',
    options: ['30 cm²', '60 cm²', '16 cm²', '20 cm²', '40 cm²'],
    correctAnswer: 0,
    explanation: 'Área = (base × altura) / 2 = (10 × 6) / 2 = 30 cm²',
    difficulty: 'fácil'
  },
  {
    id: 3,
    area: 'Razonamiento Verbal',
    question: 'Sinónimo de "efímero":',
    options: ['Eterno', 'Pasajero', 'Sólido', 'Permanente', 'Duradero'],
    correctAnswer: 1,
    explanation: 'Efímero significa que dura poco tiempo, pasajero.',
    difficulty: 'fácil'
  },
  {
    id: 4,
    area: 'Razonamiento Verbal',
    question: 'Antónimo de "pródigo":',
    options: ['Generoso', 'Tacaño', 'Abundante', 'Derrochador', 'Excesivo'],
    correctAnswer: 1,
    explanation: 'Pródigo significa generoso en demasía. Su antónimo es tacaño.',
    difficulty: 'medio'
  },
  {
    id: 5,
    area: 'Física',
    question: '¿Cuál es la velocidad de un móvil que recorre 100 m en 5 segundos?',
    options: ['10 m/s', '15 m/s', '20 m/s', '25 m/s', '30 m/s'],
    correctAnswer: 2,
    explanation: 'Velocidad = distancia / tiempo = 100 / 5 = 20 m/s',
    difficulty: 'fácil'
  },
  {
    id: 6,
    area: 'Física',
    question: 'La fuerza necesaria para acelerar un objeto de 5 kg a 3 m/s² es:',
    options: ['8 N', '15 N', '2 N', '1.67 N', '150 N'],
    correctAnswer: 1,
    explanation: 'F = m × a = 5 × 3 = 15 N',
    difficulty: 'fácil'
  },
  {
    id: 7,
    area: 'Química',
    question: '¿Cuál es el símbolo químico del oro?',
    options: ['Or', 'Go', 'Au', 'Ag', 'Fe'],
    correctAnswer: 2,
    explanation: 'El símbolo químico del oro es Au (del latín aurum).',
    difficulty: 'fácil'
  },
  {
    id: 8,
    area: 'Química',
    question: '¿Cuántos electrones tiene el átomo de carbono?',
    options: ['4', '6', '8', '12', '14'],
    correctAnswer: 1,
    explanation: 'El carbono tiene número atómico 6, por lo tanto tiene 6 electrones.',
    difficulty: 'fácil'
  },
  {
    id: 9,
    area: 'Historia',
    question: '¿En qué año se proclamó la independencia del Perú?',
    options: ['1821', '1824', '1810', '1819', '1825'],
    correctAnswer: 0,
    explanation: 'La independencia del Perú fue proclamada el 28 de julio de 1821.',
    difficulty: 'fácil'
  },
  {
    id: 10,
    area: 'Geografía',
    question: '¿Cuál es el río más largo del Perú?',
    options: ['Rímac', 'Marañón', 'Ucayali', 'Amazonas', 'Madre de Dios'],
    correctAnswer: 3,
    explanation: 'El río Amazonas es el más largo del Perú.',
    difficulty: 'fácil'
  }
];

// Simulacro Marina - Banco de preguntas (ejemplo reducido)
export const simulacroMarinaQuestions: Question[] = [
  {
    id: 11,
    area: 'Razonamiento Matemático',
    question: 'Si un barco recorre 120 millas en 4 horas, ¿cuál es su velocidad?',
    options: ['25 nudos', '30 nudos', '35 nudos', '40 nudos', '45 nudos'],
    correctAnswer: 1,
    explanation: 'Velocidad = 120 / 4 = 30 nudos',
    difficulty: 'fácil'
  },
  {
    id: 12,
    area: 'Razonamiento Verbal',
    question: 'BITÁCORA es a NAVEGACIÓN como BRÚJULA es a:',
    options: ['Mar', 'Orientación', 'Barco', 'Capitán', 'Tripulación'],
    correctAnswer: 1,
    explanation: 'La bitácora se usa en navegación, la brújula se usa para orientación.',
    difficulty: 'medio'
  },
  {
    id: 13,
    area: 'Conocimientos Navales',
    question: '¿Quién es el Héroe Máximo de la Marina de Guerra del Perú?',
    options: ['Alfonso Ugarte', 'Miguel Grau', 'Francisco Bolognesi', 'Andrés Avelino Cáceres', 'José Quiñones'],
    correctAnswer: 1,
    explanation: 'Miguel Grau Seminario es el Héroe Máximo de la Marina de Guerra del Perú.',
    difficulty: 'fácil'
  },
  {
    id: 14,
    area: 'Conocimientos Navales',
    question: '¿En qué combate murió Miguel Grau?',
    options: ['Combate de Iquique', 'Combate de Angamos', 'Combate de Arica', 'Combate del Callao', 'Combate de Abtao'],
    correctAnswer: 1,
    explanation: 'Miguel Grau murió en el Combate de Angamos el 8 de octubre de 1879.',
    difficulty: 'fácil'
  },
  {
    id: 15,
    area: 'Inglés',
    question: 'Translate: "The ship is sailing"',
    options: ['El barco está navegando', 'El barco naufragó', 'El barco está anclado', 'El barco se hundió', 'El barco llegó'],
    correctAnswer: 0,
    explanation: '"The ship is sailing" se traduce como "El barco está navegando".',
    difficulty: 'fácil'
  }
];
