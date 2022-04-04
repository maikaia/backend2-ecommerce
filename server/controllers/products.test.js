const supertest = require("supertest");

const { setupDatabase } = require("../common/test-utils");
const app = require("../app");
const request = supertest(app);

setupDatabase();

test("GET /products should list all products", async () => {
  const response = await request.get("/products");
  expect(response.status).toBe(200);
});

test("POST /products should create a new product", async () => {
  const product = {
    name: "A product",
    sku: "ABC-123",
    price: 500,
    description: "A test product",
    thumbnail: "/foo-thumbnail.jpg",
    image: "/foo.jpg",
  };
  const response = request.post("/products");
  expect(response.status).toBe(200);
});
