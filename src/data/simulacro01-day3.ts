import { Question } from '../types';

// =========================================================
// SIMULACRO N°01 UNI - DÍA 3: FÍSICA Y QUÍMICA (40 PREGUNTAS)
// =========================================================

export const questionsDay3: Question[] = [
  // ═══════════════════════════════════════════
  // 1. FÍSICA (D3-001 a D3-020)
  // ═══════════════════════════════════════════
  {
    id: 141,
    area: 'Física',
    question: 'Dos masas de 100 kg cada una están separadas 2 m. ¿Cuál es la fuerza gravitatoria entre ellas? (G=6.67×10⁻¹¹ N·m²/kg²)',
    options: ['1.67×10⁻⁷ N', '3.34×10⁻⁷ N', '6.67×10⁻⁷ N', '1.33×10⁻⁶ N', '2.67×10⁻⁶ N'],
    correctAnswer: 0,
    explanation: 'F = G·m₁·m₂/r² = (6.67×10⁻¹¹)(100)(100)/(2²) = 6.67×10⁻¹¹×10⁴/4 = 1.67×10⁻⁷ N.',
    difficulty: 'medio'
  },
  {
    id: 142,
    area: 'Física',
    question: '¿Cuánto trabajo realiza la gravedad al caer libremente un objeto de 5 kg desde 20 m de altura? (g=10 m/s²)',
    options: ['-1000 J', '-500 J', '0 J', '500 J', '1000 J'],
    correctAnswer: 4,
    explanation: 'W = mgh = 5×10×20 = 1000 J. La gravedad realiza trabajo positivo cuando el objeto cae (fuerza y desplazamiento en misma dirección).',
    difficulty: 'fácil'
  },
  {
    id: 143,
    area: 'Física',
    question: 'Según la teoría de la relatividad especial, ¿qué ocurre con la longitud de un objeto que se mueve a gran velocidad respecto a un observador estacionario?',
    options: ['Aumenta', 'Disminuye', 'Permanece constante', 'Oscila periódicamente', 'Depende de la masa'],
    correctAnswer: 1,
    explanation: 'Contracción de Lorentz: la longitud se contrae en la dirección del movimiento. L = L₀√(1-v²/c²).',
    difficulty: 'medio'
  },
  {
    id: 144,
    area: 'Física',
    question: 'Tres resistencias de 2 Ω, 3 Ω y 6 Ω están conectadas en paralelo. ¿Cuál es su resistencia equivalente?',
    options: ['0.5 Ω', '1 Ω', '2 Ω', '3 Ω', '11 Ω'],
    correctAnswer: 1,
    explanation: '1/R = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1. Entonces R = 1 Ω.',
    difficulty: 'medio'
  },
  {
    id: 145,
    area: 'Física',
    question: 'La velocidad del sonido en el aire a 20°C es aproximadamente 340 m/s. ¿Cuál es la longitud de onda de un sonido de 1700 Hz?',
    options: ['0.1 m', '0.2 m', '0.5 m', '1.0 m', '2.0 m'],
    correctAnswer: 1,
    explanation: 'λ = v/f = 340/1700 = 0.2 m.',
    difficulty: 'fácil'
  },
  {
    id: 146,
    area: 'Física',
    question: 'Un automóvil parte del reposo y acelera uniformemente a 3 m/s² durante 10 s. ¿Qué distancia recorre en ese intervalo?',
    options: ['100 m', '120 m', '150 m', '180 m', '200 m'],
    correctAnswer: 2,
    explanation: 'MRUV: d = v₀t + ½at² = 0 + ½(3)(10²) = ½(3)(100) = 150 m.',
    difficulty: 'fácil'
  },
  {
    id: 147,
    area: 'Física',
    question: 'Una fuerza neta de 50 N actúa sobre un cuerpo de 10 kg inicialmente en reposo. ¿Qué distancia recorre en los primeros 4 segundos?',
    options: ['10 m', '20 m', '30 m', '40 m', '50 m'],
    correctAnswer: 3,
    explanation: 'a = F/m = 50/10 = 5 m/s². d = ½at² = ½(5)(4²) = ½(5)(16) = 40 m.',
    difficulty: 'medio'
  },
  {
    id: 148,
    area: 'Física',
    question: '¿Cuánto calor se requiere para fundir 2 kg de hielo a 0°C? (Calor latente de fusión L_f=80 cal/g)',
    options: ['40 kcal', '80 kcal', '120 kcal', '160 kcal', '200 kcal'],
    correctAnswer: 3,
    explanation: 'Q = m·L_f = 2000 g × 80 cal/g = 160,000 cal = 160 kcal.',
    difficulty: 'fácil'
  },
  {
    id: 149,
    area: 'Física',
    question: 'Un resorte de constante k=100 N/m sostiene una masa de 1 kg. ¿Cuál es su período de oscilación? (π≈3.14)',
    options: ['0.25 s', '0.31 s', '0.63 s', '1.00 s', '2.00 s'],
    correctAnswer: 2,
    explanation: 'T = 2π√(m/k) = 2π√(1/100) = 2π(0.1) = 0.2π ≈ 0.63 s.',
    difficulty: 'medio'
  },
  {
    id: 150,
    area: 'Física',
    question: 'En una prensa hidráulica, la relación entre las fuerzas aplicadas en los émbolos es 1:10. Si el émbolo menor tiene área 5 cm², ¿cuál es el área del émbolo mayor?',
    options: ['0.5 cm²', '5 cm²', '25 cm²', '50 cm²', '100 cm²'],
    correctAnswer: 3,
    explanation: 'Principio de Pascal: F₁/A₁ = F₂/A₂. Si F₁/F₂ = 1/10, entonces A₂ = 10×A₁ = 10×5 = 50 cm².',
    difficulty: 'medio'
  },
  {
    id: 151,
    area: 'Física',
    question: 'Un objeto de 2 kg se suelta desde 5 m de altura (g=10 m/s²). ¿Cuál es su energía cinética al llegar al suelo?',
    options: ['0 J', '50 J', '80 J', '100 J', '120 J'],
    correctAnswer: 3,
    explanation: 'Conservación de energía: Ec = Ep = mgh = 2×10×5 = 100 J.',
    difficulty: 'fácil'
  },
  {
    id: 152,
    area: 'Física',
    question: 'La presión a 10 m de profundidad en agua dulce (ρ=1000 kg/m³, g=10 m/s²) es:',
    options: ['10 kPa', '50 kPa', '100 kPa', '150 kPa', '200 kPa'],
    correctAnswer: 2,
    explanation: 'P = ρgh = 1000×10×10 = 100,000 Pa = 100 kPa.',
    difficulty: 'fácil'
  },
  {
    id: 153,
    area: 'Física',
    question: 'Un bloque de 5 kg reposa sobre una superficie horizontal rugosa (μₑ=0.4). ¿Cuál es la fuerza horizontal mínima necesaria para iniciar su movimiento?',
    options: ['10 N', '15 N', '20 N', '25 N', '30 N'],
    correctAnswer: 2,
    explanation: 'F = μₑ·N = μₑ·mg = 0.4×5×10 = 20 N.',
    difficulty: 'fácil'
  },
  {
    id: 154,
    area: 'Física',
    question: 'Una viga horizontal de 4 m de longitud y peso despreciable está apoyada en sus extremos. Una carga de 600 N se coloca a 1 m del apoyo izquierdo. ¿Cuál es la reacción en el apoyo derecho?',
    options: ['100 N', '150 N', '200 N', '300 N', '450 N'],
    correctAnswer: 1,
    explanation: 'Sumando momentos respecto al apoyo izquierdo: R_derecho×4 = 600×1. R_derecho = 600/4 = 150 N.',
    difficulty: 'medio'
  },
  {
    id: 155,
    area: 'Física',
    question: 'Una partícula está sometida a tres fuerzas coplanares: F₁=30 N hacia el este, F₂=40 N hacia el norte y F₃ desconocida. Si la partícula está en equilibrio, ¿cuál es la magnitud de F₃?',
    options: ['10 N', '35 N', '50 N', '70 N', '120 N'],
    correctAnswer: 2,
    explanation: 'En equilibrio: F₃ = -(F₁+F₂). |F₃| = √(30²+40²) = √(900+1600) = √2500 = 50 N.',
    difficulty: 'medio'
  },
  {
    id: 156,
    area: 'Física',
    question: 'Un rayo de luz incide sobre una superficie de agua con ángulo de 30° respecto a la normal. Si n_agua=1.33, ¿cuál es el ángulo de refracción? (sen30°=0.5)',
    options: ['18.5°', '22.1°', '30.0°', '41.7°', '48.6°'],
    correctAnswer: 1,
    explanation: 'Ley de Snell: n₁senθ₁ = n₂senθ₂. 1×sen30° = 1.33×senθ₂. senθ₂ = 0.5/1.33 = 0.376. θ₂ = arcsen(0.376) ≈ 22.1°.',
    difficulty: 'medio'
  },
  {
    id: 157,
    area: 'Física',
    question: 'En una viga simplemente apoyada con carga puntual en el centro, las reacciones en los apoyos son:',
    options: ['Ambas nulas', 'Iguales a la mitad de la carga', 'Iguales a la carga completa', 'Una nula y otra igual a la carga', 'Proporcionales a la distancia'],
    correctAnswer: 1,
    explanation: 'Por simetría, cada apoyo soporta la mitad de la carga: R₁ = R₂ = P/2.',
    difficulty: 'fácil'
  },
  {
    id: 158,
    area: 'Física',
    question: 'Una rueda de 0.5 m de radio gira a 120 RPM. ¿Cuál es la velocidad tangencial de un punto en su borde? (π≈3.14)',
    options: ['1.05 m/s', '2.10 m/s', '3.14 m/s', '6.28 m/s', '12.56 m/s'],
    correctAnswer: 3,
    explanation: 'ω = 120×2π/60 = 4π rad/s. v = ωr = 4π×0.5 = 2π ≈ 6.28 m/s.',
    difficulty: 'medio'
  },
  {
    id: 159,
    area: 'Física',
    question: 'Una carga de +2 μC se mueve a 10⁶ m/s perpendicularmente a un campo magnético de 0.5 T. ¿Cuál es la fuerza magnética sobre la carga?',
    options: ['0 N', '0.5 N', '1.0 N', '2.0 N', '5.0 N'],
    correctAnswer: 2,
    explanation: 'F = qvBsenθ = (2×10⁻⁶)(10⁶)(0.5)(sen90°) = 2×0.5 = 1.0 N.',
    difficulty: 'medio'
  },
  {
    id: 160,
    area: 'Física',
    question: 'Un proyectil es lanzado con velocidad inicial de 20 m/s formando 30° con la horizontal. ¿Cuál es su alcance horizontal máximo? (g=10 m/s²)',
    options: ['10√3 m', '20√3 m', '30√3 m', '40√3 m', '50√3 m'],
    correctAnswer: 1,
    explanation: 'Alcance: R = v₀²sen(2θ)/g = (20²)(sen60°)/10 = 400×(√3/2)/10 = 200√3/10 = 20√3 m.',
    difficulty: 'medio'
  },

  // ═══════════════════════════════════════════
  // 2. QUÍMICA (D3-021 a D3-040)
  // ═══════════════════════════════════════════
  {
    id: 161,
    area: 'Química',
    question: 'El fenómeno de "lluvia ácida" se produce principalmente por la emisión a la atmósfera de:',
    options: ['CO₂', 'SO₂ y NOₓ', 'CH₄', 'CFC', 'O₃'],
    correctAnswer: 1,
    explanation: 'La lluvia ácida se produce por la reacción de SO₂ y NOₓ con el vapor de agua, formando H₂SO₄ y HNO₃.',
    difficulty: 'fácil'
  },
  {
    id: 162,
    area: 'Química',
    question: 'La reacción: 2H₂ + O₂ → 2H₂O es clasificada como:',
    options: ['Descomposición', 'Síntesis', 'Desplazamiento simple', 'Desplazamiento doble', 'Combustión'],
    correctAnswer: 1,
    explanation: 'Es una reacción de síntesis (combinación): dos o más reactivos forman un solo producto.',
    difficulty: 'fácil'
  },
  {
    id: 163,
    area: 'Química',
    question: '¿Cuál es la fórmula molecular del compuesto orgánico denominado "octano"?',
    options: ['C₆H₁₄', 'C₇H₁₆', 'C₈H₁₈', 'C₉H₂₀', 'C₁₀H₂₂'],
    correctAnswer: 2,
    explanation: 'Alcano: CₙH₂ₙ₊₂. Para n=8: C₈H₂₍₈₎₊₂ = C₈H₁₈.',
    difficulty: 'fácil'
  },
  {
    id: 164,
    area: 'Química',
    question: '¿Cuál de los siguientes factores NO aumenta la velocidad de una reacción química?',
    options: ['Aumentar temperatura', 'Aumentar concentración de reactivos', 'Agregar catalizador', 'Disminuir superficie de contacto', 'Agitar la mezcla'],
    correctAnswer: 3,
    explanation: 'Disminuir la superficie de contacto reduce la velocidad. Los demás factores la aumentan.',
    difficulty: 'fácil'
  },
  {
    id: 165,
    area: 'Química',
    question: '¿Cuántos neutrones tiene un átomo de carbono-14?',
    options: ['6', '7', '8', '12', '14'],
    correctAnswer: 2,
    explanation: 'Carbono: Z=6 (protones). Carbono-14: A=14. Neutrones = A-Z = 14-6 = 8.',
    difficulty: 'fácil'
  },
  {
    id: 166,
    area: 'Química',
    question: 'El ciclo del nitrógeno en la naturaleza incluye el proceso de:',
    options: ['Fotosíntesis', 'Nitrificación', 'Evaporación', 'Subducción', 'Glaciación'],
    correctAnswer: 1,
    explanation: 'La nitrificación es la conversión de amonio (NH₄⁺) a nitritos y nitratos por bacterias nitrificantes.',
    difficulty: 'fácil'
  },
  {
    id: 167,
    area: 'Química',
    question: 'El compuesto principal responsable del fraguado inicial del cemento Portland es:',
    options: ['C₃S (silicato tricálcico)', 'C₂S (silicato dicálcico)', 'C₃A (aluminato tricálcico)', 'C₄AF (ferroaluminato tetracálcico)', 'Yeso'],
    correctAnswer: 2,
    explanation: 'El C₃A (aluminato tricálcico) es responsable del fraguado inicial rápido del cemento Portland.',
    difficulty: 'medio'
  },
  {
    id: 168,
    area: 'Química',
    question: 'Para la reacción en equilibrio: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + calor, ¿qué ocurre al aumentar la temperatura?',
    options: ['El equilibrio se desplaza hacia la derecha', 'El equilibrio se desplaza hacia la izquierda', 'La constante de equilibrio no cambia', 'Aumenta la concentración de NH₃', 'No hay efecto'],
    correctAnswer: 1,
    explanation: 'Principio de Le Chatelier: al ser exotérmica (+calor como producto), aumentar temperatura desplaza el equilibrio hacia la izquierda (reactivos).',
    difficulty: 'medio'
  },
  {
    id: 169,
    area: 'Química',
    question: 'El grupo funcional -OH caracteriza a los:',
    options: ['Aldehídos', 'Cetonas', 'Ácidos carboxílicos', 'Alcoholes', 'Ésteres'],
    correctAnswer: 3,
    explanation: 'El grupo hidroxilo (-OH) es el grupo funcional característico de los alcoholes (R-OH).',
    difficulty: 'fácil'
  },
  {
    id: 170,
    area: 'Química',
    question: 'Una reacción con ΔH < 0 se clasifica como:',
    options: ['Endotérmica', 'Exotérmica', 'Adiabática', 'Isoentrópica', 'Isocórica'],
    correctAnswer: 1,
    explanation: 'ΔH < 0 indica que se libera calor al entorno: reacción exotérmica.',
    difficulty: 'fácil'
  },
  {
    id: 171,
    area: 'Química',
    question: 'La corrosión del hierro en presencia de oxígeno y agua produce principalmente:',
    options: ['FeO', 'Fe₂O₃', 'Fe₃O₄', 'Fe(OH)₂', 'Fe(OH)₃'],
    correctAnswer: 1,
    explanation: 'La corrosión del hierro (oxidación) produce óxido férrico: Fe₂O₃ (herrumbre).',
    difficulty: 'medio'
  },
  {
    id: 172,
    area: 'Química',
    question: '¿En qué estado de agregación las partículas tienen forma y volumen definidos?',
    options: ['Gaseoso', 'Líquido', 'Sólido', 'Plasma', 'Coloidal'],
    correctAnswer: 2,
    explanation: 'En el estado sólido, las partículas tienen forma y volumen definidos debido a las fuertes fuerzas intermoleculares.',
    difficulty: 'fácil'
  },
  {
    id: 173,
    area: 'Química',
    question: '¿Cuál de los siguientes compuestos es un óxido ácido?',
    options: ['CaO', 'Na₂O', 'CO₂', 'Fe₂O₃', 'Al₂O₃'],
    correctAnswer: 2,
    explanation: 'CO₂ es un óxido ácido (no metálico). Al reaccionar con agua forma H₂CO₃ (ácido carbónico).',
    difficulty: 'fácil'
  },
  {
    id: 174,
    area: 'Química',
    question: 'En una titulación ácido-base, el punto de equivalencia se detecta mediante:',
    options: ['Cambio de temperatura', 'Cambio de color del indicador', 'Cambio de presión', 'Formación de precipitado', 'Emisión de luz'],
    correctAnswer: 1,
    explanation: 'El indicador cambia de color en el punto de equivalencia, señalando que la reacción ha completado.',
    difficulty: 'fácil'
  },
  {
    id: 175,
    area: 'Química',
    question: 'Balancee: Al + HCl → AlCl₃ + H₂. ¿Cuál es el coeficiente del HCl?',
    options: ['2', '3', '4', '5', '6'],
    correctAnswer: 4,
    explanation: '2Al + 6HCl → 2AlCl₃ + 3H₂. El coeficiente del HCl es 6.',
    difficulty: 'medio'
  },
  {
    id: 176,
    area: 'Química',
    question: 'En una pila Daniell (Zn|Zn²⁺||Cu²⁺|Cu), ¿qué ocurre en el ánodo?',
    options: ['Reducción del Zn', 'Reducción del Cu', 'Oxidación del Zn', 'Oxidación del Cu', 'No ocurre reacción'],
    correctAnswer: 2,
    explanation: 'En el ánodo (electrodo negativo) ocurre la oxidación: Zn → Zn²⁺ + 2e⁻.',
    difficulty: 'medio'
  },
  {
    id: 177,
    area: 'Química',
    question: '¿Cuántos gramos de NaOH (PM=40 g/mol) se necesitan para preparar 500 mL de solución 0.2 M?',
    options: ['2 g', '4 g', '6 g', '8 g', '10 g'],
    correctAnswer: 1,
    explanation: 'Moles = M×V = 0.2×0.5 = 0.1 mol. Masa = 0.1×40 = 4 g.',
    difficulty: 'medio'
  },
  {
    id: 178,
    area: 'Química',
    question: 'El enlace iónico se caracteriza principalmente por:',
    options: ['Compartir electrones', 'Transferencia de electrones', 'Deslocalización de electrones', 'Fuerzas de Van der Waals', 'Puentes de hidrógeno'],
    correctAnswer: 1,
    explanation: 'El enlace iónico se forma por transferencia de electrones de un átomo (metal) a otro (no metal).',
    difficulty: 'fácil'
  },
  {
    id: 179,
    area: 'Química',
    question: '¿Qué tipo de radiación tiene mayor poder de penetración?',
    options: ['Alfa', 'Beta', 'Gamma', 'Neutrones', 'Positrones'],
    correctAnswer: 2,
    explanation: 'La radiación gamma (γ) tiene el mayor poder de penetración. Requiere bloques gruesos de plomo o concreto para ser detenida.',
    difficulty: 'fácil'
  },
  {
    id: 180,
    area: 'Química',
    question: '¿Cuál de los siguientes elementos tiene mayor radio atómico?',
    options: ['F', 'Cl', 'Br', 'I', 'At'],
    correctAnswer: 4,
    explanation: 'En un grupo de la tabla periódica, el radio atómico aumenta al bajar. At (astato) está más abajo que I, Br, Cl y F en el grupo 17 (halógenos).',
    difficulty: 'medio'
  }
];

export const day3Status = 'active';
export const day3ExpectedQuestions = 40;
