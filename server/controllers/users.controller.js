const supabaseCli = require("../services/supabase.service");

// Controlador para obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const { data, error } = await supabaseCli.from("users").select("*");
    
    if (error) throw error;
    
    res.status(200).json(data);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener solo username y email
const getUsernameAndEmail = async (req, res) => {
  try {
    const { data, error } = await supabaseCli
      .from("users")
      .select("username, email");
    
    if (error) throw error;
    
    res.status(200).json(data);
  } catch (error) {
    console.error("Error getting user fields:", error);
    res.status(500).json({ error: error.message });
  }
};

// Controlador para añadir un usuario
const addUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const created_at = new Date().toISOString();
    
    const { data, error } = await supabaseCli
      .from("users")
      .insert([{ username, email, created_at }])
      .select();
    
    if (error) throw error;
    
    res.status(201).json(data[0]);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUsernameAndEmail,
  addUser
};