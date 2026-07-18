const movieRepository = require("../repositories/movie.repository");
const omdbService = require("../external/omdb.service");
const AppError = require("../utils/AppError");

const importMovie = async (imdbId) => {

    const existingMovie = await movieRepository.findByImdbId(imdbId);

    if (movie.Response === "False") {
      throw new AppError(movie.Error, 404);
    }
    
    if (existingMovie) {
      return existingMovie;
    }

    const movie = await omdbService.getMovieByImdbId(imdbId);

    return await movieRepository.create(movie);

};

const getAllMovies = async () => {
    return await movieRepository.findAll();
};

const getMovieById = async (id) => {

    const movie = await movieRepository.findById(id);

    if (!movie) {
      throw new AppError("Movie not found", 404);
    }

    return movie;

};

const getMovies = async (page = 1, limit = 10) => {

    const offset = (page - 1) * limit;

    const movies = await movieRepository.findAll(limit, offset);

    const total = await movieRepository.count();

    return {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        results: movies
    };

};

const searchMovies = async (title) => {

    return await movieRepository.search(title);

};

const deleteMovie = async (id) => {

    const movie = await movieRepository.remove(id);

    if (!movie) {
      throw new AppError("Movie not found", 404);
    }
    return movie;

};

const updateMovie = async (id, data) => {

    const movie = await movieRepository.update(id, data);

    if (!movie) {
      throw new AppError("Movie not found", 404);
    }

    return movie;

};

module.exports = {
    importMovie,
    getAllMovies,
    getMovieById,
    getMovies,
    searchMovies,
    deleteMovie,
    updateMovie
};