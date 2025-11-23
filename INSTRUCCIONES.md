# Sistema de Evaluación - Instrucciones de Uso

## ✅ Estado Actual

Ambos servidores están corriendo:
- **Backend**: http://localhost:8080/api
- **Frontend**: http://localhost:4200

## 🚀 Cómo Ejecutar el Proyecto

### Backend (Spring Boot)
```bash
cd backend
.\mvnw.cmd spring-boot:run
```

### Frontend (Angular)
```bash
cd frontend
npm start
```

## 👥 Usuarios de Prueba

El sistema incluye 3 usuarios predefinidos:

| Usuario | Contraseña | Rol |
|---------|-----------|-----|
| admin | admin123 | ADMINISTRADOR |
| evaluador | eval123 | EVALUADOR |
| estudiante | est123 | EVALUADO |

## 📊 Datos de Prueba

El sistema se inicializa con:
- 1 Badge: "Java Master"
- 1 Curso: "Introducción a Java"
- 1 Módulo: "Fundamentos de Java"
- 2 Preguntas de evaluación

## 🔗 Endpoints Principales

### Usuarios
- `GET /api/users` - Listar todos los usuarios
- `GET /api/users/{id}` - Obtener usuario por ID
- `GET /api/users/role/{role}` - Usuarios por rol
- `POST /api/users` - Crear usuario

### Cursos
- `GET /api/courses` - Listar todos los cursos
- `GET /api/courses/active` - Cursos activos
- `GET /api/courses/{id}` - Obtener curso por ID
- `POST /api/courses` - Crear curso

### Inscripciones
- `POST /api/enrollments?userId={id}&courseId={id}` - Inscribir usuario
- `GET /api/enrollments/user/{userId}` - Inscripciones del usuario

### Evaluaciones
- `POST /api/evaluations/submit` - Enviar respuestas
- `POST /api/evaluations/complete/{enrollmentId}` - Completar curso

### Clasificación (Leaderboard)
- `GET /api/leaderboard/course/{courseId}` - Tabla de clasificación por curso

## 🗄️ Base de Datos H2

Consola H2: http://localhost:8080/api/h2-console

**Credenciales:**
- JDBC URL: `jdbc:h2:mem:evaluationdb`
- Usuario: `sa`
- Password: (vacío)

## 📱 Funcionalidades del Frontend

### Página de Cursos
- Ver todos los cursos disponibles
- Información de cada curso (nombre, descripción, duración)
- Badges asociados

### Página de Clasificación
- Ranking de estudiantes por curso
- Puntuación y porcentaje de cada estudiante
- Top 3 destacado visualmente

## 🏗️ Arquitectura

### Backend (3 Capas)
```
Presentación (Controllers)
    ↓
Negocio (Services)
    ↓
Persistencia (Repositories/DAOs)
```

### Frontend (Atomic Design)
```
Pages (Páginas completas)
    ↓
Organisms (Componentes complejos)
    ↓
Molecules (Componentes compuestos)
    ↓
Atoms (Componentes básicos)
```

## 📝 Ejemplo de Uso

### 1. Inscribir un estudiante en un curso
```bash
POST http://localhost:8080/api/enrollments?userId=3&courseId=1
```

### 2. Enviar respuestas de evaluación
```bash
POST http://localhost:8080/api/evaluations/submit
Content-Type: application/json

{
  "enrollmentId": 1,
  "moduleId": 1,
  "answers": {
    "1": "A",
    "2": "A"
  }
}
```

### 3. Ver clasificación
```bash
GET http://localhost:8080/api/leaderboard/course/1
```

## 🛠️ Tecnologías Utilizadas

### Backend
- Spring Boot 3.2
- Spring Data JPA
- H2 Database
- MapStruct (Mappers)
- Lombok
- Spring Security
- JWT

### Frontend
- Angular 17
- TypeScript
- RxJS
- Standalone Components
- Atomic Design

## 📦 Estructura de Archivos

```
system/
├── backend/
│   ├── src/main/java/com/evaluation/
│   │   ├── config/          # Configuración
│   │   ├── controller/      # Capa Presentación
│   │   ├── service/         # Capa Negocio
│   │   ├── repository/      # Capa Persistencia
│   │   ├── dao/
│   │   ├── dto/             # Data Transfer Objects
│   │   ├── mapper/          # MapStruct Mappers
│   │   └── model/           # Entidades JPA
│   └── pom.xml
└── frontend/
    └── src/app/
        ├── core/            # Servicios y modelos
        ├── features/        # Páginas por funcionalidad
        └── design-system/   # Atomic Design
            ├── atoms/       # Botones, Cards
            ├── molecules/   # CourseCard
            └── organisms/   # LeaderboardTable
```

## 🔧 Solución de Problemas

### El backend no inicia
- Verifica que tienes Java 17+ instalado: `java -version`
- Asegúrate de estar en la carpeta `backend`

### El frontend no inicia
- Verifica que tienes Node.js instalado: `node --version`
- Ejecuta `npm install` en la carpeta `frontend`

### Error de CORS
- El backend está configurado para aceptar peticiones desde `http://localhost:4200`
- Verifica que el frontend esté corriendo en ese puerto

## 📈 Próximos Pasos

Para extender el sistema puedes:
1. Agregar autenticación JWT completa
2. Implementar más tipos de preguntas (verdadero/falso, múltiple respuesta)
3. Agregar sistema de notificaciones
4. Crear dashboard para administradores
5. Implementar reportes y estadísticas
6. Agregar sistema de comentarios y calificaciones
