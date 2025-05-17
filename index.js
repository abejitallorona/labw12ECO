const express = require("express");
const path = require("path");
const { createServer } = require("http");
const cors = require("cors");

// Import routers
const productsRouter = require("./server/routes/products.router");
const usersRouter = require("./server/routes/users.router");
const ordersRouter = require("./server/routes/orders.router");
const postsRouter = require("./server/routes/posts.router"); // Añadido para la Tarea 7
const screen1EventsRouter = require("./server/routes/screen1Events.router");
const { initSocketInstance } = require("./server/services/socket.service");

const PORT = 5050;

const app = express();
const httpServer = createServer(app);

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/app1", express.static(path.join(__dirname, "app1")));
app.use("/app2", express.static(path.join(__dirname, "app2")));

// Routes for Lab 1
app.use("/", productsRouter);
app.use("/", usersRouter);
app.use("/", ordersRouter);
app.use("/", postsRouter); // Añadido para la Tarea 7
app.use("/", screen1EventsRouter);

// Services
initSocketInstance(httpServer);

httpServer.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`));