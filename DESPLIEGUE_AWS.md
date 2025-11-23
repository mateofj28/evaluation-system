# 🚀 Guía de Despliegue en AWS (GRATIS)

## 📋 Resumen de la Arquitectura

Vamos a usar servicios **100% gratuitos** de AWS:

- **Backend**: AWS Elastic Beanstalk (Java)
- **Frontend**: AWS Amplify Hosting
- **Base de Datos**: H2 en archivo (persistente)

---

## 🎯 Opción Recomendada: Railway (Más Fácil y Gratis)

Antes de AWS, te recomiendo **Railway** que es más simple y también gratis:

### Backend en Railway

1. **Crea cuenta en Railway**: https://railway.app/
2. **Nuevo Proyecto** → "Deploy from GitHub repo"
3. Si no tienes GitHub, sube el código:
   - Crea repositorio en GitHub
   - Sube la carpeta `backend`
4. Railway detectará automáticamente que es Spring Boot
5. **Variables de entorno**:
   ```
   SPRING_PROFILES_ACTIVE=prod
   PORT=5000
   ```
6. Railway te dará una URL como: `https://tu-app.railway.app`

### Frontend en Vercel (Gratis)

1. **Crea cuenta en Vercel**: https://vercel.com/
2. **Nuevo Proyecto** → Importar desde GitHub
3. Sube la carpeta `frontend`
4. **Build Settings**:
   - Framework: Angular
   - Build Command: `npm run build`
   - Output Directory: `dist/evaluation-frontend/browser`
5. **Variables de entorno**:
   ```
   API_URL=https://tu-backend.railway.app/api
   ```
6. Vercel te dará una URL como: `https://tu-app.vercel.app`

---

## 🔧 Preparación del Código

### 1. Actualizar Frontend para Producción

Necesitamos hacer que la URL del backend sea configurable:

