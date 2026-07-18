const { param } = require("express-validator");

const validateMovieId = [
    param("id")
        .isInt({ min: 1 })
        .withMessage("Movie id must be a positive integer")
];

module.exports = {
    validateMovieId
};