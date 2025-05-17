const express = require("express");
const {
  getUsers,
  getUserFields,
  createNewUser
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/users-extended", getUsers);
router.get("/users-extended/fields", getUserFields);
router.post("/users-extended", createNewUser);

module.exports = router;