const axios = require("axios");

const API_URL = "https://www.omdbapi.com/";

const getMovieByImdbId = async (imdbId) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                apikey: process.env.OMDB_API_KEY,
                i: imdbId
            }
        });

        if (response.data.Response === "False") {
            throw new Error(response.data.Error);
        }

        return response.data;

    } catch (error) {
        throw error;
    }
};

module.exports = {
    getMovieByImdbId
};