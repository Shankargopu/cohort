const express = require("express");
const { nextTick } = require("process");

const app = express();

let numberOfRequests = 0;
const countRequests = (req, res, next) => {
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

app.use(countRequests);

app.get('/hey', (req, res) => {
    res.send("hey");
})

app.get('/hello', (req, res) => {
    res.send("hello");
})



app.listen(3000, () => {
    console.log(`Server started at port 3000`);
})