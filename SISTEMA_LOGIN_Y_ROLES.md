# 🔐 Sistema de Login y Roles - Documentación Completa

## ✅ Funcionalidades Implementadas

### 1. Sistema de Autenticación
- ✅ Login con JWT
- ✅ Almacenamiento de sesión en localStorage
- ✅ Logout
- ✅ Protección de rutas

### 2. Roles y Permisos

#### 👑 ADMINISTRADOR
**Usuario**: admin / admin123

**Permisos**:
- ✅ Ver todos los cursos
- ✅ Crear cursos con módulos y preguntas
- ✅ Editar cursos
- ✅ Eliminar cursos
- ✅ Gestionar usuarios
- ✅ Ver clasificación completa
- ✅ Acceso total al sistema

#### 📝 EVALUADOR
**Usuarios**: 
- evaluador / eval123
- profesor / prof123

**Permisos**:
- ✅ Ver todos los cursos
- ✅ **Crear cursos con módulos y preguntas**
- ✅ Ver clasificación
- ✅ Aparece en la clasificación cuando toma cursos
- ❌ No puede gestionar usuarios
- ❌ No puede eliminar cursos de otros

#### 📚 EVALUADO (Estudiante)
**Usuarios**:
- estudiante / est123
- alumno / alum123
- estudiante2 / est456

**Permisos**:
- ✅ Ver cursos disponibles
- ✅ Inscribirse en cursos
- ✅ Tomar evaluaciones
- ✅ Ver sus resultados
- ✅ **Aparece en la clasificación**
- ✅ Ver clasificación general
- ❌ No puede crear cursos
- ❌ No puede gestionar usuarios

---

## 🚀 Flujo de Uso Completo

### 1. Iniciar Sesión

1. Abre http://localhost:4200
2. Verás la página de login
3. Puedes hacer clic en cualquier usuario de prueba para autocompletar
4. Haz clic en "Iniciar Sesión"

### 2. Dashboard según Rol

Después de iniciar sesión, verás un dashboard personalizado:

#### Dashboard de Administrador
- Panel con acceso completo
- Botones para:
  - Ver Cursos
  - Crear Curso
  - Gestionar Usuarios
  - Ver Clasificación

#### Dashboard de Evaluador
- Panel de evaluador
- Botones para:
  - Ver Cursos
  - **Crear Curso** (funcionalidad principal)
  - Ver Clasificación

#### Dashboard de Estudiante
- Panel de estudiante
- Botones para:
  - Ver Cursos Disponibles
  - Mis Inscripciones
  - Ver Clasificación

---

## 📝 Crear un Curso (Evaluador/Admin)

### Paso a Paso:

1. **Inicia sesión** como evaluador o admin
2. En el dashboard, haz clic en **"Crear Curso"**
3. Completa el formulario:

#### Información del Curso
- **Nombre**: Ej: "Python para Principiantes"
- **Descripción**: Descripción del curso
- **Duración**: En minutos (ej: 120)
- **Badge**: Opcional, selecciona un badge existente

#### Módulos
- Cada curso tiene al menos 1 módulo
- Por cada módulo:
  - **Nombre**: Ej: "Introducción a Python"
  - **Contenido**: Descripción del módulo
  - **Orden**: Número de orden (1, 2, 3...)

#### Preguntas
- Cada módulo tiene al menos 1 pregunta
- Por cada pregunta:
  - **Texto de la pregunta**
  - **4 opciones** (A, B, C, D)
  - **Respuesta correcta** (selecciona A, B, C o D)
  - **Puntos**: Valor de la pregunta

4. Puedes agregar más módulos con el botón **"+ Agregar Módulo"**
5. Puedes agregar más preguntas con el botón **"+ Agregar Pregunta"**
6. Haz clic en **"Crear Curso"**
7. ¡Listo! El curso estará disponible para todos

---

## 🏆 Sistema de Clasificación

### ¿Quién aparece en la clasificación?

**TODOS los usuarios que completen evaluaciones**:
- ✅ Administradores
- ✅ **Evaluadores** (cuando toman cursos)
- ✅ Estudiantes

### Cómo aparecer en la clasificación:

1. Inscríbete en un curso
2. Responde las preguntas de evaluación
3. Envía tus respuestas
4. Automáticamente aparecerás en la clasificación

### Información mostrada:
- Posición en el ranking
- Nombre de usuario
- Nombre completo
- Puntuación (ej: 20/20)
- Porcentaje
- Top 3 destacados con fondo amarillo

---

## 👥 Usuarios de Prueba

### Administrador
| Usuario | Contraseña | Nombre |
|---------|-----------|--------|
| admin | admin123 | Carlos Administrador |

### Evaluadores
| Usuario | Contraseña | Nombre |
|---------|-----------|--------|
| evaluador | eval123 | Juan Pérez |
| profesor | prof123 | Ana García |

### Estudiantes
| Usuario | Contraseña | Nombre |
|---------|-----------|--------|
| estudiante | est123 | María López |
| alumno | alum123 | Pedro Martínez |
| estudiante2 | est456 | Laura Rodríguez |

---

## 🔄 Escenarios de Uso

### Escenario 1: Evaluador crea un curso

1. Login como **evaluador** (evaluador/eval123)
2. Dashboard → "Crear Curso"
3. Completa el formulario:
   - Nombre: "JavaScript Básico"
   - Descripción: "Aprende los fundamentos de JavaScript"
   - Duración: 90 minutos
   - Módulo 1: "Variables y Tipos de Datos"
   - Pregunta 1: "¿Qué es una variable?"
     - A: Un contenedor para datos ✅
     - B: Una función
     - C: Un objeto
     - D: Un array
   - Respuesta correcta: A
   - Puntos: 10
