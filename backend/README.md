# Backend - Sistema de Evaluación

API REST desarrollada con Spring Boot para un sistema de evaluación de cursos con badges y leaderboard.

## 🛠️ Tecnologías y Dependencias

### Framework Principal
- **Spring Boot 3.2.0** - Framework principal
- **Java 17** - Versión de Java

### Dependencias Core
- **Spring Web** - API REST
- **Spring Data JPA** - Persistencia de datos
- **Spring Security** - Autenticación y autorización
- **Spring Validation** - Validación de datos

### Base de Datos
- **H2 Database** - Base de datos en memoria (desarrollo) y archivo (producción)
  - Modo desarrollo: `jdbc:h2:mem:evaluationdb`
  - Modo producción: `jdbc:h2:file:./data/evaluationdb`

### Seguridad
- **JWT (jjwt 0.11.5)** - Autenticación basada en tokens
  - `jjwt-api` - API de JWT
  - `jjwt-impl` - Implementación
  - `jjwt-jackson` - Serialización JSON

### Utilidades
- **Lombok** - Reducción de código boilerplate
- **MapStruct 1.5.5** - Mapeo entre entidades y DTOs

### Testing
- **Spring Boot Test** - Framework de testing

## 📁 Estructura del Proyecto

```
backend/
├── config/              # Configuraciones
│   ├── SecurityConfig   # Configuración de seguridad
│   └── DataInitializer  # Datos iniciales
├── controller/          # Controladores REST
│   ├── AuthController
│   ├── CourseController
│   ├── EnrollmentController
│   ├── EvaluationController
│   ├── BadgeController
│   ├── LeaderboardController
│   └── UserController
├── dto/                 # Data Transfer Objects
├── mapper/              # Mappers (MapStruct)
├── model/               # Entidades JPA
│   ├── User
│   ├── Course
│   ├── Module
│   ├── Question
│   ├── Badge
│   ├── CourseEnrollment
│   └── UserBadge
├── repository/          # Repositorios JPA
├── security/            # Utilidades de seguridad
│   └── JwtUtil
└── service/             # Lógica de negocio
```

## ✅ Funcionalidades Implementadas

### Autenticación y Usuarios
- ✅ Login con JWT
- ✅ Gestión de usuarios (CRUD)
- ✅ Roles de usuario (ADMIN, EVALUADOR, ESTUDIANTE)
- ✅ Seguridad con Spring Security

### Cursos
- ✅ CRUD de cursos
- ✅ Creación de cursos con módulos
- ✅ Listado de cursos activos
- ✅ Detalle de curso por ID

### Módulos y Evaluaciones
- ✅ Módulos asociados a cursos
- ✅ Preguntas de evaluación
- ✅ Envío de respuestas
- ✅ Cálculo de resultados

### Inscripciones
- ✅ Inscripción a cursos
- ✅ Seguimiento de progreso
- ✅ Gestión de inscripciones por usuario

### Badges y Leaderboard
- ✅ Sistema de badges
- ✅ Asignación de badges a usuarios
- ✅ Leaderboard con ranking de usuarios
- ✅ Cálculo de puntuaciones

## ❌ Funcionalidades Pendientes

- ❌ Recuperación de contraseña
- ❌ Registro de usuarios (actualmente solo login)
- ❌ Notificaciones por email
- ❌ Exportación de reportes
- ❌ Historial de intentos de evaluación
- ❌ Comentarios y feedback en cursos
- ❌ Certificados de finalización
- ❌ Base de datos PostgreSQL/MySQL para producción
- ❌ Tests unitarios e integración
- ❌ Documentación API (Swagger/OpenAPI)
- ❌ Paginación en listados
- ❌ Filtros avanzados de búsqueda

## 🚀 Configuración y Ejecución

### Requisitos
- Java 17 o superior
- Maven 3.6+

### Desarrollo
```bash
cd backend
./mvnw spring-boot:run
```

La aplicación estará disponible en: `http://localhost:8080/api`

### Producción
```bash
./mvnw clean package
java -jar target/evaluation-system-1.0.0.jar --spring.profiles.active=prod
```

### Consola H2 (solo desarrollo)
Acceder a: `http://localhost:8080/api/h2-console`
- JDBC URL: `jdbc:h2:mem:evaluationdb`
- Usuario: `sa`
- Contraseña: (vacío)

## 🔐 Configuración JWT

- **Secret Key**: Configurado en `application.yml`
- **Expiración**: 24 horas (86400000 ms)
- **Header**: `Authorization: Bearer <token>`

## 🌐 CORS

- **Desarrollo**: `http://localhost:4200`
- **Producción**: `*` (configurar según necesidad)

## 📝 Endpoints Principales

- `POST /api/auth/login` - Autenticación
- `GET /api/courses` - Listar cursos
- `POST /api/courses/with-modules` - Crear curso con módulos
- `POST /api/enrollments` - Inscribirse a curso
- `POST /api/evaluations/submit` - Enviar respuestas
- `GET /api/leaderboard` - Ver ranking
- `GET /api/badges` - Listar badges

## 📦 Build y Deploy

El proyecto incluye configuración para:
- **Elastic Beanstalk** (`.ebextensions/application.config`)
- **Heroku** (`Procfile`)
