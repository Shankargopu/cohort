const dotenv = require("dotenv");
const path = require("path");

dotenv.config({path : path.resolve(__dirname, '..','.env')});

const PORT = process.env.PORT?process.env.PORT : 3000;

const URL = process.env.URL;
console.log(URL);

module.exports = {
   PORT,
   URL
}

