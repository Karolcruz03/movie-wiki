const moviesService = require("../services/movies.service");
const asyncHandler = require("../utils/asyncHandler");

const getMovies = asyncHandler(async (req, res) => {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const movies = await moviesService.getMovies(page, limit);

    res.json(movies);

});

const getMovieById = asyncHandler(async (req, res) => {

    const movie = await moviesService.getMovieById(req.params.id);

    res.json(movie);

});

const importMovie = asyncHandler(async (req, res) => {

    const { imdbId } = req.params;

    const movie = await moviesService.importMovie(imdbId);

    res.status(201).json(movie);

});

const getMovies = asyncHandler(async (req, res) => {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const movies = await moviesService.getMovies(page, limit);

    res.json(movies);

});

const searchMovies = asyncHandler(async (req, res) => {

    const { title } = req.query;

    const movies = await moviesService.searchMovies(title);

    res.json(movies);

});

const deleteMovie = asyncHandler(async (req, res) => {

    await moviesService.deleteMovie(req.params.id);

    res.json({
        success: true,
        message: "Movie deleted successfully"
    });

});

const updateMovie = asyncHandler(async (req, res) => {

    const movie = await moviesService.updateMovie(
        req.params.id,
        req.body
    );

    res.json(movie);

});

module.exports = {
    getMovies,
    getMovieById,
    importMovie,
    searchMovies,
    deleteMovie,
    updateMovie
};