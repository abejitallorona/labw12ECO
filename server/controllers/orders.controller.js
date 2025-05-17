const {
  getAllOrders,
  getOrdersOrderedByDate,
  createOrderInDB
} = require("../db/orders.db");

const getOrders = async (req, res) => {
  const orders = await getAllOrders();
  res.send(orders);
};

const getOrdersByDate = async (req, res) => {
  const orders = await getOrdersOrderedByDate();
  res.send(orders);
};

const createOrder = async (req, res) => {
  const { user_id, total } = req.body;
  const response = await createOrderInDB({ 
    user_id, 
    total, 
    created_at: new Date().toISOString() 
  });
  res.send(response);
};

module.exports = {
  getOrders,
  getOrdersByDate,
  createOrder
};