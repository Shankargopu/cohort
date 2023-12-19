const express = require("express");
const zod = require("zod");    //validation library
const app = express();

const schema = zod.array(zod.number());   //schema should have array of numbers

// {
//     email : string,
//     password : "atleast 8 chars",
//     country : "IN", "US"
// }

// const schema = zod.object({
//     email : zod.string().email(),
//     password : zod.string().min(8),
//     country : zod.literal("IN").or(zod.literal("US"))
// })

app.use(express.json());

app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if (!response.success) {
        res.status(411).json({
            message: "Input is invalid"
        })
    }
    else {

        res.send({
            response
        })
    }
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