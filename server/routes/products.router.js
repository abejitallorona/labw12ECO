const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  addProduct,
  getProductsUnderPrice,
  getElectronicsAbovePrice,
  getProductsWithPagination,
  getUserProducts
} = require("../controllers/products.controller");

// 1. Obtener todos los registros de una tabla
router.get("/products", getAllProducts);

// 2. Filtrar por una condición simple
router.get("/products/price/:maxPrice", getProductsUnderPrice);

// Task 6: Filtrar por múltiples condiciones
router.get("/products/electronics-above-30", getElectronicsAbovePrice);

// Task 8: Paginación con limit y offset
router.get("/products/paginated", getProductsWithPagination);

// Task 9: Productos de un usuario específico
router.get("/products/user/:userId", getUserProducts);

// Para añadir productos
router.post("/products", addProduct);

module.exports = router;