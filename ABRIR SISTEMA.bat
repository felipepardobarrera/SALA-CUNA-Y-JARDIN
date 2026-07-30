@echo off
cd /d "%~dp0"

set "NODE_EXE=node"
set "CODEX_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if exist "%CODEX_NODE%" set "NODE_EXE=%CODEX_NODE%"

start "Control Presupuestario" "%NODE_EXE%" server.js
timeout /t 2 /nobreak >nul
start http://127.0.0.1:8123/
