const request = require("supertest");

const apiUrl = "http://localhost:5071"; // puerto de la API corriendoo

describe("Pruebas de la API de usuarios", () => {
  
  it("Debería devolver un array vacío en GET /users al inicio", async () => {
    const response = await request(apiUrl).get("/users");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(0);
  });

  it("Debería crear un usuario válido con POST /users", async () => {
    const newUser = { name: "Ana", email: "ana@ejemplo.com" };
    const response = await request(apiUrl)
      .post("/users")
      .send(newUser)
      .set("Content-Type", "application/json");

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.email).toBe(newUser.email);
  });

  it("Debería fallar al crear usuario sin email en POST /users", async () => {
    const invalidUser = { name: "Carlos" };
    const response = await request(apiUrl)
      .post("/users")
      .send(invalidUser)
      .set("Content-Type", "application/json");

    expect(response.statusCode).toBe(400);
  });

  it("Debería responder 404 al intentar borrar un usuario inexistente", async () => {
    const response = await request(apiUrl).delete("/users/999");
    expect(response.statusCode).toBe(404);
  });
});


