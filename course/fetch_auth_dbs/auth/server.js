const http = require("http");
const { PORT } = require("./config/index")
const app = require("./app");

const server = http.createServer(app);

server.listen(PORT, (err) => {
    if (!err) {
        console.log(`server started listening on PORT ${PORT}`);
    }
})