#!/bin/bash

echo "🚀 Preparando aplicación para despliegue..."

# Compilar backend
echo "📦 Compilando backend..."
cd backend
./mvnw clean package -DskipTests
cd ..

# Compilar frontend
echo "🎨 Compilando frontend..."
cd frontend
npm install
npm run build
cd ..

echo "✅ Compilación completada!"
echo ""
echo "📋 Próximos pasos:"
echo "1. Sube el código a GitHub"
echo "2. Despliega backend en Render.com"
echo "3. Despliega frontend en Vercel.com"
echo ""
echo "📚 Lee README_DESPLIEGUE.md para instrucciones detalladas"
