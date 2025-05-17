const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUsernameAndEmail,
  addUser
} = require("../controllers/users.controller");

// Obtener todos los usuarios
router.get("/users", getAllUsers);

// 3. Seleccionar campos específicos (username y email)
router.get("/users/fields", getUsernameAndEmail);

// Para añadir usuarios
router.post("/users", addUser);

module.exports = router;