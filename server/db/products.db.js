const supabaseCli = require("../services/supabase.service");

const getAllProducts = async () => {
  const { data, error } = await supabaseCli.from("products").select();
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const getProductsUnderPrice = async (maxPrice) => {
  const { data, error } = await supabaseCli
    .from("products")
    .select()
    .lt("price", maxPrice);
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

// Task 6: Filtrar por múltiples condiciones
const getElectronicsAbovePrice = async (minPrice, category) => {
  const { data, error } = await supabaseCli
    .from("products")
    .select()
    .gt("price", minPrice)
    .eq("category", category);
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

// Task 8: Paginación
const getPaginatedProducts = async (limit, offset) => {
  const { data, error } = await supabaseCli
    .from("products")
    .select()
    .range(offset, offset + limit - 1);
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

// Task 9: Productos de un usuario específico
const getUserProducts = async (userId) => {
  const { data, error } = await supabaseCli
    .from("products")
    .select()
    .eq("user_id", userId);
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const createProductInDB = async (product) => {
  const { data, error } = await supabaseCli
    .from("products")
    .insert([product])
    .select();

  if (error) {
    console.error(error);
    return error;
  }

  return data;
};

module.exports = {
  getAllProducts,
  getProductsUnderPrice,
  createProductInDB,
  getElectronicsAbovePrice,
  getPaginatedProducts,
  getUserProducts
};