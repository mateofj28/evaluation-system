# 🎯 Despliegue Paso a Paso (Para Principiantes)

## 📌 Resumen
Vamos a desplegar tu aplicación en **Render** (backend) y **Vercel** (frontend). Ambos son **100% GRATIS**.

**Tiempo total**: 15-20 minutos

---

## 🔧 Preparación (5 minutos)

### Paso 1: Compilar el Backend

1. Abre PowerShell en la carpeta `backend`
2. Ejecuta:
   ```bash
   .\mvnw.cmd clean package -DskipTests
   ```
3. Espera a que termine (2-3 minutos)
4. Verifica que se creó: `backend/target/evaluation-system-1.0.0.jar`

### Paso 2: Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `evaluation-system`
3. Descripción: "Sistema de evaluación con Spring Boot y Angular"
4. Público o Privado (tu elección)
5. **NO** marques "Add README"
6. Clic en "Create repository"

### Paso 3: Subir Código a GitHub

1. Abre PowerShell en la carpeta `system`
2. Ejecuta estos comandos uno por uno:

```bash
git init
git add .
git commit -m "Sistema de evaluación completo"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/evaluation-system.git
git push -u origin main
```

**Nota**: Reemplaza `TU-USUARIO` con tu usuario de GitHub

---

## 🖥️ Desplegar Backend en Render (7 minutos)

### Paso 1: Crear Cuenta en Render

1. Ve a https://render.com/
2. Clic en "Get Started for Free"
3. Selecciona "Sign up with GitHub"
4. Autoriza Render a acceder a tu GitHub

### Paso 2: Crear Web Service

1. En el Dashboard, clic en "New +"
2. Selecciona "Web Service"
3. Clic en "Connect a repository"
4. Busca y selecciona `evaluation-system`
5. Clic en "Connect"

### Paso 3: Configurar el Servicio

Completa el formulario con estos datos:

**General**:
- **Name**: `evaluation-backend` (o el nombre que quieras)
- **Region**: Oregon (US West) - Es gratis
- **Branch**: `main`
- **Root Directory**: `backend`

**Build & Deploy**:
- **Runtime**: Java
- **Build Command**: 
  ```
  ./mvnw clean package -DskipTests
  ```
- **Start Command**: 
  ```
  java -Dserver.port=$PORT -Dspring.profiles.active=prod -jar target/evaluation-system-1.0.0.jar
  ```

**Instance Type**:
- Selecciona: **Free** (0 USD/month)

**Environment Variables** (Opcional):
- Clic en "Add Environment Variable"
- Key: `SPRING_PROFILES_ACTIVE`
- Value: `prod`

### Paso 4: Desplegar

1. Clic en "Create Web Service" (botón azul abajo)
2. **Espera 5-10 minutos** mientras se despliega
3. Verás logs en tiempo real
4. Cuando veas "Started EvaluationSystemApplication" → ¡Listo!

### Paso 5: Copiar URL del Backend

1. En la parte superior verás la URL
2. Algo como: `https://evaluation-backend.onrender.com`
3. **Copia esta URL** (la necesitarás para el frontend)

### Paso 6: Probar el Backend

1. Abre en el navegador: `https://evaluation-backend.onrender.com/api/`
2. Deberías ver un JSON con información de la API
3. Si ves el JSON → ¡Backend funcionando! ✅

---

## 🎨 Desplegar Frontend en Vercel (5 minutos)

### Paso 1: Actualizar URL del Backend

1. Abre el archivo: `frontend/src/environments/environment.prod.ts`
2. Reemplaza el contenido con:
   ```typescript
   export const environment = {
     production: true,
     apiUrl: 'https://TU-BACKEND-URL.onrender.com/api'
   };
   ```
3. **Importante**: Reemplaza `TU-BACKEND-URL` con la URL que copiaste
4. Ejemplo: `https://evaluation-backend.onrender.com/api`
5. Guarda el archivo

### Paso 2: Subir Cambios a GitHub

```bash
git add .
git commit -m "Actualizar URL de producción"
git push
```

### Paso 3: Crear Cuenta en Vercel

1. Ve a https://vercel.com/
2. Clic en "Sign Up"
3. Selecciona "Continue with GitHub"
4. Autoriza Vercel

### Paso 4: Importar Proyecto

1. En el Dashboard, clic en "Add New..."
2. Selecciona "Project"
3. Busca tu repositorio `evaluation-system`
4. Clic en "Import"

### Paso 5: Configurar el Proyecto

**Configure Project**:
- **Framework Preset**: Angular
- **Root Directory**: Clic en "Edit" → Selecciona `frontend`
- **Build Command**: `npm run build` (ya está por defecto)
- **Output Directory**: `dist/evaluation-frontend/browser`
- **Install Command**: `npm install` (ya está por defecto)

### Paso 6: Desplegar

1. Clic en "Deploy" (botón azul)
2. **Espera 2-3 minutos**
3. Verás el progreso del build
4. Cuando termine verás: "Congratulations!" 🎉

### Paso 7: Copiar URL del Frontend

1. Verás la URL en grande
2. Algo como: `https://evaluation-system.vercel.app`
3. Clic en "Visit" para abrir la aplicación

---

## ✅ Verificar que Todo Funciona

### Test 1: Abrir la Aplicación

1. Abre la URL de Vercel en tu navegador
2. Deberías ver la página de login
3. Si ves la página → ¡Frontend funcionando! ✅

