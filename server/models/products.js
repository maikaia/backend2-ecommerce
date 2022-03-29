const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true },
  price: { type: Number, required: true },
  discountPrice: Number,
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  image: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

const getAllProducts = async () => {
  return await Product.find();
};

const getProduct = async (sku) => {
  return await Product.findOne({ sku });
};

const createProduct = async (properties) => {
  return await Product.create(properties);
};

module.exports = { getAllProducts, getProduct, createProduct };
