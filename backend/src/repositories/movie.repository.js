const pool = require("../config/database");

const findAll = async () => {
    const result = await pool.query(
        "SELECT * FROM movies ORDER BY id"
    );

    return result.rows;
};

const findByImdbId = async (imdbId) => {

    const result = await pool.query(
        "SELECT * FROM movies WHERE imdb_id = $1",
        [imdbId]
    );

    return result.rows[0];
};

const create = async (movie) => {

    const query = `
        INSERT INTO movies (
            imdb_id,
            title,
            year,
            released,
            runtime,
            genre,
            director,
            writer,
            actors,
            plot,
            language,
            country,
            awards,
            poster,
            imdb_rating,
            imdb_votes
        )
        VALUES (
            $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16
        )
        RETURNING *;
    `;

    const values = [
        movie.imdbID,
        movie.Title,
        Number(movie.Year),
        new Date(movie.Released),
        parseInt(movie.Runtime),
        movie.Genre,
        movie.Director,
        movie.Writer,
        movie.Actors,
        movie.Plot,
        movie.Language,
        movie.Country,
        movie.Awards,
        movie.Poster,
        Number(movie.imdbRating),
        Number(movie.imdbVotes.replace(/,/g, ""))
    ];

    const result = await pool.query(query, values);

    return result.rows[0];

};

module.exports = {
    findAll,
    findByImdbId,
    create
};