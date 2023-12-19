const express = require("express");

const app = express();

app.get(
  "/",
  (req, res, next) => {
    // res.send("hello");
    throw new Error("something went wrong");
  },
  (err, req, res, next) => {
    console.log(err);   //err will be logged
    res.send("hello");
  },
);

app.listen(4000);
