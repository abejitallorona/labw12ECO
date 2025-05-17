const getAllUsers = async () => {
  const { data, error } = await supabaseCli.from("users").select();
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const getUserFields = async () => {
  const { data, error } = await supabaseCli
    .from("users")
    .select("username, email");
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const createUserInDB = async (user) => {
  const { data, error } = await supabaseCli
    .from("users")
    .insert([user])
    .select();

  if (error) {
    console.error(error);
    return error;
  }

  return data;
};

module.exports = {
  getAllUsers,
  getUserFields,
  createUserInDB
};