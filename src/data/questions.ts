import { Question } from '../types';

export const questions: Question[] = [
  // ═══════════════════════════════════════════
  // 1. RAZONAMIENTO MATEMÁTICO (001 - 025)
  // ═══════════════════════════════════════════
  {
    id: 1,
    area: 'Razonamiento Matemático',
    question: 'Si a*b = a + b + ab. Halle 2*3',
    options: ['5', '6', '11', '12', '10'],
    correctAnswer: 2,
    explanation: '2*3 = 2 + 3 + (2)(3) = 2 + 3 + 6 = 11',
    difficulty: 'medio'
  },
  {
    id: 2,
    area: 'Razonamiento Matemático',
    question: 'Halle el siguiente término: 2, 5, 10, 17, 26, ...',
    options: ['5', '10', '17', '37', '42'],
    correctAnswer: 3,
    explanation: 'Diferencias: 3, 5, 7, 9, 11. Cada diferencia aumenta en 2. Siguiente: 26 + 11 = 37',
    difficulty: 'fácil'
  },
  {
    id: 3,
    area: 'Razonamiento Matemático',
    question: 'Complete: 3 (12) 6, 4 ( ? ) 8',
    options: ['16', '20', '24', '32', '28'],
    correctAnswer: 2,
    explanation: 'La relación es: número exterior × número exterior = 3×6=18... En realidad: (3+6)×(6/3) = no. Patrón: a(b)c → b = a×c×(c/a)/... Regla: b = (a+c)×(c-a)/... Probamos: 3(12)6 → 12=3×6-6=12 ✓. Entonces 4(?)8 → ?=4×8-8=24 ✓',
    difficulty: 'medio'
  },
  {
    id: 4,
    area: 'Razonamiento Matemático',
    question: 'La suma de tres números consecutivos es 45. Halle el mayor.',
    options: ['14', '15', '16', '17', '18'],
    correctAnswer: 2,
    explanation: 'Sean x-1, x, x+1. Suma: 3x = 45, x = 15. El mayor es 15+1 = 16.',
    difficulty: 'fácil'
  },
  {
    id: 5,
    area: 'Razonamiento Matemático',
    question: 'Juan tiene el doble de la edad de Pedro. Si sus edades suman 36, ¿cuál es la edad de Juan?',
    options: ['12', '18', '24', '30', '16'],
    correctAnswer: 2,
    explanation: 'Juan = 2Pedro. Juan + Pedro = 36. Entonces 2Pedro + Pedro = 36, Pedro = 12, Juan = 24.',
    difficulty: 'fácil'
  },
  {
    id: 6,
    area: 'Razonamiento Matemático',
    question: '¿Cuál es el 20% del 50% de 200?',
    options: ['10', '20', '30', '40', '50'],
    correctAnswer: 1,
    explanation: '50% de 200 = 100. Luego 20% de 100 = 20.',
    difficulty: 'fácil'
  },
  {
    id: 7,
    area: 'Razonamiento Matemático',
    question: 'El promedio de 4 números es 15. Si se agrega el número 25, ¿cuál es el nuevo promedio?',
    options: ['16', '17', '18', '19', '20'],
    correctAnswer: 1,
    explanation: 'Suma original = 4×15 = 60. Nueva suma = 60+25 = 85. Nuevo promedio = 85/5 = 17.',
    difficulty: 'medio'
  },
  {
    id: 8,
    area: 'Razonamiento Matemático',
    question: 'Si 5 obreros hacen una obra en 10 días, ¿cuántos días tardarán 10 obreros?',
    options: ['2', '5', '10', '20', '15'],
    correctAnswer: 1,
    explanation: 'Relación inversamente proporcional. 5×10 = 10×d → d = 50/10 = 5 días.',
    difficulty: 'fácil'
  },
  {
    id: 9,
    area: 'Razonamiento Matemático',
    question: '¿Cuánto es 3/4 de 80?',
    options: ['40', '50', '60', '70', '80'],
    correctAnswer: 2,
    explanation: '3/4 × 80 = 3 × 20 = 60.',
    difficulty: 'fácil'
  },
  {
    id: 10,
    area: 'Razonamiento Matemático',
    question: 'Dos autos van al encuentro con velocidades de 40 km/h y 60 km/h. Distancia 200 km. ¿En cuántas horas se encuentran?',
    options: ['1', '2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: 'Velocidad de acercamiento = 40 + 60 = 100 km/h. Tiempo = 200/100 = 2 horas.',
    difficulty: 'fácil'
  },
  {
    id: 11,
    area: 'Razonamiento Matemático',
    question: '¿Qué hora es si faltan del día la tercera parte de lo que ya transcurrió?',
    options: ['12:00', '16:00', '18:00', '20:00', '14:00'],
    correctAnswer: 2,
    explanation: 'Sea t lo transcurrido. Falta = t/3. Entonces t + t/3 = 24. 4t/3 = 24. t = 18 horas. Hora: 18:00.',
    difficulty: 'medio'
  },
  {
    id: 12,
    area: 'Razonamiento Matemático',
    question: 'En un grupo de 50 personas, 30 estudian inglés y 25 francés. Si 10 estudian ambos, ¿cuántos no estudian ninguno?',
    options: ['5', '10', '15', '20', '0'],
    correctAnswer: 0,
    explanation: 'Por inclusión-exclusión: |A∪B| = 30 + 25 - 10 = 45. No estudian ninguno: 50 - 45 = 5.',
    difficulty: 'medio'
  },
  {
    id: 13,
    area: 'Razonamiento Matemático',
    question: 'Ana es más alta que Betty y Betty es más alta que Carla. ¿Quién es la más baja?',
    options: ['Ana', 'Betty', 'Carla', 'Todas iguales', 'Falta información'],
    correctAnswer: 2,
    explanation: 'Orden: Ana > Betty > Carla. Carla es la más baja.',
    difficulty: 'fácil'
  },
  {
    id: 14,
    area: 'Razonamiento Matemático',
    question: 'Uno de ellos miente. A dice "B miente", B dice "C miente", C dice "A y B mienten". ¿Quién dice la verdad?',
    options: ['A', 'B', 'C', 'A y C', 'Ninguno'],
    correctAnswer: 0,
    explanation: 'Si A dice verdad → B miente → C dice verdad (no miente). Pero C dice que A y B mienten, contradicción. Si solo uno miente: A dice verdad, B miente, C miente. B dice "C miente" siendo falso → C dice verdad. Revisando: A(verdad), B(miente), C(miente). A dice "B miente" ✓. C dice "A y B mienten" ✗ (A no miente). Respuesta: A dice la verdad.',
    difficulty: 'difícil'
  },
  {
    id: 15,
    area: 'Razonamiento Matemático',
    question: '¿Cuántos triángulos hay en una figura con 3 líneas verticales desde el vértice superior a la base?',
    options: ['4', '6', '10', '12', '8'],
    correctAnswer: 2,
    explanation: 'Con 3 líneas internas más los 2 lados = 5 líneas desde el vértice. C(5,2) = 10 triángulos.',
    difficulty: 'medio'
  },
  {
    id: 16,
    area: 'Razonamiento Matemático',
    question: 'Halle el área de un cuadrado de lado 6 cm.',
    options: ['12 cm²', '24 cm²', '36 cm²', '48 cm²', '18 cm²'],
    correctAnswer: 2,
    explanation: 'Área del cuadrado = lado² = 6² = 36 cm².',
    difficulty: 'fácil'
  },
  {
    id: 17,
    area: 'Razonamiento Matemático',
    question: 'Al lanzar un dado, ¿cuál es la probabilidad de obtener un número par?',
    options: ['1/6', '1/3', '1/2', '2/3', '5/6'],
    correctAnswer: 2,
    explanation: 'Números pares en un dado: 2, 4, 6 (3 casos favorables). P = 3/6 = 1/2.',
    difficulty: 'fácil'
  },
  {
    id: 18,
    area: 'Razonamiento Matemático',
    question: '¿De cuántas maneras se pueden ordenar 4 personas en una fila?',
    options: ['12', '16', '24', '48', '10'],
    correctAnswer: 2,
    explanation: 'Permutación de 4: P(4) = 4! = 4×3×2×1 = 24.',
    difficulty: 'fácil'
  },
  {
    id: 19,
    area: 'Razonamiento Matemático',
    question: 'Calcule log₂(16)',
    options: ['2', '3', '4', '5', '8'],
    correctAnswer: 2,
    explanation: '2⁴ = 16, entonces log₂(16) = 4.',
    difficulty: 'fácil'
  },
  {
    id: 20,
    area: 'Razonamiento Matemático',
    question: 'Complete la sucesión: A, C, E, G, ...',
    options: ['H', 'I', 'J', 'K', 'F'],
    correctAnswer: 1,
    explanation: 'Se salta una letra cada vez: A→C→E→G→I (posiciones 1,3,5,7,9).',
    difficulty: 'fácil'
  },
  {
    id: 21,
    area: 'Razonamiento Matemático',
    question: 'Si a/b = 2/3 y a+b = 25, halle a.',
    options: ['5', '10', '15', '20', '12'],
    correctAnswer: 1,
    explanation: 'a = 2k, b = 3k. Entonces 2k + 3k = 25, 5k = 25, k = 5. a = 2(5) = 10.',
    difficulty: 'medio'
  },
  {
    id: 22,
    area: 'Razonamiento Matemático',
    question: 'Calcule el interés generado por 1000 soles al 10% anual en 2 años.',
    options: ['100', '150', '200', '250', '300'],
    correctAnswer: 2,
    explanation: 'Interés simple: I = C×i×t = 1000 × 0.10 × 2 = 200 soles.',
    difficulty: 'fácil'
  },
  {
    id: 23,
    area: 'Razonamiento Matemático',
    question: 'Si A + A + A = 15, halle A × A',
    options: ['10', '15', '20', '25', '30'],
    correctAnswer: 3,
    explanation: '3A = 15, A = 5. Entonces A × A = 5 × 5 = 25.',
    difficulty: 'fácil'
  },
  {
    id: 24,
    area: 'Razonamiento Matemático',
    question: 'Halle x. Dato I: x+y=10. Dato II: y=4',
    options: ['I sola', 'II sola', 'Ambas juntas', 'Cada una por separado', 'Insuficiente'],
    correctAnswer: 2,
    explanation: 'Se necesitan ambos datos. De II: y=4. Sustituyendo en I: x+4=10, x=6.',
    difficulty: 'fácil'
  },
  {
    id: 25,
    area: 'Razonamiento Matemático',
    question: 'Inicio → x=5 → x=x+3 → Imprimir x. ¿Qué se imprime?',
    options: ['5', '3', '8', '15', '0'],
    correctAnswer: 2,
    explanation: 'x inicia en 5, luego x = 5+3 = 8. Se imprime 8.',
    difficulty: 'fácil'
  },

  // ═══════════════════════════════════════════
  // 2. RAZONAMIENTO VERBAL (026 - 050)
  // ═══════════════════════════════════════════
  {
    id: 26,
    area: 'Razonamiento Verbal',
    question: 'Sinónimo de EFÍMERO',
    options: ['Eterno', 'Pasajero', 'Duradero', 'Constante', 'Firme'],
    correctAnswer: 1,
    explanation: 'Efímero significa que dura poco tiempo, pasajero, fugaz.',
    difficulty: 'fácil'
  },
  {
    id: 27,
    area: 'Razonamiento Verbal',
    question: 'Antónimo de ALTRUISTA',
    options: ['Generoso', 'Egoísta', 'Solidario', 'Bondadoso', 'Amable'],
    correctAnswer: 1,
    explanation: 'Altruista es quien se preocupa por los demás. Su antónimo es egoísta.',
    difficulty: 'fácil'
  },
  {
    id: 28,
    area: 'Razonamiento Verbal',
    question: 'PERRO : JURÍA :: AVE : ?',
    options: ['Bandada', 'Rebaño', 'Enjambre', 'Manada', 'Cardumen'],
    correctAnswer: 0,
    explanation: 'Jauría es el colectivo de perros. Bandada es el colectivo de aves.',
    difficulty: 'fácil'
  },
  {
    id: 29,
    area: 'Razonamiento Verbal',
    question: 'El alumno _____ para el examen, por lo tanto obtuvo una _____ nota.',
    options: ['estudió - mala', 'jugó - excelente', 'estudió - buena', 'durmió - alta', 'cantó - buena'],
    correctAnswer: 2,
    explanation: 'La relación causa-efecto requiere coherencia: estudiar → buena nota.',
    difficulty: 'fácil'
  },
  {
    id: 30,
    area: 'Razonamiento Verbal',
    question: 'Texto: "La lectura estimula el cerebro y mejora la empatía." ¿Cuál es la idea principal?',
    options: ['La lectura es aburrida', 'Beneficios de la lectura', 'Tipos de libros', 'El cerebro humano', 'La empatía es difícil'],
    correctAnswer: 1,
    explanation: 'El texto presenta beneficios de la lectura: estimula el cerebro y mejora la empatía.',
    difficulty: 'fácil'
  },
  {
    id: 31,
    area: 'Razonamiento Verbal',
    question: 'Excluya el término: LIMA, Arequipa, Trujillo, Cusco, CHILE',
    options: ['LIMA', 'Arequipa', 'Trujillo', 'Cusco', 'CHILE'],
    correctAnswer: 4,
    explanation: 'Lima, Arequipa, Trujillo y Cusco son ciudades del Perú. Chile es un país, no una ciudad peruana.',
    difficulty: 'fácil'
  },
  {
    id: 32,
    area: 'Razonamiento Verbal',
    question: 'Estudió mucho, _____ no aprobó el examen.',
    options: ['porque', 'pero', 'además', 'por lo tanto', 'es decir'],
    correctAnswer: 1,
    explanation: '"Pero" es un conector adversativo que expresa contraste entre estudiar mucho y no aprobar.',
    difficulty: 'fácil'
  },
  {
    id: 33,
    area: 'Razonamiento Verbal',
    question: 'Ordene: I. Nació en Lima. II. Publicó su primera obra. III. Murió a los 80 años. IV. Cursó sus estudios primarios.',
    options: ['I-IV-II-III', 'I-II-IV-III', 'IV-I-II-III', 'III-II-IV-I', 'I-III-IV-II'],
    correctAnswer: 0,
    explanation: 'Orden cronológico lógico: nacer → estudiar → publicar obra → morir. I-IV-II-III.',
    difficulty: 'medio'
  },
  {
    id: 34,
    area: 'Razonamiento Verbal',
    question: 'Elija el enunciado que completa coherentemente el párrafo sobre el calentamiento global.',
    options: ['Las temperaturas aumentan constantemente.', 'El fútbol es popular.', 'La comida peruana es rica.', 'Los autos vuelan.', 'Las computadoras son rápidas.'],
    correctAnswer: 0,
    explanation: 'El calentamiento global se refiere al aumento constante de las temperaturas a nivel mundial.',
    difficulty: 'fácil'
  },
  {
    id: 35,
    area: 'Razonamiento Verbal',
    question: 'El juez _____ la sentencia final.',
    options: ['dijo', 'dictó', 'habló', 'puso', 'hizo'],
    correctAnswer: 1,
    explanation: '"Dictar" es el término preciso para un juez que emite una sentencia. Es precisión léxica.',
    difficulty: 'fácil'
  },
  {
    id: 36,
    area: 'Razonamiento Verbal',
    question: 'Ordene: / el perro / corrió / en el parque / rápidamente /',
    options: ['El perro corrió rápidamente en el parque', 'Rápidamente el perro en el parque corrió', 'En el parque corrió perro el rápidamente', 'Corrió el perro rápidamente parque en el', 'El perro parque en el corrió rápidamente'],
    correctAnswer: 0,
    explanation: 'Orden sintáctico correcto: Sujeto + Verbo + Adverbio + Complemento circunstancial.',
    difficulty: 'fácil'
  },
  {
    id: 37,
    area: 'Razonamiento Verbal',
    question: 'ADOPTAR y ADAPTAR son:',
    options: ['Sinónimos', 'Antónimos', 'Parónimos', 'Homófonos', 'Homógrafos'],
    correctAnswer: 2,
    explanation: 'Son parónimos: palabras similares en forma pero diferentes en significado.',
    difficulty: 'medio'
  },
  {
    id: 38,
    area: 'Razonamiento Verbal',
    question: 'Vino (bebida) y Vino (verbo venir) son:',
    options: ['Homógrafos', 'Homófonos', 'Parónimos', 'Sinónimos', 'Antónimos'],
    correctAnswer: 0,
    explanation: 'Son homógrafos: se escriben igual pero tienen diferente significado y origen.',
    difficulty: 'medio'
  },
  {
    id: 39,
    area: 'Razonamiento Verbal',
    question: 'La raíz "DEMO" significa:',
    options: ['Dios', 'Pueblo', 'Gobierno', 'Estudio', 'Tierra'],
    correctAnswer: 1,
    explanation: '"Demo" viene del griego "demos" que significa pueblo. Ejemplo: democracia = gobierno del pueblo.',
    difficulty: 'fácil'
  },
  {
    id: 40,
    area: 'Razonamiento Verbal',
    question: 'Que ocurre cada dos años:',
    options: ['Bimestral', 'Bienal', 'Bimensual', 'Bianual', 'Bicentenario'],
    correctAnswer: 1,
    explanation: 'Bienal = cada dos años. Bimestral = cada dos meses. Bianual = dos veces al año.',
    difficulty: 'fácil'
  },
  {
    id: 41,
    area: 'Razonamiento Verbal',
    question: 'I. El sol es una estrella. II. Da luz y calor. III. La luna es un satélite. IV. Es el centro del sistema solar. ¿Cuál oración se suprime?',
    options: ['I', 'II', 'III', 'IV', 'Ninguna'],
    correctAnswer: 2,
    explanation: 'La oración III habla de la luna, que es un tema diferente al sol. Es impertinente al tema central.',
    difficulty: 'medio'
  },
  {
    id: 42,
    area: 'Razonamiento Verbal',
    question: 'Un texto que informa de manera objetiva es:',
    options: ['Narrativo', 'Expositivo', 'Argumentativo', 'Poético', 'Dramático'],
    correctAnswer: 1,
    explanation: 'El texto expositivo tiene como propósito informar de manera objetiva sobre un tema.',
    difficulty: 'fácil'
  },
  {
    id: 43,
    area: 'Razonamiento Verbal',
    question: 'Las calles están mojadas. Se infiere que:',
    options: ['Es de día', 'Llovió', 'Hace calor', 'Hay tráfico', 'Es de noche'],
    correctAnswer: 1,
    explanation: 'La inferencia más lógica y directa es que llovió, ya que la lluvia moja las calles.',
    difficulty: 'fácil'
  },
  {
    id: 44,
    area: 'Razonamiento Verbal',
    question: 'Un artículo de opinión busca principalmente:',
    options: ['Entretener', 'Persuadir', 'Describir', 'Narrar', 'Definir'],
    correctAnswer: 1,
    explanation: 'El artículo de opinión tiene función apelativa: busca persuadir al lector con argumentos.',
    difficulty: 'fácil'
  },
  {
    id: 45,
    area: 'Razonamiento Verbal',
    question: 'MÉDICO : HOSPITAL :: PROFESOR : ?',
    options: ['Alumno', 'Libro', 'Colegio', 'Aula', 'Pizarra'],
    correctAnswer: 2,
    explanation: 'El médico trabaja en el hospital. El profesor trabaja en el colegio. Relación: profesional → lugar de trabajo.',
    difficulty: 'fácil'
  },
  {
    id: 46,
    area: 'Razonamiento Verbal',
    question: '"Tiene un corazón de oro" es un significado:',
    options: ['Denotativo', 'Connotativo', 'Literal', 'Científico', 'Técnico'],
    correctAnswer: 1,
    explanation: 'Es connotativo (figurado): no significa que su corazón sea literalmente de oro, sino que es muy bondadoso.',
    difficulty: 'fácil'
  },
  {
    id: 47,
    area: 'Razonamiento Verbal',
    question: '"Subir arriba" es un ejemplo de:',
    options: ['Solecismo', 'Pleonasmo', 'Anfibología', 'Cacofonía', 'Barbarismo'],
    correctAnswer: 1,
    explanation: 'Es un pleonasmo: redundancia innecesaria, pues "subir" ya implica ir hacia arriba.',
    difficulty: 'fácil'
  },
  {
    id: 48,
    area: 'Razonamiento Verbal',
    question: 'Marque la palabra escrita correctamente:',
    options: ['Haya', 'Haiga', 'Aiga', 'Hallaed', 'Haigan'],
    correctAnswer: 0,
    explanation: '"Haya" es la forma correcta del subjuntivo del verbo "haber". "Haiga" no existe.',
    difficulty: 'fácil'
  },
  {
    id: 49,
    area: 'Razonamiento Verbal',
    question: 'Un texto con ideas contradictorias carece de:',
    options: ['Cohesión', 'Coherencia', 'Adecuación', 'Ortografía', 'Tipografía'],
    correctAnswer: 1,
    explanation: 'La coherencia se refiere a la lógica y no contradicción de las ideas en un texto.',
    difficulty: 'fácil'
  },
  {
    id: 50,
    area: 'Razonamiento Verbal',
    question: 'El resumen de un texto debe contener:',
    options: ['Solo detalles', 'Las ideas principales', 'Opiniones personales', 'Ejemplos secundarios', 'Citas textuales largas'],
    correctAnswer: 1,
    explanation: 'Un resumen debe extraer y condensar las ideas principales del texto original.',
    difficulty: 'fácil'
  },

  // ═══════════════════════════════════════════
  // 3. GEOMETRÍA (051 - 054)
  // ═══════════════════════════════════════════
  {
    id: 51,
    area: 'Geometría',
    question: 'En un triángulo, la suma de sus ángulos internos es:',
    options: ['90°', '180°', '270°', '360°', '120°'],
    correctAnswer: 1,
    explanation: 'Propiedad fundamental: la suma de ángulos internos de cualquier triángulo es siempre 180°.',
    difficulty: 'fácil'
  },
  {
    id: 52,
    area: 'Geometría',
    question: 'En un rectángulo de lados 3 cm y 4 cm, ¿cuánto mide la diagonal?',
    options: ['5 cm', '6 cm', '7 cm', '8 cm', '9 cm'],
    correctAnswer: 0,
    explanation: 'Por el teorema de Pitágoras: d = √(3² + 4²) = √(9+16) = √25 = 5 cm.',
    difficulty: 'fácil'
  },
  {
    id: 53,
    area: 'Geometría',
    question: 'El ángulo central de una circunferencia mide 60°. ¿Cuánto mide el arco correspondiente?',
    options: ['30°', '60°', '120°', '90°', '45°'],
    correctAnswer: 1,
    explanation: 'El arco correspondiente a un ángulo central mide lo mismo que dicho ángulo: 60°.',
    difficulty: 'medio'
  },
  {
    id: 54,
    area: 'Geometría',
    question: 'Calcule el volumen de un cubo de arista 3 cm.',
    options: ['9 cm³', '18 cm³', '27 cm³', '36 cm³', '54 cm³'],
    correctAnswer: 2,
    explanation: 'Volumen del cubo = arista³ = 3³ = 27 cm³.',
    difficulty: 'fácil'
  },

  // ═══════════════════════════════════════════
  // 4. ARITMÉTICA (055 - 058)
  // ═══════════════════════════════════════════
  {
    id: 55,
    area: 'Aritmética',
    question: 'Calcule: -5 + 8 - (-3)',
    options: ['0', '6', '10', '-6', '-10'],
    correctAnswer: 1,
    explanation: '-5 + 8 - (-3) = -5 + 8 + 3 = 6.',
    difficulty: 'fácil'
  },
  {
    id: 56,
    area: 'Aritmética',
    question: '¿Cuál de los siguientes números es divisible por 3?',
    options: ['14', '22', '27', '31', '40'],
    correctAnswer: 2,
    explanation: 'Criterio de divisibilidad por 3: la suma de cifras debe ser múltiplo de 3. 2+7=9, que es divisible por 3.',
    difficulty: 'fácil'
  },
  {
    id: 57,
    area: 'Aritmética',
    question: 'Halle el MCM de 12 y 18.',
    options: ['6', '24', '36', '48', '72'],
    correctAnswer: 2,
    explanation: '12 = 2²×3. 18 = 2×3². MCM = 2²×3² = 4×9 = 36.',
    difficulty: 'medio'
  },
  {
    id: 58,
    area: 'Aritmética',
    question: '¿Cuántos factores primos tiene el número 12?',
    options: ['1', '2', '3', '4', '6'],
    correctAnswer: 1,
    explanation: '12 = 2² × 3. Los factores primos son 2 y 3, es decir, 2 factores primos diferentes.',
    difficulty: 'fácil'
  },

  // ═══════════════════════════════════════════
  // 5. ÁLGEBRA (059 - 062)
  // ═══════════════════════════════════════════
  {
    id: 59,
    area: 'Álgebra',
    question: 'Simplifique: 2³ × 2²',
    options: ['2⁵', '2⁶', '4⁵', '2¹', '8²'],
    correctAnswer: 0,
    explanation: 'Ley de exponentes: base igual se multiplican → se suman exponentes. 2³×2² = 2⁽³⁺²⁾ = 2⁵.',
    difficulty: 'fácil'
  },
  {
    id: 60,
    area: 'Álgebra',
    question: 'Halle el grado absoluto de P(x,y) = 3x²y³',
    options: ['2', '3', '5', '6', '1'],
    correctAnswer: 2,
    explanation: 'El grado absoluto es la suma de todos los exponentes: 2 + 3 = 5.',
    difficulty: 'fácil'
  },
  {
    id: 61,
    area: 'Álgebra',
    question: 'Desarrolle: (x + 3)²',
    options: ['x² + 9', 'x² + 6x + 9', 'x² + 3x + 9', 'x² + 6', 'x² - 9'],
    correctAnswer: 1,
    explanation: 'Binomio al cuadrado: (a+b)² = a² + 2ab + b². Entonces: x² + 2(x)(3) + 9 = x² + 6x + 9.',
    difficulty: 'fácil'
  },
  {
    id: 62,
    area: 'Álgebra',
    question: 'Resuelva: 2x + 5 = 15',
    options: ['3', '5', '7', '10', '2.5'],
    correctAnswer: 1,
    explanation: '2x = 15 - 5 = 10. x = 10/2 = 5.',
    difficulty: 'fácil'
  },

  // ═══════════════════════════════════════════
  // 6. TRIGONOMETRÍA (063 - 066)
  // ═══════════════════════════════════════════
  {
    id: 63,
    area: 'Trigonometría',
    question: 'Convierta 180° a radianes.',
    options: ['π/2 rad', 'π rad', '2π rad', 'π/4 rad', '3π/2 rad'],
    correctAnswer: 1,
    explanation: 'Factor de conversión: 180° × (π/180°) = π rad.',
    difficulty: 'fácil'
  },
  {
    id: 64,
    area: 'Trigonometría',
    question: 'Calcule sen(30°)',
    options: ['1/2', '√3/2', '1', '0', '√2/2'],
    correctAnswer: 0,
    explanation: 'Valor notable: sen(30°) = 1/2. Se obtiene del triángulo notable de 30°-60°.',
    difficulty: 'fácil'
  },
  {
    id: 65,
    area: 'Trigonometría',
    question: 'Simplifique: sen²(x) + cos²(x)',
    options: ['0', '1', '2', 'tan(x)', 'sec(x)'],
    correctAnswer: 1,
    explanation: 'Identidad pitagórica fundamental: sen²(x) + cos²(x) = 1 para todo valor de x.',
    difficulty: 'fácil'
  },
  {
    id: 66,
    area: 'Trigonometría',
    question: 'En un triángulo rectángulo, si cateto opuesto = 3 y cateto adyacente = 4, tan(θ) es:',
    options: ['3/5', '4/5', '3/4', '4/3', '5/3'],
    correctAnswer: 2,
    explanation: 'tan(θ) = cateto opuesto / cateto adyacente = 3/4.',
    difficulty: 'fácil'
  },

  // ═══════════════════════════════════════════
  // 7. FÍSICA (067 - 071)
  // ═══════════════════════════════════════════
  {
    id: 67,
    area: 'Física',
    question: 'Un auto viaja a 20 m/s durante 5 s. ¿Qué distancia recorre?',
    options: ['4 m', '25 m', '100 m', '50 m', '200 m'],
    correctAnswer: 2,
    explanation: 'MRU: d = v × t = 20 × 5 = 100 m.',
    difficulty: 'fácil'
  },
  {
    id: 68,
    area: 'Física',
    question: 'Un auto parte del reposo con a = 2 m/s². ¿Velocidad a los 4 s?',
    options: ['2 m/s', '4 m/s', '6 m/s', '8 m/s', '16 m/s'],
    correctAnswer: 3,
    explanation: 'MRUV: v = v₀ + at = 0 + 2(4) = 8 m/s.',
    difficulty: 'fácil'
  },
  {
    id: 69,
    area: 'Física',
    question: 'Fuerza necesaria para acelerar 5 kg a 3 m/s²',
    options: ['8 N', '15 N', '2 N', '1.6 N', '25 N'],
    correctAnswer: 1,
    explanation: 'Segunda Ley de Newton: F = m × a = 5 × 3 = 15 N.',
    difficulty: 'fácil'
  },
  {
    id: 70,
    area: 'Física',
    question: 'Energía cinética de masa 2 kg a velocidad 3 m/s',
    options: ['3 J', '6 J', '9 J', '12 J', '18 J'],
    correctAnswer: 2,
    explanation: 'Ec = ½mv² = ½(2)(3²) = ½(2)(9) = 9 J.',
    difficulty: 'fácil'
  },
  {
    id: 71,
    area: 'Física',
    question: 'Presión ejercida por columna de agua de 10 m (g=10 m/s², ρ=1000 kg/m³)',
    options: ['10 kPa', '100 kPa', '1000 kPa', '1 kPa', '50 kPa'],
    correctAnswer: 1,
    explanation: 'P = ρgh = 1000 × 10 × 10 = 100,000 Pa = 100 kPa.',
    difficulty: 'medio'
  },

  // ═══════════════════════════════════════════
  // 8. QUÍMICA (072 - 076)
  // ═══════════════════════════════════════════
  {
    id: 72,
    area: 'Química',
    question: 'Partícula con carga positiva en el núcleo:',
    options: ['Electrón', 'Neutrón', 'Protón', 'Fotón', 'Positrón'],
    correctAnswer: 2,
    explanation: 'El protón es la partícula subatómica con carga positiva que se encuentra en el núcleo atómico.',
    difficulty: 'fácil'
  },
  {
    id: 73,
    area: 'Química',
    question: 'El Sodio (Na) pertenece a los metales:',
    options: ['Alcalinos', 'Alcalinotérreos', 'Halógenos', 'Gases nobles', 'De transición'],
    correctAnswer: 0,
    explanation: 'El Sodio (Na) está en el Grupo IA de la tabla periódica, que son los metales alcalinos.',
    difficulty: 'fácil'
  },
  {
    id: 74,
    area: 'Química',
    question: 'Enlace formado por transferencia de electrones:',
    options: ['Covalente', 'Iónico', 'Metálico', 'Puente de hidrógeno', 'Van der Waals'],
    correctAnswer: 1,
    explanation: 'El enlace iónico se forma cuando un átomo transfiere electrones a otro, generando iones con cargas opuestas.',
    difficulty: 'fácil'
  },
  {
    id: 75,
    area: 'Química',
    question: 'Coeficiente del O₂ al balancear: C + O₂ → CO₂',
    options: ['1', '2', '3', '4', '0'],
    correctAnswer: 0,
    explanation: 'La ecuación ya está balanceada: 1C + 1O₂ → 1CO₂. El coeficiente del O₂ es 1.',
    difficulty: 'fácil'
  },
  {
    id: 76,
    area: 'Química',
    question: 'Masa molar del H₂O (H=1, O=16)',
    options: ['17 g/mol', '18 g/mol', '32 g/mol', '16 g/mol', '20 g/mol'],
    correctAnswer: 1,
    explanation: 'M(H₂O) = 2(1) + 16 = 2 + 16 = 18 g/mol.',
    difficulty: 'fácil'
  },

  // ═══════════════════════════════════════════
  // 9. LENGUA Y LITERATURA (077 - 080)
  // ═══════════════════════════════════════════
  {
    id: 77,
    area: 'Lengua y Literatura',
    question: 'Sustantivo colectivo de perro:',
    options: ['Arboleda', 'Jauría', 'Bandada', 'Enjambre', 'Rebaño'],
    correctAnswer: 1,
    explanation: 'Jauría es el sustantivo colectivo que designa un conjunto de perros.',
    difficulty: 'fácil'
  },
  {
    id: 78,
    area: 'Lengua y Literatura',
    question: 'Palabra esdrújula:',
    options: ['Café', 'Árbol', 'Música', 'Pared', 'Canción'],
    correctAnswer: 2,
    explanation: '"Música" es esdrújula: la sílaba tónica es "mú" (antepenúltima sílaba). Todas las esdrújulas se tildan.',
    difficulty: 'fácil'
  },
  {
    id: 79,
    area: 'Lengua y Literatura',
    question: 'Autor de "Tradiciones Peruanas":',
    options: ['Mario Vargas Llosa', 'Ricardo Palma', 'César Vallejo', 'José María Arguedas', 'Ciro Alegría'],
    correctAnswer: 1,
    explanation: 'Ricardo Palma (1833-1919) es el autor de "Tradiciones Peruanas", obra cumbre del costumbrismo peruano.',
    difficulty: 'fácil'
  },
  {
    id: 80,
    area: 'Lengua y Literatura',
    question: 'Autor de "La Ilíada":',
    options: ['Sócrates', 'Homero', 'Sófocles', 'Virgilio', 'Platón'],
    correctAnswer: 1,
    explanation: 'Homero es el autor de "La Ilíada" y "La Odisea", obras fundamentales de la literatura griega.',
    difficulty: 'fácil'
  },

  // ═══════════════════════════════════════════
  // 10. INFORMÁTICA (081 - 085)
  // ═══════════════════════════════════════════
  {
    id: 81,
    area: 'Informática',
    question: '¿Cuál es un dispositivo de salida?',
    options: ['Teclado', 'Mouse', 'Monitor', 'Escáner', 'Micrófono'],
    correctAnswer: 2,
    explanation: 'El monitor es un dispositivo de salida que muestra información al usuario. Los demás son de entrada.',
    difficulty: 'fácil'
  },
  {
    id: 82,
    area: 'Informática',
    question: 'Ejemplo de Sistema Operativo:',
    options: ['Word', 'Windows', 'Excel', 'Chrome', 'PowerPoint'],
    correctAnswer: 1,
    explanation: 'Windows es un sistema operativo desarrollado por Microsoft. Los demás son aplicaciones.',
    difficulty: 'fácil'
  },
  {
    id: 83,
    area: 'Informática',
    question: '¿Qué significa WWW?',
    options: ['World Wide Web', 'World Web Wide', 'Wide World Web', 'Web World Wide', 'World Wide Word'],
    correctAnswer: 0,
    explanation: 'WWW significa "World Wide Web" (Red Mundial), el sistema de distribución de información en Internet.',
    difficulty: 'fácil'
  },
  {
    id: 84,
    area: 'Informática',
    question: 'Atajo para copiar en Windows:',
    options: ['Ctrl + V', 'Ctrl + C', 'Ctrl + X', 'Ctrl + Z', 'Ctrl + P'],
    correctAnswer: 1,
    explanation: 'Ctrl + C es el atajo para copiar. Ctrl+V es pegar, Ctrl+X es cortar, Ctrl+Z es deshacer.',
    difficulty: 'fácil'
  },
  {
    id: 85,
    area: 'Informática',
    question: 'Programa malicioso que infecta archivos:',
    options: ['Antivirus', 'Firewall', 'Virus', 'Browser', 'Hardware'],
    correctAnswer: 2,
    explanation: 'Un virus informático es un programa malicioso diseñado para infectar archivos y replicarse.',
    difficulty: 'fácil'
  },

  // ═══════════════════════════════════════════
  // 11. HISTORIA DEL PERÚ Y DEL MUNDO (086 - 090)
  // ═══════════════════════════════════════════
  {
    id: 86,
    area: 'Historia',
    question: 'Fundador del Imperio Incaico según la leyenda:',
    options: ['Pachacútec', 'Manco Cápac', 'Atahualpa', 'Huascar', 'Túpac Yupanqui'],
    correctAnswer: 1,
    explanation: 'Según la leyenda, Manco Cápac y Mama Ocllo, hijos del Sol, fundaron el Imperio Incaico en el Cusco.',
    difficulty: 'fácil'
  },
  {
    id: 87,
    area: 'Historia',
    question: 'Proclamó la Independencia del Perú el 28 de julio de 1821:',
    options: ['Simón Bolívar', 'Don José de San Martín', 'Túpac Amaru II', 'Sucre', 'Ramón Castilla'],
    correctAnswer: 1,
    explanation: 'El General Don José de San Martín proclamó la Independencia del Perú el 28 de julio de 1821 en Lima.',
    difficulty: 'fácil'
  },
  {
    id: 88,
    area: 'Historia',
    question: 'Héroe Máximo de la Marina de Guerra del Perú:',
    options: ['Alfonso Ugarte', 'Miguel Grau Seminario', 'Francisco Bolognesi', 'Andrés Avelino Cáceres', 'José Quiñones'],
    correctAnswer: 1,
    explanation: 'Miguel Grau Seminario, "El Caballero de los Mares", es el Héroe Máximo de la Marina de Guerra del Perú.',
    difficulty: 'fácil'
  },
  {
    id: 89,
    area: 'Historia',
    question: 'Cultura antigua famosa por las Pirámides de Guiza:',
    options: ['Grecia', 'Roma', 'Egipto', 'Mesopotamia', 'China'],
    correctAnswer: 2,
    explanation: 'Las Pirámides de Guiza fueron construidas por la civilización egipcia antigua.',
    difficulty: 'fácil'
  },
  {
    id: 90,
    area: 'Historia',
    question: 'Año de inicio de la Primera Guerra Mundial:',
    options: ['1914', '1918', '1939', '1945', '1912'],
    correctAnswer: 0,
    explanation: 'La Primera Guerra Mundial inició en 1914 y terminó en 1918.',
    difficulty: 'fácil'
  },

  // ═══════════════════════════════════════════
  // 12. GEOGRAFÍA (091 - 095)
  // ═══════════════════════════════════════════
  {
    id: 91,
    area: 'Geografía',
    question: 'Río más largo del Perú y del mundo:',
    options: ['Rímac', 'Ucayali', 'Amazonas', 'Marañón', 'Titicaca'],
    correctAnswer: 2,
    explanation: 'El río Amazonas es el más largo del Perú y considerado el más largo del mundo con aproximadamente 7,062 km.',
    difficulty: 'fácil'
  },
  {
    id: 92,
    area: 'Geografía',
    question: 'Cordillera más alta del Perú:',
    options: ['Cordillera Blanca', 'Cordillera Negra', 'Cordillera Huayhuash', 'Cordillera Volcánica', 'Cordillera Oriental'],
    correctAnswer: 0,
    explanation: 'La Cordillera Blanca, en Ancash, es la más alta del Perú con nevados como el Huascarán (6,768 m).',
    difficulty: 'fácil'
  },
  {
    id: 93,
    area: 'Geografía',
    question: 'Ancho de las millas del Mar Territorial del Perú:',
    options: ['12 millas', '50 millas', '100 millas', '200 millas', '500 millas'],
    correctAnswer: 3,
    explanation: 'El Perú ejerce sobería sobre 200 millas marinas, establecido por decreto en 1947 y reconocido internacionalmente.',
    difficulty: 'fácil'
  },
  {
    id: 94,
    area: 'Geografía',
    question: 'Corriente marina de aguas frías que recorre la costa peruana:',
    options: ['Corriente del Niño', 'Corriente de Humboldt', 'Corriente del Golfo', 'Corriente ecuatorial', 'Corriente del Brasil'],
    correctAnswer: 1,
    explanation: 'La Corriente de Humboldt (o Corriente Peruana) es de aguas frías y recorre la costa peruana de sur a norte.',
    difficulty: 'fácil'
  },
  {
    id: 95,
    area: 'Geografía',
    question: 'Línea imaginaria que divide la Tierra en hemisferio Norte y Sur:',
    options: ['Meridiano de Greenwich', 'Ecuador Terrestre', 'Trópico de Cáncer', 'Trópico de Capricornio', 'Círculo Polar'],
    correctAnswer: 1,
    explanation: 'El Ecuador Terrestre (latitud 0°) divide la Tierra en hemisferio Norte y hemisferio Sur.',
    difficulty: 'fácil'
  },

  // ═══════════════════════════════════════════
  // 13. INGLÉS (096 - 100)
  // ═══════════════════════════════════════════
  {
    id: 96,
    area: 'Inglés',
    question: 'Complete: She _____ a student.',
    options: ['am', 'is', 'are', 'be', 'were'],
    correctAnswer: 1,
    explanation: 'Con el pronombre "She" (tercera persona singular) se usa "is" del verbo "to be".',
    difficulty: 'fácil'
  },
  {
    id: 97,
    area: 'Inglés',
    question: 'What day comes after Monday?',
    options: ['Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    correctAnswer: 1,
    explanation: 'After Monday comes Tuesday. The order is: Sunday, Monday, Tuesday, Wednesday...',
    difficulty: 'fácil'
  },
  {
    id: 98,
    area: 'Inglés',
    question: 'Text: "The cat is under the chair." Where is the cat?',
    options: ['On the chair', 'Under the chair', 'Next to the chair', 'In the chair', 'Behind the chair'],
    correctAnswer: 1,
    explanation: '"Under" means below/beneath. The cat is under the chair (debajo de la silla).',
    difficulty: 'fácil'
  },
  {
    id: 99,
    area: 'Inglés',
    question: 'He _____ soccer every weekend.',
    options: ['play', 'plays', 'playing', 'played', 'is play'],
    correctAnswer: 1,
    explanation: 'Simple Present con tercera persona singular (He) → se agrega "s" al verbo: plays.',
    difficulty: 'fácil'
  },
  {
    id: 100,
    area: 'Inglés',
    question: 'We have class _____ 8:00 AM.',
    options: ['in', 'on', 'at', 'for', 'by'],
    correctAnswer: 2,
    explanation: 'Para horas específicas se usa la preposición "at": at 8:00 AM.',
    difficulty: 'fácil'
  }
];

export const getQuestionsByArea = (area: string): Question[] => {
  return questions.filter(q => q.area === area);
};

export const areas = [...new Set(questions.map(q => q.area))];

export const EXAM_CONFIG = {
  title: 'Simulacro N°02',
  subtitle: 'Escuela de Oficiales de la Marina de Guerra del Perú',
  totalQuestions: 100,
  duration: 120, // 120 minutes
  project: '4. Simulación Exámenes PRE'
};
