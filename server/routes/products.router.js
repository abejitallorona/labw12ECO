const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  addProduct,
  getProductsUnderPrice
} = require("../controllers/products.controller");

// 1. Obtener todos los registros de una tabla
router.get("/products", getAllProducts);

// 2. Filtrar por una condición simple
router.get("/products/price/:maxPrice", getProductsUnderPrice);

// Para añadir productos
router.post("/products", addProduct);

module.exports = router;