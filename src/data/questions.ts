import { Question } from '../types';

export const questions: Question[] = [
  // MATEMÁTICAS
  {
    id: 1,
    area: 'Matemática',
    question: 'Si f(x) = 3x² - 2x + 1, ¿cuál es el valor de f\'(2)?',
    options: ['8', '10', '12', '6'],
    correctAnswer: 1,
    explanation: 'f\'(x) = 6x - 2. Entonces f\'(2) = 6(2) - 2 = 12 - 2 = 10.',
    difficulty: 'medio'
  },
  {
    id: 2,
    area: 'Matemática',
    question: '¿Cuál es el valor de log₂(32)?',
    options: ['4', '5', '6', '8'],
    correctAnswer: 1,
    explanation: '2⁵ = 32, por lo tanto log₂(32) = 5.',
    difficulty: 'fácil'
  },
  {
    id: 3,
    area: 'Matemática',
    question: 'La integral ∫(2x + 3)dx es igual a:',
    options: ['x² + 3x + C', '2x² + 3x + C', 'x² + 3 + C', '2 + 3x + C'],
    correctAnswer: 0,
    explanation: '∫(2x + 3)dx = x² + 3x + C, aplicando la regla de potencias.',
    difficulty: 'medio'
  },
  {
    id: 4,
    area: 'Matemática',
    question: 'Si sen(θ) = 3/5 y θ está en el primer cuadrante, ¿cuánto vale cos(θ)?',
    options: ['3/5', '4/5', '5/4', '5/3'],
    correctAnswer: 1,
    explanation: 'Usando la identidad sen²(θ) + cos²(θ) = 1: cos²(θ) = 1 - 9/25 = 16/25, cos(θ) = 4/5.',
    difficulty: 'fácil'
  },
  {
    id: 5,
    area: 'Matemática',
    question: '¿Cuál es la solución del sistema: 2x + y = 7, x - y = 2?',
    options: ['x=3, y=1', 'x=2, y=3', 'x=4, y=-1', 'x=1, y=5'],
    correctAnswer: 0,
    explanation: 'Sumando ambas ecuaciones: 3x = 9, x = 3. Sustituyendo: y = 7 - 6 = 1.',
    difficulty: 'fácil'
  },
  // FÍSICA
  {
    id: 6,
    area: 'Física',
    question: 'Un bloque de 5 kg se desliza por un plano inclinado de 30° sin fricción. ¿Cuál es su aceleración? (g = 10 m/s²)',
    options: ['5 m/s²', '10 m/s²', '8.66 m/s²', '2.5 m/s²'],
    correctAnswer: 0,
    explanation: 'a = g·sen(30°) = 10 × 0.5 = 5 m/s².',
    difficulty: 'medio'
  },
  {
    id: 7,
    area: 'Física',
    question: 'La unidad de momento de inercia en el SI es:',
    options: ['kg·m', 'kg·m²', 'kg·m/s²', 'N·m'],
    correctAnswer: 1,
    explanation: 'El momento de inercia I = Σmᵢrᵢ² tiene unidades de kg·m².',
    difficulty: 'fácil'
  },
  {
    id: 8,
    area: 'Física',
    question: 'Un gas ideal se comprime isotérmicamente. ¿Qué ocurre con su presión?',
    options: ['Disminuye', 'Aumenta', 'Permanece constante', 'Se anula'],
    correctAnswer: 1,
    explanation: 'En un proceso isotérmico, PV = constante. Si V disminuye, P debe aumentar.',
    difficulty: 'fácil'
  },
  {
    id: 9,
    area: 'Física',
    question: '¿Cuál es la velocidad de una onda con frecuencia 50 Hz y longitud de onda 2 m?',
    options: ['25 m/s', '50 m/s', '100 m/s', '200 m/s'],
    correctAnswer: 2,
    explanation: 'v = λ·f = 2 × 50 = 100 m/s.',
    difficulty: 'fácil'
  },
  {
    id: 10,
    area: 'Física',
    question: 'Dos cargas de +3μC y -3μC están separadas 0.1 m. La fuerza entre ellas es (k = 9×10⁹ N·m²/C²):',
    options: ['8.1 N', '81 N', '0.81 N', '810 N'],
    correctAnswer: 0,
    explanation: 'F = k·q₁·q₂/r² = 9×10⁹ × (3×10⁻⁶)² / (0.1)² = 9×10⁹ × 9×10⁻¹² / 0.01 = 8.1 N.',
    difficulty: 'difícil'
  },
  // QUÍMICA
  {
    id: 11,
    area: 'Química',
    question: '¿Cuál es el número de oxidación del Mn en el KMnO₄?',
    options: ['+5', '+6', '+7', '+4'],
    correctAnswer: 2,
    explanation: 'K = +1, O = -2 (×4 = -8). Entonces: +1 + Mn + (-8) = 0, Mn = +7.',
    difficulty: 'medio'
  },
  {
    id: 12,
    area: 'Química',
    question: '¿Cuántos moles de agua se producen al combustionar completamente 2 moles de metano (CH₄)?',
    options: ['2 moles', '3 moles', '4 moles', '1 mol'],
    correctAnswer: 2,
    explanation: 'CH₄ + 2O₂ → CO₂ + 2H₂O. Por cada mol de CH₄ se producen 2 moles de H₂O. Para 2 moles: 4 moles de H₂O.',
    difficulty: 'medio'
  },
  {
    id: 13,
    area: 'Química',
    question: 'El pH de una solución 0.01 M de HCl es:',
    options: ['1', '2', '3', '0.01'],
    correctAnswer: 1,
    explanation: 'HCl es un ácido fuerte. pH = -log[H⁺] = -log(0.01) = -log(10⁻²) = 2.',
    difficulty: 'fácil'
  },
  {
    id: 14,
    area: 'Química',
    question: '¿Qué tipo de enlace se forma entre Na y Cl?',
    options: ['Covalente polar', 'Covalente apolar', 'Iónico', 'Metálico'],
    correctAnswer: 2,
    explanation: 'La diferencia de electronegatividad entre Na (0.9) y Cl (3.0) es 2.1, mayor a 1.7, por lo que es un enlace iónico.',
    difficulty: 'fácil'
  },
  {
    id: 15,
    area: 'Química',
    question: 'La configuración electrónica del Fe (Z=26) es:',
    options: ['[Ar] 4s² 3d⁶', '[Ar] 4s² 3d⁴', '[Ar] 4s¹ 3d⁷', '[Ar] 3d⁸'],
    correctAnswer: 0,
    explanation: 'Fe tiene 26 electrones: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶ = [Ar] 4s² 3d⁶.',
    difficulty: 'medio'
  },
  // INGLÉS
  {
    id: 16,
    area: 'Inglés',
    question: 'Choose the correct option: "If I ___ enough money, I would buy a new car."',
    options: ['have', 'had', 'would have', 'having'],
    correctAnswer: 1,
    explanation: 'This is a second conditional sentence. The structure is: If + past simple, would + infinitive.',
    difficulty: 'medio'
  },
  {
    id: 17,
    area: 'Inglés',
    question: 'The passive voice of "They built the bridge in 2020" is:',
    options: ['The bridge was built in 2020', 'The bridge is built in 2020', 'The bridge has been built in 2020', 'The bridge were built in 2020'],
    correctAnswer: 0,
    explanation: 'Past simple passive: subject + was/were + past participle. "The bridge was built in 2020."',
    difficulty: 'fácil'
  },
  {
    id: 18,
    area: 'Inglés',
    question: 'Which word is a synonym of "enormous"?',
    options: ['Tiny', 'Huge', 'Narrow', 'Quick'],
    correctAnswer: 1,
    explanation: '"Enormous" means extremely large. "Huge" is a synonym meaning very large.',
    difficulty: 'fácil'
  },
  // RAZONAMIENTO VERBAL
  {
    id: 19,
    area: 'Razonamiento Verbal',
    question: '¿Cuál es el antónimo de "prolijo"?',
    options: ['Cuidadoso', 'Detallista', 'Descuidado', 'Extenso'],
    correctAnswer: 2,
    explanation: '"Prolijo" significa cuidadoso y detallado. Su antónimo es "descuidado".',
    difficulty: 'medio'
  },
  {
    id: 20,
    area: 'Razonamiento Verbal',
    question: 'Complete la analogía: ARQUITECTO es a PLANO como INGENIERO es a:',
    options: ['Construcción', 'Proyecto', 'Cálculo', 'Máquina'],
    correctAnswer: 1,
    explanation: 'El arquitecto elabora el plano; el ingeniero elabora el proyecto. Relación: profesional → documento que elabora.',
    difficulty: 'medio'
  },
  // RAZONAMIENTO MATEMÁTICO
  {
    id: 21,
    area: 'Razonamiento Matemático',
    question: 'Si un terreno rectangular mide 30 m de largo y 20 m de ancho, ¿cuál es su área en hectáreas?',
    options: ['0.06 ha', '0.6 ha', '6 ha', '60 ha'],
    correctAnswer: 0,
    explanation: 'Área = 30 × 20 = 600 m². 1 hectárea = 10,000 m². Entonces: 600/10,000 = 0.06 ha.',
    difficulty: 'medio'
  },
  {
    id: 22,
    area: 'Razonamiento Matemático',
    question: 'Un obrero puede hacer una obra en 12 días y otro en 8 días. ¿En cuántos días la harán juntos?',
    options: ['4.8 días', '5 días', '4 días', '6 días'],
    correctAnswer: 0,
    explanation: 'Juntos: 1/12 + 1/8 = 2/24 + 3/24 = 5/24 por día. Tiempo = 24/5 = 4.8 días.',
    difficulty: 'medio'
  },
  {
    id: 23,
    area: 'Razonamiento Matemático',
    question: '¿Cuántos números de 3 cifras se pueden formar con los dígitos 1, 2, 3, 4, 5 sin repetición?',
    options: ['60', '120', '20', '25'],
    correctAnswer: 0,
    explanation: 'Variaciones de 5 en 3: V(5,3) = 5!/(5-3)! = 5×4×3 = 60.',
    difficulty: 'medio'
  },
  // GEOGRAFÍA / ACTUALIDAD
  {
    id: 24,
    area: 'Geografía',
    question: '¿Cuál es el río más largo del Perú?',
    options: ['Río Marañón', 'Río Ucayali', 'Río Amazonas', 'Río Madre de Dios'],
    correctAnswer: 1,
    explanation: 'El río Ucayali, con aproximadamente 1,771 km, es considerado el río más largo del Perú.',
    difficulty: 'medio'
  },
  {
    id: 25,
    area: 'Geografía',
    question: 'La Cordillera de los Andes en el Perú se divide en:',
    options: ['2 ramales', '3 ramales', '4 ramales', '5 ramales'],
    correctAnswer: 0,
    explanation: 'La Cordillera de los Andes en el Perú se divide en 2 ramales: Occidental y Oriental.',
    difficulty: 'fácil'
  },
  // HISTORIA
  {
    id: 26,
    area: 'Historia del Perú',
    question: '¿Quién fue el fundador de la dinastía Inca según la leyenda?',
    options: ['Pachacútec', 'Manco Cápac', 'Túpac Inca Yupanqui', 'Huáscar'],
    correctAnswer: 1,
    explanation: 'Según la leyenda, Manco Cápac y Mama Ocllo fueron enviados por el dios Sol para fundar el Imperio Inca.',
    difficulty: 'fácil'
  },
  {
    id: 27,
    area: 'Historia del Perú',
    question: 'La batalla de Ayacucho, que selló la independencia del Perú, ocurrió en:',
    options: ['1821', '1824', '1826', '1820'],
    correctAnswer: 1,
    explanation: 'La batalla de Ayacucho se libró el 9 de diciembre de 1824.',
    difficulty: 'fácil'
  },
  // ECONOMÍA
  {
    id: 28,
    area: 'Economía',
    question: 'Si la oferta de un bien aumenta y la demanda permanece constante, el precio de equilibrio:',
    options: ['Aumenta', 'Disminuye', 'No cambia', 'Se duplica'],
    correctAnswer: 1,
    explanation: 'Un aumento en la oferta desplaza la curva de oferta a la derecha, generando un nuevo equilibrio con menor precio.',
    difficulty: 'medio'
  },
  {
    id: 29,
    area: 'Economía',
    question: 'El PBI de un país mide:',
    options: ['La riqueza total acumulada', 'El valor de todos los bienes y servicios finales producidos en un año', 'Solo la producción industrial', 'Los ingresos del gobierno'],
    correctAnswer: 1,
    explanation: 'El PBI (Producto Bruto Interno) mide el valor monetario de todos los bienes y servicios finales producidos dentro de un país en un período determinado.',
    difficulty: 'fácil'
  },
  // FILOSOFÍA / CIVISMO
  {
    id: 30,
    area: 'Filosofía y Civismo',
    question: '¿Cuál es el principio fundamental de la democracia?',
    options: ['La soberanía popular', 'El poder militar', 'La herencia dinástica', 'El poder económico'],
    correctAnswer: 0,
    explanation: 'La soberanía popular establece que el poder reside en el pueblo, quien lo ejerce a través de representantes elegidos democráticamente.',
    difficulty: 'fácil'
  },
  {
    id: 31,
    area: 'Filosofía y Civismo',
    question: '¿Qué filósofo es considerado el padre de la filosofía occidental?',
    options: ['Platón', 'Aristóteles', 'Sócrates', 'Tales de Mileto'],
    correctAnswer: 2,
    explanation: 'Sócrates es considerado el padre de la filosofía occidental por su método dialéctico y su influencia en Platón y Aristóteles.',
    difficulty: 'fácil'
  },
  // BIOLOGÍA
  {
    id: 32,
    area: 'Biología',
    question: 'La unidad básica de la vida es:',
    options: ['El átomo', 'La molécula', 'La célula', 'El tejido'],
    correctAnswer: 2,
    explanation: 'La célula es la unidad estructural, funcional y de origen de todos los seres vivos.',
    difficulty: 'fácil'
  },
  {
    id: 33,
    area: 'Biología',
    question: '¿Cuál es la función principal de los ribosomas?',
    options: ['Producción de energía', 'Síntesis de proteínas', 'Digestión celular', 'Almacenamiento de ADN'],
    correctAnswer: 1,
    explanation: 'Los ribosomas son los organelos encargados de la síntesis de proteínas mediante la traducción del ARN mensajero.',
    difficulty: 'fácil'
  },
  // LITERATURA
  {
    id: 34,
    area: 'Literatura',
    question: '¿Quién escribió "Los Heraldos Negros"?',
    options: ['José María Arguedas', 'César Vallejo', 'Mario Vargas Llosa', 'Abraham Valdelomar'],
    correctAnswer: 1,
    explanation: '"Los Heraldos Negros" (1919) es la primera obra poética del escritor peruano César Vallejo.',
    difficulty: 'fácil'
  },
  {
    id: 35,
    area: 'Literatura',
    question: 'El realismo mágico es un movimiento literario representado principalmente por:',
    options: ['Mario Vargas Llosa', 'Gabriel García Márquez', 'Julio Cortázar', 'Pablo Neruda'],
    correctAnswer: 1,
    explanation: 'Gabriel García Márquez, con "Cien años de soledad", es el máximo representante del realismo mágico latinoamericano.',
    difficulty: 'fácil'
  },
  // GEOMETRÍA
  {
    id: 36,
    area: 'Geometría',
    question: '¿Cuál es el área de un triángulo con base 10 cm y altura 6 cm?',
    options: ['60 cm²', '30 cm²', '16 cm²', '36 cm²'],
    correctAnswer: 1,
    explanation: 'Área del triángulo = (base × altura) / 2 = (10 × 6) / 2 = 30 cm².',
    difficulty: 'fácil'
  },
  {
    id: 37,
    area: 'Geometría',
    question: 'El volumen de un cilindro de radio 3 cm y altura 10 cm es:',
    options: ['90π cm³', '30π cm³', '60π cm³', '120π cm³'],
    correctAnswer: 0,
    explanation: 'V = πr²h = π(3²)(10) = π(9)(10) = 90π cm³.',
    difficulty: 'medio'
  },
  // ÁLGEBRA
  {
    id: 38,
    area: 'Álgebra',
    question: 'Factorizar: x² - 9',
    options: ['(x-3)²', '(x+3)(x-3)', '(x-9)(x+1)', '(x+9)(x-1)'],
    correctAnswer: 1,
    explanation: 'x² - 9 es una diferencia de cuadrados: a² - b² = (a+b)(a-b). Entonces: (x+3)(x-3).',
    difficulty: 'fácil'
  },
  {
    id: 39,
    area: 'Álgebra',
    question: 'Si 3ˣ = 81, ¿cuánto vale x?',
    options: ['3', '4', '5', '27'],
    correctAnswer: 1,
    explanation: '81 = 3⁴, por lo tanto 3ˣ = 3⁴, entonces x = 4.',
    difficulty: 'fácil'
  },
  {
    id: 40,
    area: 'Álgebra',
    question: 'La suma de las raíces de la ecuación x² - 5x + 6 = 0 es:',
    options: ['5', '6', '-5', '-6'],
    correctAnswer: 0,
    explanation: 'Por las relaciones de Cardano-Vieta, la suma de raíces = -b/a = -(-5)/1 = 5.',
    difficulty: 'medio'
  }
];

export const getQuestionsByArea = (area: string): Question[] => {
  return questions.filter(q => q.area === area);
};

export const areas = [...new Set(questions.map(q => q.area))];

export const getRandomQuestions = (count: number): Question[] => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
