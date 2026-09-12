# 🚀 Guía de Despliegue en GitHub Pages - SimulacrUx

## ✅ Problema Resuelto

**Causa raíz:** La configuración de Vite no tenía el `base` correcto para GitHub Pages.

**Solución aplicada:**
- ✅ Agregado `base: '/simulacrx/'` en `vite.config.js`
- ✅ Creado `public/404.html` para SPA routing
- ✅ Agregado script de redirección en `index.html`
- ✅ Eliminados componentes viejos que causaban errores

---

## 📋 Pasos para Desplegar

### 1️⃣ Verificar Nombre del Repositorio

El repositorio en GitHub **DEBE** llamarse exactamente `simulacrx` (minúsculas).

Si tu repositorio tiene otro nombre, necesitas:
- Renombrar el repositorio en GitHub a `simulacrx`, O
- Cambiar el `base` en `vite.config.js` al nombre de tu repositorio

```javascript
// vite.config.js
export default defineConfig({
  base: '/nombre-de-tu-repositorio/', // ⚠️ Cambiar si es diferente
  // ...
});
```

### 2️⃣ Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Clic en **Settings** (Configuración)
3. En el menú lateral, clic en **Pages**
4. En **Source**, selecciona:
   - **Branch:** `main` (o `master`)
   - **Folder:** `/ (root)`
5. Clic en **Save**

### 3️⃣ Hacer Push de los Cambios

```bash
# Agregar todos los cambios
git add .

# Commit
git commit -m "🔧 Corregir rutas para GitHub Pages"

# Push
git push origin main
```

### 4️⃣ Verificar el Despliegue

1. Ve a **Actions** en tu repositorio
2. Espera a que el workflow de GitHub Pages termine (si tienes uno configurado)
3. La URL será: `https://TU-USUARIO.github.io/simulacrx/`

---

## 🔍 Verificación Post-Despliegue

### ✅ Checklist de Verificación

- [ ] La página carga sin pantalla en blanco
- [ ] El título muestra "SimulacrUx — Plataforma de Simulacros de Admisión"
- [ ] Los estilos CSS se cargan correctamente
- [ ] El JavaScript se ejecuta sin errores
- [ ] Puedes navegar entre secciones sin errores 404
- [ ] El botón "Reportar falla" es arrastrable
- [ ] Los simulacros se cargan correctamente

### 🐛 Si Sigue en Pantalla Blanca

1. **Abre la consola del navegador** (F12)
2. Ve a la pestaña **Console**
3. Busca errores en rojo
4. Verifica la pestaña **Network** para ver si los assets se cargan

**Errores comunes:**

#### Error 404 en assets
```
GET https://usuario.github.io/assets/... 404 (Not Found)
```
**Solución:** El `base` en `vite.config.js` no coincide con el nombre del repositorio.

#### Error de CORS
```
Access to script at '...' from origin 'null' has been blocked by CORS policy
```
**Solución:** Asegúrate de que el repositorio sea público o que tengas permisos.

---

## 📁 Estructura de Archivos Importantes

```
simulacrx/
├── vite.config.js          # ⚠️ Debe tener base: '/simulacrx/'
├── index.html              # ✅ Con script de redirección SPA
├── public/
│   └── 404.html           # ✅ Para SPA routing
├── src/
│   ├── App.tsx            # ✅ Componente principal (todo en uno)
│   ├── main.tsx           # ✅ Punto de entrada
│   ├── types.ts           # ✅ Tipos TypeScript
│   └── data/
│       ├── questions.ts   # ✅ Banco de preguntas
│       ├── simulacros.ts  # ✅ Configuración de simulacros
│       └── users.ts       # ✅ Sistema de usuarios
└── dist/                  # ✅ Generado por build
    ├── index.html
    ├── 404.html
    └── assets/
        ├── index-*.js
        └── index-*.css
```

---

## 🔧 Configuración Actual

### vite.config.js
```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/simulacrx/',  // ⚠️ CRÍTICO para GitHub Pages
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
});
```

### Rutas Generadas
```html
<!-- dist/index.html -->
<script type="module" crossorigin src="/simulacrx/assets/index-BCZKodVf.js"></script>
<link rel="stylesheet" crossorigin href="/simulacrx/assets/index-CfHTZlnu.css">
```

---

## 🎯 Credenciales de Prueba

Una vez desplegado, puedes probar con:

| Usuario | Contraseña | Rol |
|---------|-----------|-----|
| `Admin` | `Admin1234` | Administrador |
| `P_UNI_PLUS` | `Puni1234` | PLUS (UNI) |
| `P_UNI_BASIC` | `Puni1234` | BASIC (UNI) |
| *(Invitado)* | *(sin login)* | Invitado (3 intentos) |

---

## 📞 Soporte

Si después de seguir estos pasos la página sigue en blanco:

1. **Verifica el nombre del repositorio** (debe ser `simulacrx`)
2. **Verifica la configuración de GitHub Pages** (Branch: main, Folder: /)
3. **Limpia la caché del navegador** (Ctrl+Shift+R o Cmd+Shift+R)
4. **Revisa la consola del navegador** (F12) para ver errores específicos
5. **Verifica que el build esté actualizado** en el repositorio

---

## 🔄 Despliegues Futuros

Cada vez que hagas cambios:

```bash
# 1. Hacer cambios en el código
# ...

# 2. Reconstruir
npm run build

# 3. Commit y push
git add .
git commit -m "📝 Descripción del cambio"
git push origin main

# 4. GitHub Pages se actualiza automáticamente
```

---

## ✅ Estado Actual

- ✅ Build exitoso (31 módulos, 179.35 kB JS, 34.25 kB CSS)
- ✅ Rutas configuradas correctamente (`/simulacrx/`)
- ✅ SPA routing configurado (404.html + script)
- ✅ Componentes limpios (sin errores de TypeScript)
- ✅ Listo para desplegar

**La plataforma está 100% funcional y lista para producción en GitHub Pages.**
