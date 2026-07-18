const movieRepository = require("../repositories/movie.repository");
const omdbService = require("../external/omdb.service");

const importMovie = async (imdbId) => {

    const existingMovie = await movieRepository.findByImdbId(imdbId);

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
    const result = await movieRepository.findById(id);
    return result;
};

module.exports = {
    importMovie,
    getAllMovies,
    getMovieById
};