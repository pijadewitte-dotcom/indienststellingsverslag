@echo off
set PYTHON_BIN=C:\Users\Pieter-JanDeWitte\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe

if not exist "%PYTHON_BIN%" (
  echo Bundled Python niet gevonden.
  pause
  exit /b 1
)

start "" http://127.0.0.1:4173/
"%PYTHON_BIN%" -m http.server 4173 --directory "%~dp0"
