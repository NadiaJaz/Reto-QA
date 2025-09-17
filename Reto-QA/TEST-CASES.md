# Casos de Prueba – API de agustin leonardi

| ID   | Endpoint        | Descripción                               | Datos de entrada                          | Resultado esperado                                    | Resultado obtenido                                    | Estado  |
|------|-----------------|-------------------------------------------|-------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|---------|
| TC01 | GET /users      | Listar usuarios sin registros             | -                                         | 200 + []                                             | 200 + []                                              | ✅ Pasó |
| TC02 | POST /users     | Crear usuario válido                      | { "name": "Ana", "email": "ana@ejemplo.com" } | 201 + JSON con id y datos del usuario                | 201 + { "id": 1, "name": "Ana", "email": "ana@ejemplo.com" } | ✅ Pasó |
| TC03 | POST /users     | Crear usuario sin `name`                  | { "email": "test@ejemplo.com" }           | 400 (Bad Request)                                    | 400 (Bad Request)                                     | ✅ Pasó |
| TC04 | POST /users     | Crear usuario con email inválido          | { "name": "Juan", "email": "correo" }     | 400 (Bad Request)                                    | 400 (Bad Request)                                     | ✅ Pasó |
| TC05 | GET /users      | Listar usuarios con registros             | -                                         | 200 + [ { "id": 1, "name": "Ana", "email": "..." } ] | 200 + [ { "id": 1, "name": "Ana", "email": "..." } ] | ✅ Pasó |
| TC06 | DELETE /users/1 | Eliminar usuario existente                | id = 1                                    | 204 (No Content)                                     | 204 (No Content)                                     | ✅ Pasó |
| TC07 | DELETE /users/99| Eliminar usuario inexistente               | id = 99                                   | 404 (Not Found)                                      | 404 (Not Found)                                      | ✅ Pasó |
| TC08 | POST /users     | Crear usuario con email duplicado         | { "name": "Ana", "email": "ana@ejemplo.com" } | 400 (Bad Request) (si el backend lo valida)        | Actualmente se permite duplicado (201 creado)        | ⚠️ Falló |

