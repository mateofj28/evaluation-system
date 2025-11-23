# ⚡ Inicio Rápido - Despliegue en 10 Minutos

## 🎯 Objetivo
Desplegar tu aplicación en internet para que tus amigos puedan acceder desde cualquier lugar.

## 📋 Lo que Necesitas
- ✅ Cuenta de GitHub (gratis)
- ✅ 10-15 minutos de tiempo
- ✅ Internet

## 🚀 3 Pasos Simples

### 1️⃣ Subir a GitHub (3 min)

```bash
# En la carpeta system/
git init
git add .
git commit -m "Sistema de evaluación"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/evaluation-system.git
git push -u origin main
```

### 2️⃣ Backend en Render (5 min)

1. **Ir a**: https://render.com/
2. **Sign up** con GitHub
3. **New +** → Web Service
4. **Conectar** tu repositorio
5. **Configurar**:
   - Root Directory: `backend`
   - Build: `./mvnw clean package -DskipTests`
   - Start: `java -Dserver.port=$PORT -Dspring.profiles.active=prod -jar target/evaluation-system-1.0.0.jar`
   - Instance: Free
6. **Deploy** → Espera 5 min
7. **Copiar URL**: `https://tu-backend.onrender.com`

### 3️⃣ Frontend en Vercel (3 min)

1. **Actualizar** `frontend/src/environments/environment.prod.ts`:
   ```typescript
   export const environment = {
     production: true,
     apiUrl: 'https://tu-backend.onrender.com/api'
   };
   ```

2. **Commit**:
   ```bash
   git add .
   git commit -m "Update URL"
   git push
   ```

3. **Ir a**: https://vercel.com/
4. **Sign up** con GitHub
5. **New Project** → Importar repo
6. **Configurar**:
   - Root: `frontend`
   - Framework: Angular
   - Output: `dist/evaluation-frontend/browser`
7. **Deploy** → Espera 2 min
8. **Copiar URL**: `https://tu-app.vercel.app`

## ✅ ¡Listo!

Tu aplicación está en línea:
- 🎨 **Frontend**: https://tu-app.vercel.app
- 🖥️ **Backend**: https://tu-backend.onrender.com

## 📱 Compartir

Envía a tus amigos:
```
Prueba mi app: https://tu-app.vercel.app

Usuarios:
- admin / admin123
- evaluador / eval123
- estudiante / est123
```

## 📚 Más Información

- **Guía Detallada**: `DESPLIEGUE_PASO_A_PASO.md`
- **Solución de Problemas**: `README_DESPLIEGUE.md`
- **Opciones Avanzadas**: `DESPLIEGUE_AWS.md`

---

## 🆘 ¿Problemas?

### Backend no inicia
- Espera 5-10 minutos
- Revisa logs en Render

### Frontend no conecta
- Verifica URL en `environment.prod.ts`
- Debe terminar en `/api`

### Login no funciona
- Espera 30 segundos (primera petición)
- Render Free se duerme, es normal

---

## 💰 Costo

**$0.00 USD** - Todo es gratis 🎉

---

¿Listo para desplegar? ¡Adelante! 🚀
