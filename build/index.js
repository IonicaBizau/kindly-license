var Barbe = require("barbe")
  , Fs = require("fs")
  ;

const KINDLY = Fs.readFileSync(__dirname + "/../LICENSE.kindly", "utf-8")
    , SRC_PATH = __dirname + "/../src/index.templ.js"
    , SRC = Fs.readFileSync(SRC_PATH, "utf-8")
    ;

Fs.writeFileSync(SRC_PATH.replace("templ.", ""), Barbe(SRC, {
    license: KINDLY.replace(/\n/g, "\\n")
}));
