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
    return Barbe("The KINDLY License\nCopyright (c) <year> <author>\n\nYou have the permission to use this software, read its source code, modify and\nredistribute it under the following terms:\n\n - if you want to use this software or include parts of its code in a\n   closed-source or commercial project you should kindly ask the\n   author (via a private message or email) and get a positive answer\n - this license should be included in the modified versions of this software\n - in case of redistributing modified copies, you are encouraged to clearly\n   indicate that the copies are based on this work\n - if you think that your redistributed copy is awesome, you are encouraged to\n   show the author of this software what you did and how you helped the others\n\nYou are free to install and use this software on as many machines as you want,\nfree of charge, making sure you met the terms above.\n\nYou are encouraged to kindly support the software and its author by:\n\n - sharing his/her work\n - reporting issues/bugs and asking for feature requests\n - donating money or any other things that can help the author\n - contribute on the software code by fixing bugs and adding features\n", {
        year: year
      , author: author
    });
};
