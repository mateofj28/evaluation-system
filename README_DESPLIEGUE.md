# 🚀 Sistema de Evaluación - Despliegue en Producción

## 📋 Opciones de Despliegue (TODAS GRATIS)

### 🥇 Opción 1: Render + Vercel (RECOMENDADA)
- **Facilidad**: ⭐⭐⭐⭐⭐
- **Tiempo**: 10 minutos
- **Costo**: $0
- **Mejor para**: Pruebas y demos

### 🥈 Opción 2: Railway + Vercel
- **Facilidad**: ⭐⭐⭐⭐⭐
- **Tiempo**: 10 minutos
- **Costo**: $0
- **Mejor para**: Desarrollo continuo

### 🥉 Opción 3: AWS (Elastic Beanstalk + Amplify)
- **Facilidad**: ⭐⭐⭐
- **Tiempo**: 30 minutos
- **Costo**: $0 (primer año)
- **Mejor para**: Aprender AWS

---

## 🎯 Guía Rápida (Render + Vercel)

### Requisitos Previos
- [ ] Cuenta de GitHub
- [ ] Git instalado
- [ ] Código compilado

### Paso 1: Subir a GitHub (5 min)

```bash
# En la carpeta system/
git init
git add .
git commit -m "Sistema de evaluación completo"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/evaluation-system.git
git push -u origin main
```

### Paso 2: Backend en Render (5 min)

1. **Crear cuenta**: https://render.com/
2. **New Web Service** → Conectar GitHub
3. **Configuración**:
   - Name: `evaluation-backend`
   - Root Directory: `backend`
   - Build: `./mvnw clean package -DskipTests`
   - Start: `java -Dserver.port=$PORT -Dspring.profiles.active=prod -jar target/evaluation-system-1.0.0.jar`
   - Instance: Free
4. **Deploy** → Espera 5-10 min
5. **Copia URL**: `https://evaluation-backend.onrender.com`

### Paso 3: Frontend en Vercel (3 min)

1. **Actualizar** `frontend/src/environments/environment.prod.ts`:
   ```typescript
   export const environment = {
     production: true,
     apiUrl: 'https://evaluation-backend.onrender.com/api'
   };
   ```

2. **Commit y push**:
   ```bash
   git add .
   git commit -m "Update production URL"
   git push
   ```

3. **Crear cuenta**: https://vercel.com/
4. **New Project** → Importar repo
5. **Configuración**:
   - Framework: Angular
   - Root: `frontend`
   - Build: `npm run build`
   - Output: `dist/evaluation-frontend/browser`
6. **Deploy** → Espera 2-3 min
7. **Copia URL**: `https://evaluation-system.vercel.app`

### Paso 4: Probar

1. Abre: `https://evaluation-system.vercel.app`
2. Login: `admin` / `admin123`
3. ¡Funciona! 🎉

---

## 📱 Compartir con Amigos

Envía este mensaje:

```
¡Hola! Prueba mi sistema de evaluación:

🌐 URL: https://evaluation-system.vercel.app

👥 Usuarios de prueba:
- Admin: admin / admin123
- Evaluador: evaluador / eval123
- Estudiante: estudiante / est123

Puedes:
✅ Crear cursos (como evaluador)
✅ Tomar evaluaciones
✅ Ver clasificación
✅ Ganar badges

¡Diviértete! 🚀
```

---

## 🔧 Configuración Avanzada

### Dominio Personalizado (Opcional)

**Vercel**:
1. Settings → Domains
2. Agrega tu dominio
3. Configura DNS

**Render**:
1. Settings → Custom Domain
2. Agrega tu dominio
3. Configura DNS

### Variables de Entorno

**Backend (Render)**:
```
SPRING_PROFILES_ACTIVE=prod
JWT_SECRET=tu-secret-key-super-seguro
```

**Frontend (Vercel)**:
```
API_URL=https://tu-backend.onrender.com/api
```

### Base de Datos Persistente

Por defecto usa H2 en archivo. Para PostgreSQL:

1. Render → New PostgreSQL
2. Copia la URL
3. Actualiza `application-prod.yml`:
   ```yaml
   spring:
     datasource:
       url: ${DATABASE_URL}
   ```

---

## 📊 Monitoreo

### Logs del Backend
- Render Dashboard → Logs
- Ver en tiempo real

### Logs del Frontend
- Vercel Dashboard → Deployments → Logs

### Métricas
- Render: CPU, Memoria, Requests
- Vercel: Bandwidth, Build time

---

## 🆘 Solución de Problemas

### Backend no inicia
```bash
# Verificar compilación local
cd backend
.\mvnw.cmd clean package -DskipTests
java -jar target/evaluation-system-1.0.0.jar
```

### Frontend no conecta
1. Verifica URL en `environment.prod.ts`
2. Debe terminar en `/api`
3. Verifica CORS en backend

### Error 502 Bad Gateway
- Backend está iniciando (espera 30 seg)
- Render Free se duerme después de 15 min sin uso

### Base de datos vacía
- Primera vez: Normal
- Datos se crean automáticamente
- Usuarios de prueba se inicializan

---

## 💰 Costos y Límites

### Render Free
- ✅ 750 horas/mes
- ✅ 512 MB RAM
- ✅ Shared CPU
- ⚠️ Se duerme después de 15 min inactivo
- ⚠️ Primera petición tarda ~30 seg

### Vercel Free
- ✅ 100 GB bandwidth/mes
- ✅ Builds ilimitados
- ✅ Dominios ilimitados
- ✅ No se duerme

### Railway Free
- ✅ $5 crédito/mes
- ✅ No se duerme
- ✅ Más rápido que Render

---

## 🚀 Mejoras Futuras

### Seguridad
- [ ] HTTPS obligatorio
- [ ] Rate limiting
- [ ] Validación de inputs
- [ ] Sanitización de datos

### Performance
- [ ] Caché de respuestas
- [ ] Compresión gzip
- [ ] CDN para assets
- [ ] Lazy loading

### Funcionalidades
- [ ] Notificaciones por email
- [ ] Exportar resultados a PDF
- [ ] Dashboard de analytics
- [ ] Chat en vivo

---

## 📚 Recursos Adicionales

- [Documentación Render](https://render.com/docs)
- [Documentación Vercel](https://vercel.com/docs)
- [Documentación Railway](https://docs.railway.app/)
- [Spring Boot en Producción](https://spring.io/guides/gs/spring-boot/)

---

## ✅ Checklist Final

- [ ] Código en GitHub
- [ ] Backend desplegado en Render
- [ ] Frontend desplegado en Vercel
- [ ] URLs copiadas
- [ ] Login funciona
- [ ] Crear curso funciona
- [ ] Evaluación funciona
- [ ] Clasificación funciona
- [ ] Compartido con amigos

---

## 🎉 ¡Felicidades!

Tu aplicación está en producción y accesible desde cualquier lugar del mundo. 🌍

**URLs**:
- Frontend: `https://evaluation-system.vercel.app`
- Backend: `https://evaluation-backend.onrender.com`

¡Disfruta compartiendo tu proyecto! 🚀
