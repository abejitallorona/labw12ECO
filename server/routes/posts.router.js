const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getPostsByTitleContaining,
  addPost
} = require("../controllers/posts.controller");

// Obtener todos los posts
router.get("/posts", getAllPosts);

// Task 7: Buscar por texto parcial (like)
router.get("/posts/search/:searchTerm", getPostsByTitleContaining);

// Para añadir posts
router.post("/posts", addPost);

module.exports = router;