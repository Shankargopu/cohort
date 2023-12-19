const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
function calculateSum(n) {
    let a = 0;
    for (let i = 0; i <= n; i++) {
        a += i;
    }
   
    return a;

}

// app.post()
app.get('/', (req, res) => {
    const ans = calculateSum(req.query.n);
    res.send(JSON.stringify(ans));

})

app.listen(3000, () => {
    console.log(`Server started at port 3000`);
})