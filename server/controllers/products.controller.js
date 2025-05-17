const supabaseCli = require("../services/supabase.service");

// Controlador para obtener todos los productos
const getAllProducts = async (req, res) => {
  try {
    const { data, error } = await supabaseCli.from("products").select("*");
    
    if (error) throw error;
    
    res.status(200).json(data);
  } catch (error) {
    console.error("Error getting products:", error);
    res.status(500).json({ error: error.message });
  }
};

// Controlador para filtrar productos por precio
const getProductsUnderPrice = async (req, res) => {
  try {
    const { maxPrice } = req.params;
    
    const { data, error } = await supabaseCli
      .from("products")
      .select("*")
      .lt("price", parseFloat(maxPrice));
    
    if (error) throw error;
    
    res.status(200).json(data);
  } catch (error) {
    console.error("Error filtering products by price:", error);
    res.status(500).json({ error: error.message });
  }
};

// Controlador para añadir un producto
const addProduct = async (req, res) => {
  try {
    const { name, price, category, user_id } = req.body;
    
    const { data, error } = await supabaseCli
      .from("products")
      .insert([{ name, price, category, user_id }])
      .select();
    
    if (error) throw error;
    
    res.status(201).json(data[0]);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: error.message });
  }
};

// Task 6: Controlador para filtrar por múltiples condiciones
const getElectronicsAbovePrice = async (req, res) => {
  try {
    const minPrice = 30;
    const category = "Electronics";
    
    const { data, error } = await supabaseCli
      .from("products")
      .select("*")
      .gt("price", minPrice)
      .eq("category", category);
    
    if (error) throw error;
    
    res.status(200).json(data);
  } catch (error) {
    console.error("Error filtering electronics above price:", error);
    res.status(500).json({ error: error.message });
  }
};

// Task 8: Controlador para paginación
const getProductsWithPagination = async (req, res) => {
  try {
    const { page = 1, pageSize = 10 } = req.query;
    const offset = (page - 1) * pageSize;
    
    const { data, error } = await supabaseCli
      .from("products")
      .select("*")
      .range(offset, offset + pageSize - 1);
    
    if (error) throw error;
    
    res.status(200).json(data);
  } catch (error) {
    console.error("Error getting paginated products:", error);
    res.status(500).json({ error: error.message });
  }
};

// Task 9: Controlador para traer productos de un usuario específico
const getUserProducts = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const { data, error } = await supabaseCli
      .from("products")
      .select("*")
      .eq("user_id", userId);
    
    if (error) throw error;
    
    res.status(200).json(data);
  } catch (error) {
    console.error("Error getting user products:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductsUnderPrice,
  addProduct,
  getElectronicsAbovePrice,
  getProductsWithPagination,
  getUserProducts
};