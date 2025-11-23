# 📚 Guía de Uso - Sistema de Evaluación

## 🎯 ¿Qué puedes hacer en el sistema?

### 1️⃣ Ver Cursos Disponibles
- **Página**: http://localhost:4200/courses
- **Funcionalidad**: 
  - Ver todos los cursos disponibles
  - Ver información de cada curso (nombre, descripción, duración)
  - Ver badges asociados a cada curso
  - Ver número de módulos

### 2️⃣ Tomar un Curso y Evaluación
- **Cómo hacerlo**:
  1. En la página de cursos, haz clic en "Ver Curso"
  2. Lee la información del curso
  3. Haz clic en "Inscribirse en el Curso"
  4. Responde las preguntas de evaluación
  5. Haz clic en "Enviar Respuestas"
  6. ¡Ve tu resultado y si ganaste un badge!

### 3️⃣ Ver la Clasificación
- **Página**: http://localhost:4200/leaderboard
- **Funcionalidad**:
  - Ver el ranking de estudiantes
  - Ver puntuaciones y porcentajes
  - Los top 3 están destacados en amarillo

## 🚀 Servidores en Ejecución

### Backend (API REST)
- **URL**: http://localhost:8080/api
- **Endpoints disponibles**:
  - `GET /` - Información de la API
  - `GET /health` - Estado del sistema
  - `GET /users` - Listar usuarios
  - `GET /courses` - Listar cursos
  - `GET /courses/active` - Cursos activos
  - `GET /courses/{id}` - Detalle de un curso
  - `POST /enrollments?userId={id}&courseId={id}` - Inscribirse
  - `POST /evaluations/submit` - Enviar respuestas
  - `GET /leaderboard/course/{id}` - Ver clasificación

### Frontend (Angular)
- **URL**: http://localhost:4200
- **Páginas**:
  - `/courses` - Lista de cursos
  - `/courses/{id}` - Detalle y evaluación del curso
  - `/leaderboard` - Tabla de clasificación

## 👥 Usuarios de Prueba

| Usuario | Contraseña | Rol | ID |
|---------|-----------|-----|-----|
| admin | admin123 | ADMINISTRADOR | 1 |
| evaluador | eval123 | EVALUADOR | 2 |
| estudiante | est123 | EVALUADO | 3 |

**Nota**: El sistema usa por defecto el usuario "estudiante" (ID: 3) para las inscripciones.

## 📝 Flujo Completo de Uso

### Paso 1: Ver Cursos
1. Abre http://localhost:4200
2. Verás la lista de cursos disponibles
3. Actualmente hay 1 curso: "Introducción a Java"

### Paso 2: Inscribirse y Tomar Evaluación
1. Haz clic en "Ver Curso" en cualquier curso
2. Lee la información del curso
3. Haz clic en "Inscribirse en el Curso"
4. Verás un mensaje de confirmación
5. Desplázate hacia abajo para ver las preguntas
6. Selecciona tus respuestas (A, B, C o D)
7. Haz clic en "Enviar Respuestas"

### Paso 3: Ver Resultados
Después de enviar las respuestas verás:
- ✅ Si aprobaste o ❌ si no aprobaste
- Número de respuestas correctas
- Puntos obtenidos
- Porcentaje final
- 🏆 Badge ganado (si obtuviste 80+ puntos)

### Paso 4: Ver Clasificación
1. Haz clic en "🏆 Clasificación" en el menú
2. Verás el ranking de todos los estudiantes
3. Los top 3 están destacados

## 🎓 Preguntas del Curso de Prueba

El curso "Introducción a Java" tiene 2 preguntas:

**Pregunta 1**: ¿Qué es Java?
- A) Un lenguaje de programación ✅ (Correcta)
- B) Una bebida
- C) Un sistema operativo
- D) Un navegador

**Pregunta 2**: ¿Java es orientado a objetos?
- A) Sí ✅ (Correcta)
- B) No
- C) A veces
- D) Depende

**Puntuación**: 10 puntos por pregunta = 20 puntos máximo
**Badge**: Se obtiene con 80+ puntos (necesitas 16/20)

## 🧪 Probar con Postman o cURL

### Inscribir un usuario
```bash
curl -X POST "http://localhost:8080/api/enrollments?userId=3&courseId=1"
```

### Ver cursos
```bash
curl http://localhost:8080/api/courses
```

### Enviar respuestas
```bash
curl -X POST http://localhost:8080/api/evaluations/submit \
  -H "Content-Type: application/json" \
  -d '{
    "enrollmentId": 1,
    "moduleId": 1,
    "answers": {
      "1": "A",
      "2": "A"
    }
  }'
```

### Ver clasificación
```bash
curl http://localhost:8080/api/leaderboard/course/1
```

## 🗄️ Ver Base de Datos

1. Abre http://localhost:8080/api/h2-console
2. Usa estas credenciales:
   - JDBC URL: `jdbc:h2:mem:evaluationdb`
   - Usuario: `sa`
   - Password: (dejar vacío)
3. Haz clic en "Connect"
4. Puedes ejecutar queries SQL:
   ```sql
   SELECT * FROM users;
   SELECT * FROM courses;
   SELECT * FROM course_enrollments;
   SELECT * FROM questions;
   ```

## 🎨 Características del Frontend

### Diseño Moderno
- Gradiente morado en el navbar
- Cards con efecto hover
- Iconos emoji para mejor UX
- Diseño responsive

### Atomic Design
- **Atoms**: Button, Card
- **Molecules**: CourseCard
- **Organisms**: LeaderboardTable
- **Pages**: CourseList, CourseDetail, LeaderboardPage

### Funcionalidades Interactivas
- Navegación entre páginas
- Formularios de evaluación
- Resultados en tiempo real
- Mensajes de confirmación

## 🔧 Comandos Útiles

### Reiniciar Backend
```bash
cd backend
.\mvnw.cmd spring-boot:run
```

### Reiniciar Frontend
```bash
cd frontend
npm start
```

### Ver logs del Backend
Los logs se muestran en la consola donde ejecutaste el backend

### Limpiar y reconstruir
```bash
# Backend
cd backend
.\mvnw.cmd clean install

# Frontend
cd frontend
npm install
```

## ❓ Solución de Problemas

### No veo cursos en el frontend
- Verifica que el backend esté corriendo en http://localhost:8080/api
- Abre la consola del navegador (F12) para ver errores
- Verifica que no haya errores de CORS

### Error al inscribirse
- Puede que ya estés inscrito en ese curso
- Verifica que el backend esté funcionando

### No aparezco en la clasificación
- Solo apareces después de completar el curso
- Debes enviar respuestas a las evaluaciones

## 📊 Arquitectura del Sistema

```
Frontend (Angular)
    ↓ HTTP Requests
Backend (Spring Boot)
    ↓
Controllers (Presentación)
    ↓
Services (Lógica de Negocio)
    ↓
Repositories (Persistencia)
    ↓
Base de Datos H2
```

## 🎯 Próximos Pasos

Para mejorar el sistema puedes:
1. Agregar más cursos y módulos
2. Implementar autenticación real
3. Agregar perfil de usuario
4. Crear dashboard de administrador
5. Agregar más tipos de preguntas
6. Implementar certificados descargables
