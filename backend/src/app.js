const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Movie Wiki API is running"
  });
});

module.exports = app;