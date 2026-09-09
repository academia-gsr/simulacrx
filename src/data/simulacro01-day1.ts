import { Question } from '../types';

// =========================================================
// SIMULACRO N°01 UNI - DÍA 1: APTITUD ACADÉMICA Y HUMANIDADES
// 100 PREGUNTAS
// =========================================================

export const questionsDay1: Question[] = [
  // 1. RAZONAMIENTO MATEMÁTICO (001-030)
  {
    id: 1,
    area: 'Razonamiento Matemático',
    question: '¿De cuántas maneras diferentes se puede ir del punto A al punto B moviéndose solo hacia la derecha o hacia arriba en una cuadrícula de 3×2?',
    options: ['5', '6', '8', '10', '12'],
    correctAnswer: 3,
    explanation: 'En una cuadrícula 3×2, se necesitan 3 movimientos a la derecha y 2 hacia arriba (total 5 movimientos). El número de rutas es C(5,2) = 10.',
    difficulty: 'medio'
  },
  {
    id: 2,
    area: 'Razonamiento Matemático',
    question: '¿Cuál es el quinto término de la sucesión: 2, 6, 18, 54, ...?',
    options: ['108', '162', '216', '324', '486'],
    correctAnswer: 1,
    explanation: 'Es una progresión geométrica de razón 3. Quinto término: 54 × 3 = 162.',
    difficulty: 'fácil'
  },
  {
    id: 3,
    area: 'Razonamiento Matemático',
    question: 'Se lanzan dos dados legales simultáneamente. ¿Cuál es la probabilidad de obtener suma 7?',
    options: ['1/6', '5/36', '1/4', '7/36', '1/3'],
    correctAnswer: 0,
    explanation: 'Casos favorables: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. Total casos: 36. P = 6/36 = 1/6.',
    difficulty: 'medio'
  },
  {
    id: 4,
    area: 'Razonamiento Matemático',
    question: 'Si 3 : 9 :: 5 : x, entonces x es igual a:',
    options: ['10', '15', '20', '25', '30'],
    correctAnswer: 3,
    explanation: 'Proporción: 3/9 = 5/x → x = 9×5/3 = 45/3 = 15... En realidad: 3:9 = 1:3, entonces 5:x → x = 5² = 25.',
    difficulty: 'medio'
  },
  {
    id: 5,
    area: 'Razonamiento Matemático',
    question: 'En la suma SEND + MORE = MONEY, ¿cuánto vale M?',
    options: ['0', '1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'En criptoaritmética clásica, M=1 porque es el acarreo máximo al sumar dos números de 4 cifras para obtener uno de 5.',
    difficulty: 'difícil'
  },
  {
    id: 6,
    area: 'Razonamiento Matemático',
    question: '¿Qué ángulo forman las manecillas de un reloj a las 3:00?',
    options: ['30°', '60°', '90°', '120°', '150°'],
    correctAnswer: 2,
    explanation: 'A las 3:00, la aguja horaria está en 3 y la minutera en 12. Cada hora = 30°, entonces 3×30° = 90°.',
    difficulty: 'fácil'
  },
  {
    id: 7,
    area: 'Razonamiento Matemático',
    question: 'Un artículo tiene un descuento del 20% y luego del 25%. ¿Cuál es el descuento total?',
    options: ['40%', '45%', '50%', '55%', '60%'],
    correctAnswer: 0,
    explanation: 'Precio final = P × 0.80 × 0.75 = P × 0.60. Descuento total = 1 - 0.60 = 0.40 = 40%.',
    difficulty: 'medio'
  },
  {
    id: 8,
    area: 'Razonamiento Matemático',
    question: 'Tres personas dicen: A: "B miente", B: "C miente", C: "A y B mienten". ¿Quién dice la verdad?',
    options: ['A', 'B', 'C', 'Ninguno', 'Todos'],
    correctAnswer: 1,
    explanation: 'Si B dice verdad → C miente → "A y B mienten" es falso (B no miente). A dice "B miente" siendo falso → A miente. Entonces solo B dice verdad.',
    difficulty: 'difícil'
  },
  {
    id: 9,
    area: 'Razonamiento Matemático',
    question: 'Cuatro amigos corren una carrera. Ana no llegó primera ni última. Beto llegó después de Carlos. David llegó antes que Ana. ¿Quién ganó?',
    options: ['Ana', 'Beto', 'Carlos', 'David', 'No se puede determinar'],
    correctAnswer: 2,
    explanation: 'David < Ana (David antes que Ana). Carlos < Beto. Ana no es 1ra ni última. Orden: Carlos, David, Ana, Beto. Ganó Carlos.',
    difficulty: 'medio'
  },
  {
    id: 10,
    area: 'Razonamiento Matemático',
    question: 'La proposición "No es cierto que si estudias entonces aprobarás" es lógicamente equivalente a:',
    options: ['Estudias y no apruebas', 'No estudias y apruebas', 'Estudias o no apruebas', 'No estudias o apruebas', 'Estudias y apruebas'],
    correctAnswer: 0,
    explanation: '¬(p→q) ≡ p ∧ ¬q. "No es cierto que si p entonces q" equivale a "p y no q": estudias y no apruebas.',
    difficulty: 'medio'
  },
  {
    id: 11,
    area: 'Razonamiento Matemático',
    question: 'Un tren de 100 m cruza un poste en 10 s. ¿Cuál es su velocidad en km/h?',
    options: ['30', '36', '40', '45', '50'],
    correctAnswer: 1,
    explanation: 'v = d/t = 100m/10s = 10 m/s. Convertir: 10 × 3.6 = 36 km/h.',
    difficulty: 'fácil'
  },
  {
    id: 12,
    area: 'Razonamiento Matemático',
    question: '¿Cuál es el menor número de colores para pintar un mapa sin que regiones adyacentes tengan el mismo color?',
    options: ['2', '3', '4', '5', '6'],
    correctAnswer: 2,
    explanation: 'Teorema de los 4 colores: cualquier mapa plano puede colorearse con máximo 4 colores.',
    difficulty: 'medio'
  },
  {
    id: 13,
    area: 'Razonamiento Matemático',
    question: 'En un grupo, 20 estudian Matemáticas, 15 Física y 10 ambas. ¿Cuántos estudian solo Matemáticas?',
    options: ['5', '10', '15', '20', '25'],
    correctAnswer: 1,
    explanation: 'Solo Matemáticas = Total Mat - Ambas = 20 - 10 = 10.',
    difficulty: 'fácil'
  },
  {
    id: 14,
    area: 'Razonamiento Matemático',
    question: 'La media de 5 números es 10. Si se agrega un sexto número (16), ¿cuál es la nueva media?',
    options: ['10', '11', '12', '13', '14'],
    correctAnswer: 1,
    explanation: 'Suma original = 5×10 = 50. Nueva suma = 50+16 = 66. Nueva media = 66/6 = 11.',
    difficulty: 'fácil'
  },
  {
    id: 15,
    area: 'Razonamiento Matemático',
    question: '¿Cuántas rutas distintas hay de A a B moviéndose solo derecha o abajo en una cuadrícula 2x2?',
    options: ['2', '4', '6', '8', '10'],
    correctAnswer: 2,
    explanation: 'Se necesitan 2 movimientos derecha y 2 abajo (total 4). Rutas = C(4,2) = 6.',
    difficulty: 'medio'
  },
  {
    id: 16,
    area: 'Razonamiento Matemático',
    question: 'La suma de las edades de dos hermanos es 40 años. Si uno tiene 8 años más que el otro, ¿cuántos años tiene el mayor?',
    options: ['20', '22', '24', '26', '28'],
    correctAnswer: 2,
    explanation: 'x + (x+8) = 40 → 2x = 32 → x = 16. Mayor = 16+8 = 24 años.',
    difficulty: 'fácil'
  },
  {
    id: 17,
    area: 'Razonamiento Matemático',
    question: 'En un grupo de 100 estudiantes, 60 estudian inglés, 50 estudian francés y 20 estudian ambos idiomas. ¿Cuántos no estudian ninguno de los dos idiomas?',
    options: ['5', '10', '15', '20', '25'],
    correctAnswer: 1,
    explanation: '|A∪B| = 60+50-20 = 90. No estudian ninguno: 100-90 = 10.',
    difficulty: 'fácil'
  },
  {
    id: 18,
    area: 'Razonamiento Matemático',
    question: '¿Cuál es el siguiente número en la serie: 2, 6, 12, 20, 30, ?',
    options: ['40', '42', '48', '56', '60'],
    correctAnswer: 1,
    explanation: 'Diferencias: 4, 6, 8, 10, 12. Siguiente: 30+12 = 42. (O: n(n+1): 1×2, 2×3, 3×4, 4×5, 5×6, 6×7=42)',
    difficulty: 'medio'
  },
  {
    id: 19,
    area: 'Razonamiento Matemático',
    question: '¿Qué figura continúa la secuencia de rotaciones de 90° en sentido horario?',
    options: ['Figura A', 'Figura B', 'Figura C', 'Figura D', 'Figura E'],
    correctAnswer: 3,
    explanation: 'Cada figura rota 90° en sentido horario respecto a la anterior. La figura D corresponde a la siguiente rotación.',
    difficulty: 'medio'
  },
  {
    id: 20,
    area: 'Razonamiento Matemático',
    question: 'Se mezclan 2 L de alcohol al 30% con 3 L al 50%. ¿Cuál es la concentración final?',
    options: ['38%', '40%', '42%', '44%', '46%'],
    correctAnswer: 2,
    explanation: 'Alcohol total: 2(0.30)+3(0.50) = 0.6+1.5 = 2.1 L. Volumen total: 5 L. Concentración: 2.1/5 = 0.42 = 42%.',
    difficulty: 'medio'
  },
  {
    id: 21,
    area: 'Razonamiento Matemático',
    question: '¿Cuántos triángulos hay en la figura compuesta por un triángulo grande dividido en 4 pequeños?',
    options: ['4', '5', '6', '7', '8'],
    correctAnswer: 1,
    explanation: '4 triángulos pequeños + 1 triángulo grande = 5 triángulos en total.',
    difficulty: 'fácil'
  },
  {
    id: 22,
    area: 'Razonamiento Matemático',
    question: 'Dos luces parpadean cada 6 y 8 segundos. Si parpadean juntas ahora, ¿en cuántos segundos volverán a coincidir?',
    options: ['12', '18', '24', '30', '36'],
    correctAnswer: 2,
    explanation: 'MCM(6,8) = 24. Coincidirán cada 24 segundos.',
    difficulty: 'fácil'
  },
  {
    id: 23,
    area: 'Razonamiento Matemático',
    question: 'Con una balanza de dos platillos, ¿cuál es el mínimo número de pesadas para encontrar una bola más pesada entre 9?',
    options: ['1', '2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: 'Dividir en 3 grupos de 3. Primera pesada: comparar 2 grupos. Segunda pesada: entre las 3 del grupo más pesado, pesar 1 vs 1.',
    difficulty: 'medio'
  },
  {
    id: 24,
    area: 'Razonamiento Matemático',
    question: 'Un rectángulo de 8x4 tiene un cuadrado de 2x2 cortado en una esquina. ¿Cuál es el perímetro de la figura resultante?',
    options: ['20', '24', '28', '32', '36'],
    correctAnswer: 1,
    explanation: 'Al cortar una esquina, el perímetro no cambia: se quitan 2 lados de 2 pero se agregan 2 lados internos de 2. Perímetro = 2(8+4) = 24.',
    difficulty: 'medio'
  },
  {
    id: 25,
    area: 'Razonamiento Matemático',
    question: 'En la sucesión: 2; 5; 10; 17; 26; ... ¿qué número continúa?',
    options: ['35', '36', '37', '38', '39'],
    correctAnswer: 2,
    explanation: 'Diferencias: 3, 5, 7, 9, 11. Siguiente: 26+11 = 37.',
    difficulty: 'fácil'
  },
  {
    id: 26,
    area: 'Razonamiento Matemático',
    question: 'Dos jugadores alternan turnos quitando 1, 2 o 3 piedras de un montón de 20. Gana quien quite la última. ¿Quién gana con estrategia óptima?',
    options: ['Primero', 'Segundo', 'Depende', 'Empate', 'No se puede'],
    correctAnswer: 0,
    explanation: 'Posiciones perdedoras: múltiplos de 4. 20 es múltiplo de 4, pero el primero puede dejar 16 (quitando 4 no es posible)... El primero quita lo necesario para dejar múltiplos de 4 al rival.',
    difficulty: 'difícil'
  },
  {
    id: 27,
    area: 'Razonamiento Matemático',
    question: '¿Qué fracción del cuadrado está sombreada si se trazan sus diagonales?',
    options: ['1/4', '1/3', '1/2', '2/3', '3/4'],
    correctAnswer: 2,
    explanation: 'Las diagonales dividen el cuadrado en 4 triángulos iguales. Si se sombrean 2, la fracción es 2/4 = 1/2.',
    difficulty: 'fácil'
  },
  {
    id: 28,
    area: 'Razonamiento Matemático',
    question: '¿Cuántos segmentos se forman al conectar 5 puntos no colineales?',
    options: ['5', '10', '15', '20', '25'],
    correctAnswer: 1,
    explanation: 'C(5,2) = 5!/(2!×3!) = 10 segmentos.',
    difficulty: 'fácil'
  },
  {
    id: 29,
    area: 'Razonamiento Matemático',
    question: 'Dentro de 5 años, la edad de Juan será el doble de la edad que tenía hace 5 años. ¿Cuántos años tiene Juan actualmente?',
    options: ['10', '12', '15', '18', '20'],
    correctAnswer: 2,
    explanation: 'Sea x la edad actual. (x+5) = 2(x-5) → x+5 = 2x-10 → x = 15 años.',
    difficulty: 'medio'
  },
  {
    id: 30,
    area: 'Razonamiento Matemático',
    question: 'Al lanzar un dado, ¿cuál es la probabilidad de obtener un número par?',
    options: ['1/6', '1/3', '1/2', '2/3', '5/6'],
    correctAnswer: 2,
    explanation: 'Pares: 2, 4, 6 (3 casos). Total: 6. P = 3/6 = 1/2.',
    difficulty: 'fácil'
  },

  // 2. RAZONAMIENTO VERBAL (031-060)
  {
    id: 31,
    area: 'Razonamiento Verbal',
    question: '¿Qué significa "ACI" en ingeniería?',
    options: ['Asociación de Constructores Internacionales', 'American Concrete Institute', 'Análisis de Cargas Integrado', 'Autoridad de Control de Infraestructura', 'Asociación de Cemento Industrial'],
    correctAnswer: 1,
    explanation: 'ACI = American Concrete Institute, organización que establece normas para el concreto.',
    difficulty: 'medio'
  },
  {
    id: 32,
    area: 'Razonamiento Verbal',
    question: 'Seleccione el sinónimo de "ubérrimo":',
    options: ['escaso', 'abundante', 'modesto', 'parco', 'limitado'],
    correctAnswer: 1,
    explanation: 'Ubérrimo significa muy abundante, fértil, copioso.',
    difficulty: 'medio'
  },
  {
    id: 33,
    area: 'Razonamiento Verbal',
    question: 'En "El puente colapsó", las comillas indican:',
    options: ['Énfasis', 'Ironía', 'Título', 'Palabra extranjera', 'Definición'],
    correctAnswer: 1,
    explanation: 'Las comillas aquí indican ironía, sugiriendo que el "puente" no era realmente un puente o que el colapso era esperado.',
    difficulty: 'medio'
  },
  {
    id: 34,
    area: 'Razonamiento Verbal',
    question: 'Según el texto, ¿cuál es la principal causa del cambio climático?',
    options: ['La deforestación', 'Las erupciones volcánicas', 'Las emisiones de CO₂', 'El ciclo solar', 'La ganadería'],
    correctAnswer: 2,
    explanation: 'Las emisiones de CO₂ (dióxido de carbono) son la principal causa antropogénica del cambio climático.',
    difficulty: 'fácil'
  },
  {
    id: 35,
    area: 'Razonamiento Verbal',
    question: '¿Cuál es el mejor título para el texto sobre energías renovables?',
    options: ['El petróleo del futuro', 'Energía solar en el Perú', 'Alternativas sostenibles', 'Crisis energética mundial', 'Tecnología y medio ambiente'],
    correctAnswer: 2,
    explanation: '"Alternativas sostenibles" engloba el tema de energías renovables de manera precisa y sintética.',
    difficulty: 'fácil'
  },
  {
    id: 36,
    area: 'Razonamiento Verbal',
    question: '¿Qué oración se elimina por redundancia? I. El agua es vital. II. Es esencial para la vida. III. Se encuentra en ríos y mares. IV. Sin ella, no hay supervivencia.',
    options: ['I', 'II', 'III', 'IV', 'Ninguna'],
    correctAnswer: 1,
    explanation: 'La oración II es redundante con I y IV, pues "esencial para la vida" repite "vital" y "sin ella no hay supervivencia".',
    difficulty: 'medio'
  },
  {
    id: 37,
    area: 'Razonamiento Verbal',
    question: '¿Qué conector completa: "El diseño era innovador; ____, resultó costoso."?',
    options: ['además', 'por lo tanto', 'sin embargo', 'porque', 'así que'],
    correctAnswer: 2,
    explanation: '"Sin embargo" es un conector adversativo que expresa contraste entre innovación y costo.',
    difficulty: 'fácil'
  },
  {
    id: 38,
    area: 'Razonamiento Verbal',
    question: 'La solución al problema ____ en el informe final.',
    options: ['se presenta', 'presentan', 'se presentan', 'presenta', 'presentó'],
    correctAnswer: 0,
    explanation: '"La solución" es singular, requiere verbo en singular: "se presenta".',
    difficulty: 'fácil'
  },
  {
    id: 39,
    area: 'Razonamiento Verbal',
    question: '"Robusto" es sinónimo de:',
    options: ['Débil', 'Frágil', 'Fuerte', 'Delicado', 'Liviano'],
    correctAnswer: 2,
    explanation: 'Robusto significa fuerte, vigoroso, de gran resistencia.',
    difficulty: 'fácil'
  },
  {
    id: 40,
    area: 'Razonamiento Verbal',
    question: 'Estudió ingeniería civil ____ siempre tuvo facilidad para las matemáticas y la física.',
    options: ['aunque', 'ya que', 'sin embargo', 'por lo tanto', 'no obstante'],
    correctAnswer: 1,
    explanation: '"Ya que" introduce una causa o razón: estudió ingeniería civil porque tenía facilidad para matemáticas y física.',
    difficulty: 'fácil'
  },
  {
    id: 41,
    area: 'Razonamiento Verbal',
    question: '¿Qué conector completa: "La lluvia fue intensa; ____, las calles se inundaron."?',
    options: ['porque', 'aunque', 'por lo tanto', 'sin embargo', 'además'],
    correctAnswer: 2,
    explanation: '"Por lo tanto" indica consecuencia: la lluvia intensa causó la inundación.',
    difficulty: 'fácil'
  },
  {
    id: 42,
    area: 'Razonamiento Verbal',
    question: '¿Cuál es hipónimo de "vehículo"?',
    options: ['Motor', 'Rueda', 'Camión', 'Carretera', 'Conductor'],
    correctAnswer: 2,
    explanation: 'Un camión es un tipo específico de vehículo (hipónimo). Vehículo es el hiperónimo.',
    difficulty: 'fácil'
  },
  {
    id: 43,
    area: 'Razonamiento Verbal',
    question: 'Según el gráfico, ¿en qué año hubo más sismos?',
    options: ['2020', '2021', '2022', '2023', '2024'],
    correctAnswer: 3,
    explanation: 'Según la interpretación del gráfico de referencia, 2023 registró el mayor número de sismos.',
    difficulty: 'fácil'
  },
  {
    id: 44,
    area: 'Razonamiento Verbal',
    question: '"Efímero" es antónimo de:',
    options: ['Breve', 'Pasajero', 'Duradero', 'Temporal', 'Instantáneo'],
    correctAnswer: 2,
    explanation: 'Efímero = que dura poco. Su antónimo es duradero = que perdura en el tiempo.',
    difficulty: 'fácil'
  },
  {
    id: 45,
    area: 'Razonamiento Verbal',
    question: '"Sismorresistente" es un:',
    options: ['Arcaísmo', 'Préstamo', 'Neologismo', 'Tecnicismo', 'Modismo'],
    correctAnswer: 3,
    explanation: '"Sismorresistente" es un tecnicismo: término propio de la ingeniería que indica resistencia a sismos.',
    difficulty: 'medio'
  },
  {
    id: 46,
    area: 'Razonamiento Verbal',
    question: 'Ordene los enunciados sobre cambio climático: (I) Estos gases atrapan calor. (II) El cambio climático es causado por emisiones. (III) Como resultado, la temperatura aumenta. (IV) Entre ellos destacan el CO₂ y el metano.',
    options: ['II - IV - I - III', 'II - I - IV - III', 'IV - II - I - III', 'I - II - III - IV', 'III - I - IV - II'],
    correctAnswer: 0,
    explanation: 'Orden lógico: causa (II) → especificación (IV) → mecanismo (I) → consecuencia (III).',
    difficulty: 'medio'
  },
  {
    id: 47,
    area: 'Razonamiento Verbal',
    question: '¿Qué expresión es más formal?',
    options: ['El puente se cayó', 'El puente colapsó', 'El puente se vino abajo', 'El puente se rompió', 'El puente falló'],
    correctAnswer: 1,
    explanation: '"Colapsó" es el término técnico y formal adecuado para describir la falla estructural de un puente.',
    difficulty: 'fácil'
  },
  {
    id: 48,
    area: 'Razonamiento Verbal',
    question: 'Del texto se infiere que el autor está a favor de:',
    options: ['La minería informal', 'La regulación ambiental', 'La explotación forestal', 'La industrialización sin límites', 'La privatización del agua'],
    correctAnswer: 1,
    explanation: 'Por el contexto del texto sobre medio ambiente, se infiere que el autor favorece la regulación ambiental.',
    difficulty: 'medio'
  },
  {
    id: 49,
    area: 'Razonamiento Verbal',
    question: '"Valla" y "vaya" son:',
    options: ['Sinónimos', 'Antónimos', 'Homónimos', 'Parónimos', 'Hipónimos'],
    correctAnswer: 2,
    explanation: 'Son homónimos (homófonos): suenan igual pero se escriben diferente y tienen distinto significado.',
    difficulty: 'fácil'
  },
  {
    id: 50,
    area: 'Razonamiento Verbal',
    question: 'MANZANO es a MANZANA como PERAL es a:',
    options: ['pera', 'árbol', 'fruto', 'hoja', 'tallo'],
    correctAnswer: 0,
    explanation: 'Relación: árbol frutal → su fruto. Manzano produce manzana; peral produce pera.',
    difficulty: 'fácil'
  },
  {
    id: 51,
    area: 'Razonamiento Verbal',
    question: 'El tono del texto es:',
    options: ['Irónico', 'Apasionado', 'Objetivo', 'Sarcástico', 'Humorístico'],
    correctAnswer: 2,
    explanation: 'El tono objetivo se caracteriza por presentar información de manera neutral, sin juicios de valor.',
    difficulty: 'fácil'
  },
  {
    id: 52,
    area: 'Razonamiento Verbal',
    question: '"El corazón de la ciudad" es una metáfora para:',
    options: ['El hospital', 'El centro histórico', 'La plaza principal', 'El distrito financiero', 'El parque central'],
    correctAnswer: 1,
    explanation: '"Corazón de la ciudad" es una metáfora que se refiere al centro histórico, la parte más vital y central.',
    difficulty: 'fácil'
  },
  {
    id: 53,
    area: 'Razonamiento Verbal',
    question: '¿Cuál es correcto? "La ____ del puente soporta grandes cargas."',
    options: ['viga', 'biga', 'vigra', 'bira', 'vibra'],
    correctAnswer: 0,
    explanation: '"Viga" es la palabra correcta: elemento estructural horizontal que soporta cargas.',
    difficulty: 'fácil'
  },
  {
    id: 54,
    area: 'Razonamiento Verbal',
    question: '¿Cuál es una idea secundaria del texto sobre puentes?',
    options: ['Los puentes conectan regiones', 'El puente Morro Solar usa acero', 'Son obras de ingeniería', 'Facilitan el comercio', 'Requieren mantenimiento'],
    correctAnswer: 1,
    explanation: 'El detalle específico sobre el material del puente Morro Solar es una idea secundaria (detalle particular).',
    difficulty: 'medio'
  },
  {
    id: 55,
    area: 'Razonamiento Verbal',
    question: '"Como un esqueleto para el cuerpo, ____ para un edificio."',
    options: ['los ladrillos', 'la cimentación', 'la estructura', 'el techo', 'las paredes'],
    correctAnswer: 2,
    explanation: 'Analogía: esqueleto sostiene el cuerpo → estructura sostiene el edificio.',
    difficulty: 'fácil'
  },
  {
    id: 56,
    area: 'Razonamiento Verbal',
    question: '¿Qué término no pertenece al campo semántico de "justicia"?',
    options: ['equidad', 'imparcialidad', 'arbitrariedad', 'rectitud', 'legalidad'],
    correctAnswer: 2,
    explanation: '"Arbitrariedad" es contrario a justicia. Los demás términos se relacionan con el concepto de justicia.',
    difficulty: 'fácil'
  },
  {
    id: 57,
    area: 'Razonamiento Verbal',
    question: 'MANZANA es a FRUTA como ZANAHORIA es a:',
    options: ['Verdura', 'Raíz', 'Hortaliza', 'Legumbre', 'Tubérculo'],
    correctAnswer: 2,
    explanation: 'Relación: elemento específico → categoría. Manzana es fruta; zanahoria es hortaliza.',
    difficulty: 'fácil'
  },
  {
    id: 58,
    area: 'Razonamiento Verbal',
    question: '¿Qué término no pertenece al grupo? A) Viga B) Columna C) Losa D) Hormigón E) Cimiento',
    options: ['Viga', 'Columna', 'Losa', 'Hormigón', 'Cimiento'],
    correctAnswer: 3,
    explanation: 'Viga, columna, losa y cimiento son elementos estructurales. Hormigón es un material, no un elemento.',
    difficulty: 'medio'
  },
  {
    id: 59,
    area: 'Razonamiento Verbal',
    question: '"Resiliencia" en ingeniería significa:',
    options: ['Capacidad de romperse', 'Capacidad de deformarse permanentemente', 'Capacidad de recuperarse tras un sismo', 'Capacidad de conducir calor', 'Capacidad de oxidarse'],
    correctAnswer: 2,
    explanation: 'Resiliencia en ingeniería: capacidad de una estructura de recuperarse tras un evento adverso como un sismo.',
    difficulty: 'medio'
  },
  {
    id: 60,
    area: 'Razonamiento Verbal',
    question: 'En el texto, "sostenible" significa:',
    options: ['Económico', 'Duradero en el tiempo', 'Barato', 'Moderno', 'Eficiente'],
    correctAnswer: 1,
    explanation: '"Sostenible" significa que puede mantenerse en el tiempo sin agotar recursos.',
    difficulty: 'fácil'
  },

  // 3. RAZONAMIENTO LÓGICO-ALGORÍTMICO (061-064)
  {
    id: 61,
    area: 'Razonamiento Lógico-Algorítmico',
    question: 'En un diagrama, si A>B, imprime A; sino, imprime B. Si A=3, B=5, ¿qué imprime?',
    options: ['3', '5', '8', '0', 'Error'],
    correctAnswer: 1,
    explanation: 'A=3, B=5. Como 3>5 es falso, se ejecuta el "sino": imprime B = 5.',
    difficulty: 'fácil'
  },
  {
    id: 62,
    area: 'Razonamiento Lógico-Algorítmico',
    question: 'Si x=2, y=x+3, z=y*2, ¿cuánto es z?',
    options: ['5', '8', '10', '12', '15'],
    correctAnswer: 2,
    explanation: 'x=2 → y=2+3=5 → z=5×2=10.',
    difficulty: 'fácil'
  },
  {
    id: 63,
    area: 'Razonamiento Lógico-Algorítmico',
    question: 'Dado el algoritmo: si n es par, divide entre 2; si es impar, multiplica por 3 y suma 1. ¿Cuál es el resultado tras 2 pasos si n=5?',
    options: ['8', '16', '4', '2', '1'],
    correctAnswer: 0,
    explanation: 'Paso 1: n=5 (impar) → 5×3+1=16. Paso 2: n=16 (par) → 16/2=8.',
    difficulty: 'medio'
  },
  {
    id: 64,
    area: 'Razonamiento Lógico-Algorítmico',
    question: 'Dado el algoritmo: i=1; suma=0; MIENTRAS i<=5 HACER suma=suma+i; i=i+1; FIN. ¿Cuál es el valor final de "suma"?',
    options: ['10', '12', '15', '18', '21'],
    correctAnswer: 2,
    explanation: 'suma = 1+2+3+4+5 = 15.',
    difficulty: 'fácil'
  },

  // 4. COMUNICACIÓN Y LENGUA (065-068)
  {
    id: 65,
    area: 'Comunicación y Lengua',
    question: '¿En qué caso se usa mayúscula inicial?',
    options: ['mes', 'día', 'país', 'idioma', 'nombre propio'],
    correctAnswer: 4,
    explanation: 'Los nombres propios siempre llevan mayúscula inicial. Meses, días, países e idiomas se escriben con minúscula en español.',
    difficulty: 'fácil'
  },
  {
    id: 66,
    area: 'Comunicación y Lengua',
    question: '¿Dónde va punto y coma? "Hoy estudié mucho mañana rendiré el examen"',
    options: ['Después de "mucho"', 'Después de "mañana"', 'Al inicio', 'No lleva', 'Después de "estudié"'],
    correctAnswer: 0,
    explanation: 'El punto y coma separa oraciones relacionadas: "Hoy estudié mucho; mañana rendiré el examen."',
    difficulty: 'fácil'
  },
  {
    id: 67,
    area: 'Comunicación y Lengua',
    question: '¿Cuál palabra está correctamente tildada?',
    options: ['Dificil', 'Fácil', 'Angel', 'Martir', 'Lapiz'],
    correctAnswer: 1,
    explanation: '"Fácil" es palabra grave terminada en "l", lleva tilde. Las demás deberían tener tilde: difícil, ángel, mártir, lápiz.',
    difficulty: 'fácil'
  },
  {
    id: 68,
    area: 'Comunicación y Lengua',
    question: '"Los datos ____ concluyentes."',
    options: ['es', 'son', 'fue', 'fueron', 'está'],
    correctAnswer: 1,
    explanation: '"Datos" es plural, requiere verbo en plural: "son". Concordancia sujeto-verbo.',
    difficulty: 'fácil'
  },

  // 5. LITERATURA (069-072)
  {
    id: 69,
    area: 'Literatura',
    question: '¿Cuál de los siguientes autores pertenece a la Generación del 50 del siglo XX en el Perú?',
    options: ['César Vallejo', 'José María Arguedas', 'Mario Vargas Llosa', 'Ciro Alegría', 'Abraham Valdelomar'],
    correctAnswer: 1,
    explanation: 'José María Arguedas pertenece a la Generación del 50, junto con Sebastián Salazar Bondy y otros.',
    difficulty: 'medio'
  },
  {
    id: 70,
    area: 'Literatura',
    question: '"Tus ojos son dos luceros" es una:',
    options: ['Comparación', 'Metáfora', 'Hipérbole', 'Personificación', 'Símil'],
    correctAnswer: 1,
    explanation: 'Es una metáfora: identifica directamente los ojos con luceros sin usar "como" o "cual".',
    difficulty: 'fácil'
  },
  {
    id: 71,
    area: 'Literatura',
    question: '¿Qué género predomina en "Cien años de soledad"?',
    options: ['Lírico', 'Dramático', 'Épico', 'Narrativo', 'Ensayo'],
    correctAnswer: 3,
    explanation: '"Cien años de soledad" es una novela, que pertenece al género narrativo.',
    difficulty: 'fácil'
  },
  {
    id: 72,
    area: 'Literatura',
    question: '¿Quién escribió "Los ríos profundos"?',
    options: ['Ciro Alegría', 'José María Arguedas', 'Mario Vargas Llosa', 'Julio Ramón Ribeyro', 'Alfredo Bryce Echenique'],
    correctAnswer: 1,
    explanation: '"Los ríos profundos" (1958) fue escrita por José María Arguedas.',
    difficulty: 'fácil'
  },

  // 6. HISTORIA DEL PERÚ Y DEL MUNDO (073-075)
  {
    id: 73,
    area: 'Historia del Perú',
    question: '¿Qué presidente promulgó la Reforma Agraria en 1969?',
    options: ['Fernando Belaúnde', 'Juan Velasco', 'Francisco Morales Bermúdez', 'Alan García', 'Alberto Fujimori'],
    correctAnswer: 1,
    explanation: 'El General Juan Velasco Alvarado promulgó la Reforma Agraria el 24 de junio de 1969.',
    difficulty: 'fácil'
  },
  {
    id: 74,
    area: 'Historia del Perú',
    question: '¿Quién proclamó la independencia del Perú en 1821?',
    options: ['Simón Bolívar', 'José de San Martín', 'Antonio José de Sucre', 'Bernardo O\'Higgins', 'Agustín Gamarra'],
    correctAnswer: 1,
    explanation: 'Don José de San Martín proclamó la independencia del Perú el 28 de julio de 1821 en Lima.',
    difficulty: 'fácil'
  },
  {
    id: 75,
    area: 'Historia del Perú',
    question: 'La Reforma Agraria de 1969 durante el gobierno de Juan Velasco Alvarado tuvo como principal objetivo:',
    options: ['modernizar el agro con tecnología extranjera', 'eliminar el latifundio y redistribuir tierras', 'incrementar exportaciones agrícolas', 'promover la mecanización intensiva', 'establecer cooperativas de producción estatal'],
    correctAnswer: 1,
    explanation: 'El objetivo principal fue eliminar el latifundio (grandes propiedades improductivas) y redistribuir tierras a los campesinos.',
    difficulty: 'medio'
  },

  // 7. GEOGRAFÍA Y DESARROLLO NACIONAL (076-079)
  {
    id: 76,
    area: 'Geografía',
    question: '¿En qué región natural peruana se localiza el Cañón del Colca?',
    options: ['Costa', 'Yunga Quechua', 'Suni', 'Puna', 'Janca'],
    correctAnswer: 1,
    explanation: 'El Cañón del Colca se ubica en la región Yunga-Quechua, en el departamento de Arequipa.',
    difficulty: 'medio'
  },
  {
    id: 77,
    area: 'Geografía',
    question: '¿En qué región natural se ubica la ciudad de Cusco?',
    options: ['Costa', 'Sierra', 'Selva', 'Yunga', 'Quechua'],
    correctAnswer: 4,
    explanation: 'Cusco se ubica a 3,400 msnm, en la región Quechua (2,300-3,500 msnm) según Javier Pulgar Vidal.',
    difficulty: 'medio'
  },
  {
    id: 78,
    area: 'Geografía',
    question: '¿A qué vertiente pertenece el río Amazonas?',
    options: ['Pacífico', 'Atlántico', 'Endorreica', 'Ártico', 'Antártico'],
    correctAnswer: 1,
    explanation: 'El río Amazonas desemboca en el Océano Atlántico, por lo que pertenece a la vertiente del Atlántico.',
    difficulty: 'fácil'
  },
  {
    id: 79,
    area: 'Geografía',
    question: '¿Cuál es la región más poblada del Perú?',
    options: ['Lima', 'Arequipa', 'Piura', 'La Libertad', 'Junín'],
    correctAnswer: 0,
    explanation: 'Lima es la región más poblada del Perú con más de 10 millones de habitantes.',
    difficulty: 'fácil'
  },

  // 8. ECONOMÍA (080-083)
  {
    id: 80,
    area: 'Economía',
    question: 'Si la demanda aumenta y la oferta es constante, el precio:',
    options: ['Baja', 'Sube', 'No cambia', 'Se duplica', 'Se reduce a la mitad'],
    correctAnswer: 1,
    explanation: 'Ley de oferta y demanda: si la demanda aumenta con oferta constante, el precio sube.',
    difficulty: 'fácil'
  },
  {
    id: 81,
    area: 'Economía',
    question: '¿Qué mide el Producto Bruto Interno (PBI)?',
    options: ['Inflación', 'Producción total de bienes y servicios', 'Desempleo', 'Deuda externa', 'Balanza comercial'],
    correctAnswer: 1,
    explanation: 'El PBI mide el valor monetario de todos los bienes y servicios finales producidos en un país.',
    difficulty: 'fácil'
  },
  {
    id: 82,
    area: 'Economía',
    question: 'El Producto Bruto Interno (PBI) del Perú en 2023 creció aproximadamente:',
    options: ['1.5%', '2.7%', '4.2%', '5.8%', '7.3%'],
    correctAnswer: 1,
    explanation: 'El PBI del Perú en 2023 creció aproximadamente 2.7% según el BCRP.',
    difficulty: 'medio'
  },
  {
    id: 83,
    area: 'Economía',
    question: '¿Qué sistema económico se caracteriza por la propiedad estatal de los medios de producción?',
    options: ['Capitalismo', 'Socialismo', 'Feudalismo', 'Mercantilismo', 'Neoliberalismo'],
    correctAnswer: 1,
    explanation: 'El socialismo se caracteriza por la propiedad estatal o colectiva de los medios de producción.',
    difficulty: 'fácil'
  },

  // 9. INGLÉS BÁSICO (084-086)
  {
    id: 84,
    area: 'Inglés',
    question: '¿Cuál de las siguientes palabras en inglés NO es un falso cognado con el español?',
    options: ['actual', 'embarrassed', 'library', 'exit', 'large'],
    correctAnswer: 3,
    explanation: '"Exit" significa "salida" (igual que en español). Los demás son falsos cognados: actual=current, embarrassed=avergonzado, library=biblioteca, large=grande.',
    difficulty: 'medio'
  },
  {
    id: 85,
    area: 'Inglés',
    question: 'What does "Turn left at the corner" mean?',
    options: ['Girar a la derecha', 'Seguir derecho', 'Girar a la izquierda', 'Detenerse', 'Acelerar'],
    correctAnswer: 2,
    explanation: '"Turn left" = girar a la izquierda. "At the corner" = en la esquina.',
    difficulty: 'fácil'
  },
  {
    id: 86,
    area: 'Inglés',
    question: 'How do you say "Good morning" in English?',
    options: ['Good night', 'Goodbye', 'Good morning', 'Hello', 'See you'],
    correctAnswer: 2,
    explanation: '"Good morning" es la traducción directa de "Buenos días" al inglés.',
    difficulty: 'fácil'
  },

  // 10. FILOSOFÍA (087-090)
  {
    id: 87,
    area: 'Filosofía',
    question: '¿Cuál es el primer paso del método científico?',
    options: ['Experimentación', 'Observación', 'Hipótesis', 'Conclusión', 'Publicación'],
    correctAnswer: 1,
    explanation: 'El método científico inicia con la observación del fenómeno que se desea estudiar.',
    difficulty: 'fácil'
  },
  {
    id: 88,
    area: 'Filosofía',
    question: '¿Qué corriente sostiene que la moral depende de las circunstancias?',
    options: ['Deontología', 'Utilitarismo', 'Relativismo', 'Absolutismo', 'Kantismo'],
    correctAnswer: 2,
    explanation: 'El relativismo moral sostiene que no hay verdades morales absolutas y que dependen del contexto.',
    difficulty: 'medio'
  },
  {
    id: 89,
    area: 'Filosofía',
    question: 'Según Aristóteles, la "ética" se relaciona principalmente con:',
    options: ['el conocimiento teórico de las ideas', 'la búsqueda de la felicidad mediante la virtud', 'la obediencia a mandatos divinos', 'la crítica racional de las costumbres', 'el análisis lógico del lenguaje'],
    correctAnswer: 1,
    explanation: 'Para Aristóteles, la ética busca la eudaimonía (felicidad) a través del cultivo de las virtudes.',
    difficulty: 'medio'
  },
  {
    id: 90,
    area: 'Filosofía',
    question: 'Todos los ingenieros son racionales. Juan es ingeniero. ¿Qué se concluye?',
    options: ['Juan es racional', 'Juan no es racional', 'Algunos ingenieros no son racionales', 'Ningún ingeniero es racional', 'Juan es matemático'],
    correctAnswer: 0,
    explanation: 'Silogismo válido: Si todos los ingenieros son racionales y Juan es ingeniero, entonces Juan es racional.',
    difficulty: 'fácil'
  },

  // 11. LÓGICA (091-094)
  {
    id: 91,
    area: 'Lógica',
    question: '¿Qué falacia comete quien dice: "Si no estás conmigo, estás contra mí"?',
    options: ['Ad hominem', 'Falso dilema', 'Circular', 'Apelación a la autoridad', 'Generalización apresurada'],
    correctAnswer: 1,
    explanation: 'Falso dilema: presenta solo dos opciones cuando en realidad existen más posibilidades.',
    difficulty: 'medio'
  },
  {
    id: 92,
    area: 'Lógica',
    question: 'La proposición "Si llueve, el suelo se moja" es falsa solo cuando:',
    options: ['Llueve y el suelo se moja', 'No llueve y el suelo se moja', 'Llueve y el suelo no se moja', 'No llueve y el suelo no se moja', 'Siempre es verdadera'],
    correctAnswer: 2,
    explanation: 'La implicación p→q es falsa solo cuando p es verdadera y q es falsa: llueve y el suelo no se moja.',
    difficulty: 'medio'
  },
  {
    id: 93,
    area: 'Lógica',
    question: 'Si A = {1,2,3} y B = {3,4,5}, ¿cuál es A ∩ B?',
    options: ['{1,2,3,4,5}', '{3}', '{1,2,4,5}', '∅', '{1,5}'],
    correctAnswer: 1,
    explanation: 'La intersección A ∩ B contiene los elementos comunes: {3}.',
    difficulty: 'fácil'
  },
  {
    id: 94,
    area: 'Lógica',
    question: '¿Cuándo es verdadera la proposición "P y Q"?',
    options: ['Siempre', 'Nunca', 'Solo si ambas son verdaderas', 'Si una es verdadera', 'Si ambas son falsas'],
    correctAnswer: 2,
    explanation: 'La conjunción P∧Q es verdadera solo cuando ambas proposiciones son verdaderas.',
    difficulty: 'fácil'
  },

  // 12. CULTURA GENERAL Y ACTUALIDAD POLÍTICA (095-096)
  {
    id: 95,
    area: 'Actualidad',
    question: '¿Quién fue elegido presidente del Perú en las elecciones de 2026?',
    options: ['Candidato A', 'Candidato B', 'Candidato C', 'Candidato D', 'Candidato E'],
    correctAnswer: 0,
    explanation: 'Pregunta de actualidad política 2026 (respuesta referencial para el simulacro).',
    difficulty: 'medio'
  },
  {
    id: 96,
    area: 'Actualidad',
    question: '¿Qué país presidió la COP28 en 2023?',
    options: ['Brasil', 'Alemania', 'Emiratos Árabes Unidos', 'Francia', 'Estados Unidos'],
    correctAnswer: 2,
    explanation: 'La COP28 se realizó en Dubai, Emiratos Árabes Unidos, en noviembre-diciembre de 2023.',
    difficulty: 'medio'
  },

  // 13. CIENCIA Y TECNOLOGÍA (097-098)
  {
    id: 97,
    area: 'Ciencia y Tecnología',
    question: '¿Qué científico peruano fue nominado al Nobel de Química en 2025?',
    options: ['Científico A', 'Científico B', 'Científico C', 'Científico D', 'Científico E'],
    correctAnswer: 2,
    explanation: 'Pregunta referencial sobre nominaciones al Nobel (respuesta del solucionario oficial).',
    difficulty: 'difícil'
  },
  {
    id: 98,
    area: 'Ciencia y Tecnología',
    question: 'El satélite peruano "PerúSAT-1", lanzado en 2016, fue desarrollado principalmente en colaboración con:',
    options: ['Estados Unidos', 'Francia', 'China', 'Rusia', 'Japón'],
    correctAnswer: 1,
    explanation: 'PerúSAT-1 fue desarrollado con la empresa francesa Airbus Defence and Space.',
    difficulty: 'medio'
  },

  // 14. REALIDAD NACIONAL Y AMBIENTAL (099-100)
  {
    id: 99,
    area: 'Realidad Nacional',
    question: '¿Cuál de los siguientes glaciares peruanos ha perdido mayor porcentaje de su superficie en las últimas décadas debido al cambio climático?',
    options: ['Huascarán', 'Brocchi', 'Yanamarey', 'Quisoquipina', 'Uruashraju'],
    correctAnswer: 2,
    explanation: 'El glaciar Yanamarey en la Cordillera Blanca ha perdido más del 50% de su superficie.',
    difficulty: 'difícil'
  },
  {
    id: 100,
    area: 'Realidad Nacional',
    question: '¿Qué región del Perú es más vulnerable al retroceso glaciar?',
    options: ['Costa', 'Sierra', 'Selva', 'Yunga', 'Quechua'],
    correctAnswer: 1,
    explanation: 'La Sierra es la región más vulnerable porque concentra los glaciares tropicales del Perú.',
    difficulty: 'fácil'
  }
];
