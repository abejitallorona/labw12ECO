const express = require("express");
const {
  getProducts,
  getProductsByPrice,
  createProduct
} = require("../controllers/products.controller");
const router = express.Router();

router.get("/products", getProducts);
router.get("/products/price/:maxPrice", getProductsByPrice);
router.post("/products", createProduct);

module.exports = router;