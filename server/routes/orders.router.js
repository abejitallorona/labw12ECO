const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  getOrdersByDateDesc,
  addOrder
} = require("../controllers/orders.controller");

// Obtener todas las órdenes
router.get("/orders", getAllOrders);

// 4. Ordenar resultados por una columna (created_at descendente)
router.get("/orders/by-date", getOrdersByDateDesc);

// Para añadir órdenes
router.post("/orders", addOrder);

module.exports = router;