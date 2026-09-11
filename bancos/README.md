# 📚 Bancos de Preguntas y Solucionarios

Esta carpeta contiene los **bancos de preguntas oficiales** de cada simulacro, organizados por institución y bloque evaluativo.

---

## 📁 Estructura

```
bancos/
├── README.md                          ← Este archivo
├── simulacro-01-uni/                  ← Simulacro UNI P_UNI 2027
│   ├── README.md                      ← Documentación del banco
│   ├── dia1-aptitud-humanidades.ts    ← 100 preguntas (3 horas)
│   ├── dia2-matematica.ts             ← 40 preguntas (3 horas)
│   └── dia3-fisica-quimica.ts         ← 40 preguntas (3 horas)
└── simulacro-02-esmgp/                ← Simulacro ESMGP Marina
    ├── README.md                      ← Documentación del banco
    └── banco1-completo.ts             ← 100 preguntas (2 horas)
```

---

## 📊 Resumen de bancos

| Banco | Institución | Bloques | Preguntas | Duración total |
|-------|-------------|---------|-----------|----------------|
| `simulacro-01-uni` | Universidad Nacional de Ingeniería | 3 días | 180 | 9 horas |
| `simulacro-02-esmgp` | Escuela de Oficiales de la Marina | 1 bloque | 100 | 2 horas |
| **Total** | | **4 bloques** | **280** | **11 horas** |

---

## 📝 Formato de pregunta

Cada pregunta sigue esta estructura TypeScript:

```typescript
{
  id: number,                    // ID único dentro del banco
  area: string,                  // Área temática
  question: string,              // Enunciado
  options: string[],             // Array de 5 alternativas (A, B, C, D, E)
  correctAnswer: number,         // Índice de respuesta correcta (0-4)
  explanation: string,           // Explicación del solucionario
  difficulty: 'fácil' | 'medio' | 'difícil'
}
```

---

## 🔒 Licencia

Los bancos de preguntas son propiedad intelectual del proyecto **SimulacrUx** y están protegidos bajo la política **NoLicense**. No se permite su redistribución sin autorización expresa.

---

## 🐛 Reportar fallas en preguntas

Si encuentras una pregunta con errores (incompleta, falta gráfico, respuesta incorrecta, etc.), usa el botón **"Reportar falla"** disponible durante los simulacros o abre un **Issue** en GitHub con la etiqueta `bug-pregunta`.
