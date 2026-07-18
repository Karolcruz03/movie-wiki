require("dotenv").config();

const omdbService = require("./src/external/omdb.service");

async function test() {

    const movie = await omdbService.getMovieByImdbId("tt0133093");

    console.log(movie);

}

test();