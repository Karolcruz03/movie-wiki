const toMovieResponse = (movie) => ({
    id: movie.id,
    imdbId: movie.imdb_id,
    title: movie.title,
    year: movie.year,
    rating: movie.imdb_rating,
    poster: movie.poster
});

module.exports = {
    toMovieResponse
};