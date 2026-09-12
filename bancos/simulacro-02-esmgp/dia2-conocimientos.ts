import { Question } from '../../src/types';

// =========================================================
// SIMULACRO N°02 ESMGP - DÍA 2: EXAMEN DE CONOCIMIENTOS
// 100 PREGUNTAS - IDs: 201-300
// =========================================================

export const questionsDay2: Question[] = [
  // 1. GEOMETRÍA (001-009)
  {
    id: 201,
    area: 'Geometría',
    question: 'En un triángulo, la suma de sus ángulos internos es:',
    options: ['90°', '180°', '270°', '360°', '120°'],
    correctAnswer: 1,
    explanation: 'La suma de los ángulos internos de cualquier triángulo siempre es 180°.',
    difficulty: 'fácil'
  },
  {
    id: 202,
    area: 'Geometría',
    question: 'En un rectángulo de lados 3 cm y 4 cm, ¿cuánto mide la diagonal?',
    options: ['5 cm', '6 cm', '7 cm', '8 cm', '9 cm'],
    correctAnswer: 0,
    explanation: 'Aplicando el teorema de Pitágoras: d = √(3² + 4²) = √(9 + 16) = √25 = 5 cm.',
    difficulty: 'fácil'
  },
  {
    id: 203,
    area: 'Geometría',
    question: 'El ángulo central de una circunferencia mide 60°. ¿Cuánto mide el arco correspondiente?',
    options: ['30°', '60°', '120°', '90°', '45°'],
    correctAnswer: 1,
    explanation: 'El arco correspondiente a un ángulo central tiene la misma medida que el ángulo: 60°.',
    difficulty: 'fácil'
  },
  {
    id: 204,
    area: 'Geometría',
    question: 'Calcule el volumen de un cubo de arista 3 cm.',
    options: ['9 cm³', '18 cm³', '27 cm³', '36 cm³', '54 cm³'],
    correctAnswer: 2,
    explanation: 'Volumen del cubo = arista³ = 3³ = 27 cm³.',
    difficulty: 'fácil'
  },
  {
    id: 205,
    area: 'Geometría',
    question: '¿Cómo se denomina al segmento trazado desde un vértice al punto medio del lado opuesto?',
    options: ['Altura', 'Mediana', 'Bisectriz', 'Mediatriz', 'Ceviana'],
    correctAnswer: 1,
    explanation: 'La mediana es el segmento que va desde un vértice al punto medio del lado opuesto.',
    difficulty: 'fácil'
  },
  {
    id: 206,
    area: 'Geometría',
    question: '¿Cuál es la suma de los ángulos internos de un pentágono?',
    options: ['360°', '540°', '720°', '900°', '1080°'],
    correctAnswer: 1,
    explanation: 'Suma de ángulos internos = (n-2) × 180° = (5-2) × 180° = 3 × 180° = 540°.',
    difficulty: 'fácil'
  },
  {
    id: 207,
    area: 'Geometría',
    question: 'En todo cuadrilátero circunscrito a una circunferencia, la suma de las longitudes de dos lados opuestos es igual a:',
    options: ['La suma de los otros dos lados', 'El doble de la diagonal', 'La diferencia de los radios', 'El perímetro total', 'Cero'],
    correctAnswer: 0,
    explanation: 'Teorema de Pitot: En un cuadrilátero circunscrito, la suma de lados opuestos es igual.',
    difficulty: 'medio'
  },
  {
    id: 208,
    area: 'Geometría',
    question: 'Calcule el área de un círculo cuyo radio mide 4 cm.',
    options: ['8π cm²', '12π cm²', '16π cm²', '32π cm²', '4π cm²'],
    correctAnswer: 2,
    explanation: 'Área del círculo = πr² = π(4²) = 16π cm².',
    difficulty: 'fácil'
  },
  {
    id: 209,
    area: 'Geometría',
    question: 'Calcule la distancia entre los puntos (1, 2) y (4, 6).',
    options: ['3', '4', '5', '6', '7'],
    correctAnswer: 2,
    explanation: 'Distancia = √[(4-1)² + (6-2)²] = √[9 + 16] = √25 = 5.',
    difficulty: 'fácil'
  },

  // 2. ARITMÉTICA (010-018)
  {
    id: 210,
    area: 'Aritmética',
    question: 'Calcule: -5 + 8 - (-3)',
    options: ['0', '6', '10', '-6', '-10'],
    correctAnswer: 1,
    explanation: '-5 + 8 - (-3) = -5 + 8 + 3 = 6.',
    difficulty: 'fácil'
  },
  {
    id: 211,
    area: 'Aritmética',
    question: '¿Cuál de los siguientes números es divisible por 3?',
    options: ['14', '22', '27', '31', '40'],
    correctAnswer: 2,
    explanation: 'Un número es divisible por 3 si la suma de sus dígitos es divisible por 3. 27: 2+7=9, divisible por 3.',
    difficulty: 'fácil'
  },
  {
    id: 212,
    area: 'Aritmética',
    question: 'Halle el MCM de 12 y 18.',
    options: ['6', '24', '36', '48', '72'],
    correctAnswer: 2,
    explanation: 'MCM(12, 18): 12 = 2²×3, 18 = 2×3². MCM = 2²×3² = 4×9 = 36.',
    difficulty: 'fácil'
  },
  {
    id: 213,
    area: 'Aritmética',
    question: '¿Cuántos factores primos tiene el número 12?',
    options: ['1', '2', '3', '4', '6'],
    correctAnswer: 1,
    explanation: '12 = 2² × 3. Tiene 2 factores primos: 2 y 3.',
    difficulty: 'fácil'
  },
  {
    id: 214,
    area: 'Aritmética',
    question: 'Halle la cuarta diferencial de 20, 12 y 15.',
    options: ['5', '7', '9', '10', '8'],
    correctAnswer: 1,
    explanation: 'Cuarta proporcional: 20/12 = 15/x → x = (12×15)/20 = 180/20 = 9.',
    difficulty: 'medio'
  },
  {
    id: 215,
    area: 'Aritmética',
    question: '¿A qué descuento único equivalen dos descuentos sucesivos del 20% y 10%?',
    options: ['28%', '30%', '25%', '32%', '20%'],
    correctAnswer: 0,
    explanation: 'Descuento único = 1 - (1-0.20)(1-0.10) = 1 - (0.80)(0.90) = 1 - 0.72 = 0.28 = 28%.',
    difficulty: 'medio'
  },
  {
    id: 216,
    area: 'Aritmética',
    question: 'Halle el promedio geométrico de 2 y 8.',
    options: ['4', '5', '6', '8', '16'],
    correctAnswer: 0,
    explanation: 'Promedio geométrico = √(2×8) = √16 = 4.',
    difficulty: 'fácil'
  },
  {
    id: 217,
    area: 'Aritmética',
    question: 'Repartir 300 en forma directamente proporcional a 2 y 3. La parte mayor es:',
    options: ['120', '150', '180', '200', '100'],
    correctAnswer: 2,
    explanation: 'Suma de partes = 2+3 = 5. Parte mayor = (3/5)×300 = 180.',
    difficulty: 'fácil'
  },
  {
    id: 218,
    area: 'Aritmética',
    question: 'Dado el conjunto {4, 7, 2, 7, 9, 7}, la moda es:',
    options: ['4', '7', '6', '9', '2'],
    correctAnswer: 1,
    explanation: 'La moda es el valor que más se repite. El 7 aparece 3 veces.',
    difficulty: 'fácil'
  },

  // 3. ÁLGEBRA (019-027)
  {
    id: 219,
    area: 'Álgebra',
    question: 'Simplifique: 2³ * 2²',
    options: ['2⁵', '2⁶', '4⁵', '2¹', '8²'],
    correctAnswer: 0,
    explanation: 'Ley de exponentes: aᵐ × aⁿ = aᵐ⁺ⁿ. Entonces 2³ × 2² = 2⁵.',
    difficulty: 'fácil'
  },
  {
    id: 220,
    area: 'Álgebra',
    question: 'Halle el grado absoluto de P(x,y) = 3x² y³',
    options: ['2', '3', '5', '6', '1'],
    correctAnswer: 2,
    explanation: 'Grado absoluto = suma de exponentes = 2 + 3 = 5.',
    difficulty: 'fácil'
  },
  {
    id: 221,
    area: 'Álgebra',
    question: 'Desarrolle: (x + 3)²',
    options: ['x² + 9', 'x² + 6x + 9', 'x² + 3x + 9', 'x² + 6', 'x² - 9'],
    correctAnswer: 1,
    explanation: 'Binomio al cuadrado: (a+b)² = a² + 2ab + b². Entonces (x+3)² = x² + 6x + 9.',
    difficulty: 'fácil'
  },
  {
    id: 222,
    area: 'Álgebra',
    question: 'Resuelva: 2x + 5 = 15',
    options: ['3', '5', '7', '10', '2.5'],
    correctAnswer: 1,
    explanation: '2x = 15 - 5 = 10. x = 10/2 = 5.',
    difficulty: 'fácil'
  },
  {
    id: 223,
    area: 'Álgebra',
    question: 'Indique el discriminante de la ecuación x² - 5x + 6 = 0',
    options: ['1', '25', '49', '0', '5'],
    correctAnswer: 0,
    explanation: 'Discriminante = b² - 4ac = (-5)² - 4(1)(6) = 25 - 24 = 1.',
    difficulty: 'medio'
  },
  {
    id: 224,
    area: 'Álgebra',
    question: 'Calcule el determinante de la matriz [[2, 1], [3, 4]]',
    options: ['5', '8', '11', '10', '6'],
    correctAnswer: 0,
    explanation: 'Determinante 2x2 = ad - bc = (2)(4) - (1)(3) = 8 - 3 = 5.',
    difficulty: 'medio'
  },
  {
    id: 225,
    area: 'Álgebra',
    question: 'Resuelva: 3x - 6 <= 9',
    options: ['x <= 3', 'x <= 5', 'x >= 5', 'x < 3', 'x > 5'],
    correctAnswer: 1,
    explanation: '3x <= 9 + 6 = 15. x <= 15/3 = 5.',
    difficulty: 'fácil'
  },
  {
    id: 226,
    area: 'Álgebra',
    question: 'Halle el dominio de la función f(x) = √(x - 3)',
    options: ['x >= 3', 'x > 3', 'x <= 3', 'Todos los reales', 'x != 3'],
    correctAnswer: 0,
    explanation: 'Para que la raíz sea real: x - 3 >= 0, entonces x >= 3.',
    difficulty: 'medio'
  },
  {
    id: 227,
    area: 'Álgebra',
    question: 'Resuelva: log₂(x) = 3',
    options: ['6', '8', '9', '4', '32'],
    correctAnswer: 1,
    explanation: 'log₂(x) = 3 significa 2³ = x. Entonces x = 8.',
    difficulty: 'fácil'
  },

  // 4. TRIGONOMETRÍA (028-036)
  {
    id: 228,
    area: 'Trigonometría',
    question: 'Convierta 180° a radianes.',
    options: ['π/2 rad', 'π rad', '2π rad', 'π/4 rad', '3π/2 rad'],
    correctAnswer: 1,
    explanation: '180° = π radianes.',
    difficulty: 'fácil'
  },
  {
    id: 229,
    area: 'Trigonometría',
    question: 'Calcule sen(30°)',
    options: ['1/2', '√3/2', '1', '0', '√2/2'],
    correctAnswer: 0,
    explanation: 'sen(30°) = 1/2.',
    difficulty: 'fácil'
  },
  {
    id: 230,
    area: 'Trigonometría',
    question: 'Simplifique: sen²(x) + cos²(x)',
    options: ['0', '1', '2', 'tan(x)', 'sec(x)'],
    correctAnswer: 1,
    explanation: 'Identidad pitagórica: sen²(x) + cos²(x) = 1.',
    difficulty: 'fácil'
  },
  {
    id: 231,
    area: 'Trigonometría',
    question: 'En un triángulo rectángulo, si cateto opuesto = 3 y cateto adyacente = 4, tan(θ) es:',
    options: ['3/5', '4/5', '3/4', '4/3', '5/3'],
    correctAnswer: 2,
    explanation: 'tan(θ) = cateto opuesto / cateto adyacente = 3/4.',
    difficulty: 'fácil'
  },
  {
    id: 232,
    area: 'Trigonometría',
    question: 'Calcule sen(150°)',
    options: ['1/2', '√3/2', '-1/2', '-√3/2', '1'],
    correctAnswer: 0,
    explanation: 'sen(150°) = sen(180° - 30°) = sen(30°) = 1/2.',
    difficulty: 'medio'
  },
  {
    id: 233,
    area: 'Trigonometría',
    question: '¿Cuál es el valor máximo que puede tomar la función seno en los números reales?',
    options: ['0', '1', '-1', 'π', 'Infinito'],
    correctAnswer: 1,
    explanation: 'El rango de la función seno es [-1, 1]. El valor máximo es 1.',
    difficulty: 'fácil'
  },
  {
    id: 234,
    area: 'Trigonometría',
    question: 'Calcule la pendiente de la recta que pasa por (1, 2) y (3, 6).',
    options: ['1', '2', '3', '4', '½'],
    correctAnswer: 1,
    explanation: 'Pendiente m = (y₂ - y₁)/(x₂ - x₁) = (6 - 2)/(3 - 1) = 4/2 = 2.',
    difficulty: 'fácil'
  },
  {
    id: 235,
    area: 'Trigonometría',
    question: 'En un triángulo rectángulo con hipotenusa c y ángulo agudo α, el cateto opuesto es:',
    options: ['c * sen(α)', 'c * cos(α)', 'c * tan(α)', 'c / sen(α)', 'c * cot(α)'],
    correctAnswer: 0,
    explanation: 'sen(α) = cateto opuesto / hipotenusa. Entonces cateto opuesto = c * sen(α).',
    difficulty: 'medio'
  },
  {
    id: 236,
    area: 'Trigonometría',
    question: 'Transformar a producto: sen(5x) + sen(3x)',
    options: ['2 sen(4x) cos(x)', '2 sen(x) cos(4x)', 'sen(4x) cos(x)', '2 cos(4x) cos(x)', 'sen(x) sen(4x)'],
    correctAnswer: 0,
    explanation: 'Fórmula: sen(A) + sen(B) = 2 sen((A+B)/2) cos((A-B)/2). Entonces sen(5x) + sen(3x) = 2 sen(4x) cos(x).',
    difficulty: 'difícil'
  },

  // 5. FÍSICA (037-045)
  {
    id: 237,
    area: 'Física',
    question: 'Un auto viaja a 20 m/s durante 5 s. ¿Qué distancia recorre?',
    options: ['4 m', '25 m', '100 m', '50 m', '200 m'],
    correctAnswer: 2,
    explanation: 'MRU: d = v × t = 20 × 5 = 100 m.',
    difficulty: 'fácil'
  },
  {
    id: 238,
    area: 'Física',
    question: 'Un auto parte del reposo con a = 2 m/s². ¿Velocidad a los 4 s?',
    options: ['2 m/s', '4 m/s', '6 m/s', '8 m/s', '16 m/s'],
    correctAnswer: 3,
    explanation: 'MRUV: v = v₀ + at = 0 + 2(4) = 8 m/s.',
    difficulty: 'fácil'
  },
  {
    id: 239,
    area: 'Física',
    question: 'Fuerza necesaria para acelerar 5 kg a 3 m/s²',
    options: ['8 N', '15 N', '2 N', '1.6 N', '25 N'],
    correctAnswer: 1,
    explanation: 'Segunda Ley de Newton: F = ma = 5 × 3 = 15 N.',
    difficulty: 'fácil'
  },
  {
    id: 240,
    area: 'Física',
    question: 'Energía cinética de masa 2 kg a velocidad 3 m/s',
    options: ['3 J', '6 J', '9 J', '12 J', '18 J'],
    correctAnswer: 2,
    explanation: 'Ec = ½mv² = ½(2)(3²) = ½(2)(9) = 9 J.',
    difficulty: 'fácil'
  },
  {
    id: 241,
    area: 'Física',
    question: 'Presión ejercida por columna de agua de 10 m (g = 10 m/s², d = 1000 kg/m³)',
    options: ['10 kPa', '100 kPa', '1000 kPa', '1 kPa', '50 kPa'],
    correctAnswer: 1,
    explanation: 'P = ρgh = 1000 × 10 × 10 = 100,000 Pa = 100 kPa.',
    difficulty: 'medio'
  },
  {
    id: 242,
    area: 'Física',
    question: '¿A cuántos grados Fahrenheit equivalen 20°C?',
    options: ['68°F', '50°F', '72°F', '60°F', '80°F'],
    correctAnswer: 0,
    explanation: '°F = (°C × 9/5) + 32 = (20 × 9/5) + 32 = 36 + 32 = 68°F.',
    difficulty: 'fácil'
  },
  {
    id: 243,
    area: 'Física',
    question: 'Determine la intensidad de corriente en un circuito con V = 12 V y R = 4 ohms.',
    options: ['2 A', '3 A', '4 A', '48 A', '16 A'],
    correctAnswer: 1,
    explanation: 'Ley de Ohm: I = V/R = 12/4 = 3 A.',
    difficulty: 'fácil'
  },
  {
    id: 244,
    area: 'Física',
    question: 'El fenómeno por el cual la luz rebota al incidir sobre una superficie pulida se llama:',
    options: ['Refracción', 'Reflexión', 'Difracción', 'Interferencia', 'Polarización'],
    correctAnswer: 1,
    explanation: 'La reflexión es el rebote de la luz al incidir sobre una superficie.',
    difficulty: 'fácil'
  },
  {
    id: 245,
    area: 'Física',
    question: 'La relación fundamental de la onda es v = ...',
    options: ['f * λ', 'f / λ', 'λ / f', 'f + λ', 'f * T²'],
    correctAnswer: 0,
    explanation: 'Velocidad de onda: v = frecuencia × longitud de onda = f × λ.',
    difficulty: 'fácil'
  },

  // 6. QUÍMICA (046-054)
  {
    id: 246,
    area: 'Química',
    question: 'Partícula con carga positiva en el núcleo:',
    options: ['Electrón', 'Neutrón', 'Protón', 'Fotón', 'Positrón'],
    correctAnswer: 2,
    explanation: 'El protón tiene carga positiva y se encuentra en el núcleo atómico.',
    difficulty: 'fácil'
  },
  {
    id: 247,
    area: 'Química',
    question: 'El Sodio (Na) pertenece a los metales:',
    options: ['Alcalinos', 'Alcalinotérreos', 'Halógenos', 'Gases nobles', 'De transición'],
    correctAnswer: 0,
    explanation: 'El Sodio (Na) está en el Grupo 1 (IA) y es un metal alcalino.',
    difficulty: 'fácil'
  },
  {
    id: 248,
    area: 'Química',
    question: 'Enlace formado por transferencia de electrones:',
    options: ['Covalente', 'Iónico', 'Metálico', 'Puente de hidrógeno', 'Van der Waals'],
    correctAnswer: 1,
    explanation: 'El enlace iónico se forma por transferencia de electrones de un átomo a otro.',
    difficulty: 'fácil'
  },
  {
    id: 249,
    area: 'Química',
    question: 'Coeficiente del O₂ al balancear: C + O₂ -> CO₂',
    options: ['1', '2', '3', '4', '0'],
    correctAnswer: 0,
    explanation: 'La ecuación ya está balanceada: 1C + 1O₂ → 1CO₂. El coeficiente es 1.',
    difficulty: 'fácil'
  },
  {
    id: 250,
    area: 'Química',
    question: 'Masa molar del H₂O (H = 1, O = 16)',
    options: ['17 g/mol', '18 g/mol', '32 g/mol', '16 g/mol', '20 g/mol'],
    correctAnswer: 1,
    explanation: 'Masa molar = 2(1) + 16 = 2 + 16 = 18 g/mol.',
    difficulty: 'fácil'
  },
  {
    id: 251,
    area: 'Química',
    question: 'Unidad química de concentración que expresa los moles de soluto por litro de solución:',
    options: ['Molaridad', 'Molalidad', 'Normalidad', 'Fracción molar', 'Porcentaje en peso'],
    correctAnswer: 0,
    explanation: 'La molaridad (M) = moles de soluto / litros de solución.',
    difficulty: 'fácil'
  },
  {
    id: 252,
    area: 'Química',
    question: 'El número cuántico que indica el nivel principal de energía es:',
    options: ['n', 'l', 'm', 's', 'p'],
    correctAnswer: 0,
    explanation: 'El número cuántico principal (n) indica el nivel de energía.',
    difficulty: 'fácil'
  },
  {
    id: 253,
    area: 'Química',
    question: 'Catalizador es aquella sustancia que:',
    options: ['Se consume totalmente', 'Modifica la velocidad de reacción sin consumirse', 'Detiene la reacción', 'Cambia el producto final', 'Reduce la temperatura'],
    correctAnswer: 1,
    explanation: 'Un catalizador acelera la reacción sin consumirse en el proceso.',
    difficulty: 'fácil'
  },
  {
    id: 254,
    area: 'Química',
    question: 'El hidrocarburo saturado de cadena abierta más simple es:',
    options: ['Metano', 'Eteno', 'Etino', 'Propano', 'Benceno'],
    correctAnswer: 0,
    explanation: 'El metano (CH₄) es el hidrocarburo saturado (alcano) más simple.',
    difficulty: 'fácil'
  },

  // 7. LENGUA Y LITERATURA (055-063)
  {
    id: 255,
    area: 'Lengua y Literatura',
    question: 'Sustantivo colectivo de perro:',
    options: ['Arboleda', 'Jauría', 'Bandada', 'Enjambre', 'Rebaño'],
    correctAnswer: 1,
    explanation: 'Jauría es el colectivo de perros.',
    difficulty: 'fácil'
  },
  {
    id: 256,
    area: 'Lengua y Literatura',
    question: 'Palabra esdrújula:',
    options: ['Café', 'Árbol', 'Música', 'Pared', 'Canción'],
    correctAnswer: 2,
    explanation: 'Música es esdrújula (acento en antepenúltima sílaba).',
    difficulty: 'fácil'
  },
  {
    id: 257,
    area: 'Lengua y Literatura',
    question: "Autor de 'Tradiciones Peruanas':",
    options: ['Mario Vargas Llosa', 'Ricardo Palma', 'César Vallejo', 'José María Arguedas', 'Ciro Alegría'],
    correctAnswer: 1,
    explanation: 'Ricardo Palma es el autor de "Tradiciones Peruanas".',
    difficulty: 'fácil'
  },
  {
    id: 258,
    area: 'Lengua y Literatura',
    question: "Autor de 'La Ilíada':",
    options: ['Sócrates', 'Homero', 'Sófocles', 'Virgilio', 'Platón'],
    correctAnswer: 1,
    explanation: 'Homero es el autor de "La Ilíada" y "La Odisea".',
    difficulty: 'fácil'
  },
  {
    id: 259,
    area: 'Lengua y Literatura',
    question: '¿Cuántos fonemas consonánticos tiene el castellano estándar?',
    options: ['19', '22', '24', '5', '27'],
    correctAnswer: 2,
    explanation: 'El castellano estándar tiene 24 fonemas consonánticos.',
    difficulty: 'medio'
  },
  {
    id: 260,
    area: 'Lengua y Literatura',
    question: "En la oración 'Los marinos navegan con valor', el núcleo del sujeto es:",
    options: ['navegan', 'marinos', 'con valor', 'Los', 'valor'],
    correctAnswer: 1,
    explanation: 'El sujeto es "Los marinos" y su núcleo es "marinos".',
    difficulty: 'fácil'
  },
  {
    id: 261,
    area: 'Lengua y Literatura',
    question: 'Palabras que se escriben igual pero tienen distinto significado y origen:',
    options: ['Sinónimos', 'Homógrafos', 'Parónimos', 'Antónimos', 'Homófonos'],
    correctAnswer: 1,
    explanation: 'Los homógrafos se escriben igual pero tienen diferente significado.',
    difficulty: 'medio'
  },
  {
    id: 262,
    area: 'Lengua y Literatura',
    question: "Autor de la novela 'La ciudad y los perros':",
    options: ['Julio Ramón Ribeyro', 'Mario Vargas Llosa', 'Alfredo Bryce Echenique', 'Ciro Alegría', 'Abraham Valdelomar'],
    correctAnswer: 1,
    explanation: 'Mario Vargas Llosa escribió "La ciudad y los perros".',
    difficulty: 'fácil'
  },
  {
    id: 263,
    area: 'Lengua y Literatura',
    question: "Autor de 'El ingenioso hidalgo don Quijote de la Mancha':",
    options: ['Lope de Vega', 'Miguel de Cervantes Saavedra', 'Francisco de Quevedo', 'Calderón de la Barca', 'Garcilaso de la Vega'],
    correctAnswer: 1,
    explanation: 'Miguel de Cervantes Saavedra es el autor del Quijote.',
    difficulty: 'fácil'
  },

  // 8. INFORMÁTICA (064-072)
  {
    id: 264,
    area: 'Informática',
    question: '¿Cuál es un dispositivo de salida?',
    options: ['Teclado', 'Mouse', 'Monitor', 'Escáner', 'Micrófono'],
    correctAnswer: 2,
    explanation: 'El monitor es un dispositivo de salida que muestra información.',
    difficulty: 'fácil'
  },
  {
    id: 265,
    area: 'Informática',
    question: 'Ejemplo de Sistema Operativo:',
    options: ['Word', 'Windows', 'Excel', 'Chrome', 'PowerPoint'],
    correctAnswer: 1,
    explanation: 'Windows es un sistema operativo.',
    difficulty: 'fácil'
  },
  {
    id: 266,
    area: 'Informática',
    question: '¿Qué significa WWW?',
    options: ['World Wide Web', 'World Web Wide', 'Wide World Web', 'Web World Wide', 'World Wide Word'],
    correctAnswer: 0,
    explanation: 'WWW = World Wide Web (Red Mundial).',
    difficulty: 'fácil'
  },
  {
    id: 267,
    area: 'Informática',
    question: 'Atajo para copiar en Windows:',
    options: ['Ctrl + V', 'Ctrl + C', 'Ctrl + X', 'Ctrl + Z', 'Ctrl + P'],
    correctAnswer: 1,
    explanation: 'Ctrl + C es el atajo para copiar.',
    difficulty: 'fácil'
  },
  {
    id: 268,
    area: 'Informática',
    question: 'Programa malicioso que infecta archivos:',
    options: ['Antivirus', 'Firewall', 'Virus', 'Browser', 'Hardware'],
    correctAnswer: 2,
    explanation: 'Un virus es un programa malicioso que infecta archivos.',
    difficulty: 'fácil'
  },
  {
    id: 269,
    area: 'Informática',
    question: 'Memoria volátil que almacena datos de trabajo temporal:',
    options: ['ROM', 'RAM', 'Disco Duro', 'Caché L3', 'Flash'],
    correctAnswer: 1,
    explanation: 'La RAM es memoria volátil de acceso aleatorio.',
    difficulty: 'fácil'
  },
  {
    id: 270,
    area: 'Informática',
    question: '¿Qué función se usa para sumar un rango en Excel?',
    options: ['=PROMEDIO()', '=SUMA()', '=CONTAR()', '=MAX()', '=SI()'],
    correctAnswer: 1,
    explanation: 'La función SUMA() suma un rango de celdas.',
    difficulty: 'fácil'
  },
  {
    id: 271,
    area: 'Informática',
    question: '¿Qué protocolo asigna direcciones IP automáticamente en una red?',
    options: ['DNS', 'DHCP', 'FTP', 'SMTP', 'HTTP'],
    correctAnswer: 1,
    explanation: 'DHCP (Dynamic Host Configuration Protocol) asigna IPs automáticamente.',
    difficulty: 'medio'
  },
  {
    id: 272,
    area: 'Informática',
    question: 'Lenguaje estándar de consulta para bases de datos relacionales:',
    options: ['HTML', 'SQL', 'Python', 'Java', 'XML'],
    correctAnswer: 1,
    explanation: 'SQL (Structured Query Language) es el lenguaje estándar para bases de datos.',
    difficulty: 'fácil'
  },

  // 9. HISTORIA (073-081)
  {
    id: 273,
    area: 'Historia',
    question: 'Fundador del Imperio Incaico según la leyenda:',
    options: ['Pachacutec', 'Manco Cápac', 'Atahualpa', 'Huáscar', 'Túpac Yupanqui'],
    correctAnswer: 1,
    explanation: 'Manco Cápac es el fundador legendario del Imperio Incaico.',
    difficulty: 'fácil'
  },
  {
    id: 274,
    area: 'Historia',
    question: 'Proclamó la Independencia del Perú el 28 de julio de 1821:',
    options: ['Simón Bolívar', 'Don José de San Martín', 'Túpac Amaru II', 'Sucre', 'Ramón Castilla'],
    correctAnswer: 1,
    explanation: 'Don José de San Martín proclamó la independencia del Perú.',
    difficulty: 'fácil'
  },
  {
    id: 275,
    area: 'Historia',
    question: 'Héroe Máximo de la Marina de Guerra del Perú:',
    options: ['Alfonso Ugarte', 'Miguel Grau Seminario', 'Francisco Bolognesi', 'Andrés Avelino Cáceres', 'José Quiñones'],
    correctAnswer: 1,
    explanation: 'Miguel Grau Seminario es el Héroe Máximo de la Marina de Guerra del Perú.',
    difficulty: 'fácil'
  },
  {
    id: 276,
    area: 'Historia',
    question: 'Cultura antigua famosa por las Pirámides de Guiza:',
    options: ['Grecia', 'Roma', 'Egipto', 'Mesopotamia', 'China'],
    correctAnswer: 2,
    explanation: 'Las Pirámides de Guiza fueron construidas por la cultura egipcia.',
    difficulty: 'fácil'
  },
  {
    id: 277,
    area: 'Historia',
    question: 'Año de inicio de la Primera Guerra Mundial:',
    options: ['1914', '1918', '1939', '1945', '1912'],
    correctAnswer: 0,
    explanation: 'La Primera Guerra Mundial inició en 1914.',
    difficulty: 'fácil'
  },
  {
    id: 278,
    area: 'Historia',
    question: 'Descubridor de la Cultura Chavín:',
    options: ['Max Uhle', 'Julio C. Tello', 'Rafael Larco Hoyle', 'Pedro Cieza de León', 'Maria Reiche'],
    correctAnswer: 1,
    explanation: 'Julio C. Tello descubrió la Cultura Chavín.',
    difficulty: 'medio'
  },
  {
    id: 279,
    area: 'Historia',
    question: 'Capitulación firmada entre la Corona Española y Francisco Pizarro que autorizó la conquista:',
    options: ['Capitulación de Burgos', 'Capitulación de Toledo', 'Tratado de Tordesillas', 'Leyes de Indias', 'Paz de Lircay'],
    correctAnswer: 1,
    explanation: 'La Capitulación de Toledo autorizó la conquista del Perú.',
    difficulty: 'medio'
  },
  {
    id: 280,
    area: 'Historia',
    question: 'Batalla decisiva de la campaña marítima donde inmortalizó su vida Miguel Grau:',
    options: ['Combate de Iquique', 'Combate de Angamos', 'Batalla de Tarapacá', 'Batalla de Arica', 'Batalla de San Juan'],
    correctAnswer: 1,
    explanation: 'Miguel Grau murió heroicamente en el Combate de Angamos.',
    difficulty: 'fácil'
  },
  {
    id: 281,
    area: 'Historia',
    question: 'País donde se lanzó la primera bomba atómica en 1945:',
    options: ['Alemania', 'Japón', 'Italia', 'URSS', 'China'],
    correctAnswer: 1,
    explanation: 'La primera bomba atómica se lanzó sobre Hiroshima, Japón.',
    difficulty: 'fácil'
  },

  // 10. GEOGRAFÍA (082-090)
  {
    id: 282,
    area: 'Geografía',
    question: 'Río más largo del Perú y del mundo:',
    options: ['Rímac', 'Ucayali', 'Amazonas', 'Marañón', 'Titicaca'],
    correctAnswer: 2,
    explanation: 'El río Amazonas es el más largo del Perú y del mundo.',
    difficulty: 'fácil'
  },
  {
    id: 283,
    area: 'Geografía',
    question: 'Cordillera más alta del Perú:',
    options: ['Cordillera Blanca', 'Cordillera Negra', 'Cordillera Huayhuash', 'Cordillera Volcánica', 'Cordillera Oriental'],
    correctAnswer: 0,
    explanation: 'La Cordillera Blanca es la más alta del Perú.',
    difficulty: 'fácil'
  },
  {
    id: 284,
    area: 'Geografía',
    question: 'Ancho de las millas del Mar Territorial del Perú:',
    options: ['12 millas', '50 millas', '100 millas', '200 millas', '500 millas'],
    correctAnswer: 3,
    explanation: 'El mar territorial del Perú tiene 200 millas de ancho.',
    difficulty: 'fácil'
  },
  {
    id: 285,
    area: 'Geografía',
    question: 'Corriente marina de aguas frías que recorre la costa peruana:',
    options: ['Corriente del Niño', 'Corriente de Humboldt', 'Corriente del Golfo', 'Corriente ecuatorial', 'Corriente del Brasil'],
    correctAnswer: 1,
    explanation: 'La Corriente de Humboldt es de aguas frías.',
    difficulty: 'fácil'
  },
  {
    id: 286,
    area: 'Geografía',
    question: 'Línea imaginaria que divide la Tierra en hemisferio Norte y Sur:',
    options: ['Meridiano de Greenwich', 'Ecuador Terrestre', 'Trópico de Cáncer', 'Trópico de Capricornio', 'Círculo Polar'],
    correctAnswer: 1,
    explanation: 'El Ecuador Terrestre divide la Tierra en Norte y Sur.',
    difficulty: 'fácil'
  },
  {
    id: 287,
    area: 'Geografía',
    question: 'El organismo oficial encargado de los censos nacionales en el Perú es el:',
    options: ['BCRPB', 'INEI', 'RENIEC', 'SUNAT', 'ONPE'],
    correctAnswer: 1,
    explanation: 'El INEI (Instituto Nacional de Estadística e Informática) realiza los censos.',
    difficulty: 'fácil'
  },
  {
    id: 288,
    area: 'Geografía',
    question: 'Placa tectónica cuyo desplazamiento bajo la placa Sudamericana genera sismos en el Perú:',
    options: ['Placa de Nazca', 'Placa Norteamericana', 'Placa Africana', 'Placa Antártica', 'Placa Euroasiática'],
    correctAnswer: 0,
    explanation: 'La Placa de Nazca se subducta bajo la Sudamericana.',
    difficulty: 'medio'
  },
  {
    id: 289,
    area: 'Geografía',
    question: 'Depresión submarina de mayor profundidad frente a la costa peruana:',
    options: ['Fosa de Tacna', 'Fosa Peruano-Chilena', 'Dorsal de Nasca', 'Zócalo continental', 'Talud continental'],
    correctAnswer: 1,
    explanation: 'La Fosa Peruano-Chilena es la más profunda frente a la costa peruana.',
    difficulty: 'medio'
  },
  {
    id: 290,
    area: 'Geografía',
    question: 'El río Rímac pertenece a la vertiente hidrográfica del:',
    options: ['Atlántico', 'Pacífico', 'Titicaca', 'Amazonas', 'Madre de Dios'],
    correctAnswer: 1,
    explanation: 'El río Rímac desemboca en el Océano Pacífico.',
    difficulty: 'fácil'
  },

  // 11. INGLÉS (091-100)
  {
    id: 291,
    area: 'Inglés',
    question: 'Complete: She ___ a student.',
    options: ['am', 'is', 'are', 'be', 'were'],
    correctAnswer: 1,
    explanation: '"She" usa el verbo "is".',
    difficulty: 'fácil'
  },
  {
    id: 292,
    area: 'Inglés',
    question: 'What day comes after Monday?',
    options: ['Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    correctAnswer: 1,
    explanation: 'Tuesday (martes) viene después de Monday (lunes).',
    difficulty: 'fácil'
  },
  {
    id: 293,
    area: 'Inglés',
    question: 'Text: The cat is under the chair. Where is the cat?',
    options: ['On the chair', 'Under the chair', 'Next to the chair', 'In the chair', 'Behind the chair'],
    correctAnswer: 1,
    explanation: '"Under" significa "debajo".',
    difficulty: 'fácil'
  },
  {
    id: 294,
    area: 'Inglés',
    question: 'He ___ soccer every weekend.',
    options: ['play', 'plays', 'playing', 'played', 'is play'],
    correctAnswer: 1,
    explanation: 'Tercera persona singular usa "plays".',
    difficulty: 'fácil'
  },
  {
    id: 295,
    area: 'Inglés',
    question: 'We have class ___ 8:00 AM.',
    options: ['in', 'on', 'at', 'for', 'by'],
    correctAnswer: 2,
    explanation: 'Para horas específicas se usa "at".',
    difficulty: 'fácil'
  },
  {
    id: 296,
    area: 'Inglés',
    question: "Choose the correct pronoun: '___ am a naval officer cadet.'",
    options: ['He', 'She', 'I', 'They', 'It'],
    correctAnswer: 2,
    explanation: '"I" es el pronombre para primera persona singular.',
    difficulty: 'fácil'
  },
  {
    id: 297,
    area: 'Inglés',
    question: "Your mother's brother is your:",
    options: ['Uncle', 'Aunt', 'Cousin', 'Nephew', 'Grandfather'],
    correctAnswer: 0,
    explanation: 'El hermano de tu madre es tu tío (uncle).',
    difficulty: 'fácil'
  },
  {
    id: 298,
    area: 'Inglés',
    question: "Choose the past tense of 'go':",
    options: ['goed', 'gone', 'went', 'going', 'goes'],
    correctAnswer: 2,
    explanation: 'El pasado de "go" es "went" (irregular).',
    difficulty: 'fácil'
  },
  {
    id: 299,
    area: 'Inglés',
    question: "Complete: 'Mount Everest is ___ than Huascarán.'",
    options: ['high', 'highest', 'higher', 'as high', 'more high'],
    correctAnswer: 2,
    explanation: 'Comparativo de adjetivo corto: "higher".',
    difficulty: 'fácil'
  },
  {
    id: 300,
    area: 'Inglés',
    question: "Choose the correct modal for ability: 'Birds ___ fly.'",
    options: ['must', 'can', 'should', 'need', 'has to'],
    correctAnswer: 1,
    explanation: '"Can" expresa habilidad o capacidad.',
    difficulty: 'fácil'
  }
];
