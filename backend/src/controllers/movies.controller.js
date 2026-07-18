const moviesService = require("../services/movies.service");

const getAllMovies = async (req, res) => {
    const movies = await moviesService.getAllMovies();

    res.json(movies);
};

const getMovieById = async (req, res) => {
    const id = Number(req.params.id);

    const movie = await moviesService.getMovieById(id);

    if (!movie) {
        return res.status(404).json({
            message: "Movie not found"
        });
    }

    res.json(movie);
};

const importMovie = async (req, res) => {

    try {

        const { imdbId } = req.params;

        const movie = await moviesService.importMovie(imdbId);

        res.status(201).json(movie);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    getAllMovies,
    getMovieById,
    importMovie
};