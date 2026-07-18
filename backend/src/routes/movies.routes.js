const express = require("express");
const router = express.Router();

const moviesController = require("../controllers/movies.controller");
const validate = require("../middlewares/validation.middleware");
const { validateMovieId } = require("../validators/movie.validator");

router.get("/", moviesController.getMovies);

router.get("/search", moviesController.searchMovies);

router.get(
    "/:id",
    validateMovieId,
    validate,
    moviesController.getMovieById
);

router.post("/import/:imdbId", moviesController.importMovie);

router.delete("/:id", moviesController.deleteMovie);

router.put("/:id", moviesController.updateMovie);

module.exports = router;