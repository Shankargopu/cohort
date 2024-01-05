const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const mongoose = require("mongoose");
const { URL } = require("./config/index");
const connectToMongo = require("./db")
const user = require("./db/schema");


const jwtPassword = "123456";


mongoose.connect(URL);

connectToMongo();

// const schema = zod.object({
//     username: zod.string().email(),
//     password: zod.string()
// })

const app = express();

app.use(express.json());


app.post('/signup', async (req, res) => {
    const { email, name, password } = req.body;
    // const user = new userSchema();

    try {
        const respons = await user.validate(req.body);
        console.log(respons);
        const exitstingUser = await user.collection.findOne({ email: email });
        console.log(exitstingUser)
        if (exitstingUser) {
            res.status(200).json({
                message: "User already exist"
            })
            return;
        }
        const response = await user.collection.insertOne({ email, password, name });

        res.status(201).json({
            response
        });
    } catch (err) {
        res.status(411).json({
            msg: err.message
        })
    }
})

app.post('/signin', async (req, res) => {
    try {
        await user.validate(req.body);
        const result = await user.findOne({ $and: [{ email: req.body.email }, { password: req.body.password }] });
        console.log(result);
        if (!result) {
            res.status(401).json({
                msg: "User does not exist. please signup first"
            })
            return;
        }
        const email = req.body.email;
        const token = jwt.sign({ email }, jwtPassword);
        res.status(200).json({
            token
        });
    } catch (err) {
        res.status(411).json({
            msg: err.message
        })
    }
});


app.get('/users', async (req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        console.log(decoded);
        const useremail = decoded.email;
        const users = await user.find({ email: { $ne: useremail } }, { password: 0 })
        return res.json({
            users
        });
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});


module.exports = app;

