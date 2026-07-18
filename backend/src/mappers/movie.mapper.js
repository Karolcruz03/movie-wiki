const mapOmdbToMovie = (movie) => {

    return {
        title: movie.Title,
        original_title: movie.Title,
        overview: movie.Plot,
        release_date: new Date(movie.Released),
        runtime: parseInt(movie.Runtime),
        poster_path: movie.Poster,
        imdb_id: movie.imdbID,
        vote_average: null,
        vote_count: null
    };

};

module.exports = {
    mapOmdbToMovie
};