**Archivo**: `frontend/src/environments/environment.prod.ts`
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://tu-backend.railway.app/api'
};
```

### 2. Actualizar Servicios del Frontend

Cambiar todas las URLs hardcodeadas por la variable de entorno.

### 3. Compilar Backend

```bash
cd backend
.\mvnw.cmd clean package -DskipTests
```

Esto genera: `target/evaluation-system-1.0.0.jar`

---

## 🌐 Opción AWS (Más Compleja pero Profesional)

### Paso 1: Preparar Backend para AWS Elastic Beanstalk

1. **Instalar AWS CLI**:
   ```bash
   # Windows
   msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi
   ```

2. **Instalar EB CLI**:
   ```bash
   pip install awsebcli
   ```

3. **Configurar AWS**:
   ```bash
   aws configure
   # Ingresa tus credenciales de AWS
   ```

4. **Inicializar Elastic Beanstalk**:
   ```bash
   cd backend
   eb init
   # Selecciona:
   # - Región: us-east-1
   # - Plataforma: Java 17
   # - Nombre: evaluation-system
   ```

5. **Crear Ambiente**:
   ```bash
   eb create evaluation-env --single
   # Esto crea un ambiente gratuito (t2.micro)
   ```

6. **Desplegar**:
   ```bash
   mvn clean package -DskipTests
   eb deploy
   ```

7. **Obtener URL**:
   ```bash
   eb status
   # Te dará una URL como: http://evaluation-env.eba-xxxxx.us-east-1.elasticbeanstalk.com
   ```

### Paso 2: Preparar Frontend para AWS Amplify

1. **Instalar Amplify CLI**:
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Configurar Amplify**:
   ```bash
   amplify configure
   ```

3. **Inicializar Amplify**:
   ```bash
   cd frontend
   amplify init
   # Nombre: evaluationfrontend
   # Environment: prod
   ```

4. **Agregar Hosting**:
   ```bash
   amplify add hosting
   # Selecciona: Hosting with Amplify Console
   # Tipo: Manual deployment
   ```

5. **Publicar**:
   ```bash
   npm run build
   amplify publish
   ```

---

## 💰 Costos (Capa Gratuita)

### AWS Elastic Beanstalk
- ✅ **750 horas/mes** de t2.micro (GRATIS primer año)
- ✅ Suficiente para tu aplicación

### AWS Amplify
- ✅ **1000 minutos build/mes** (GRATIS)
- ✅ **15 GB almacenamiento** (GRATIS)
- ✅ **15 GB transferencia** (GRATIS)

### Railway (Alternativa)
- ✅ **$5 crédito mensual** (GRATIS)
- ✅ Suficiente para aplicaciones pequeñas

### Vercel (Alternativa)
- ✅ **100% GRATIS** para proyectos personales
- ✅ Despliegues ilimitados

---

## 🎯 Recomendación Final

Para tu caso (pruebas educativas), te recomiendo:

### Opción 1: Railway + Vercel (MÁS FÁCIL) ⭐
- **Backend**: Railway
- **Frontend**: Vercel
- **Ventajas**: 
  - Setup en 10 minutos
  - No necesitas AWS CLI
  - Despliegue automático desde GitHub
  - 100% gratis

### Opción 2: Render (TODO EN UNO) ⭐⭐
- **Backend y Frontend**: Render.com
- **Ventajas**:
  - Todo en un solo lugar
  - Gratis para proyectos pequeños
  - Muy fácil de usar

### Opción 3: AWS (MÁS PROFESIONAL)
- **Backend**: Elastic Beanstalk
- **Frontend**: Amplify
- **Ventajas**:
  - Más escalable
  - Experiencia con AWS
  - Gratis primer año

---

## 🚀 Guía Rápida: Railway + Vercel (RECOMENDADO)

### Backend en Railway (5 minutos)

1. Ve a https://railway.app/
2. Clic en "Start a New Project"
3. Selecciona "Deploy from GitHub repo"
4. Conecta tu GitHub y sube el código del backend
5. Railway detecta Spring Boot automáticamente
6. Agrega variable: `SPRING_PROFILES_ACTIVE=prod`
7. ¡Listo! Copia la URL

### Frontend en Vercel (5 minutos)

1. Ve a https://vercel.com/
2. Clic en "New Project"
3. Importa desde GitHub (carpeta frontend)
4. Framework: Angular
5. Build Command: `npm run build`
6. Output: `dist/evaluation-frontend/browser`
7. Variable de entorno: `API_URL=https://tu-backend.railway.app`
8. ¡Listo! Copia la URL

### Comparte con tus amigos
- Frontend: `https://tu-app.vercel.app`
- Pueden usar los usuarios de prueba que creamos

---

## 📝 Checklist de Despliegue

- [ ] Compilar backend: `mvn clean package`
- [ ] Subir código a GitHub
- [ ] Crear cuenta en Railway
- [ ] Desplegar backend en Railway
- [ ] Copiar URL del backend
- [ ] Crear cuenta en Vercel
- [ ] Actualizar URL del backend en frontend
- [ ] Desplegar frontend en Vercel
- [ ] Probar la aplicación
- [ ] Compartir URL con amigos

---

## 🆘 Solución de Problemas

### Backend no inicia
- Verifica que `SPRING_PROFILES_ACTIVE=prod`
- Revisa los logs en Railway

### Frontend no conecta con Backend
- Verifica la URL del backend en environment.prod.ts
- Asegúrate que CORS esté configurado con `*`

### Base de datos se borra
- Usa H2 en modo archivo: `jdbc:h2:file:./data/evaluationdb`
- Railway tiene almacenamiento persistente

---

## 🎉 Resultado Final

Después del despliegue tendrás:
- ✅ Backend funcionando 24/7
- ✅ Frontend accesible desde cualquier lugar
- ✅ URL pública para compartir
- ✅ 100% GRATIS
- ✅ Tus amigos pueden probar la app

**Ejemplo de URLs finales**:
- Frontend: `https://evaluation-system.vercel.app`
- Backend: `https://evaluation-backend.railway.app`

---

¿Quieres que te ayude con alguna de estas opciones específicamente?
