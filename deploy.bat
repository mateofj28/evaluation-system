@echo off
echo 🚀 Preparando aplicación para despliegue...

REM Compilar backend
echo 📦 Compilando backend...
cd backend
call mvnw.cmd clean package -DskipTests
cd ..

REM Compilar frontend
echo 🎨 Compilando frontend...
cd frontend
call npm install
call npm run build
cd ..

echo ✅ Compilación completada!
echo.
echo 📋 Próximos pasos:
echo 1. Sube el código a GitHub
echo 2. Despliega backend en Render.com
echo 3. Despliega frontend en Vercel.com
echo.
echo 📚 Lee README_DESPLIEGUE.md para instrucciones detalladas
pause