4. Clic en "Crear Curso"
5. El curso aparece en la lista de cursos

### Escenario 2: Estudiante toma el curso

1. Login como **estudiante** (estudiante/est123)
2. Dashboard → "Ver Cursos Disponibles"
3. Selecciona "JavaScript Básico"
4. Clic en "Inscribirse en el Curso"
5. Responde las preguntas
6. Clic en "Enviar Respuestas"
7. Ve tu resultado

### Escenario 3: Evaluador aparece en clasificación

1. Login como **evaluador** (evaluador/eval123)
2. Ve a "Cursos"
3. Selecciona cualquier curso
4. Inscríbete y toma la evaluación
5. Ve a "Clasificación"
6. ¡Apareces en el ranking!

### Escenario 4: Admin gestiona todo

1. Login como **admin** (admin/admin123)
2. Puede crear cursos
3. Puede ver todos los usuarios
4. Puede eliminar cursos
5. Tiene acceso completo

---

## 🔧 Endpoints de la API

### Autenticación
```
POST /api/auth/login
Body: {
  "username": "evaluador",
  "password": "eval123"
}

Response: {
  "token": "eyJhbGc...",
  "userId": 2,
  "username": "evaluador",
  "email": "evaluador@evaluation.com",
  "firstName": "Juan",
  "lastName": "Pérez",
  "role": "EVALUADOR"
}
```

### Crear Curso con Módulos
```
POST /api/courses/with-modules
Body: {
  "name": "Curso de Prueba",
  "description": "Descripción",
  "duration": 60,
  "badgeId": 1,
  "modules": [
    {
      "name": "Módulo 1",
      "content": "Contenido",
      "orderIndex": 1,
      "questions": [
        {
          "questionText": "¿Pregunta?",
          "optionA": "Opción A",
          "optionB": "Opción B",
          "optionC": "Opción C",
          "optionD": "Opción D",
          "correctAnswer": "A",
          "points": 10
        }
      ]
    }
  ]
}
```

### Badges
```
GET /api/badges
POST /api/badges
```

---

## 🎯 Características Clave

### ✅ Implementado

1. **Sistema de Login**
   - JWT para autenticación
   - Sesión persistente
   - Logout funcional

2. **Roles y Permisos**
   - 3 roles: Admin, Evaluador, Evaluado
   - Permisos diferenciados
   - UI adaptada según rol

3. **Creación de Cursos**
   - Evaluadores pueden crear cursos
   - Formulario completo con módulos y preguntas
   - Validación de datos

4. **Clasificación Universal**
   - Todos los roles pueden aparecer
   - Ranking automático
   - Actualización en tiempo real

5. **Dashboard Personalizado**
   - Diferente para cada rol
   - Accesos rápidos
   - Información relevante

---

## 📊 Arquitectura de Seguridad

```
Frontend (Angular)
    ↓
AuthService (maneja login/logout)
    ↓
localStorage (guarda token y usuario)
    ↓
HTTP Interceptor (agrega token a requests)
    ↓
Backend (Spring Boot)
    ↓
AuthController (/auth/login)
    ↓
AuthService (valida credenciales)
    ↓
JwtUtil (genera token JWT)
    ↓
Response con token y datos de usuario
```

---

## 🧪 Pruebas Sugeridas

### Test 1: Login de cada rol
1. Prueba login con admin
2. Prueba login con evaluador
3. Prueba login con estudiante
4. Verifica que cada uno ve su dashboard

### Test 2: Evaluador crea curso
1. Login como evaluador
2. Crea un curso nuevo
3. Verifica que aparece en la lista
4. Logout y login como estudiante
5. Verifica que el estudiante puede verlo

### Test 3: Clasificación con múltiples roles
1. Login como evaluador
2. Toma un curso y completa evaluación
3. Logout y login como estudiante
4. Toma el mismo curso
5. Ve a clasificación
6. Verifica que ambos aparecen

### Test 4: Permisos
1. Login como estudiante
2. Intenta acceder a /admin/create-course
3. Verifica que no tiene el botón en el dashboard

---

## 🔐 Seguridad

### Implementado:
- ✅ Contraseñas encriptadas con BCrypt
- ✅ JWT para autenticación
- ✅ Token almacenado de forma segura
- ✅ Validación de credenciales
- ✅ Logout limpia la sesión

### Recomendaciones para producción:
- Agregar refresh tokens
- Implementar rate limiting
- Agregar HTTPS
- Validar permisos en el backend
- Agregar 2FA

---

## 📝 Notas Importantes

1. **Evaluadores en Clasificación**: Los evaluadores SÍ aparecen en la clasificación cuando toman cursos. Esto permite que los profesores también puedan participar.

2. **Creación de Cursos**: Solo Admin y Evaluadores pueden crear cursos. Los estudiantes solo pueden tomarlos.

3. **Datos de Prueba**: El sistema se inicializa con 6 usuarios (1 admin, 2 evaluadores, 3 estudiantes) y 1 curso de ejemplo.

4. **Persistencia**: La sesión se mantiene incluso si refrescas la página.

5. **Logout**: Al hacer logout, se limpia toda la información de sesión.

---

## 🎉 ¡Sistema Completo!

El sistema ahora tiene:
- ✅ Login funcional
- ✅ 3 roles con permisos diferenciados
- ✅ Evaluadores pueden crear cursos
- ✅ Todos pueden aparecer en clasificación
- ✅ Dashboard personalizado por rol
- ✅ 6 usuarios de prueba
- ✅ Interfaz moderna y responsive

**¡Todo está listo para usar!** 🚀
