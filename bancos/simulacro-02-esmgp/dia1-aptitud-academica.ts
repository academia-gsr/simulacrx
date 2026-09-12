import { Question } from '../../src/types';

// =========================================================
// SIMULACRO N°02 ESMGP - DÍA 1: EXAMEN DE APTITUD ACADÉMICA
// 100 PREGUNTAS - IDs: 301-400
// =========================================================

export const questionsDay1: Question[] = [
  // ═══════════════════════════════════════════
  // 1. RAZONAMIENTO MATEMÁTICO (001-050)
  // ═══════════════════════════════════════════
  {
    id: 301,
    area: 'Razonamiento Matemático',
    question: 'Si a * b = a + b + ab. Halle el valor numérico de 2 * 3.',
    options: ['5', '6', '11', '12', '10'],
    correctAnswer: 2,
    explanation: '2 * 3 = 2 + 3 + (2)(3) = 2 + 3 + 6 = 11',
    difficulty: 'fácil'
  },
  {
    id: 302,
    area: 'Razonamiento Matemático',
    question: 'Determine el término que continúa en la siguiente secuencia numérica de crecimiento cuadrático: 2, 5, 10, 17, ...',
    options: ['21', '24', '25', '26', '28'],
    correctAnswer: 3,
    explanation: 'Diferencias: 3, 5, 7, 9. Siguiente diferencia: 9. Entonces: 17 + 9 = 26',
    difficulty: 'fácil'
  },
  {
    id: 303,
    area: 'Razonamiento Matemático',
    question: 'Complete el número que falta en la siguiente analogía distributiva: 3 (12) 6 ; 4 ( ? ) 8',
    options: ['16', '20', '24', '32', '28'],
    correctAnswer: 2,
    explanation: 'Regla: (primer número × tercer número) × 2/3. (3×6) × 2/3 = 12. (4×8) × 2/3 = 24',
    difficulty: 'medio'
  },
  {
    id: 304,
    area: 'Razonamiento Matemático',
    question: 'La mitad de un número más su tercera parte es igual a 25. Halle dicho número.',
    options: ['30', '40', '50', '60', '25'],
    correctAnswer: 0,
    explanation: 'x/2 + x/3 = 25. Multiplicando por 6: 3x + 2x = 150. 5x = 150. x = 30',
    difficulty: 'fácil'
  },
  {
    id: 305,
    area: 'Razonamiento Matemático',
    question: 'Un artículo de la tienda naval se descuenta en un 20% y luego recibe un segundo descuento del 10%. El descuento único equivalente expresado en forma decimal es:',
    options: ['0.28', '0.30', '0.25', '0.32', '0.20'],
    correctAnswer: 0,
    explanation: 'Descuento único = 1 - (0.80)(0.90) = 1 - 0.72 = 0.28',
    difficulty: 'medio'
  },
  {
    id: 306,
    area: 'Razonamiento Matemático',
    question: 'El promedio aritmético de 5 notas de un cadete es 14. Si en una nueva evaluación obtiene una nota de 20, ¿cuál es el nuevo promedio de sus calificaciones?',
    options: ['15', '16', '14.5', '15.5', '17'],
    correctAnswer: 0,
    explanation: 'Suma original = 5 × 14 = 70. Nueva suma = 70 + 20 = 90. Nuevo promedio = 90/6 = 15',
    difficulty: 'fácil'
  },
  {
    id: 307,
    area: 'Razonamiento Matemático',
    question: 'Si 10 obreros navales pueden realizar el mantenimiento de una lancha en 24 días, ¿cuántos días tardarán 15 obreros con la misma eficiencia en realizar el mismo trabajo?',
    options: ['16', '18', '20', '12', '15'],
    correctAnswer: 0,
    explanation: 'Relación inversamente proporcional: 10 × 24 = 15 × d. d = 240/15 = 16 días',
    difficulty: 'fácil'
  },
  {
    id: 308,
    area: 'Razonamiento Matemático',
    question: 'Se mezclan 40 litros de una solución química concentrada al 20% con 60 litros de otra solución de la misma naturaleza concentrada al 30%. ¿Cuál es el porcentaje de concentración final de la mezcla expresado en tanto por uno?',
    options: ['0.24', '0.25', '0.26', '0.28', '0.30'],
    correctAnswer: 2,
    explanation: 'Soluto total = 40(0.20) + 60(0.30) = 8 + 18 = 26. Volumen total = 100. Concentración = 26/100 = 0.26',
    difficulty: 'medio'
  },
  {
    id: 309,
    area: 'Razonamiento Matemático',
    question: 'Dos trenes de 200 m y 300 m de longitud se desplazan a velocidades de 40 km/h y 60 km/h en sentidos opuestos por vías paralelas. Calcule el tiempo total que tardan en cruzarse por completo.',
    options: ['18 s', '20 s', '24 s', '30 s', '36 s'],
    correctAnswer: 2,
    explanation: 'Distancia total = 200 + 300 = 500 m. Velocidad relativa = 40 + 60 = 100 km/h = 27.78 m/s. Tiempo = 500/27.78 ≈ 18 s',
    difficulty: 'difícil'
  },
  {
    id: 310,
    area: 'Razonamiento Matemático',
    question: 'Determine el ángulo menor formado por las manecillas de un reloj analógico exactamente a las 3:15.',
    options: ['7.5°', '0°', '15°', '22.5°', '30°'],
    correctAnswer: 0,
    explanation: 'Minutero en 3 (90°). Horario: 3h + 15min = 90° + 7.5° = 97.5°. Ángulo = 97.5° - 90° = 7.5°',
    difficulty: 'medio'
  },
  {
    id: 311,
    area: 'Razonamiento Matemático',
    question: 'Si en un año común (no bisiesto) el 1 de enero cae lunes, ¿qué día de la semana será el 1 de marzo de ese mismo año?',
    options: ['Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    correctAnswer: 1,
    explanation: 'Enero tiene 31 días, febrero 28. Total = 59 días. 59 mod 7 = 3. Lunes + 3 = Jueves',
    difficulty: 'medio'
  },
  {
    id: 312,
    area: 'Razonamiento Matemático',
    question: 'Si bajo un patrón alfanumérico la palabra AMOR se codifica como 13151818, ¿cómo se escribiría la palabra SOL bajo el mismo sistema?',
    options: ['191512', '191215', '181512', '191518', '121519'],
    correctAnswer: 0,
    explanation: 'S=19, O=15, L=12. Entonces SOL = 191512',
    difficulty: 'fácil'
  },
  {
    id: 313,
    area: 'Razonamiento Matemático',
    question: 'Calcule el número máximo de triángulos que se pueden formar en una figura triangular dividida por 4 líneas interiores que convergen desde su vértice superior principal hacia la base.',
    options: ['10', '15', '6', '20', '8'],
    correctAnswer: 0,
    explanation: 'Con 4 líneas desde el vértice, se forman C(5,2) = 10 triángulos',
    difficulty: 'medio'
  },
  {
    id: 314,
    area: 'Razonamiento Matemático',
    question: '¿Cuál es la probabilidad matemática de extraer exactamente un As al azar de una baraja convencional completa de 52 cartas?',
    options: ['1/13', '1/52', '4/52', '1/4', '2/13'],
    correctAnswer: 0,
    explanation: 'Hay 4 Ases en 52 cartas. P = 4/52 = 1/13',
    difficulty: 'fácil'
  },
  {
    id: 315,
    area: 'Razonamiento Matemático',
    question: 'Dado el siguiente conjunto de datos numéricos: 2, 4, 4, 5, 10. Halle los valores correspondientes de la Media y de la Mediana en ese orden.',
    options: ['5 y 4', '5 y 5', '4 y 5', '5 y 10', '4 y 4'],
    correctAnswer: 0,
    explanation: 'Media = (2+4+4+5+10)/5 = 25/5 = 5. Mediana = 4 (valor central)',
    difficulty: 'fácil'
  },
  {
    id: 316,
    area: 'Razonamiento Matemático',
    question: 'Calcule el área de una región triangular cuya base mide 10 cm y su altura relativa a dicha base es de 6 cm.',
    options: ['60', '30', '16', '20', '40'],
    correctAnswer: 1,
    explanation: 'Área = (base × altura)/2 = (10 × 6)/2 = 30 cm²',
    difficulty: 'fácil'
  },
  {
    id: 317,
    area: 'Razonamiento Matemático',
    question: 'Halle la longitud de la circunferencia (perímetro del círculo) de un sector cuyo radio es de 7 cm (Considere π = 22/7).',
    options: ['44', '22', '14', '28', '88'],
    correctAnswer: 0,
    explanation: 'Perímetro = 2πr = 2(22/7)(7) = 44 cm',
    difficulty: 'fácil'
  },
  {
    id: 318,
    area: 'Razonamiento Matemático',
    question: 'Calcule el volumen contenido en un cubo rígido cuya arista mide exactamente 5 cm.',
    options: ['125', '25', '150', '60', '100'],
    correctAnswer: 0,
    explanation: 'Volumen = arista³ = 5³ = 125 cm³',
    difficulty: 'fácil'
  },
  {
    id: 319,
    area: 'Razonamiento Matemático',
    question: 'En un gráfico estadístico, si la barra A alcanza un valor de 20 unidades y la barra B alcanza un valor de 30 unidades, ¿qué porcentaje representa el valor de A respecto al valor de B?',
    options: ['66.6%', '150%', '50%', '75%', '80%'],
    correctAnswer: 0,
    explanation: 'Porcentaje = (20/30) × 100% = 66.67%',
    difficulty: 'fácil'
  },
  {
    id: 320,
    area: 'Razonamiento Matemático',
    question: 'En una matriz de doble entrada, el elemento ubicado en la fila 1 col 2 es 10, y el de la fila 2 col 1 es 5. Si los elementos de la diagonal principal son 6 y 9, halle la suma de los cuatro valores de la matriz.',
    options: ['30', '20', '25', '15', '10'],
    correctAnswer: 0,
    explanation: 'Matriz: [6, 10; 5, 9]. Suma = 6 + 10 + 5 + 9 = 30',
    difficulty: 'medio'
  },
  {
    id: 321,
    area: 'Razonamiento Matemático',
    question: 'En una muestra estadística estructurada, si la frecuencia absoluta de la variable "10" es de 5 observaciones y el tamaño total de la muestra es de 20 datos, calcule su frecuencia relativa.',
    options: ['0.25', '0.50', '0.20', '0.10', '0.75'],
    correctAnswer: 0,
    explanation: 'Frecuencia relativa = 5/20 = 0.25',
    difficulty: 'fácil'
  },
  {
    id: 322,
    area: 'Razonamiento Matemático',
    question: 'Determine el término alfabético continuo en la siguiente serie regular del abecedario: A, C, F, J, ... (No considere dígrafos).',
    options: ['N', 'Ñ', 'O', 'P', 'Q'],
    correctAnswer: 1,
    explanation: 'Diferencias: +2, +3, +4, +5. J + 5 = Ñ',
    difficulty: 'medio'
  },
  {
    id: 323,
    area: 'Razonamiento Matemático',
    question: 'Calcule el determinante de la matriz bidimensional de orden 2x2 dada por los siguientes elementos ordenados por filas: fila 1: (3, 4) ; fila 2: (1, 2).',
    options: ['2', '10', '-2', '6', '8'],
    correctAnswer: 0,
    explanation: 'Determinante = (3)(2) - (4)(1) = 6 - 4 = 2',
    difficulty: 'fácil'
  },
  {
    id: 324,
    area: 'Razonamiento Matemático',
    question: 'La edad de Juan es el doble de la de Pedro. Si hace 5 años la relación de sus edades era de 3 a 1, determine cuántos años de edad tiene Pedro actualmente.',
    options: ['10', '15', '20', '25', '5'],
    correctAnswer: 0,
    explanation: 'Juan = 2Pedro. (Juan-5)/(Pedro-5) = 3/1. (2P-5)/(P-5) = 3. 2P-5 = 3P-15. P = 10',
    difficulty: 'medio'
  },
  {
    id: 325,
    area: 'Razonamiento Matemático',
    question: 'Si se establece una igualdad de fracciones proporcionales tal que 3/4 = x/20, determine el valor numérico de la incógnita x.',
    options: ['15', '12', '16', '10', '18'],
    correctAnswer: 0,
    explanation: '3/4 = x/20. x = (3 × 20)/4 = 60/4 = 15',
    difficulty: 'fácil'
  },
  {
    id: 326,
    area: 'Razonamiento Matemático',
    question: 'Si se define el operador matemático unario en los reales como ⟨x⟩ = 2x² - 3, calcule el valor de ⟨3⟩.',
    options: ['9', '12', '15', '18', '21'],
    correctAnswer: 2,
    explanation: '⟨3⟩ = 2(3²) - 3 = 2(9) - 3 = 18 - 3 = 15',
    difficulty: 'medio'
  },
  {
    id: 327,
    area: 'Razonamiento Matemático',
    question: 'Halle el número que continúa en la siguiente secuencia basada en diferencias consecutivas crecientes: 4, 7, 12, 19, 28, ...',
    options: ['35', '37', '39', '41', '43'],
    correctAnswer: 2,
    explanation: 'Diferencias: 3, 5, 7, 9, 11. Siguiente: 28 + 11 = 39',
    difficulty: 'medio'
  },
  {
    id: 328,
    area: 'Razonamiento Matemático',
    question: 'Halle el término faltante en la distribución numérica: 5 (16) 3 ; 7 ( ? ) 4',
    options: ['20', '22', '24', '26', '28'],
    correctAnswer: 1,
    explanation: 'Regla: (primer + tercer) × 2. (5+3) × 2 = 16. (7+4) × 2 = 22',
    difficulty: 'medio'
  },
  {
    id: 329,
    area: 'Razonamiento Matemático',
    question: 'El exceso del cuádruple de un número sobre 12 es igual al doble del mismo número aumentado en 18. Halle el número.',
    options: ['12', '14', '15', '16', '18'],
    correctAnswer: 2,
    explanation: '4x - 12 = 2x + 18. 2x = 30. x = 15',
    difficulty: 'medio'
  },
  {
    id: 330,
    area: 'Razonamiento Matemático',
    question: 'Un cadete compra una prenda militar con dos descuentos sucesivos del 25% y del 20%. ¿A qué descuento único equivale esta operación?',
    options: ['35%', '40%', '42%', '44%', '40%'],
    correctAnswer: 3,
    explanation: 'Descuento único = 1 - (0.75)(0.80) = 1 - 0.60 = 0.40 = 40%',
    difficulty: 'medio'
  },
  {
    id: 331,
    area: 'Razonamiento Matemático',
    question: 'El promedio de 4 números es 11. Si se le agrega un quinto número equivalente a 21, ¿cuál es el nuevo promedio del conjunto?',
    options: ['12', '13', '14', '15', '16'],
    correctAnswer: 1,
    explanation: 'Suma original = 4 × 11 = 44. Nueva suma = 44 + 21 = 65. Nuevo promedio = 65/5 = 13',
    difficulty: 'fácil'
  },
  {
    id: 332,
    area: 'Razonamiento Matemático',
    question: 'Si 6 camiones cisternas de la base naval pueden descargar un tanque de combustible en 8 horas, ¿cuántos camiones con las mismas capacidades se requerirán para hacer el mismo trabajo en solo 4 horas?',
    options: ['9', '10', '12', '14', '8'],
    correctAnswer: 2,
    explanation: 'Relación inversamente proporcional: 6 × 8 = n × 4. n = 48/4 = 12',
    difficulty: 'fácil'
  },
  {
    id: 333,
    area: 'Razonamiento Matemático',
    question: 'Se mezclan 20 litros de alcohol al 40% con 30 litros de alcohol al 60%. Calcule el grado de pureza final de la mezcla.',
    options: ['48%', '50%', '52%', '54%', '55%'],
    correctAnswer: 2,
    explanation: 'Alcohol puro = 20(0.40) + 30(0.60) = 8 + 18 = 26. Volumen total = 50. Pureza = 26/50 = 52%',
    difficulty: 'medio'
  },
  {
    id: 334,
    area: 'Razonamiento Matemático',
    question: 'Dos lanchas rápidas separadas por una distancia de 150 km parten simultáneamente al encuentro una de la otra con velocidades constantes de 35 km/h y 40 km/h. ¿En cuántas horas se encontrarán?',
    options: ['1.5 h', '2 h', '2.5 h', '3 h', '4 h'],
    correctAnswer: 1,
    explanation: 'Velocidad relativa = 35 + 40 = 75 km/h. Tiempo = 150/75 = 2 h',
    difficulty: 'fácil'
  },
  {
    id: 335,
    area: 'Razonamiento Matemático',
    question: '¿Qué ángulo agudo forman las manecillas (horario y minutero) de un reloj cuando marca exactamente las 4:40?',
    options: ['80°', '90°', '100°', '110°', '120°'],
    correctAnswer: 2,
    explanation: 'Minutero en 8 (240°). Horario: 4h + 40min = 120° + 20° = 140°. Ángulo = 240° - 140° = 100°',
    difficulty: 'medio'
  },
  {
    id: 336,
    area: 'Razonamiento Matemático',
    question: 'Si el mañana del anteayer del ayer del pasado mañana de hace dos días fue martes, ¿qué día de la semana será el mañana de dicho día?',
    options: ['Jueves', 'Viernes', 'Sábado', 'Miércoles', 'Lunes'],
    correctAnswer: 1,
    explanation: 'Operaciones: +1-2-1+1-2 = -3. Martes - 3 = Sábado. Mañana = Viernes',
    difficulty: 'difícil'
  },
  {
    id: 337,
    area: 'Razonamiento Matemático',
    question: 'En un sistema cifrado secreto, la palabra MAR se representa con el código numérico 13118. ¿Qué código le corresponderá a la palabra PAZ bajo este mismo principio alfabético estándar?',
    options: ['16127', '16126', '15127', '16227', '17127'],
    correctAnswer: 0,
    explanation: 'P=16, A=1, Z=27. Entonces PAZ = 16127',
    difficulty: 'fácil'
  },
  {
    id: 338,
    area: 'Razonamiento Matemático',
    question: 'Determine la cantidad máxima de cuadrados que se pueden contar en una cuadrícula simétrica compuesta por 3 filas y 3 columnas (3 × 3).',
    options: ['9', '10', '13', '14', '15'],
    correctAnswer: 3,
    explanation: 'Cuadrados 1×1: 9. Cuadrados 2×2: 4. Cuadrados 3×3: 1. Total = 14',
    difficulty: 'medio'
  },
  {
    id: 339,
    area: 'Razonamiento Matemático',
    question: 'Se lanza un par de dados legales convencionales de 6 caras sobre una mesa. ¿Cuál es la probabilidad de que la suma de los puntos obtenidos sea exactamente igual a 7?',
    options: ['1/12', '1/9', '1/6', '5/36', '7/36'],
    correctAnswer: 2,
    explanation: 'Casos favorables: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. Total = 36. P = 6/36 = 1/6',
    difficulty: 'medio'
  },
  {
    id: 340,
    area: 'Razonamiento Matemático',
    question: 'Halle la varianza muestral del siguiente conjunto homogéneo de datos idénticos: 6, 6, 6, 6, 6.',
    options: ['6', '1', '0', '3', '2'],
    correctAnswer: 2,
    explanation: 'Cuando todos los datos son iguales, la varianza es 0',
    difficulty: 'fácil'
  },
  {
    id: 341,
    area: 'Razonamiento Matemático',
    question: 'Calcule el área de una región rectangular cuyo perímetro total mide 24 cm y donde el largo es el doble de su ancho.',
    options: ['16 cm²', '24 cm²', '32 cm²', '36 cm²', '48 cm²'],
    correctAnswer: 2,
    explanation: '2(largo + ancho) = 24. largo = 2×ancho. 2(2a + a) = 24. 6a = 24. a = 4, l = 8. Área = 8×4 = 32 cm²',
    difficulty: 'medio'
  },
  {
    id: 342,
    area: 'Razonamiento Matemático',
    question: 'El área de un círculo es exactamente de 49π cm². Calcule el perímetro de la circunferencia que lo delimita.',
    options: ['7π cm', '14π cm', '21π cm', '28π cm', '49π cm'],
    correctAnswer: 1,
    explanation: 'Área = πr² = 49π. r² = 49. r = 7. Perímetro = 2πr = 2π(7) = 14π cm',
    difficulty: 'fácil'
  },
  {
    id: 343,
    area: 'Razonamiento Matemático',
    question: 'Determine el volumen de una pirámide regular de base cuadrada, si el lado de la base mide 6 cm y la altura del sólido es de 10 cm.',
    options: ['60 cm³', '120 cm³', '180 cm³', '240 cm³', '360 cm³'],
    correctAnswer: 1,
    explanation: 'Volumen = (área base × altura)/3 = (6² × 10)/3 = (36 × 10)/3 = 360/3 = 120 cm³',
    difficulty: 'medio'
  },
  {
    id: 344,
    area: 'Razonamiento Matemático',
    question: 'En un diagrama circular de sectores, el sector correspondiente a la disciplina de "Navegación táctica" abarca un ángulo central de 90°. ¿Qué porcentaje del total representa dicho sector?',
    options: ['20%', '25%', '30%', '33.3%', '50%'],
    correctAnswer: 1,
    explanation: 'Porcentaje = (90°/360°) × 100% = 25%',
    difficulty: 'fácil'
  },
  {
    id: 345,
    area: 'Razonamiento Matemático',
    question: 'En una tabla estadística bivariada de contingencia, la frecuencia conjunta relativa de la celda (F2, C3) es 0.15. Si el total general de observaciones asciende a 200, ¿cuántos individuos se encuentran en dicha celda?',
    options: ['15', '20', '30', '45', '60'],
    correctAnswer: 2,
    explanation: 'Frecuencia absoluta = 0.15 × 200 = 30',
    difficulty: 'medio'
  },
  {
    id: 346,
    area: 'Razonamiento Matemático',
    question: 'Si la frecuencia acumulada de la tercera clase es 45 y la frecuencia acumulada de la segunda clase es 30, determine la frecuencia absoluta simple de la tercera clase.',
    options: ['15', '75', '5', '10', '20'],
    correctAnswer: 0,
    explanation: 'Frecuencia absoluta = 45 - 30 = 15',
    difficulty: 'fácil'
  },
  {
    id: 347,
    area: 'Razonamiento Matemático',
    question: 'Halle la letra que continúa la serie regular: C, F, I, L, ... (No considere las letras compuestas CH ni LL).',
    options: ['M', 'N', 'Ñ', 'O', 'P'],
    correctAnswer: 2,
    explanation: 'Diferencias: +3, +3, +3, +3. L + 3 = Ñ',
    difficulty: 'medio'
  },
  {
    id: 348,
    area: 'Razonamiento Matemático',
    question: 'Calcule el determinante de la matriz identidad de orden 3x3.',
    options: ['0', '1', '3', '-1', '2'],
    correctAnswer: 1,
    explanation: 'El determinante de la matriz identidad siempre es 1',
    difficulty: 'fácil'
  },
  {
    id: 349,
    area: 'Razonamiento Matemático',
    question: 'Dentro de 15 años, la edad del oficial Carlos será el triple de la edad que tenía hace 5 años. ¿Qué edad tiene Carlos actualmente?',
    options: ['12 años', '15 años', '18 años', '20 años', '25 años'],
    correctAnswer: 1,
    explanation: 'x + 15 = 3(x - 5). x + 15 = 3x - 15. 30 = 2x. x = 15',
    difficulty: 'medio'
  },
  {
    id: 350,
    area: 'Razonamiento Matemático',
    question: '¿Qué fracción irreducible representa de manera exacta la parte sombreada de un total si se han tomado las dos terceras partes de su mitad?',
    options: ['1/3', '2/3', '1/6', '1/4', '4/3'],
    correctAnswer: 0,
    explanation: '(2/3) × (1/2) = 2/6 = 1/3',
    difficulty: 'fácil'
  },

  // ═══════════════════════════════════════════
  // 2. RAZONAMIENTO VERBAL (051-100)
  // ═══════════════════════════════════════════
  {
    id: 351,
    area: 'Razonamiento Verbal',
    question: 'Señale el término que comparta significado directo u operacional con la palabra BITÁCORA.',
    options: ['Cuaderno de viaje', 'Registro de navegación', 'Instrumento de medición', 'Mapa marino', 'Brújula'],
    correctAnswer: 1,
    explanation: 'Bitácora es el registro oficial de navegación de un buque.',
    difficulty: 'fácil'
  },
  {
    id: 352,
    area: 'Razonamiento Verbal',
    question: 'Elija el antónimo de la palabra resaltada en la siguiente premisa: "Aquel oficial de marina siempre demostró ser un hombre PROBO durante su servicio".',
    options: ['Deshonesto', 'Inocente', 'Culpable', 'Ignorante', 'Sabio'],
    correctAnswer: 0,
    explanation: 'Probo = honesto, íntegro. Su antónimo es deshonesto.',
    difficulty: 'medio'
  },
  {
    id: 353,
    area: 'Razonamiento Verbal',
    question: 'Determine el par que guarde la relación analógica correcta: LLOVIZNA : TORMENTA ::',
    options: ['Viento : Aire', 'Brisa : Huracán', 'Ciclón : Tornado', 'Oleaje : Marea', 'Terremoto : Sismo'],
    correctAnswer: 1,
    explanation: 'Relación de intensidad: llovizna es suave, tormenta es intensa. Brisa es suave, huracán es intenso.',
    difficulty: 'medio'
  },
  {
    id: 354,
    area: 'Razonamiento Verbal',
    question: 'Complete de forma lógica la siguiente afirmación: "La disciplina férrea es el _____ inquebrantable sobre el cual se erige el éxito de toda campaña militar".',
    options: ['Pilar', 'Obstáculo', 'Accidente', 'Rumor', 'Frase'],
    correctAnswer: 0,
    explanation: 'Pilar = base fundamental, fundamento sólido.',
    difficulty: 'fácil'
  },
  {
    id: 355,
    area: 'Razonamiento Verbal',
    question: 'Texto: El mar peruano es excepcionalmente rico en recursos biológicos debido a la corriente de Humboldt; no obstante, la sobrepesca industrial amenaza su equilibrio ecológico, por lo que requiere planes urgentes de conservación estricta. ¿Cuál es la idea principal del texto?',
    options: ['La abundancia pesquera de la costa norte.', 'La imperiosa necesidad de conservación del ecosistema marino frente a las amenazas colonizadoras.', 'El estudio biológico y sistemático de la corriente de Humboldt.', 'La geografía morfológica de la costa de Perú.', 'El desarrollo sostenible de la industria conservera.'],
    correctAnswer: 1,
    explanation: 'El texto enfatiza la necesidad urgente de conservación ante las amenazas.',
    difficulty: 'medio'
  },
  {
    id: 356,
    area: 'Razonamiento Verbal',
    question: 'Ordene de manera lógica y coherente las partes del esquema básico de un informe técnico: 1. Conclusión, 2. Introducción, 3. Desarrollo o Cuerpo.',
    options: ['2 - 3 - 1', '3 - 2 - 1', '1 - 2 - 3', '2 - 1 - 3', '3 - 1 - 2'],
    correctAnswer: 0,
    explanation: 'Orden lógico: Introducción → Desarrollo → Conclusión',
    difficulty: 'fácil'
  },
  {
    id: 357,
    area: 'Razonamiento Verbal',
    question: 'Complete con el conector de oposición adecuado: "El batallón estudió con minuciosidad la cartografía y la táctica nocturna; _____, no consiguieron superar la simulación en el primer intento".',
    options: ['por lo tanto', 'sin embargo', 'además', 'es decir', 'en consecuencia'],
    correctAnswer: 1,
    explanation: '"Sin embargo" expresa oposición o contraste.',
    difficulty: 'fácil'
  },
  {
    id: 358,
    area: 'Razonamiento Verbal',
    question: 'Identifique el término que debe ser eliminado de la siguiente serie por no pertenecer al campo semántico de los puertos de Sudamérica: a) Callao, b) Valparaíso, c) Guayaquil, d) Lima, e) Trujillo.',
    options: ['Callao', 'Valparaíso', 'Guayaquil', 'Lima', 'Trujillo'],
    correctAnswer: 3,
    explanation: 'Lima es una ciudad, no un puerto. Los demás son puertos importantes.',
    difficulty: 'medio'
  },
  {
    id: 359,
    area: 'Razonamiento Verbal',
    question: 'Señale la opción que muestre de forma exclusiva el significado denotativo (literal y objetivo) del término ZORRO.',
    options: ['Animal mamífero perteneciente a la familia de los cánidos.', 'Individuo que actúa con extrema astucia y sagacidad en la sociedad.', 'Hombre mentiroso dedicado al engaño permanente de las personas.', 'Sujeto que muestra cobardía ante los peligros de la guerra.', 'Persona traidora a los intereses patrióticos de la nación.'],
    correctAnswer: 0,
    explanation: 'El significado denotativo es el literal: el animal mamífero cánido.',
    difficulty: 'fácil'
  },
  {
    id: 360,
    area: 'Razonamiento Verbal',
    question: 'Identifique la opción que no guarda relación de inclusión necesaria o conceptual con la palabra eje HIPOTENUSA.',
    options: ['Triángulo', 'Ángulo recto', 'Pitágoras', 'Cateto', 'Lado'],
    correctAnswer: 2,
    explanation: 'Pitágoras es el matemático, no un concepto geométrico inherente a la hipotenusa.',
    difficulty: 'medio'
  },
  {
    id: 361,
    area: 'Razonamiento Verbal',
    question: 'Elija la opción escrita correctamente que complete la oración: "El _____ externo de acero estructural protegió la integridad del buque frente al impacto".',
    options: ['casco', 'hazco', 'hasco', 'jasco', 'kasco'],
    correctAnswer: 0,
    explanation: '"Casco" es la forma correcta. Es la estructura externa del buque.',
    difficulty: 'fácil'
  },
  {
    id: 362,
    area: 'Razonamiento Verbal',
    question: 'Seleccione la alternativa que muestre una correcta aplicación de los signos de puntuación y el uso adecuado de las comas incidentales o explicativas.',
    options: ['El marinero, valiente, saludó con respeto al comandante al subir a cubierta.', 'El marinero valiente, saludó con respeto al comandante al subir a cubierta.', 'El marinero, valiente saludó con respeto al comandante al subir a cubierta.', 'El, marinero valiente saludó con respeto al comandante al subir a cubierta.', 'El marinero valiente saludó con respeto, al comandante al subir a cubierta.'],
    correctAnswer: 0,
    explanation: 'Las comas encierran el adjetivo explicativo "valiente".',
    difficulty: 'medio'
  },
  {
    id: 363,
    area: 'Razonamiento Verbal',
    question: 'Identifique la oración redactada de forma óptima que carezca de anfibología o ambigüedad semántica.',
    options: ['Vi al oficial saludando a su hermano en su auto.', 'Vi al oficial y también vi de forma independiente a su hermano.', 'El capitán le dijo al piloto que estaba loco en su camarote.', 'Se venden chalecos para cadetes de corcho salvavidas.', 'El almirante vio al teniente con sus prismáticos rotos.'],
    correctAnswer: 1,
    explanation: 'Esta oración es clara y no presenta ambigüedad.',
    difficulty: 'medio'
  },
  {
    id: 364,
    area: 'Razonamiento Verbal',
    question: 'Complete correctamente la oración respetando la concordancia gramatical de persona: "Tanto los oficiales de maniobra como _____ logramos trazar la ruta de navegación segura".',
    options: ['yo', 'nosotros', 'ellos', 'ustedes', 'mí'],
    correctAnswer: 0,
    explanation: '"Yo" concuerda con "logramos" (primera persona del plural).',
    difficulty: 'fácil'
  },
  {
    id: 365,
    area: 'Razonamiento Verbal',
    question: '¿Cómo se denomina formalmente en náutica a la parte delantera o sección de proa de una embarcación?',
    options: ['Proa', 'Popa', 'Estribor', 'Babor', 'Quilla'],
    correctAnswer: 0,
    explanation: 'Proa = parte delantera del buque.',
    difficulty: 'fácil'
  },
  {
    id: 366,
    area: 'Razonamiento Verbal',
    question: 'En el argot cotidiano y laboral, la expresión de apoyo solidario "Echar una mano" significa textualmente:',
    options: ['Saludar formalmente a la autoridad.', 'Prestar ayuda o asistencia colaborativa a alguien.', 'Solicitar una dádiva o un elemento prestado.', 'Imponer un castigo físico o una sanción administrativa.', 'Trabajar de forma individualizada y aislada.'],
    correctAnswer: 1,
    explanation: '"Echar una mano" = ayudar, colaborar.',
    difficulty: 'fácil'
  },
  {
    id: 367,
    area: 'Razonamiento Verbal',
    question: 'Complete de forma tradicional el enunciado del conocido refrán popular: "A mal tiempo, _____".',
    options: ['buena cara', 'cara buena', 'tiempo bueno', 'mala cara', 'mejor semblante'],
    correctAnswer: 0,
    explanation: 'Refrán completo: "A mal tiempo, buena cara".',
    difficulty: 'fácil'
  },
  {
    id: 368,
    area: 'Razonamiento Verbal',
    question: 'Identifique la figura literaria empleada en la siguiente expresión poética: "Sus ojos son dos luceros que guían mi navegación nocturna".',
    options: ['Metáfora', 'Símil', 'Hipérbole', 'Metonimia', 'Ironía'],
    correctAnswer: 0,
    explanation: 'Metáfora: identificación directa sin usar "como".',
    difficulty: 'fácil'
  },
  {
    id: 369,
    area: 'Razonamiento Verbal',
    question: 'Establezca la diferencia ortográfica y semántica real entre las palabras ABSORBER y ABSORVER.',
    options: ['Ambos vocablos poseen significados idénticos en la Real Academia.', 'ABSORBER es la grafía correcta (retener fluidos); ABSORVER es incorrecta y no existe.', 'Absorber significa tragar alimentos y absorver denota secar superficies.', 'No existe diferencia ortográfica pues son homógrafas absolutas.', 'Absorber es exclusivo para sólidos y absorver aplica solo para medios líquidos.'],
    correctAnswer: 1,
    explanation: '"Absorber" es la forma correcta. "Absorver" no existe.',
    difficulty: 'medio'
  },
  {
    id: 370,
    area: 'Razonamiento Verbal',
    question: 'Señale las raíces griegas originales que componen el término político DEMOCRACIA.',
    options: ['Demos (pueblo) + Kratos (poder o gobierno)', 'Demos (divinidad) + Kratos (fuerza combativa)', 'Demos (territorio) + Kratos (administración)', 'Demos (norma jurídica) + Kratos (orden estructural)', 'Demos (conflicto armado) + Kratos (paz social)'],
    correctAnswer: 0,
    explanation: 'Democracia = demos (pueblo) + kratos (gobierno).',
    difficulty: 'fácil'
  },
  {
    id: 371,
    area: 'Razonamiento Verbal',
    question: 'Texto: El cadete del batallón repasa minuciosamente sus manuales técnicos de ingeniería exclusivamente a altas horas de la noche. A partir de esta premisa, se puede inferir válidamente que el cadete:',
    options: ['Detesta estudiar con luz solar.', 'Dispone de escaso tiempo libre o agenda ocupada durante las horas del día.', 'Carece de suministro eléctrico matutino en sus instalaciones.', 'Sufre de un cuadro clínico severo de insomnio crónico.', 'Prefiere realizar todas sus actividades en completa oscuridad.'],
    correctAnswer: 1,
    explanation: 'La inferencia más lógica es que tiene poca disponibilidad horaria diurna.',
    difficulty: 'medio'
  },
  {
    id: 372,
    area: 'Razonamiento Verbal',
    question: 'Complete la oración respetando el principio de proporcionalidad lógica: "A mayor esfuerzo y dedicación constante en la academia, _____ será la recompensa obtenida en el examen de aptitud".',
    options: ['menor', 'igual', 'ninguna', 'mayor', 'dudosa'],
    correctAnswer: 3,
    explanation: 'Relación de proporcionalidad directa: a mayor esfuerzo, mayor recompensa.',
    difficulty: 'fácil'
  },
  {
    id: 373,
    area: 'Razonamiento Verbal',
    question: 'Establezca el orden lógicamente correcto para la redacción académica de un ensayo crítico-argumentativo: 1. Tesis, 2. Argumentos a favor, 3. Contraargumentos opositores, 4. Refutación y síntesis.',
    options: ['1 - 2 - 3 - 4', '1 - 3 - 4 - 2', '2 - 1 - 3 - 4', '1 - 2 - 4 - 3', '3 - 4 - 1 - 2'],
    correctAnswer: 0,
    explanation: 'Orden lógico: Tesis → Argumentos → Contraargumentos → Refutación.',
    difficulty: 'medio'
  },
  {
    id: 374,
    area: 'Razonamiento Verbal',
    question: 'Determine el sinónimo adecuado para la palabra ERUDICIÓN dentro de un ámbito de alta competencia intelectual.',
    options: ['Ignorancia', 'Sabiduría', 'Torpeza', 'Rapidez', 'Fortaleza'],
    correctAnswer: 1,
    explanation: 'Erudición = conocimiento extenso y profundo = sabiduría.',
    difficulty: 'medio'
  },
  {
    id: 375,
    area: 'Razonamiento Verbal',
    question: 'Señale la alternativa que guarde la misma relación de agente y elemento operado que la premisa base: PILOTO : AVIÓN ::',
    options: ['Almirante : Océano', 'Capitán : Buque', 'Tripulación : Muelle', 'Maquinista : Estación', 'Timonel : Brújula'],
    correctAnswer: 1,
    explanation: 'Relación agente-objeto: piloto conduce avión, capitán conduce buque.',
    difficulty: 'fácil'
  },
  {
    id: 376,
    area: 'Razonamiento Verbal',
    question: 'Determine el sinónimo más preciso para la palabra PROA dentro de la terminología náutica de maniobras.',
    options: ['Popa', 'Estribor', 'Babor', 'Amura', 'Popel'],
    correctAnswer: 3,
    explanation: 'Amura = parte anterior del buque, similar a proa.',
    difficulty: 'difícil'
  },
  {
    id: 377,
    area: 'Razonamiento Verbal',
    question: 'Halle el antónimo de la palabra PÚBLICO en el contexto de un documento oficial de la comandancia.',
    options: ['Manifiesto', 'Privado', 'Social', 'Estático', 'Abierto'],
    correctAnswer: 1,
    explanation: 'Público ↔ Privado.',
    difficulty: 'fácil'
  },
  {
    id: 378,
    area: 'Razonamiento Verbal',
    question: 'Determine la analogía correcta para la escala: RECHAZO : ENCONO ::',
    options: ['Gusto : Adoración', 'Odio : Fastidio', 'Cariño : Respeto', 'Amistad : Distancia', 'Enojo : Indiferencia'],
    correctAnswer: 0,
    explanation: 'Relación de intensidad: rechazo es leve, encono es intenso. Gusto es leve, adoración es intensa.',
    difficulty: 'medio'
  },
  {
    id: 379,
    area: 'Razonamiento Verbal',
    question: 'Complete el enunciado: "La _____ en las comunicaciones navales es vital para evitar interpretaciones erróneas durante las maniobras tácticas".',
    options: ['ambigüedad', 'precisión', 'demora', 'amplitud', 'redundancia'],
    correctAnswer: 1,
    explanation: 'Precisión = exactitud, claridad.',
    difficulty: 'fácil'
  },
  {
    id: 380,
    area: 'Razonamiento Verbal',
    question: 'Texto: El liderazgo militar no se impone mediante el temor, sino que se cultiva a través del ejemplo ético, la justicia en las decisiones y el respeto irrestricto hacia los subordinados. ¿Cuál es el tema central del texto?',
    options: ['El uso de la fuerza en la disciplina militar.', 'Las bases éticas y democráticas del auténtico liderazgo militar.', 'La jerarquía estricta de las fuerzas armadas.', 'La historia de las tácticas de mando.', 'El reglamento de sanciones de la institución.'],
    correctAnswer: 1,
    explanation: 'El texto se centra en las bases éticas del liderazgo.',
    difficulty: 'medio'
  },
  {
    id: 381,
    area: 'Razonamiento Verbal',
    question: 'Ordene lógicamente las etapas de una operación de rescate en el mar: 1. Recepción del SOS, 2. Despliegue de patrulleras, 3. Ubicación de náufragos, 4. Atención médica de emergencia.',
    options: ['1 - 2 - 3 - 4', '2 - 1 - 3 - 4', '1 - 3 - 2 - 4', '4 - 3 - 2 - 1', '1 - 2 - 4 - 3'],
    correctAnswer: 0,
    explanation: 'Orden lógico: Recepción → Despliegue → Ubicación → Atención.',
    difficulty: 'fácil'
  },
  {
    id: 382,
    area: 'Razonamiento Verbal',
    question: 'Complete la oración: "El mariscal planificó la defensa con astucia; _____, el factor climático adverso desestabilizó por completo la línea de resistencia".',
    options: ['por lo tanto', 'empero', 'además', 'vale decir', 'puesto que'],
    correctAnswer: 1,
    explanation: '"Empero" = sin embargo, no obstante (conector adversativo).',
    difficulty: 'medio'
  },
  {
    id: 383,
    area: 'Razonamiento Verbal',
    question: 'Elimine el término que no corresponde a la categoría de armas de fuego de infantería: a) Fusil, b) Pistola, c) Carabina, d) Escudo, e) Ametralladora.',
    options: ['Fusil', 'Pistola', 'Carabina', 'Escudo', 'Ametralladora'],
    correctAnswer: 3,
    explanation: 'Escudo es elemento defensivo, no arma de fuego.',
    difficulty: 'fácil'
  },
  {
    id: 384,
    area: 'Razonamiento Verbal',
    question: 'Identifique el significado connotativo de la palabra BALANZA en un discurso ético e institucional.',
    options: ['Instrumento mecánico para medir masas.', 'Símbolo inequívoco de la justicia y la equidad social.', 'Objeto metálico de uso comercial regulado.', 'Dispositivo de calibración de precisión técnica.', 'Herramienta de laboratorio químico-físico.'],
    correctAnswer: 1,
    explanation: 'Connotación: balanza = símbolo de justicia.',
    difficulty: 'medio'
  },
  {
    id: 385,
    area: 'Razonamiento Verbal',
    question: 'Señale el término excluido del conjunto semántico de valores institucionales navales: HONOR.',
    options: ['Disciplina', 'Lealtad', 'Deber', 'Lucro', 'Patriotismo'],
    correctAnswer: 3,
    explanation: 'Lucro = ganancia económica, no es un valor institucional.',
    difficulty: 'fácil'
  },
  {
    id: 386,
    area: 'Razonamiento Verbal',
    question: 'Elija la opción correcta: "Es necesario _____ el cabo de la embarcación para asegurar el correcto amarre en el muelle de carga".',
    options: ['halar', 'alar', 'jalar', 'yalar', 'hablar'],
    correctAnswer: 0,
    explanation: '"Halar" = tirar, jalar. Es la forma correcta en contexto náutico.',
    difficulty: 'fácil'
  },
  {
    id: 387,
    area: 'Razonamiento Verbal',
    question: 'Seleccione la oración que use correctamente la coma de vocativo directo.',
    options: ['Cadetes, mantengan la calma en sus puestos durante la tormenta.', 'Cadetes mantengan, la calma en sus puestos durante la tormenta.', 'Cadetes mantengan la calma, en sus puestos durante la tormenta.', 'Cadetes, mantengan, la calma en sus puestos durante la tormenta.', 'Cadetes mantengan la calma en sus puestos, durante la tormenta.'],
    correctAnswer: 0,
    explanation: 'La coma separa el vocativo "Cadetes" del resto de la oración.',
    difficulty: 'fácil'
  },
  {
    id: 388,
    area: 'Razonamiento Verbal',
    question: 'Seleccione la oración que carezca por completo de errores gramaticales o de concordancia de género y número.',
    options: ['La dotación y el personal administrativo fueron felicitados por el almirante.', 'El grupo de marineros corrieron rápidamente hacia la cubierta de vuelo.', 'Se vende chalecos salvavidas para oficiales de alta calidad.', 'Hubieron muchos problemas técnicos durante el zarpe de la fragata.', 'El capitán vio al timonel y le dijo que estaba equivocado en su decisión.'],
    correctAnswer: 0,
    explanation: 'Sujeto compuesto plural + verbo en plural = concordancia correcta.',
    difficulty: 'medio'
  },
  {
    id: 389,
    area: 'Razonamiento Verbal',
    question: 'Elija el pronombre relativo adecuado: "El buque oceanográfico _____ tripulación descubrió la nueva fosa marina ha regresado al Callao".',
    options: ['que', 'cuyo', 'cuya', 'el cual', 'donde'],
    correctAnswer: 2,
    explanation: '"Cuya" concuerda en género femenino con "tripulación".',
    difficulty: 'medio'
  },
  {
    id: 390,
    area: 'Razonamiento Verbal',
    question: '¿Cómo se denomina formalmente al costado o flanco derecho de un buque mirando de popa hacia proa?',
    options: ['Babor', 'Estribor', 'Quilla', 'Castillo', 'Cubierta'],
    correctAnswer: 1,
    explanation: 'Estribor = lado derecho del buque.',
    difficulty: 'fácil'
  },
  {
    id: 391,
    area: 'Razonamiento Verbal',
    question: 'La locución común "Ir viento en popa" denota en el lenguaje figurado que una situación o proyecto:',
    options: ['Se encuentra estancado por problemas técnicos.', 'Se desarrolla de manera próspera, rápida y sumamente exitosa.', 'Enfrenta graves peligros de colapso institucional.', 'Requiere supervisión de emergencia por la autoridad.', 'Cambia de rumbo constantemente de forma caótica.'],
    correctAnswer: 1,
    explanation: '"Ir viento en popa" = ir muy bien, con éxito.',
    difficulty: 'fácil'
  },
  {
    id: 392,
    area: 'Razonamiento Verbal',
    question: 'Complete el refrán: "Donde manda capitán, no gobierna _____".',
    options: ['timonel', 'marinero', 'oficial', 'piloto', 'teniente'],
    correctAnswer: 1,
    explanation: 'Refrán completo: "Donde manda capitán, no gobierna marinero".',
    difficulty: 'fácil'
  },
  {
    id: 393,
    area: 'Razonamiento Verbal',
    question: '"El rugido ensordecedor del mar embravecido castigaba con furia los acantilados de la base naval". ¿Qué figura literaria predomina?',
    options: ['Prosopopeya o Personificación', 'Hipérbaton', 'Anáfora', 'Antítesis', 'Símil'],
    correctAnswer: 0,
    explanation: 'Personificación: se atribuyen acciones humanas al mar.',
    difficulty: 'medio'
  },
  {
    id: 394,
    area: 'Razonamiento Verbal',
    question: 'Establezca el significado correcto del parónimo APREHENDER frente a APRENDER.',
    options: ['Capturar o asir a una persona o cosa, especialmente mercancía de contrabando.', 'Adquirir conocimientos conceptuales o prácticos en la escuela.', 'Liberar a un detenido por orden expresa del juez competente.', 'Iniciar el desplazamiento marítimo de una fragata misilera.', 'Cancelar una deuda económica de forma definitiva.'],
    correctAnswer: 0,
    explanation: 'Aprehender = capturar, detener. Aprender = adquirir conocimiento.',
    difficulty: 'medio'
  },
  {
    id: 395,
    area: 'Razonamiento Verbal',
    question: 'La raíz etimológica de origen griego XENO, presente en la palabra xenofobia, significa textualmente:',
    options: ['Extranjero o forastero', 'Miedo o terror', 'Amistad o fraternidad', 'Estado o gobierno', 'Madera o resina'],
    correctAnswer: 0,
    explanation: 'Xeno = extranjero, forastero.',
    difficulty: 'medio'
  },
  {
    id: 396,
    area: 'Razonamiento Verbal',
    question: 'Texto: La fragata peruana navegó con las luces de posición completamente apagadas durante toda la travesía por aguas internacionales hostiles. Se puede inferir lógicamente que la nave buscaba:',
    options: ['Economizar la energía eléctrica de sus generadores principales.', 'Evitar ser detectada visualmente por flotas de reconocimiento enemigas.', 'Cumplir con un protocolo de mantenimiento preventivo de focos.', 'Facilitar la observación de las constelaciones por el timonel.', 'Realizar pruebas de navegación a ciegas de forma recreativa.'],
    correctAnswer: 1,
    explanation: 'La inferencia más lógica es evitar ser detectada.',
    difficulty: 'medio'
  },
  {
    id: 397,
    area: 'Razonamiento Verbal',
    question: 'Complete coherentemente: "Una tripulación altamente entrenada garantiza la _____ operativa del buque, minimizando cualquier margen de _____".',
    options: ['ineficacia - éxito', 'eficiencia - error', 'demora - tiempo', 'velocidad - navegación', 'rigidez - maniobra'],
    correctAnswer: 1,
    explanation: 'Relación lógica: eficiencia ↔ error.',
    difficulty: 'fácil'
  },
  {
    id: 398,
    area: 'Razonamiento Verbal',
    question: 'Determine la secuencia metodológica formal para un proceso de investigación científica: 1. Planteamiento del problema, 2. Formulación de hipótesis, 3. Experimentación y recolección de datos, 4. Publicación de resultados oficiales.',
    options: ['1 - 2 - 3 - 4', '2 - 1 - 3 - 4', '1 - 3 - 2 - 4', '3 - 2 - 1 - 4', '1 - 2 - 4 - 3'],
    correctAnswer: 0,
    explanation: 'Método científico: Problema → Hipótesis → Experimentación → Resultados.',
    difficulty: 'fácil'
  },
  {
    id: 399,
    area: 'Razonamiento Verbal',
    question: 'Elija el sinónimo de la palabra CONCISO dentro de la redacción de informes técnicos navales.',
    options: ['Extenso', 'Breve y preciso', 'Difuso', 'Ambiguo', 'Reiterativo'],
    correctAnswer: 1,
    explanation: 'Conciso = breve, preciso, sucinto.',
    difficulty: 'fácil'
  },
  {
    id: 400,
    area: 'Razonamiento Verbal',
    question: 'Determine el par analógico que guarde la relación correcta: CIRUJANO : BISTURÍ ::',
    options: ['Soldado : Fusil', 'Profesor : Aula', 'Carpintero : Madera', 'Ingeniero : Plano', 'Escultor : Museo'],
    correctAnswer: 0,
    explanation: 'Relación agente-herramienta: cirujano usa bisturí, soldado usa fusil.',
    difficulty: 'fácil'
  }
];
