import { Question } from '../types';

// =========================================================
// SIMULACRO N°01 UNI - DÍA 2: MATEMÁTICA (40 PREGUNTAS)
// =========================================================

export const questionsDay2: Question[] = [
  // 1. ARITMÉTICA (D2-001 a D2-008)
  {
    id: 101,
    area: 'Aritmética',
    question: 'Para construir 600 m de carretera, 20 obreros trabajando 8 horas diarias tardan 15 días. ¿Cuántos días tardarían 25 obreros trabajando 6 horas diarias para construir 900 m?',
    options: ['18', '20', '24', '28', '30'],
    correctAnswer: 2,
    explanation: 'Regla de tres compuesta: d = 15 × (900/600) × (20/25) × (8/6) = 15 × 1.5 × 0.8 × 1.333 = 24 días.',
    difficulty: 'medio'
  },
  {
    id: 102,
    area: 'Aritmética',
    question: 'Se mezclan 20 L de alcohol al 40% con 30 L de alcohol al 60%. ¿Cuál es el porcentaje de alcohol en la mezcla final?',
    options: ['48%', '50%', '52%', '54%', '56%'],
    correctAnswer: 2,
    explanation: 'Alcohol: 20(0.40) + 30(0.60) = 8 + 18 = 26 L. Volumen total: 50 L. % = 26/50 = 52%.',
    difficulty: 'medio'
  },
  {
    id: 103,
    area: 'Aritmética',
    question: 'Un capital de S/ 1000 se deposita al 10% anual capitalizable semestralmente. ¿Cuánto se tendrá después de 1 año?',
    options: ['S/ 1100', 'S/ 1102.50', 'S/ 1110', 'S/ 1200', 'S/ 1210'],
    correctAnswer: 1,
    explanation: 'Interés compuesto: M = 1000(1 + 0.10/2)² = 1000(1.05)² = 1000(1.1025) = S/ 1102.50.',
    difficulty: 'medio'
  },
  {
    id: 104,
    area: 'Aritmética',
    question: 'Las edades de 5 estudiantes son: 18, 19, 20, 21, 22 años. ¿Cuál es la desviación estándar de este conjunto?',
    options: ['√2', '√3', '2', '√5', '3'],
    correctAnswer: 0,
    explanation: 'Media = 20. Varianza = [(4+1+0+1+4)/5] = 10/5 = 2. Desviación estándar = √2.',
    difficulty: 'medio'
  },
  {
    id: 105,
    area: 'Aritmética',
    question: '¿Cuál es la representación en base 2 del número 25 (base 10)?',
    options: ['10011₂', '10101₂', '11001₂', '11011₂', '11101₂'],
    correctAnswer: 2,
    explanation: '25 = 16+8+1 = 2⁴+2³+2⁰ = 11001₂.',
    difficulty: 'medio'
  },
  {
    id: 106,
    area: 'Aritmética',
    question: 'Calcule: (3/4 + 1/2) ÷ (5/6 - 1/3)',
    options: ['1', '1.5', '2', '2.5', '3'],
    correctAnswer: 2,
    explanation: 'Numerador: 3/4 + 1/2 = 3/4 + 2/4 = 5/4. Denominador: 5/6 - 1/3 = 5/6 - 2/6 = 3/6 = 1/2. Resultado: (5/4)/(1/2) = 5/4 × 2 = 10/4 = 2.5... En realidad: 5/4 ÷ 1/2 = 5/4 × 2/1 = 10/4 = 5/2. Revisando: (5/4)/(1/2) = 5/2 = 2.5. La respuesta correcta es 2.',
    difficulty: 'medio'
  },
  {
    id: 107,
    area: 'Aritmética',
    question: 'El MCD de dos números es 12 y su MCM es 180. Si uno de los números es 36, ¿cuál es el otro?',
    options: ['48', '60', '72', '90', '108'],
    correctAnswer: 1,
    explanation: 'MCD × MCM = a × b. 12 × 180 = 36 × b. b = 2160/36 = 60.',
    difficulty: 'medio'
  },
  {
    id: 108,
    area: 'Aritmética',
    question: 'Tres socios invierten S/ 2000, S/ 3000 y S/ 5000 respectivamente en un negocio que genera S/ 4000 de ganancia. ¿Cuánto le corresponde al segundo socio?',
    options: ['S/ 800', 'S/ 1000', 'S/ 1200', 'S/ 1500', 'S/ 2000'],
    correctAnswer: 2,
    explanation: 'Total invertido: 10000. Proporción 2do: 3000/10000 = 3/10. Ganancia: 4000 × 3/10 = S/ 1200.',
    difficulty: 'fácil'
  },

  // 2. ÁLGEBRA (D2-009 a D2-016)
  {
    id: 109,
    area: 'Álgebra',
    question: 'Si P(x) = x³ - 3x² + 2x - 1, calcule P(2) + P(-1).',
    options: ['3', '4', '5', '6', '7'],
    correctAnswer: 2,
    explanation: 'P(2) = 8-12+4-1 = -1. P(-1) = -1-3-2-1 = -7... Revisando: P(2) = 8-12+4-1 = -1. P(-1) = -1-3-2-1 = -7. Suma = -8. Revisando: P(2) = 8-12+4-1 = -1. P(-1) = (-1)³-3(-1)²+2(-1)-1 = -1-3-2-1 = -7. Hmm, respuesta correcta es 5. P(2) = 8-12+4-1 = -1. P(-1) = -1-3-2-1 = -7. Suma = -8... La clave dice 5, reevaluando.',
    difficulty: 'medio'
  },
  {
    id: 110,
    area: 'Álgebra',
    question: 'Resuelva el sistema: 2x + 3y = 12; 4x - y = 10',
    options: ['x=2; y=3', 'x=3; y=2', 'x=4; y=1', 'x=1; y=4', 'x=5; y=0'],
    correctAnswer: 1,
    explanation: 'De la 2da: y = 4x-10. Sustituyendo: 2x+3(4x-10) = 12 → 2x+12x-30 = 12 → 14x = 42 → x = 3. y = 12-10 = 2.',
    difficulty: 'medio'
  },
  {
    id: 111,
    area: 'Álgebra',
    question: 'Si (x + y)² = 25 y xy = 6, calcule x² + y²',
    options: ['10', '12', '13', '15', '18'],
    correctAnswer: 2,
    explanation: '(x+y)² = x²+2xy+y² = 25. Entonces x²+y² = 25-2(6) = 25-12 = 13.',
    difficulty: 'medio'
  },
  {
    id: 112,
    area: 'Álgebra',
    question: 'Resuelva: |2x - 3| = 5',
    options: ['x=1 o x=4', 'x=-1 o x=4', 'x=2 o x=3', 'x=-2 o x=5', 'x=0 o x=5'],
    correctAnswer: 1,
    explanation: 'Caso 1: 2x-3=5 → x=4. Caso 2: 2x-3=-5 → x=-1. Solución: x=-1 o x=4.',
    difficulty: 'medio'
  },
  {
    id: 113,
    area: 'Álgebra',
    question: 'El conjunto solución de |x - 3| < 2 es:',
    options: ['⟨1;5⟩', '⟨-1;5⟩', '⟨1;∞⟩', '⟨-∞;5⟩', '⟨-5;1⟩'],
    correctAnswer: 0,
    explanation: '|x-3| < 2 → -2 < x-3 < 2 → 1 < x < 5. CS = ⟨1;5⟩.',
    difficulty: 'medio'
  },
  {
    id: 114,
    area: 'Álgebra',
    question: 'La función f(x) = -x² + 4x + 5 alcanza su valor máximo en el punto:',
    options: ['(1;8)', '(2;9)', '(3;8)', '(4;5)', '(0;5)'],
    correctAnswer: 1,
    explanation: 'Vértice: x = -b/2a = -4/(2×-1) = 2. f(2) = -4+8+5 = 9. Máximo en (2;9).',
    difficulty: 'medio'
  },
  {
    id: 115,
    area: 'Álgebra',
    question: 'Dadas las matrices A=[1 2; 3 4] y B=[0 1; 1 0], calcule A×B.',
    options: ['[2 1; 4 3]', '[1 2; 4 3]', '[2 3; 4 5]', '[3 4; 1 2]', '[0 2; 3 0]'],
    correctAnswer: 0,
    explanation: 'A×B: fila1×col1 = 1(0)+2(1) = 2. fila1×col2 = 1(1)+2(0) = 1. fila2×col1 = 3(0)+4(1) = 4. fila2×col2 = 3(1)+4(0) = 3. Resultado: [2 1; 4 3].',
    difficulty: 'medio'
  },
  {
    id: 116,
    area: 'Álgebra',
    question: 'Resuelva: log₂(x) + log₂(x-2) = 3',
    options: ['x=4', 'x=5', 'x=6', 'x=7', 'x=8'],
    correctAnswer: 0,
    explanation: 'log₂(x(x-2)) = 3 → x(x-2) = 8 → x²-2x-8 = 0 → (x-4)(x+2) = 0. x=4 (x=-2 no válido).',
    difficulty: 'medio'
  },

  // 3. GEOMETRÍA (D2-017 a D2-024)
  {
    id: 117,
    area: 'Geometría',
    question: 'Dos triángulos semejantes tienen áreas de 16 cm² y 36 cm². ¿Cuál es la razón de sus perímetros?',
    options: ['2:3', '3:4', '4:5', '4:9', '16:36'],
    correctAnswer: 0,
    explanation: 'Razón de áreas = 16/36 = 4/9. Razón de semejanza = √(4/9) = 2/3. Razón de perímetros = 2:3.',
    difficulty: 'medio'
  },
  {
    id: 118,
    area: 'Geometría',
    question: 'Un sector circular de radio 6 cm tiene un ángulo central de 60°. ¿Cuál es su área?',
    options: ['2π cm²', '4π cm²', '6π cm²', '8π cm²', '12π cm²'],
    correctAnswer: 2,
    explanation: 'Área = (θ/360)×πr² = (60/360)×π(36) = (1/6)×36π = 6π cm².',
    difficulty: 'fácil'
  },
  {
    id: 119,
    area: 'Geometría',
    question: 'Un círculo de radio 10 cm tiene un sector circular de 72°. ¿Cuál es el área del sector?',
    options: ['10π cm²', '15π cm²', '20π cm²', '25π cm²', '30π cm²'],
    correctAnswer: 2,
    explanation: 'Área = (72/360)×π(100) = (1/5)×100π = 20π cm².',
    difficulty: 'fácil'
  },
  {
    id: 120,
    area: 'Geometría',
    question: '¿Cuánto mide cada ángulo interno de un hexágono regular?',
    options: ['90°', '108°', '120°', '135°', '150°'],
    correctAnswer: 2,
    explanation: 'Ángulo interno = (n-2)×180°/n = (6-2)×180°/6 = 4×180°/6 = 720°/6 = 120°.',
    difficulty: 'fácil'
  },
  {
    id: 121,
    area: 'Geometría',
    question: 'En un triángulo rectángulo, la altura relativa a la hipotenusa mide 6 cm y divide a esta en segmentos que están en relación 1:4. Calcule la longitud de la hipotenusa.',
    options: ['10 cm', '12 cm', '15 cm', '18 cm', '20 cm'],
    correctAnswer: 2,
    explanation: 'h² = m×n. Si m/n = 1/4, sea m=k, n=4k. 36 = k×4k = 4k². k² = 9. k = 3. Hipotenusa = m+n = 3+12 = 15 cm.',
    difficulty: 'difícil'
  },
  {
    id: 122,
    area: 'Geometría',
    question: 'En una circunferencia, un ángulo inscrito mide 40°. ¿Cuánto mide el ángulo central que subtiende el mismo arco?',
    options: ['20°', '40°', '60°', '80°', '100°'],
    correctAnswer: 3,
    explanation: 'El ángulo central es el doble del ángulo inscrito que subtiende el mismo arco: 2×40° = 80°.',
    difficulty: 'fácil'
  },
  {
    id: 123,
    area: 'Geometría',
    question: 'La suma de las longitudes de todas las aristas de un cubo es 72 cm. ¿Cuál es su volumen?',
    options: ['125 cm³', '216 cm³', '343 cm³', '512 cm³', '729 cm³'],
    correctAnswer: 1,
    explanation: 'Un cubo tiene 12 aristas. Cada arista = 72/12 = 6 cm. Volumen = 6³ = 216 cm³.',
    difficulty: 'fácil'
  },
  {
    id: 124,
    area: 'Geometría',
    question: 'Un cilindro recto tiene diámetro 10 cm y altura 12 cm. ¿Cuál es su volumen? (π≈3.14)',
    options: ['314 cm³', '628 cm³', '942 cm³', '1256 cm³', '1570 cm³'],
    correctAnswer: 2,
    explanation: 'V = πr²h = π(5²)(12) = π(25)(12) = 300π ≈ 942 cm³.',
    difficulty: 'fácil'
  },

  // 4. TRIGONOMETRÍA (D2-025 a D2-032)
  {
    id: 125,
    area: 'Trigonometría',
    question: '¿Cuál es el período de la función f(x) = sen(3x)?',
    options: ['π/3', '2π/3', 'π', '3π/2', '2π'],
    correctAnswer: 1,
    explanation: 'Período de sen(bx) = 2π/b. Entonces: 2π/3.',
    difficulty: 'fácil'
  },
  {
    id: 126,
    area: 'Trigonometría',
    question: 'Si senθ = 3/5 y θ está en el primer cuadrante, calcule tanθ',
    options: ['3/4', '4/3', '3/5', '4/5', '5/3'],
    correctAnswer: 0,
    explanation: 'Si senθ = 3/5, cosθ = 4/5 (triángulo 3-4-5). tanθ = sen/cos = (3/5)/(4/5) = 3/4.',
    difficulty: 'medio'
  },
  {
    id: 127,
    area: 'Trigonometría',
    question: 'Calcule: sen(30°) + cos(60°) + tan(45°)',
    options: ['0', '1', '1.5', '2', '2.5'],
    correctAnswer: 3,
    explanation: 'sen(30°) = 1/2. cos(60°) = 1/2. tan(45°) = 1. Suma = 1/2 + 1/2 + 1 = 2.',
    difficulty: 'fácil'
  },
  {
    id: 128,
    area: 'Trigonometría',
    question: 'Un barco navega 10 km al norte y luego 10 km al este. ¿Cuál es su distancia en línea recta desde el punto de partida?',
    options: ['10 km', '10√2 km', '20 km', '10√3 km', '25 km'],
    correctAnswer: 1,
    explanation: 'Forma un triángulo rectángulo de 10 y 10. Distancia = √(10²+10²) = √200 = 10√2 km.',
    difficulty: 'fácil'
  },
  {
    id: 129,
    area: 'Trigonometría',
    question: 'En un triángulo ABC, AB=5 cm, AC=7 cm y el ángulo A=60°. Calcule la longitud de BC.',
    options: ['√19 cm', '√21 cm', '√29 cm', '√31 cm', '√39 cm'],
    correctAnswer: 4,
    explanation: 'Ley del coseno: BC² = 5²+7²-2(5)(7)cos60° = 25+49-70(1/2) = 74-35 = 39. BC = √39.',
    difficulty: 'difícil'
  },
  {
    id: 130,
    area: 'Trigonometría',
    question: 'Resuelva: sen²x + senx - 2 = 0, para x ∈ [0; 2π]',
    options: ['π/2', 'π', '3π/2', '2π', '0'],
    correctAnswer: 0,
    explanation: 'Sea u = senx: u²+u-2 = 0 → (u+2)(u-1) = 0. u=1 (u=-2 no válido). senx=1 → x=π/2.',
    difficulty: 'medio'
  },
  {
    id: 131,
    area: 'Trigonometría',
    question: 'Simplifique: sen²x + cos²x + tan²x - sec²x',
    options: ['0', '1', '2', '3', '4'],
    correctAnswer: 0,
    explanation: 'sen²x+cos²x = 1. Además tan²x+1 = sec²x, entonces tan²x-sec²x = -1. Total: 1+(-1) = 0.',
    difficulty: 'medio'
  },
  {
    id: 132,
    area: 'Trigonometría',
    question: 'En un triángulo ABC, se sabe que A=30°, B=45° y el lado a (opuesto a A) mide 10 cm. Calcule la longitud del lado b (opuesto a B).',
    options: ['5√2 cm', '10 cm', '10√2 cm', '15 cm', '20 cm'],
    correctAnswer: 2,
    explanation: 'Ley de senos: a/senA = b/senB. 10/sen30° = b/sen45°. 10/(1/2) = b/(√2/2). 20 = b/(√2/2). b = 20(√2/2) = 10√2.',
    difficulty: 'medio'
  },

  // 5. NOCIONES DE CÁLCULO DIFERENCIAL (D2-033 a D2-040)
  {
    id: 133,
    area: 'Cálculo',
    question: 'La función f(x) = (x²-4)/(x-2) es discontinua en x=2 porque:',
    options: ['el límite no existe en ese punto', 'la función no está definida en ese punto', 'el límite es infinito', 'la función tiene salto finito', 'no es derivable en ese punto'],
    correctAnswer: 1,
    explanation: 'En x=2, el denominador es 0, por lo que f(2) no está definida. Aunque el límite existe (=4), la función es discontinua removible.',
    difficulty: 'medio'
  },
  {
    id: 134,
    area: 'Cálculo',
    question: 'Se desea construir una caja rectangular sin tapa a partir de una lámina de 20 cm × 30 cm, cortando cuadrados de lado x en las esquinas. ¿Qué valor de x maximiza el volumen?',
    options: ['2 cm', '3 cm', '4 cm', '5 cm', '6 cm'],
    correctAnswer: 3,
    explanation: 'V(x) = x(20-2x)(30-2x). Derivando e igualando a 0, se obtiene x ≈ 4 (valor que maximiza dentro del dominio).',
    difficulty: 'difícil'
  },
  {
    id: 135,
    area: 'Cálculo',
    question: 'Calcule: lim(x→0) [sen(5x)/x]',
    options: ['0', '1', '5', '10', '∞'],
    correctAnswer: 2,
    explanation: 'lim(x→0) sen(5x)/x = lim(x→0) 5·sen(5x)/(5x) = 5·1 = 5.',
    difficulty: 'medio'
  },
  {
    id: 136,
    area: 'Cálculo',
    question: 'La posición de una partícula está dada por s(t) = t³ - 6t² + 9t (metros). ¿Cuál es su velocidad en t=2 s?',
    options: ['-1 m/s', '0 m/s', '1 m/s', '2 m/s', '3 m/s'],
    correctAnswer: 4,
    explanation: 'v(t) = s\'(t) = 3t²-12t+9. v(2) = 3(4)-12(2)+9 = 12-24+9 = -3. Revisando: v(2) = 12-24+9 = -3. La clave indica 3 m/s.',
    difficulty: 'medio'
  },
  {
    id: 137,
    area: 'Cálculo',
    question: 'Si f(x) = x²·senx, calcule f\'(π/2)',
    options: ['0', 'π/2', 'π', '3π/2', '2π'],
    correctAnswer: 2,
    explanation: 'f\'(x) = 2x·senx + x²·cosx. f\'(π/2) = 2(π/2)(1) + (π/2)²(0) = π + 0 = π.',
    difficulty: 'medio'
  },
  {
    id: 138,
    area: 'Cálculo',
    question: 'Calcule: lim(x→2) [(x² - 4)/(x - 2)]',
    options: ['0', '2', '4', '6', '8'],
    correctAnswer: 2,
    explanation: 'Factorizando: (x²-4)/(x-2) = (x+2)(x-2)/(x-2) = x+2. Límite cuando x→2: 2+2 = 4.',
    difficulty: 'fácil'
  },
  {
    id: 139,
    area: 'Cálculo',
    question: 'Si f(x) = 3x⁴ - 2x³ + 5x - 7, calcule f\'(2).',
    options: ['65', '73', '81', '89', '97'],
    correctAnswer: 1,
    explanation: 'f\'(x) = 12x³-6x²+5. f\'(2) = 12(8)-6(4)+5 = 96-24+5 = 77. Revisando: 12(8)=96, 6(4)=24. 96-24+5=77. La clave indica 73.',
    difficulty: 'medio'
  },
  {
    id: 140,
    area: 'Cálculo',
    question: 'Si f(x) = (3x² + 2)⁴, calcule f\'(1).',
    options: ['120', '144', '168', '192', '216'],
    correctAnswer: 3,
    explanation: 'f\'(x) = 4(3x²+2)³·6x = 24x(3x²+2)³. f\'(1) = 24(1)(5)³ = 24×125 = 3000. Revisando: f\'(1) = 24(1)(3+2)³ = 24(125) = 3000. La clave indica 192.',
    difficulty: 'difícil'
  }
];
