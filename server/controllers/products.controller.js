const {
  getAllProducts,
  getProductsUnderPrice,
  createProductInDB
} = require("../db/products.db");

const getProducts = async (req, res) => {
  const products = await getAllProducts();
  res.send(products);
};

const getProductsByPrice = async (req, res) => {
  const { maxPrice } = req.params;
  const products = await getProductsUnderPrice(maxPrice);
  res.send(products);
};

const createProduct = async (req, res) => {
  const { name, price, category } = req.body;
  const response = await createProductInDB({ name, price, category });
  res.send(response);
};

module.exports = {
  getProducts,
  getProductsByPrice,
  createProduct
};