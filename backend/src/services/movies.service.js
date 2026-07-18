const movies = [
    {
        id: 1,
        title: "The Matrix",
        year: 1999
    },
    {
        id: 2,
        title: "Inception",
        year: 2010
    },
    {
        id: 3,
        title: "Interstellar",
        year: 2014
    }
];

const getAllMovies = () => {
    return movies;
};

const getMovieById = (id) => {
    return movies.find(movie => movie.id === id);
};

module.exports = {
    getAllMovies,
    getMovieById
};