### Test 2: Iniciar Sesión

1. Usuario: `admin`
2. Contraseña: `admin123`
3. Clic en "Iniciar Sesión"
4. Si entras al dashboard → ¡Login funcionando! ✅

### Test 3: Crear un Curso

1. Login como: `evaluador` / `eval123`
2. Clic en "Crear Curso"
3. Completa el formulario
4. Clic en "Crear Curso"
5. Si se crea → ¡Backend y Frontend conectados! ✅

### Test 4: Tomar Evaluación

1. Login como: `estudiante` / `est123`
2. Ve a "Cursos"
3. Selecciona un curso
4. Inscríbete y responde preguntas
5. Si ves resultados → ¡Todo funcionando! ✅

### Test 5: Ver Clasificación

1. Ve a "Clasificación"
2. Deberías ver el ranking
3. Si apareces → ¡Sistema completo! ✅

---

## 📱 Compartir con Amigos

### Mensaje para Enviar

```
¡Hola! 👋

Acabo de desplegar mi sistema de evaluación. ¿Quieres probarlo?

🌐 URL: https://evaluation-system.vercel.app

👥 Usuarios de prueba:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📚 Estudiante:
   Usuario: estudiante
   Contraseña: est123

📝 Evaluador:
   Usuario: evaluador
   Contraseña: eval123

👑 Administrador:
   Usuario: admin
   Contraseña: admin123
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ Funcionalidades:
• Crear cursos (como evaluador)
• Tomar evaluaciones
• Ver clasificación en tiempo real
• Ganar badges por logros

¡Diviértete! 🚀
```

---

## 🆘 Solución de Problemas

### Problema 1: Backend no inicia en Render

**Síntomas**: Logs muestran errores, servicio no arranca

**Solución**:
1. Verifica que el Build Command sea correcto
2. Verifica que el Start Command sea correcto
3. Revisa los logs para ver el error específico
4. Asegúrate que `application-prod.yml` existe

### Problema 2: Frontend no conecta con Backend

**Síntomas**: Login no funciona, error en consola del navegador

**Solución**:
1. Abre la consola del navegador (F12)
2. Ve a la pestaña "Network"
3. Intenta hacer login
4. Verifica que la petición vaya a la URL correcta
5. Si la URL es incorrecta, actualiza `environment.prod.ts`

### Problema 3: Error de CORS

**Síntomas**: Error "CORS policy" en consola

**Solución**:
1. Abre `backend/src/main/resources/application-prod.yml`
2. Verifica que tenga:
   ```yaml
   cors:
     allowed-origins: "*"
   ```
3. Haz commit y push
4. Render redespliegará automáticamente

### Problema 4: Backend se duerme

**Síntomas**: Primera petición tarda mucho (~30 segundos)

**Explicación**: Render Free se duerme después de 15 minutos sin uso

**Soluciones**:
- Opción 1: Espera 30 segundos en la primera petición
- Opción 2: Usa Railway (no se duerme)
- Opción 3: Actualiza a Render Starter ($7/mes)

### Problema 5: Base de datos vacía

**Síntomas**: No hay usuarios, no hay cursos

**Solución**:
1. Los datos se crean automáticamente al iniciar
2. Espera a que el backend termine de iniciar
3. Verifica los logs: debe decir "Started EvaluationSystemApplication"
4. Si persiste, verifica que `DataInitializer.java` esté en el código

---

## 📊 Monitoreo

### Ver Logs del Backend (Render)

1. Dashboard de Render
2. Selecciona tu servicio
3. Pestaña "Logs"
4. Verás logs en tiempo real

### Ver Logs del Frontend (Vercel)

1. Dashboard de Vercel
2. Selecciona tu proyecto
3. Pestaña "Deployments"
4. Clic en el deployment activo
5. Clic en "View Function Logs"

### Métricas

**Render**:
- CPU usage
- Memory usage
- Request count
- Response time

**Vercel**:
- Bandwidth usage
- Build time
- Deployment frequency

---

## 🎉 ¡Felicidades!

Has desplegado exitosamente tu aplicación en producción. Ahora está accesible desde cualquier lugar del mundo. 🌍

**Tus URLs**:
- 🎨 Frontend: `https://evaluation-system.vercel.app`
- 🖥️ Backend: `https://evaluation-backend.onrender.com`

**Próximos pasos**:
1. ✅ Comparte con tus amigos
2. ✅ Prueba con diferentes usuarios
3. ✅ Revisa la clasificación
4. ✅ Crea nuevos cursos
5. ✅ ¡Disfruta tu aplicación!

---

## 💡 Tips Adicionales

### Actualizar la Aplicación

Cuando hagas cambios en el código:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

- Render redespliegará automáticamente el backend
- Vercel redespliegará automáticamente el frontend

### Dominio Personalizado

Si quieres usar tu propio dominio:

**Vercel**:
1. Settings → Domains
2. Add domain
3. Sigue las instrucciones de DNS

**Render**:
1. Settings → Custom Domain
2. Add custom domain
3. Configura DNS

### Backup de Datos

Para hacer backup de la base de datos:

1. Accede al servidor de Render
2. Descarga el archivo `data/evaluationdb.mv.db`
3. Guárdalo en un lugar seguro

---

¿Necesitas ayuda con algún paso? ¡Pregunta! 😊
