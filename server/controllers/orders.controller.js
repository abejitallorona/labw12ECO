const supabaseCli = require("../services/supabase.service");

// Controlador para obtener todas las órdenes
const getAllOrders = async (req, res) => {
  try {
    // Realiza la consulta para obtener las órdenes de la base de datos
    const { data, error } = await supabaseCli.from("orders").select("*").order("created_at", { ascending: false });

    if (error) throw error;

    // Devuelve los datos si la consulta fue exitosa
    res.status(200).json(data);
  } catch (error) {
    // Manejo de errores en caso de fallo
    console.error("Error getting orders:", error);
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener órdenes ordenadas por fecha descendente
const getOrdersByDateDesc = async (req, res) => {
  try {
    const { data, error } = await supabaseCli
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (error) throw error;
    
    res.status(200).json(data);
  } catch (error) {
    console.error("Error getting orders by date:", error);
    res.status(500).json({ error: error.message });
  }
};

// Controlador para añadir una orden
const addOrder = async (req, res) => {
  try {
    const { user_id, total } = req.body;
    const created_at = new Date().toISOString();
    
    const { data, error } = await supabaseCli
      .from("orders")
      .insert([{ user_id, total, created_at }])
      .select();
    
    if (error) throw error;
    
    res.status(201).json(data[0]);
  } catch (error) {
    console.error("Error adding order:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllOrders,
  getOrdersByDateDesc,
  addOrder
};