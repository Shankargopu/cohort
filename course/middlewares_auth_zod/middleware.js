const express = require("express");

const app = express();

app.use(express.json());

const userMiddleWare = (req, res, next) => {
    const userName = req.headers.username;
    const password = req.headers.password;
    if (userName === "shankar" && password === "pass") {
        next();
    }
    else {
        res.status(401).json({
            message: "Unauthorized"
        })
    }

}   

const kidneyMiddleWare = (req, res, next) => {
    const kidneyId = req.query.id;
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            message: "Wrong inputs"
        })
    }
    else {
        next();
    }
}

app.get('/health_checkup', userMiddleWare, kidneyMiddleWare, (req, res) => {
    res.send("Your heart is healthy");
});

app.get('/kidney-check', userMiddleWare, kidneyMiddleWare, (req, res) => {
    res.send("Your kidney is healthy");
});

app.get('/heart-check', userMiddleWare, (req, res) => {
    res.send("Heart is healthy");
})

app.listen(8080, () => {
    console.log(`Server started at PORT 8080`);
})