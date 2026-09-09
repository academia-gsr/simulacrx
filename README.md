# 🎓 SimulacrUx

> **Plataforma de Simulacros de Admisión** — Proyecto Piloto  
> *Proyecto 4: Simulación Exámenes PRE*

[![Versión](https://img.shields.io/badge/versión-2.1.0-blue)]()
[![Estado](https://img.shields.io/badge/estado-piloto-green)]()
[![Licencia](https://img.shields.io/badge/licencia-MIT-yellow)]()

**SimulacrUx** es una plataforma web moderna diseñada para simulacros de admisión preuniversitaria. Permite a los postulantes practicar con exámenes reales de instituciones como la **Universidad Nacional de Ingeniería (UNI)** y la **Escuela de Oficiales de la Marina de Guerra del Perú (ESMGP)**.

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Demo en vivo](#-demo-en-vivo)
- [Requisitos](#-requisitos)
- [Instalación](#-instalación)
- [Ejecución](#-ejecución)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Sistema de usuarios](#-sistema-de-usuarios)
- [Simulacros disponibles](#-simulacros-disponibles)
- [Guía para publicar en GitHub](#-guía-para-publicar-en-github)
- [Despliegue](#-despliegue)
- [Próximas iteraciones](#-próximas-iteraciones)
- [Equipo](#-equipo)
- [Licencia](#-licencia)

---

## ✨ Características

### 🎯 Para Postulantes
- ✅ Exámenes cronometrados con navegación libre entre preguntas
- ✅ Resultados inmediatos con análisis por área temática
- ✅ Solucionario detallado con explicaciones paso a paso
- ✅ Preguntas ordenadas aleatoriamente manteniendo numeración ascendente
- ✅ Estadísticas visuales de rendimiento

### 🔐 Sistema de Control de Acceso
- ✅ **4 roles de usuario**: Administrador, PLUS, BASIC, Invitado
- ✅ Permisos diferenciados por rol
- ✅ Intentos limitados según plan
- ✅ Acceso a explicaciones según plan

### 🎨 Diseño Adaptable
- ✅ Colorimetría diferenciada por institución (UNI: azul/índigo, Marina: slate/azul oscuro)
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Interfaz moderna con Tailwind CSS

---

## 🌐 Demo en vivo

> 🔗 **URL del piloto:** [https://tu-usuario.github.io/simulacrx/](#)  
> *(Reemplazar con la URL real una vez desplegado)*

### Credenciales de prueba

| Usuario | Contraseña | Rol | Acceso |
|---------|-----------|-----|--------|
| `Admin` | `Admin1234` | 👑 Administrador | Total |
| `P_UNI_PLUS` | `Puni1234` | ⭐ PLUS | Simulacro N°01 UNI |
| `P_MGP_PLUS` | `Pmgp1234` | ⭐ PLUS | Simulacro N°02 Marina |
| `P_UNI_BASIC` | `Puni1234` | 🎯 BASIC | Simulacro N°01 UNI |
| `P_MGP_BASIC` | `Pmgp1234` | 🎯 BASIC | Simulacro N°02 Marina |
| *(Invitado)* | *(sin login)* | 👤 Invitado | 10% de preguntas |

---

## 📦 Requisitos

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- **Git** (para clonar el repositorio)

Verifica tu instalación:

```bash
node --version   # v18.x o superior
npm --version    # 9.x o superior
git --version
```

---

## 🔧 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/simulacrx.git
cd simulacrx
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Verificar la instalación

```bash
npm run build
```

Si ves el mensaje `✓ built in X.XXs`, la instalación fue exitosa.

---

## 🚀 Ejecución

### Modo desarrollo (con hot-reload)

```bash
npm run dev
```

Abre tu navegador en: `http://localhost:5173`

### Modo producción (build)

```bash
npm run build
npm run preview
```

---

## 📁 Estructura del proyecto

```
simulacrx/
├── public/                    # Archivos estáticos públicos
├── src/
│   ├── components/            # Componentes React
│   │   ├── Dashboard.tsx      # Panel principal post-login
│   │   ├── Exam.tsx           # Interfaz de examen
│   │   ├── Landing.tsx        # Pantalla previa al examen
│   │   ├── Login.tsx          # Control de acceso
│   │   └── Results.tsx        # Resultados y revisión
│   ├── data/                  # Bancos de preguntas y configuración
│   │   ├── simulacro01-day1.ts   # 100 preguntas Aptitud y Humanidades
│   │   ├── simulacro01-day2.ts   # 40 preguntas Matemática
│   │   ├── simulacro01-day3.ts   # 40 preguntas Física y Química
│   │   ├── simulacro02-questions.ts  # 100 preguntas ESMGP
│   │   ├── simulacros.ts      # Configuración de simulacros
│   │   └── users.ts           # Usuarios piloto y autenticación
│   ├── types.ts               # Tipos TypeScript
│   ├── App.tsx                # Componente raíz
│   ├── main.tsx               # Punto de entrada
│   └── index.css              # Estilos globales (Tailwind)
├── index.html                 # HTML principal
├── package.json               # Dependencias y scripts
├── tsconfig.json              # Configuración TypeScript
├── vite.config.js             # Configuración Vite
├── README.md                  # Este archivo
├── DEPLOYMENT.md              # Guía de despliegue
├── CONTRIBUTING.md            # Guía de contribución
└── LICENSE                    # Licencia MIT
```

---

## 👥 Sistema de usuarios

### Roles y permisos

| Rol | Acceso | Intentos | Explicaciones | Precio |
|-----|--------|----------|---------------|--------|
| 👑 **Administrador** | Todos los simulacros | Ilimitados | ✅ Sí | - |
| ⭐ **PLUS** | Simulacros asignados | Ilimitados | ✅ Sí | S/ 50 |
| 🎯 **BASIC** | Simulacros asignados | 1 por bloque | ❌ No | S/ 35 |
| 👤 **Invitado** | Todos (prueba) | 10% preguntas | ❌ No | - |

### Flujo de acceso

```
┌─────────────┐
│   Login     │
└──────┬──────┘
       │
       ├──→ Autenticado → Dashboard → Seleccionar bloque → Examen
       │
       └──→ Invitado → Dashboard (limitado) → 10% preguntas
       
       Los invitados pueden mejorar a:
       ├── BASIC (S/35) → 1 intento, sin explicaciones
       └── PLUS (S/50) → Intentos ilimitados + explicaciones
```

---

## 📚 Simulacros disponibles

### Simulacro N°01 — UNI P_UNI 2027

**Institución:** Universidad Nacional de Ingeniería  
**Colorimetría:** Azul/Índigo  
**Total:** 180 preguntas distribuidas en 3 bloques

| Bloque | Día | Preguntas | Duración |
|--------|-----|-----------|----------|
| Aptitud Académica y Humanidades | Día 1 | 100 | 3 horas |
| Matemática | Día 2 | 40 | 3 horas |
| Física y Química | Día 3 | 40 | 3 horas |

**Áreas evaluadas:** Razonamiento Matemático, Razonamiento Verbal, Lógico-Algorítmico, Comunicación, Literatura, Historia del Perú, Geografía, Economía, Inglés, Filosofía, Lógica, Actualidad, Ciencia y Tecnología, Realidad Nacional, Aritmética, Álgebra, Geometría, Trigonometría, Cálculo Diferencial, Mecánica, Termodinámica, Electromagnetismo, Óptica, Estructura Atómica, Tabla Periódica, Enlaces, Reacciones, Estequiometría.

### Simulacro N°02 — ESMGP

**Institución:** Escuela de Oficiales de la Marina de Guerra del Perú  
**Colorimetría:** Slate/Azul oscuro  
**Total:** 100 preguntas en 1 bloque

| Bloque | Preguntas | Duración |
|--------|-----------|----------|
| Banco 1 Completo | 100 | 2 horas |

**Áreas evaluadas:** R. Matemático, R. Verbal, Geometría, Aritmética, Álgebra, Trigonometría, Física, Química, Lengua y Literatura, Informática, Historia, Geografía, Inglés.

---

## 📤 Guía para publicar en GitHub

### Paso 1: Crear cuenta en GitHub

1. Ve a [https://github.com](https://github.com)
2. Haz clic en **Sign up**
3. Completa el formulario con tu correo, contraseña y nombre de usuario
4. Verifica tu correo electrónico

### Paso 2: Crear un nuevo repositorio

1. En GitHub, haz clic en el botón **+** (esquina superior derecha) → **New repository**
2. Completa los datos:
   - **Repository name:** `simulacrx` (o el nombre que prefieras)
   - **Description:** `Plataforma de Simulacros de Admisión — Proyecto Piloto`
   - **Visibility:** `Public` (o `Private` si es interno)
   - **NO marques** "Add a README file" (ya tenemos uno)
   - **NO marques** "Add .gitignore" (ya tenemos uno)
3. Haz clic en **Create repository**

### Paso 3: Conectar tu proyecto local con GitHub

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
# Inicializar git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "🚀 SimulacrUx v2.1 - Piloto inicial"

# Agregar el repositorio remoto (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/simulacrx.git

# Renombrar la rama principal a 'main'
git branch -M main

# Subir el código a GitHub
git push -u origin main
```

### Paso 4: Verificar en GitHub

1. Recarga la página del repositorio en GitHub
2. Deberías ver todos los archivos del proyecto
3. El `README.md` se mostrará automáticamente en la página principal

### Paso 5: Configurar GitHub Pages (despliegue automático)

Ver la guía detallada en [DEPLOYMENT.md](./DEPLOYMENT.md).

---

## 🌍 Despliegue

### Opción 1: GitHub Pages (gratuito, recomendado para piloto)

Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para instrucciones completas.

**Pasos rápidos:**

1. Instala la dependencia de despliegue:
   ```bash
   npm install -D gh-pages
   ```

2. Agrega scripts en `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Despliega:
   ```bash
   npm run deploy
   ```

4. Tu sitio estará en: `https://TU-USUARIO.github.io/simulacrx/`

### Opción 2: Vercel (recomendado para producción)

1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Sigue las instrucciones

### Opción 3: Netlify

1. Conecta tu repositorio de GitHub en [netlify.com](https://netlify.com)
2. Configura el build command: `npm run build`
3. Configura el publish directory: `dist`

---

## 🔮 Próximas iteraciones

### Iteración 2 (planificada)
- [ ] Integración de login con Google (OAuth 2.0)
- [ ] Autorización de nuevos usuarios por el administrador
- [ ] Sistema de notificaciones por correo

### Iteración 3 (planificada)
- [ ] Pagos automatizados vía **PLIN** y **YAPE**
- [ ] Upgrade automático Invitado → BASIC/PLUS tras confirmación de pago
- [ ] Historial de pagos y recibos

### Iteración 4 (planificada)
- [ ] Dashboard del administrador con métricas avanzadas
- [ ] Exportación de resultados a PDF
- [ ] Modo offline (PWA)
- [ ] Estadísticas comparativas entre simulacros

### Iteración 5 (planificada)
- [ ] API REST para integración con otros sistemas
- [ ] Banco de preguntas editable desde el panel admin
- [ ] Generación automática de simulacros personalizados

---

## 👨‍💻 Equipo

**Proyecto:** 4. Simulación Exámenes PRE  
**Versión:** Piloto v2.1  
**Fecha:** Septiembre 2026

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](./LICENSE) para más detalles.

---

## 📞 Soporte

Para reportar bugs o solicitar funcionalidades:

1. Abre un **Issue** en el repositorio de GitHub
2. Usa las etiquetas apropiadas: `bug`, `enhancement`, `question`
3. Incluye capturas de pantalla si es relevante

---

<div align="center">

**SimulacrUx** — *Preparando el futuro, un simulacro a la vez* 🎓

[![Hecho con React](https://img.shields.io/badge/Hecho_con-React-61DAFB?style=for-the-badge&logo=react)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)]()
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css)]()

</div>
