const mongoose = require("mongoose");

const { createProduct, getProduct } = require("./products");

const MONGODB_TEST_URL = "mongodb://127.0.0.1/test-ecommerce";

beforeAll(async () => {
  await mongoose.connect(MONGODB_TEST_URL);
});

afterEach(async () => {
  for (const collection of Object.values(mongoose.connection.collections)) {
    await collection.deleteMany();
  }
});

afterAll(async () => {
  await mongoose.connection.close();
});

test("should create product", async () => {
  const product = await createProduct({
    name: "New product",
    sku: "XYZ-999",
    price: 500,
    description: "A test product",
    thumbnail: "/foo-thumbnail.jpg",
    image: "/foo.jpg"
  });
  const fetchedProduct = await getProduct("XYZ-999");
  expect(product.name).toEqual(fetchedProduct.name);
});
