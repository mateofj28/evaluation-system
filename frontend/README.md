# Frontend - Sistema de Evaluación

Aplicación web desarrollada con Angular 17 para un sistema de evaluación de cursos con badges y leaderboard.

## 🛠️ Tecnologías y Dependencias

### Framework Principal
- **Angular 17.0.0** - Framework frontend
- **TypeScript 5.2.2** - Lenguaje de programación

### Dependencias Core
- **@angular/core** - Núcleo de Angular
- **@angular/common** - Funcionalidades comunes
- **@angular/router** - Enrutamiento
- **@angular/forms** - Formularios reactivos y template-driven
- **@angular/animations** - Animaciones
- **@angular/platform-browser** - Soporte para navegadores

### Utilidades
- **RxJS 7.8.0** - Programación reactiva
- **Zone.js 0.14.2** - Detección de cambios
- **tslib 2.3.0** - Librería de utilidades TypeScript

### Herramientas de Desarrollo
- **@angular/cli** - CLI de Angular
- **@angular-devkit/build-angular** - Build tools
- **@angular/compiler-cli** - Compilador

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── app/
│   │   ├── core/                    # Funcionalidades core
│   │   │   ├── models/              # Modelos de datos
│   │   │   │   ├── user.model.ts
│   │   │   │   ├── course.model.ts
│   │   │   │   ├── module.model.ts
│   │   │   │   ├── question.model.ts
│   │   │   │   ├── badge.model.ts
│   │   │   │   └── leaderboard.model.ts
│   │   │   └── services/            # Servicios
│   │   │       ├── auth.service.ts
│   │   │       ├── course.service.ts
│   │   │       ├── enrollment.service.ts
│   │   │       ├── evaluation.service.ts
│   │   │       └── leaderboard.service.ts
│   │   ├── design-system/           # Sistema de diseño
│   │   │   ├── atoms/               # Componentes básicos
│   │   │   │   ├── button/
│   │   │   │   └── card/
│   │   │   ├── molecules/           # Componentes compuestos
│   │   │   │   └── course-card/
│   │   │   └── organisms/           # Componentes complejos
│   │   │       └── leaderboard-table/
│   │   ├── features/                # Módulos de funcionalidad
│   │   │   ├── auth/
│   │   │   │   └── login/
│   │   │   ├── courses/
│   │   │   │   ├── course-list/
│   │   │   │   ├── course-detail/
│   │   │   │   └── create-course/
│   │   │   ├── dashboard/
│   │   │   └── leaderboard/
│   │   │       └── leaderboard-page/
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── environments/                # Configuración de entornos
│   ├── index.html
│   ├── main.ts
│   └── styles.css
└── vercel.json                      # Configuración de Vercel
```

## ✅ Funcionalidades Implementadas

### Autenticación
- ✅ Login de usuarios
- ✅ Servicio de autenticación con JWT
- ✅ Gestión de tokens

### Cursos
- ✅ Listado de cursos
- ✅ Detalle de curso
- ✅ Creación de cursos (admin/evaluador)
- ✅ Servicio de cursos con API REST

### Dashboard
- ✅ Panel principal de usuario
- ✅ Vista de cursos inscritos

### Evaluaciones
- ✅ Servicio de evaluaciones
- ✅ Envío de respuestas

### Inscripciones
- ✅ Servicio de inscripciones
- ✅ Gestión de enrollments

### Leaderboard
- ✅ Tabla de clasificación
- ✅ Visualización de rankings
- ✅ Servicio de leaderboard

### Sistema de Diseño
- ✅ Componentes atómicos (Button, Card)
- ✅ Componentes moleculares (CourseCard)
- ✅ Componentes organismo (LeaderboardTable)
- ✅ Arquitectura Atomic Design

## ❌ Funcionalidades Pendientes

- ❌ Registro de usuarios
- ❌ Recuperación de contraseña
- ❌ Perfil de usuario editable
- ❌ Guards de autenticación en rutas
- ❌ Interceptor HTTP para tokens
- ❌ Manejo de errores global
- ❌ Loading states y spinners
- ❌ Notificaciones/toasts
- ❌ Paginación en listados
- ❌ Filtros y búsqueda de cursos
- ❌ Visualización de badges obtenidos
- ❌ Progreso visual de cursos
- ❌ Modo oscuro
- ❌ Responsive design completo
- ❌ Internacionalización (i18n)
- ❌ Tests unitarios
- ❌ Tests E2E
- ❌ Lazy loading de módulos
- ❌ PWA (Progressive Web App)
- ❌ Optimización de rendimiento

## 🚀 Configuración y Ejecución

### Requisitos
- Node.js 18+ 
- npm 9+

### Instalación
```bash
cd frontend
npm install
```

### Desarrollo
```bash
npm start
```

La aplicación estará disponible en: `http://localhost:4200`

### Build de Producción
```bash
npm run build
```

Los archivos compilados estarán en `dist/`

### Tests
```bash
npm test
```

## 🎨 Sistema de Diseño

El proyecto implementa **Atomic Design**:

- **Atoms**: Componentes básicos reutilizables (botones, inputs, cards)
- **Molecules**: Combinación de atoms (course-card)
- **Organisms**: Componentes complejos (leaderboard-table)
- **Templates**: Layouts de página (pendiente)
- **Pages**: Vistas completas (features)

## 🔗 Integración con Backend

- **Base URL**: `http://localhost:8080/api`
- **Autenticación**: JWT Bearer Token
- **Servicios HTTP**: Usando HttpClient de Angular

## 📱 Rutas de la Aplicación

- `/` - Redirección a login
- `/login` - Página de login
- `/dashboard` - Dashboard principal
- `/courses` - Listado de cursos
- `/courses/:id` - Detalle de curso
- `/leaderboard` - Tabla de clasificación
- `/admin/create-course` - Crear curso (admin)
- `/evaluador/create-course` - Crear curso (evaluador)

## 🌐 Deploy

El proyecto incluye configuración para:
- **Vercel** (`vercel.json`)

## 📝 Modelos de Datos

- **User**: Usuario del sistema
- **Course**: Curso con módulos
- **Module**: Módulo de un curso
- **Question**: Pregunta de evaluación
- **Badge**: Insignia/logro
- **Leaderboard**: Datos de clasificación

## 🔧 Configuración Adicional

### Angular.json
Configuración de build, serve y test

### TypeScript
- Target: ES2022
- Strict mode habilitado
- Configuración modular
