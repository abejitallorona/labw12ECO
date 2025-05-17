const supabaseCli = require("../services/supabase.service");

// Task 7: Controlador para la tabla de posts
const getAllPosts = async (req, res) => {
  try {
    const { data, error } = await supabaseCli.from("posts").select("*");
    
    if (error) throw error;
    
    res.status(200).json(data);
  } catch (error) {
    console.error("Error getting posts:", error);
    res.status(500).json({ error: error.message });
  }
};

// Task 7: Controlador para buscar posts por texto parcial
const getPostsByTitleContaining = async (req, res) => {
  try {
    const { searchTerm } = req.params;
    
    const { data, error } = await supabaseCli
      .from("posts")
      .select("*")
      .ilike("title", `%${searchTerm}%`);
    
    if (error) throw error;
    
    res.status(200).json(data);
  } catch (error) {
    console.error("Error searching posts:", error);
    res.status(500).json({ error: error.message });
  }
};

// Controlador para añadir un post
const addPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const created_at = new Date().toISOString();
    
    const { data, error } = await supabaseCli
      .from("posts")
      .insert([{ title, content, created_at }])
      .select();
    
    if (error) throw error;
    
    res.status(201).json(data[0]);
  } catch (error) {
    console.error("Error adding post:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPosts,
  getPostsByTitleContaining,
  addPost
};