// Dependencies
var Fs = require("fs")
  , Barbe = require("barbe")
  ;

/**
 * KindlyLicense
 * Generates a version of the KINDLY license providing the year and the author.
 *
 * @name Kindlylicense
 * @function
 * @param {String} year The copyright year.
 * @param {String} author The copyright holder.
 * @return {String} The KINDLY License generated for provided data.
 */
module.exports = function (year, author) {
    return Barbe("{license}", ["<", ">"], {
        year: year
      , author: author
    });
};
