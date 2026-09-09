# 📤 Publicar SimulacrUx en GitHub — Guía Rápida

> Guía paso a paso para publicar el piloto de SimulacrUx en GitHub y desplegarlo en GitHub Pages.

---

## 🎯 Resumen rápido (5 pasos)

```bash
# 1. Crear repositorio en GitHub
# 2. Conectar local con GitHub
git init
git add .
git commit -m "🚀 SimulacrUx v2.1 - Piloto inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/simulacrx.git
git push -u origin main

# 3. Instalar herramienta de despliegue
npm install -D gh-pages

# 4. Desplegar
npm run deploy

# 5. Activar GitHub Pages en Settings
```

---

## 📋 Paso a paso detallado

### ✅ PASO 1: Crear cuenta y repositorio en GitHub

1. **Crear cuenta** (si no tienes):
   - Ve a [github.com](https://github.com) → **Sign up**
   - Completa el registro y verifica tu correo

2. **Crear nuevo repositorio**:
   - Clic en **+** (arriba derecha) → **New repository**
   - Configura:
     ```
     Repository name: simulacrx
     Description: Plataforma de Simulacros de Admisión — Piloto v2.1
     Visibility: Public (o Private)
     NO marcar: "Add a README" (ya tenemos uno)
     NO marcar: "Add .gitignore" (ya tenemos uno)
     ```
   - Clic en **Create repository**

3. **Copia la URL del repositorio**:
   ```
   https://github.com/TU-USUARIO/simulacrx.git
   ```

---

### ✅ PASO 2: Conectar tu proyecto local con GitHub

Abre una terminal en la carpeta del proyecto:

```bash
# Inicializar git
git init

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "🚀 SimulacrUx v2.1 - Piloto inicial"

# Renombrar rama principal
git branch -M main

# Agregar repositorio remoto (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/simulacrx.git

# Subir código a GitHub
git push -u origin main
```

**Verificación:** Recarga la página del repositorio en GitHub. Deberías ver todos los archivos.

---

### ✅ PASO 3: Configurar para GitHub Pages

1. **Instalar gh-pages**:
   ```bash
   npm install -D gh-pages
   ```

2. **Editar `vite.config.js`** (agregar `base`):
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/simulacrx/', // ⚠️ Nombre de tu repositorio
   })
   ```

3. **Editar `package.json`** (agregar scripts):
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

4. **Commit de la configuración**:
   ```bash
   git add .
   git commit -m "🔧 Configurar para GitHub Pages"
   git push
   ```

---

### ✅ PASO 4: Desplegar en GitHub Pages

```bash
npm run deploy
```

Este comando:
1. Construye el proyecto (`npm run build`)
2. Sube la carpeta `dist/` a la rama `gh-pages`

---

### ✅ PASO 5: Activar GitHub Pages

1. En tu repositorio de GitHub, ve a **Settings**
2. En el menú lateral, clic en **Pages**
3. En **Source**, configura:
   ```
   Branch: gh-pages
   Folder: / (root)
   ```
4. Clic en **Save**

**Espera 1-2 minutos** y tu sitio estará en:

```
https://TU-USUARIO.github.io/simulacrx/
```

---

## 🔄 Actualizaciones futuras

Cada vez que hagas cambios:

```bash
# 1. Hacer cambios en el código
# ...

# 2. Probar localmente
npm run dev

# 3. Commit y push
git add .
git commit -m "📝 Descripción del cambio"
git push

# 4. Desplegar
npm run deploy
```

---

## ✅ Checklist de verificación

Después del despliegue, verifica:

- [ ] La página carga en `https://TU-USUARIO.github.io/simulacrx/`
- [ ] El login funciona con las credenciales de prueba
- [ ] Puedes seleccionar un simulacro
- [ ] El examen se ejecuta correctamente
- [ ] Los resultados se muestran
- [ ] La colorimetría es correcta (UNI: azul, Marina: slate)

### Credenciales de prueba

| Usuario | Contraseña | Rol |
|---------|-----------|-----|
| `Admin` | `Admin1234` | Administrador |
| `P_UNI_PLUS` | `Puni1234` | PLUS (UNI) |
| `P_MGP_PLUS` | `Pmgp1234` | PLUS (Marina) |
| `P_UNI_BASIC` | `Puni1234` | BASIC (UNI) |
| `P_MGP_BASIC` | `Pmgp1234` | BASIC (Marina) |

---

## 🐛 Problemas comunes

### Página en blanco
→ Verifica que `base` en `vite.config.js` coincida con el nombre del repositorio.

### Error 404 al recargar
→ Crea un archivo `public/404.html` (ver [DEPLOYMENT.md](./DEPLOYMENT.md)).

### Los cambios no se reflejan
→ Espera 2-3 minutos (GitHub Pages tiene caché) o haz hard refresh (Ctrl+Shift+R).

### Build falla
```bash
rm -rf node_modules dist
npm install
npm run build
```

---

## 📚 Más información

- **Guía completa de despliegue:** [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Guía de contribución:** [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Documentación principal:** [README.md](./README.md)

---

<div align="center">

### 🎉 ¡Listo! Tu simulacro está publicado en GitHub

**URL:** `https://TU-USUARIO.github.io/simulacrx/`

</div>
