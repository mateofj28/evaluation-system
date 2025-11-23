# Sistema de Evaluación - Cursos con Badges y Leaderboard

Sistema completo de evaluación de cursos con sistema de badges, leaderboard y gestión de usuarios. Desarrollado con Spring Boot (backend) y Angular 17 (frontend).

## 🏗️ Arquitectura del Proyecto

```
evaluation-system/
├── backend/          # API REST con Spring Boot
├── frontend/         # Aplicación web con Angular 17
├── deploy.sh         # Script de deploy (Linux/Mac)
└── deploy.bat        # Script de deploy (Windows)
```

## 🚀 Stack Tecnológico

### Backend
- **Spring Boot 3.2.0** + Java 17
- **Spring Security** + JWT
- **Spring Data JPA** + H2 Database
- **Lombok** + MapStruct

### Frontend
- **Angular 17** + TypeScript 5.2
- **RxJS** para programación reactiva
- **Atomic Design** para componentes

## ✨ Funcionalidades Principales

### ✅ Implementado

**Autenticación y Usuarios**
- Login con JWT
- Roles: Admin, Evaluador, Estudiante
- Gestión de usuarios

**Cursos y Módulos**
- CRUD de cursos
- Creación de cursos con módulos
- Listado y detalle de cursos
- Inscripción a cursos

**Evaluaciones**
- Preguntas de evaluación
- Envío de respuestas
- Cálculo de resultados

**Gamificación**
- Sistema de badges
- Leaderboard con rankings
- Puntuaciones por usuario

**Interfaz de Usuario**
- Dashboard de usuario
- Sistema de diseño atómico
- Componentes reutilizables

### ❌ Por Implementar

**Autenticación**
- Registro de usuarios
- Recuperación de contraseña
- Guards de rutas

**Funcionalidades**
- Historial de intentos
- Certificados de finalización
- Comentarios en cursos
- Notificaciones
- Exportación de reportes

**Mejoras Técnicas**
- Tests unitarios e integración
- Documentación API (Swagger)
- Paginación y filtros
- Manejo de errores global
- Optimización de rendimiento
- Base de datos PostgreSQL/MySQL

**UX/UI**
- Loading states
- Notificaciones toast
- Modo oscuro
- Responsive completo
- Internacionalización

## 📦 Dependencias Principales

### Backend
```xml
- spring-boot-starter-web
- spring-boot-starter-data-jpa
- spring-boot-starter-security
- jjwt (0.11.5)
- h2database
- lombok
- mapstruct (1.5.5)
```

### Frontend
```json
- @angular/core (17.0.0)
- @angular/router
- @angular/forms
- rxjs (7.8.0)
- typescript (5.2.2)
```

## 🛠️ Instalación y Ejecución

### Requisitos
- Java 17+
- Node.js 18+
- Maven 3.6+
- npm 9+

### Backend
```bash
cd backend
./mvnw spring-boot:run
```
Servidor: `http://localhost:8080/api`

### Frontend
```bash
cd frontend
npm install
npm start
```
Aplicación: `http://localhost:4200`

## 🔐 Configuración

### Backend (application.yml)
- Puerto: 8080
- Base de datos: H2 (memoria/archivo)
- JWT expiration: 24 horas
- CORS: localhost:4200

### Frontend
- API URL: http://localhost:8080/api
- Puerto: 4200

## 📚 Documentación Detallada

Para más información sobre cada parte del proyecto:
- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)

## 🚢 Deploy

El proyecto incluye configuración para:
- **Backend**: Elastic Beanstalk, Heroku
- **Frontend**: Vercel

Scripts de deploy disponibles:
- `deploy.sh` (Linux/Mac)
- `deploy.bat` (Windows)

## 📝 Endpoints API Principales

```
POST   /api/auth/login              # Login
GET    /api/courses                 # Listar cursos
GET    /api/courses/{id}            # Detalle curso
POST   /api/courses/with-modules    # Crear curso
POST   /api/enrollments             # Inscribirse
POST   /api/evaluations/submit      # Enviar respuestas
GET    /api/leaderboard             # Ver ranking
GET    /api/badges                  # Listar badges
```

## 🎯 Próximos Pasos

1. Implementar guards de autenticación
2. Agregar interceptor HTTP para tokens
3. Crear sistema de notificaciones
4. Implementar tests
5. Agregar documentación Swagger
6. Migrar a base de datos PostgreSQL
7. Implementar paginación
8. Mejorar responsive design

## 👥 Roles de Usuario

- **ADMIN**: Acceso completo al sistema
- **EVALUADOR**: Crear y gestionar cursos
- **ESTUDIANTE**: Realizar cursos y evaluaciones

## 📄 Licencia

Este proyecto es privado y de uso interno.
