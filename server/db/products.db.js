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
  createProductInDB
};