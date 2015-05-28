// Dependencies
var Barbe = require("barbe")
  , Fs = require("fs")
  ;

// Constants
const KINDLY = Fs.readFileSync(__dirname + "/../LICENSE.kindly", "utf-8")
    , LIB_PATH = __dirname + "/../lib/index.templ.js"
    , HTML_PATH = __dirname + "/../index.templ.html"
    , HTML = Fs.readFileSync(HTML_PATH, "utf-8")
    , LIB = Fs.readFileSync(LIB_PATH, "utf-8")
    ;

// Create the lib file
Fs.writeFileSync(LIB_PATH.replace("templ.", ""), Barbe(LIB, {
    license: KINDLY.replace(/\n/g, "\\n")
}));

// Create the html file
Fs.writeFileSync(HTML_PATH.replace("templ.", ""), Barbe(HTML, {
    license: KINDLY.replace(/</g, "&lt;").replace(/>/g, "&gt;")
}));

