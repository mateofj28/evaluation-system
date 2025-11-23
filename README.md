# Sistema de Evaluación

Sistema completo de evaluación con backend Spring Boot y frontend Angular.

## Características

### Backend (Spring Boot + Maven)
- **Arquitectura en capas**: Presentación, Negocio, Persistencia
- **3 tipos de usuarios**: Administrador, Evaluador, Evaluado
- **Gestión de cursos**: Cursos con módulos y preguntas
- **Sistema de badges**: Insignias por logros
- **Tabla de clasificación**: Ranking de estudiantes por curso
- **Tecnologías**: Spring Boot 3.2, JPA, H2, MapStruct, Lombok, JWT

### Frontend (Angular + Atomic Design)
- **Atomic Design**: Atoms, Molecules, Organisms
- **Componentes standalone**: Angular 17
- **Servicios**: Integración con API REST
- **Rutas**: Navegación entre cursos y clasificación

## Estructura del Proyecto

```
system/
├── backend/
│   ├── src/main/java/com/evaluation/
│   │   ├── config/          # Configuración y seguridad
│   │   ├── controller/      # Capa de Presentación
│   │   ├── service/         # Capa de Negocio
│   │   ├── repository/      # Capa de Persistencia
│   │   ├── dao/
│   │   ├── dto/
│   │   ├── mapper/          # MapStruct
│   │   └── model/           # Entidades JPA
│   └── pom.xml
└── frontend/
    └── src/app/
        ├── core/            # Servicios y modelos
        ├── features/        # Páginas
        └── design-system/   # Atomic Design
            ├── atoms/
            ├── molecules/
            └── organisms/
```

## Instalación y Ejecución

### Backend
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

El backend estará disponible en: http://localhost:8080/api

### Frontend
```bash
cd frontend
npm install
npm start
```

El frontend estará disponible en: http://localhost:4200

## Usuarios de Prueba

- **Administrador**: admin / admin123
- **Evaluador**: evaluador / eval123
- **Estudiante**: estudiante / est123

## API Endpoints

### Usuarios
- GET /api/users - Listar usuarios
- GET /api/users/{id} - Obtener usuario
- POST /api/users - Crear usuario

### Cursos
- GET /api/courses - Listar cursos
- GET /api/courses/active - Cursos activos
- GET /api/courses/{id} - Obtener curso
- POST /api/courses - Crear curso

### Inscripciones
- POST /api/enrollments - Inscribir usuario
- GET /api/enrollments/user/{userId} - Inscripciones del usuario

### Evaluaciones
- POST /api/evaluations/submit - Enviar respuestas
- POST /api/evaluations/complete/{enrollmentId} - Completar curso

### Clasificación
- GET /api/leaderboard/course/{courseId} - Tabla de clasificación

## Base de Datos

H2 en memoria. Consola disponible en: http://localhost:8080/api/h2-console
- JDBC URL: jdbc:h2:mem:evaluationdb
- Usuario: sa
- Password: (vacío)
