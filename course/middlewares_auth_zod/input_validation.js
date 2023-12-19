const express = require("express");

const app = express();

app.use(express.json());

app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.status(200).json({ message: `You have ${kidneyLength} kidneys` });
})

//global catches
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        msg: "Sorry something is up with our server"
    })
})

app.listen(3000, () => {
    console.log("server started at port 3000");
})