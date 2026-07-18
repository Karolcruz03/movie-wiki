const moviesService = require("../services/movies.service");

const getAllMovies = (req, res) => {
    const movies = moviesService.getAllMovies();

    res.json(movies);
};

const getMovieById = (req, res) => {
    const id = Number(req.params.id);

    const movie = moviesService.getMovieById(id);

    if (!movie) {
        return res.status(404).json({
            message: "Movie not found"
        });
    }

    res.json(movie);
};

module.exports = {
    getAllMovies,
    getMovieById
};