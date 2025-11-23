# 🚀 Guía Rápida de Despliegue (10 minutos)

## Opción Más Fácil: Render.com (TODO EN UNO)

### ✅ Ventajas
- 100% GRATIS
- No necesitas tarjeta de crédito
- Backend y Frontend en un solo lugar
- Despliegue automático

---

## 📦 Paso 1: Preparar el Código

### 1.1 Compilar el Backend
```bash
cd backend
.\mvnw.cmd clean package -DskipTests
```

Esto crea: `backend/target/evaluation-system-1.0.0.jar`

### 1.2 Subir a GitHub

1. Crea un repositorio en GitHub: https://github.com/new
2. Nombre: `evaluation-system`
3. Público o Privado (tu elección)

```bash
# En la carpeta system/
git init
git add .
git commit -m "Sistema de evaluación completo"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/evaluation-system.git
git push -u origin main
```

---

## 🎯 Paso 2: Desplegar Backend en Render

### 2.1 Crear Cuenta
1. Ve a https://render.com/
2. Clic en "Get Started"
3. Regístrate con GitHub (más fácil)

### 2.2 Crear Web Service
1. Dashboard → "New +" → "Web Service"
2. Conecta tu repositorio de GitHub
3. Selecciona `evaluation-system`
4. Configuración:
   - **Name**: `evaluation-backend`
   - **Region**: Oregon (US West)
   - **Branch**: main
   - **Root Directory**: `backend`
   - **Runtime**: Java
   - **Build Command**: `./mvnw clean package -DskipTests`
   - **Start Command**: `java -Dserver.port=$PORT -Dspring.profiles.active=prod -jar target/evaluation-system-1.0.0.jar`
   - **Instance Type**: Free

5. **Variables de Entorno**:
   ```
   SPRING_PROFILES_ACTIVE=prod
   ```

6. Clic en "Create Web Service"

7. **Espera 5-10 minutos** mientras se despliega

8. **Copia la URL**: Algo como `https://evaluation-backend.onrender.com`

---

## 🎨 Paso 3: Desplegar Frontend en Vercel

### 3.1 Actualizar URL del Backend

Edita `frontend/src/environments/environment.prod.ts`:
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://evaluation-backend.onrender.com/api'
};
```

Guarda y haz commit:
```bash
git add .
git commit -m "Actualizar URL de producción"
git push
```

### 3.2 Crear Cuenta en Vercel
1. Ve a https://vercel.com/
2. Clic en "Sign Up"
3. Regístrate con GitHub

### 3.3 Desplegar Frontend
1. Dashboard → "Add New..." → "Project"
2. Importa tu repositorio `evaluation-system`
3. Configuración:
   - **Framework Preset**: Angular
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/evaluation-frontend/browser`

4. Clic en "Deploy"

5. **Espera 2-3 minutos**

6. **Copia la URL**: Algo como `https://evaluation-system.vercel.app`

---

## ✅ Paso 4: Verificar que Funciona

1. Abre la URL del frontend: `https://evaluation-system.vercel.app`
2. Deberías ver la página de login
3. Prueba con: `admin` / `admin123`
4. Si funciona, ¡listo! 🎉

---

## 🔧 Configuración de CORS

Si tienes problemas de CORS, actualiza el backend:

**Archivo**: `backend/src/main/java/com/evaluation/config/SecurityConfig.java`

Asegúrate que tenga:
```java
@CrossOrigin(origins = "*")
```

O actualiza `application-prod.yml`:
```yaml
cors:
  allowed-origins: "*"
```

---

## 📱 Compartir con Amigos

Envía a tus amigos:
- **URL**: `https://evaluation-system.vercel.app`
- **Usuarios de prueba**:
  - Admin: `admin` / `admin123`
  - Evaluador: `evaluador` / `eval123`
  - Estudiante: `estudiante` / `est123`

---

## 💡 Alternativa: Railway (Más Rápido)

Si Render es lento, usa Railway:

### Backend en Railway
1. https://railway.app/
2. "New Project" → "Deploy from GitHub"
3. Selecciona tu repo
4. Railway detecta Spring Boot automáticamente
5. Agrega variable: `SPRING_PROFILES_ACTIVE=prod`
6. ¡Listo!

---

## 🆘 Problemas Comunes

### Backend tarda en iniciar
- **Render Free**: Primera petición tarda ~30 segundos (el servicio se duerme)
- **Solución**: Usa Railway (no se duerme) o actualiza a plan pagado

### Frontend no conecta
- Verifica que la URL del backend en `environment.prod.ts` sea correcta
- Debe terminar en `/api`
- Ejemplo: `https://evaluation-backend.onrender.com/api`

### Error de CORS
- Actualiza `application-prod.yml`:
  ```yaml
  cors:
    allowed-origins: "*"
  ```
- Redespliega el backend

### Base de datos se borra
- Render Free: Los datos persisten
- Asegúrate de usar: `jdbc:h2:file:./data/evaluationdb`

---

## 📊 Monitoreo

### Ver Logs del Backend
1. Render Dashboard → Tu servicio
2. Pestaña "Logs"
3. Verás todos los logs en tiempo real

### Ver Logs del Frontend
1. Vercel Dashboard → Tu proyecto
2. Pestaña "Deployments"
3. Clic en el deployment → "View Function Logs"

---

## 🎉 ¡Listo!

Ahora tienes:
- ✅ Backend desplegado y funcionando 24/7
- ✅ Frontend accesible desde cualquier lugar
- ✅ URL pública para compartir
- ✅ 100% GRATIS
- ✅ Tus amigos pueden probar desde cualquier dispositivo

**URLs Finales**:
- Frontend: `https://evaluation-system.vercel.app`
- Backend: `https://evaluation-backend.onrender.com`

---

## 🚀 Próximos Pasos

1. Comparte la URL con tus amigos
2. Pídeles que prueben con diferentes usuarios
3. Revisa la clasificación con múltiples usuarios
4. ¡Disfruta tu aplicación en producción!

---

## 💰 Costos

- **Render Free**: 750 horas/mes (suficiente)
- **Vercel Free**: Ilimitado para proyectos personales
- **Total**: $0.00 USD 🎉

---

¿Necesitas ayuda con algún paso específico?
