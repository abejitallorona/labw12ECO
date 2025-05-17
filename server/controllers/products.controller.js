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
    const { name, price, category } = req.body;
    
    const { data, error } = await supabaseCli
      .from("products")
      .insert([{ name, price, category }])
      .select();
    
    if (error) throw error;
    
    res.status(201).json(data[0]);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductsUnderPrice,
  addProduct
};