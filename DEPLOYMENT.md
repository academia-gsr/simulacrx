# 🚀 Guía de Despliegue — SimulacrUx

Esta guía explica cómo desplegar **SimulacrUx** en diferentes plataformas.

---

## 📋 Tabla de Contenidos

- [Preparación previa](#-preparación-previa)
- [Opción 1: GitHub Pages (recomendado para piloto)](#opción-1-github-pages-recomendado-para-piloto)
- [Opción 2: Vercel (recomendado para producción)](#opción-2-vercel-recomendado-para-producción)
- [Opción 3: Netlify](#opción-3-netlify)
- [Opción 4: Render](#opción-4-render)
- [Dominio personalizado (opcional)](#dominio-personalizado-opcional)
- [Verificación post-despliegue](#-verificación-post-despliegue)
- [Solución de problemas](#-solución-de-problemas)

---

## 🔧 Preparación previa

### 1. Verificar que el build funciona localmente

```bash
npm run build
```

Deberías ver:
```
✓ built in X.XXs
```

### 2. Actualizar la configuración de Vite

Edita `vite.config.js` para agregar el `base` si usas GitHub Pages:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/simulacrx/', // ⚠️ Cambia por el nombre de tu repositorio
})
```

> **Importante:** Si tu repositorio se llama `simulacrx`, el `base` debe ser `/simulacrx/`.  
> Si usas un dominio personalizado, deja `base: '/'`.

### 3. Commit de los cambios

```bash
git add .
git commit -m "🔧 Configurar base path para GitHub Pages"
git push
```

---

## Opción 1: GitHub Pages (recomendado para piloto)

**Ventajas:** Gratuito, integrado con GitHub, HTTPS automático.  
**Desventajas:** Solo para sitios estáticos, URL con `/usuario/`.

### Paso 1: Instalar gh-pages

```bash
npm install -D gh-pages
```

### Paso 2: Agregar scripts en package.json

Abre `package.json` y agrega estos scripts (si no existen):

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Paso 3: Desplegar

```bash
npm run deploy
```

Esto hará:
1. Ejecutará `npm run build` (predeploy)
2. Subirá la carpeta `dist/` a la rama `gh-pages`

### Paso 4: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. **Settings** → **Pages**
3. En **Source**, selecciona:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Haz clic en **Save**

### Paso 5: Verificar el despliegue

En 1-2 minutos, tu sitio estará disponible en:

```
https://TU-USUARIO.github.io/simulacrx/
```

### Paso 6: Despliegues futuros

Cada vez que hagas cambios:

```bash
git add .
git commit -m "📝 Descripción de los cambios"
git push
npm run deploy
```

---

## Opción 2: Vercel (recomendado para producción)

**Ventajas:** Despliegue automático desde GitHub, CDN global, preview de PRs.  
**Desventajas:** Requiere cuenta (gratis para uso personal).

### Paso 1: Crear cuenta en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **Sign Up** → **Continue with GitHub**
3. Autoriza el acceso a tus repositorios

### Paso 2: Importar el proyecto

1. En el dashboard de Vercel, haz clic en **Add New...** → **Project**
2. Busca tu repositorio `simulacrx` y haz clic en **Import**
3. Vercel detectará automáticamente que es un proyecto Vite

### Paso 3: Configurar el build

Vercel debería detectar estas configuraciones automáticamente:

| Campo | Valor |
|-------|-------|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

Si no, configúralos manualmente.

### Paso 4: Desplegar

Haz clic en **Deploy**. En 1-2 minutos tendrás una URL como:

```
https://simulacrx.vercel.app
```

### Paso 5: Despliegues automáticos

A partir de ahora, cada `git push` a la rama `main` desplegará automáticamente.

---

## Opción 3: Netlify

**Ventajas:** Similar a Vercel, drag & drop disponible.  
**Desventajas:** Menos integración con GitHub que Vercel.

### Paso 1: Crear cuenta en Netlify

1. Ve a [netlify.com](https://netlify.com)
2. Regístrate con GitHub

### Paso 2: Nuevo sitio desde Git

1. **Add new site** → **Import an existing project**
2. Selecciona **GitHub**
3. Autoriza y selecciona tu repositorio `simulacrx`

### Paso 3: Configurar el build

| Campo | Valor |
|-------|-------|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | `18` |

### Paso 4: Desplegar

Haz clic en **Deploy site**. URL generada:

```
https://simulacrx.netlify.app
```

### Alternativa: Drag & Drop

Si no quieres conectar GitHub:

```bash
npm run build
```

Luego arrastra la carpeta `dist/` al dashboard de Netlify.

---

## Opción 4: Render

**Ventajas:** Gratuito, buena integración con GitHub.

### Paso 1: Crear cuenta en Render

1. Ve a [render.com](https://render.com)
2. Regístrate con GitHub

### Paso 2: Nuevo Static Site

1. **New** → **Static Site**
2. Conecta tu repositorio `simulacrx`

### Paso 3: Configurar

| Campo | Valor |
|-------|-------|
| Build Command | `npm run build` |
| Publish Directory | `dist` |

### Paso 4: Desplegar

Render desplegará automáticamente. URL:

```
https://simulacrx.onrender.com
```

---

## 🌐 Dominio personalizado (opcional)

Si tienes un dominio propio (ej: `simulacrx.com`), puedes configurarlo:

### GitHub Pages

1. En tu proveedor de dominio, crea un registro CNAME:
   ```
   www  →  TU-USUARIO.github.io
   ```
2. En el repositorio, crea un archivo `CNAME` en la raíz con el contenido:
   ```
   simulacrx.com
   ```
3. En GitHub: **Settings** → **Pages** → **Custom domain** → Ingresa tu dominio

### Vercel / Netlify

1. En el dashboard, ve a **Domains**
2. Agrega tu dominio
3. Sigue las instrucciones para configurar DNS

---

## ✅ Verificación post-despliegue

Después del despliegue, verifica:

### 1. Página de login

- [ ] La página carga correctamente
- [ ] El logo y título "SimulacrUx" se muestran
- [ ] Los botones funcionan

### 2. Login de usuarios

Prueba cada credencial:

```
Admin / Admin1234 → Dashboard de administrador
P_UNI_PLUS / Puni1234 → Dashboard PLUS (UNI)
P_MGP_PLUS / Pmgp1234 → Dashboard PLUS (Marina)
P_UNI_BASIC / Puni1234 → Dashboard BASIC (UNI)
P_MGP_BASIC / Pmgp1234 → Dashboard BASIC (Marina)
Invitado → Dashboard limitado
```

### 3. Ejecución de examen

- [ ] Selecciona un bloque
- [ ] El formulario de datos aparece
- [ ] El examen inicia con el temporizador correcto (3 horas para UNI)
- [ ] Las preguntas se muestran aleatoriamente
- [ ] Puedes navegar entre preguntas
- [ ] Puedes terminar el examen

### 4. Resultados

- [ ] El puntaje se muestra correctamente
- [ ] El análisis por área funciona
- [ ] Las explicaciones aparecen solo para PLUS/Admin
- [ ] Los botones de navegación funcionan

### 5. Colorimetría

- [ ] Simulacro UNI usa tonos azul/índigo
- [ ] Simulacro Marina usa tonos slate/azul oscuro

---

## 🐛 Solución de problemas

### Problema: Página en blanco después del despliegue

**Causa:** El `base` en `vite.config.js` no coincide con el nombre del repositorio.

**Solución:**
```javascript
// vite.config.js
export default defineConfig({
  base: '/nombre-del-repo/', // Debe coincidir con el nombre del repo
})
```

### Problema: Los assets (CSS/JS) no cargan

**Causa:** Rutas absolutas incorrectas.

**Solución:** Verifica el `base` en `vite.config.js` y vuelve a desplegar.

### Problema: GitHub Pages muestra 404 al recargar

**Causa:** Las rutas de React no están configuradas para SPA.

**Solución:** Crea un archivo `404.html` en la carpeta `public/` con:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>SimulacrUx</title>
    <script type="text/javascript">
      // Redireccionar al index.html manteniendo la ruta
      var pathSegmentsToKeep = 1; // 0 para dominio personalizado, 1 para GitHub Pages
      var l = window.location;
      l.replace(l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash);
    </script>
  </head>
  <body></body>
</html>
```

Y agrega este script en `index.html` antes de `</head>`:

```html
<script type="text/javascript">
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
        l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>
```

### Problema: El build falla con errores de TypeScript

**Solución:**
```bash
# Limpiar caché
rm -rf node_modules dist package-lock.json
npm install
npm run build
```

### Problema: Los cambios no se reflejan en GitHub Pages

**Solución:**
```bash
# Forzar nuevo despliegue
npm run deploy

# O eliminar la rama gh-pages y recrearla
git push origin --delete gh-pages
npm run deploy
```

---

## 📊 Monitoreo post-despliegue

### GitHub Pages

- Ve a **Settings** → **Pages** para ver el estado del despliegue
- Los logs de build están en **Actions**

### Vercel

- Dashboard → **Deployments** para ver el historial
- **Analytics** para métricas de uso

### Netlify

- **Deploys** para historial
- **Analytics** para métricas

---

## 🔄 Actualizaciones continuas

### Flujo de trabajo recomendado

```bash
# 1. Hacer cambios locales
# ... editar código ...

# 2. Probar localmente
npm run dev

# 3. Verificar build
npm run build

# 4. Commit y push
git add .
git commit -m "📝 Descripción del cambio"
git push

# 5. Desplegar (solo GitHub Pages)
npm run deploy
```

### Convenciones de commits

Usa emojis para identificar el tipo de cambio:

- 🚀 `feat`: Nueva funcionalidad
- 🐛 `fix`: Corrección de bugs
- 📝 `docs`: Cambios en documentación
- 🎨 `style`: Cambios de estilo/CSS
- ♻️ `refactor`: Refactorización
- ⚡ `perf`: Mejoras de rendimiento
- 🧪 `test`: Tests
- 🔧 `chore`: Tareas de mantenimiento

Ejemplos:
```bash
git commit -m "🚀 Agregar sistema de pagos PLIN/YAPE"
git commit -m "🐛 Corregir temporizador en examen UNI"
git commit -m "📝 Actualizar README con nuevas credenciales"
```

---

<div align="center">

**¿Necesitas ayuda?** Abre un [Issue](https://github.com/TU-USUARIO/simulacrx/issues) en el repositorio.

</div>
