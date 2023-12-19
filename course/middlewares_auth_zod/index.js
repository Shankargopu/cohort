const express = require("express");

const app = express();

app.use(express.json());

app.get('/health_checkup', (req, res) => {
    const kidneyId = req.query.id;
    const userName = req.headers.username;
    const password = req.headers.password;

    if (!(userName == "shankar" && password == "pass")) {
        res.status(401).json({ message: "unauthorized" });
        return;  //early retuns
    }
    if (!(kidneyId == 1 || kidneyId == 2)) {
        res.status(411).json({ message: "Wrong inputs" });
        return;
    }
    res.send("Your heart is healthy");
});

app.listen(8080, () => {
    console.log(`Server started at PORT 8080`);
})