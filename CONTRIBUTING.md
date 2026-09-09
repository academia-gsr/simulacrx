# 🤝 Guía de Contribución — SimulacrUx

¡Gracias por tu interés en contribuir a **SimulacrUx**! Esta guía te ayudará a entender cómo participar en el desarrollo del proyecto.

---

## 📋 Tabla de Contenidos

- [Código de conducta](#-código-de-conducta)
- [¿Cómo puedo contribuir?](#-cómo-puedo-contribuir)
- [Reportar bugs](#-reportar-bugs)
- [Sugerir mejoras](#-sugerir-mejoras)
- [Contribuir con código](#-contribuir-con-código)
- [Agregar preguntas al banco](#-agregar-preguntas-al-banco)
- [Estándares de código](#-estándares-de-código)
- [Proceso de Pull Request](#-proceso-de-pull-request)

---

## 📜 Código de conducta

Este proyecto se rige por un código de conducta básico:

- **Respeto** hacia todos los colaboradores
- **Colaboración** constructiva y positiva
- **Comunicación** clara y profesional
- **Inclusión** de todas las perspectivas

---

## 🎯 ¿Cómo puedo contribuir?

### 1. Reportar bugs
Si encuentras un error, por favor abre un **Issue** con la etiqueta `bug`.

### 2. Sugerir mejoras
Si tienes una idea para mejorar la plataforma, abre un **Issue** con la etiqueta `enhancement`.

### 3. Contribuir con código
Si quieres agregar funcionalidades o corregir bugs, sigue la guía de [Contribuir con código](#-contribuir-con-código).

### 4. Agregar preguntas
Puedes contribuir agregando preguntas al banco de simulacros. Ver [Agregar preguntas al banco](#-agregar-preguntas-al-banco).

### 5. Mejorar documentación
Ayuda a mejorar este README, la guía de despliegue, o cualquier otra documentación.

---

## 🐛 Reportar bugs

### Antes de reportar

1. Busca en los **Issues** existentes para ver si ya fue reportado
2. Verifica que estás usando la última versión del código
3. Intenta reproducir el error en un entorno limpio

### Cómo reportar

Abre un **Issue** con el siguiente formato:

```markdown
**Descripción del bug**
Una descripción clara y concisa del error.

**Pasos para reproducir**
1. Ir a '...'
2. Hacer clic en '...'
3. Ver el error '...'

**Comportamiento esperado**
Lo que debería pasar.

**Comportamiento actual**
Lo que está pasando.

**Capturas de pantalla**
Si aplica, agrega capturas.

**Entorno**
- SO: [ej. Windows 11, macOS 14]
- Navegador: [ej. Chrome 120, Firefox 121]
- Versión del proyecto: [ej. v2.1.0]

**Contexto adicional**
Cualquier otra información relevante.
```

---

## 💡 Sugerir mejoras

Abre un **Issue** con la etiqueta `enhancement` y describe:

```markdown
**¿Tu sugerencia está relacionada con un problema?**
Descripción clara del problema.

**Describe la solución que te gustaría**
Descripción clara de lo que quieres que pase.

**Describe alternativas que consideraste**
Otras soluciones o funcionalidades que consideraste.

**Contexto adicional**
Capturas, mockups, o cualquier otra información.
```

---

## 💻 Contribuir con código

### 1. Fork el repositorio

Haz clic en **Fork** en la esquina superior derecha del repositorio.

### 2. Clona tu fork

```bash
git clone https://github.com/TU-USUARIO/simulacrx.git
cd simulacrx
```

### 3. Crea una rama para tu funcionalidad

```bash
git checkout -b feature/nombre-de-tu-funcionalidad
```

Usa estos prefijos:
- `feature/` para nuevas funcionalidades
- `fix/` para correcciones de bugs
- `docs/` para cambios en documentación
- `refactor/` para refactorización
- `test/` para agregar tests

### 4. Haz tus cambios

Sigue los [estándares de código](#-estándares-de-código).

### 5. Prueba tus cambios

```bash
npm run dev        # Probar en desarrollo
npm run build      # Verificar que compila
```

### 6. Commit tus cambios

```bash
git add .
git commit -m "🚀 Descripción clara del cambio"
```

Usa emojis para identificar el tipo de cambio (ver [Convenciones de commits](./DEPLOYMENT.md#convenciones-de-commits)).

### 7. Push a tu fork

```bash
git push origin feature/nombre-de-tu-funcionalidad
```

### 8. Abre un Pull Request

Ve a tu fork en GitHub y haz clic en **Compare & pull request**.

---

## 📚 Agregar preguntas al banco

### Formato de pregunta

Las preguntas están en archivos TypeScript en `src/data/`. Cada pregunta sigue esta estructura:

```typescript
{
  id: number,                    // ID único
  area: string,                  // Área temática
  question: string,              // Enunciado de la pregunta
  options: string[],             // Array de 5 alternativas (A, B, C, D, E)
  correctAnswer: number,         // Índice de la respuesta correcta (0-4)
  explanation: string,           // Explicación detallada
  difficulty: 'fácil' | 'medio' | 'difícil'  // Nivel de dificultad
}
```

### Ejemplo

```typescript
{
  id: 181,
  area: 'Matemática',
  question: 'Si f(x) = 2x + 3, ¿cuánto vale f(5)?',
  options: ['10', '13', '15', '8', '11'],
  correctAnswer: 1,
  explanation: 'f(5) = 2(5) + 3 = 10 + 3 = 13',
  difficulty: 'fácil'
}
```

### Pasos para agregar preguntas

1. Abre el archivo correspondiente en `src/data/`:
   - `simulacro01-day1.ts` para Aptitud Académica
   - `simulacro01-day2.ts` para Matemática
   - `simulacro01-day3.ts` para Física y Química
   - `simulacro02-questions.ts` para ESMGP

2. Agrega la pregunta al final del array `questions`

3. Asegúrate de que el `id` sea único y consecutivo

4. Verifica que `correctAnswer` sea el índice correcto (0=A, 1=B, 2=C, 3=D, 4=E)

5. Escribe una explicación clara y detallada

6. Prueba que el código compile:
   ```bash
   npm run build
   ```

7. Commit y pull request

### Validación de preguntas

Antes de enviar tu pull request, verifica:

- [ ] La pregunta está bien redactada y es clara
- [ ] Las 5 alternativas son plausibles
- [ ] Solo una alternativa es correcta
- [ ] La explicación es completa y didáctica
- [ ] El nivel de dificultad es apropiado
- [ ] No hay errores ortográficos
- [ ] El formato TypeScript es correcto

---

## 📏 Estándares de código

### TypeScript

- Usa **TypeScript** para todos los archivos nuevos
- Define tipos explícitos para props, state, y funciones
- Evita `any` siempre que sea posible

### React

- Usa **functional components** con hooks
- Nombra componentes en **PascalCase**
- Nombra archivos de componentes en **PascalCase**
- Mantén componentes pequeños y enfocados

### CSS / Tailwind

- Usa **Tailwind CSS** para estilos
- Evita CSS personalizado salvo casos excepcionales
- Usa clases utilitarias de Tailwind
- Mantén consistencia con el diseño existente

### Estructura de archivos

```
src/
├── components/          # Componentes React
│   ├── ComponentName.tsx
├── data/                # Datos y configuración
│   ├── dataFile.ts
├── types.ts             # Tipos TypeScript
├── App.tsx              # Componente raíz
└── main.tsx             # Punto de entrada
```

### Nomenclatura

- **Componentes:** PascalCase (`Dashboard.tsx`)
- **Archivos de datos:** camelCase o kebab-case (`simulacro01-day1.ts`)
- **Variables y funciones:** camelCase (`handleLogin`, `questionCount`)
- **Constantes:** UPPER_SNAKE_CASE (`EXAM_DURATION`)
- **Tipos e interfaces:** PascalCase (`Question`, `User`)

---

## 🔄 Proceso de Pull Request

### Antes de enviar

1. **Sincroniza con main:**
   ```bash
   git checkout main
   git pull upstream main
   git checkout feature/tu-funcionalidad
   git rebase main
   ```

2. **Prueba todo:**
   ```bash
   npm run build
   ```

3. **Revisa tus cambios:**
   ```bash
   git diff
   ```

### Al enviar el PR

Usa esta plantilla:

```markdown
## Descripción
Descripción clara de los cambios.

## Tipo de cambio
- [ ] 🚀 Nueva funcionalidad
- [ ] 🐛 Corrección de bug
- [ ] 📝 Documentación
- [ ] 🎨 Estilos
- [ ] ♻️ Refactorización
- [ ] ⚡ Mejora de rendimiento
- [ ] 🧪 Tests
- [ ] 🔧 Tareas de mantenimiento

## ¿Cómo probar?
Pasos para probar los cambios.

## Capturas de pantalla
Si aplica.

## Checklist
- [ ] El código compila sin errores
- [ ] He probado los cambios localmente
- [ ] He actualizado la documentación si es necesario
- [ ] Mis cambios siguen los estándares del proyecto
- [ ] He agregado tests si es necesario
```

### Después de enviar

1. Un mantenedor revisará tu PR
2. Puede haber comentarios o solicitudes de cambio
3. Responde promptly a los comentarios
4. Una vez aprobado, un mantenedor hará merge

---

## 🎓 Recursos útiles

- [Documentación de React](https://react.dev)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de Vite](https://vitejs.dev)

---

## ❓ ¿Necesitas ayuda?

- Abre un **Issue** con la etiqueta `question`
- Contacta al equipo del proyecto
- Revisa la documentación existente

---

<div align="center">

**¡Gracias por contribuir a SimulacrUx!** 🎓

Juntos estamos construyendo la mejor plataforma de simulacros de admisión.

</div>
