const express = require("express");

const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./config/swagger");
const cors = require("cors");
const errorHandler = require("./middlewares/error.middleware");

const moviesRoutes = require("./routes/movies.routes");

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

app.use("/movies", moviesRoutes);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpecs)
);

app.use(errorHandler);

module.exports = app;