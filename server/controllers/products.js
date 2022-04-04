const express = require("express");

const {
  createProduct,
  getAllProducts,
  getProduct,
} = require("../models/products.js");

const productRoutes = express.Router();

productRoutes.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.json({ products });
});

productRoutes.get("/:sku", async (req, res) => {
  const product = await getProduct(req.params.sku);
  if (product) {
    res.json(product);
  } else {
    res.sendStatus(404);
  }
});

productRoutes.post("/", async (req, res) => {
  const product = await createProduct(req.body);
  return res.json(product);
});

module.exports = { productRoutes };
