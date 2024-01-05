const { URL } = require("../config")
const mongoose = require("mongoose");

const connectToMongo = () => {
    try {
        mongoose.connect(URL);
    } catch (err) {
        console.log(err);
    }
    const dbConnection = mongoose.connection;
    dbConnection.once("open", () => {
        console.log(`Database connected: ${URL}`);
    })

    dbConnection.on("error", (err) => {
        console.error(`connection error: ${err}`);
    });
    // return mongoose.connection.collection()
}


module.exports = connectToMongo;


