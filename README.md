# Reto QA - API de agustin leonardi

## Descripción
Este proyecto corresponde al **rol de QA Tester** en el reto previo.  
Se diseñaron y ejecutaron pruebas manuales y automatizadas para la API de gestión de usuarios (proyecto backend de @agustin leonardi).  

## Requisitos previos
- **.NET 8 SDK** instalado
- **Node.js v18+** y npm instalado
- **Postman** (opcional, para ejecutar pruebas manuales)

## Contenido del Repositorio
- `README.md` → Documentación principal  
- `TestCases.md` → Casos de prueba en tabla Markdown  
- `__tests__/users.test.js` → Pruebas automatizadas con Jest  
- `Usuarios.postman_collection.json` → Colección Postman exportada  

## Pruebas Manuales
Las pruebas manuales están documentadas en el archivo [TestCases.md](./TestCases.md), incluyendo:
- Casos positivos y negativos
- Casos de borde (ej. borrar usuario inexistente)
- Resultado obtenido y estado

## Pruebas Automatizadas
Se implementaron pruebas con **Jest + Supertest** para validar:
- GET /users devuelve lista vacía al inicio  
- POST /users crea usuario válido  
- POST /users falla si falta email  
- DELETE /users/{id} responde 404 si no existe  

## Cómo levantar la API
1. Abrir una terminal en la carpeta del backend (proyecto .NET).
   ```bash
   cd "D:\Reto QA\Reto-Backend-main\API"
   dotnet run

## Cómo levantar la API
Para correr las pruebas:
```bash
npm install
npm test

## Cómo levantar la API
- Node.js >= 18  
- Jest y Supertest instalados (se instalan con `npm install`)  

## Ejecución de la API (Backend)
La API backend es un proyecto en .NET. Para ejecutarla:

```bash
dotnet run --project API/API.csproj

## Se levanta en: http://localhost:5071

## Autor@:

Nombre: Nadia Jones Jazmin

Rol: QA Tester

## Revisión de Pull Request de un compañero

Revisado por: Nadia Jones Jazmin  
Repo/PR: https://github.com/NadiaJaz/Reto-Backend/pull/1  
Feedback: Durante la revisión se detectó que POST /users no valida la existencia de usuarios duplicados. Se recomienda agregar validación y pruebas automatizadas para este caso.  
Conclusión: Revisar
