const pool = require("../config/database");

const findAll = async (limit, offset) => {

    const result = await pool.query(
        `
        SELECT
            id,
            imdb_id,
            title,
            year,
            imdb_rating,
            poster
        FROM movies
        ORDER BY title
        LIMIT $1
        OFFSET $2
        `,
        [limit, offset]
    );

    return result.rows;

};

const findById = async (id) => {

    const result = await pool.query(
        "SELECT * FROM movies WHERE id = $1",
        [id]
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

const count = async () => {

    const result = await pool.query(
        "SELECT COUNT(*) FROM movies"
    );

    return Number(result.rows[0].count);

};

const search = async (title) => {

    const result = await pool.query(
        `
        SELECT
            id,
            title,
            year,
            imdb_rating,
            poster
        FROM movies
        WHERE LOWER(title) LIKE LOWER($1)
        ORDER BY title
        `,
        [`%${title}%`]
    );

    return result.rows;

};

const remove = async (id) => {

    const result = await pool.query(
        `
        DELETE FROM movies
        WHERE id = $1
        RETURNING *
        `,
        [id]
    );

    return result.rows[0];

};

const update = async (id, movie) => {

    const result = await pool.query(
        `
        UPDATE movies
        SET
            title = $1,
            plot = $2,
            director = $3,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $4
        RETURNING *
        `,
        [
            movie.title,
            movie.plot,
            movie.director,
            id
        ]
    );

    return result.rows[0];

};

module.exports = {
    findAll,
    findById,
    create,
    count,
    search,
    remove,
    update
};