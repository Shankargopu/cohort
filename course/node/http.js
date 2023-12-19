const http = require("http");

const server = http.createServer((req, res) => {
    console.log("hey");
    res.end("Hello world");
});


server.listen(3000, () => {
    console.log("server started at 3000");
});
