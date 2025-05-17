
const express = require("express");
const {
  getOrders,
  getOrdersByDate,
  createOrder
} = require("../controllers/orders.controller");
const router = express.Router();

router.get("/orders", getOrders);
router.get("/orders/by-date", getOrdersByDate);
router.post("/orders", createOrder);

module.exports = router;