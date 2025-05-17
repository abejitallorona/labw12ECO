const supabaseCli = require("../services/supabase.service");

// Task 7: Funciones para la tabla posts
const getAllPosts = async () => {
  const { data, error } = await supabaseCli.from("posts").select();
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const getPostsByTitle = async (searchTerm) => {
  const { data, error } = await supabaseCli
    .from("posts")
    .select()
    .ilike("title", `%${searchTerm}%`);
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const createPostInDB = async (post) => {
  const { data, error } = await supabaseCli
    .from("posts")
    .insert([post])
    .select();

  if (error) {
    console.error(error);
    return error;
  }

  return data;
};

module.exports = {
  getAllPosts,
  getPostsByTitle,
  createPostInDB
};