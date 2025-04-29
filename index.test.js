const request = require("supertest");
const app = require("./index");

describe("Pruebas de la API", () => {
  test("GET /hello world ", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});