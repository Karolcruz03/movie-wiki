const express = require("express");
const router = express.Router();

const moviesController = require("../controllers/movies.controller");

router.get("/", moviesController.getAllMovies);

router.get("/:id", moviesController.getMovieById);

router.post("/import/:imdbId", moviesController.importMovie);

module.exports = router;