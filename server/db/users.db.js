const {
  getAllUsers,
  getUsersSelectFields,
  createUserInDB
} = require("../db/users.db");

const getUsers = async (req, res) => {
  const users = await getAllUsers();
  res.send(users);
};

const getUserFields = async (req, res) => {
  const fields = "username, email";
  const users = await getUsersSelectFields(fields);
  res.send(users);
};

const createNewUser = async (req, res) => {
  const { username, email } = req.body;
  const response = await createUserInDB({ 
    username, 
    email, 
    created_at: new Date().toISOString() 
  });
  res.send(response);
};

module.exports = {
  getUsers,
  getUserFields,
  createNewUser
};