@echo off
echo Iniciando el servidor de Oracles...
cd /d "%~dp0"
start http://localhost:5173/
npm run dev
