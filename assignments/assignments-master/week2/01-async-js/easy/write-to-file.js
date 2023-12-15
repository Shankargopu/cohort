
const fs = require("fs");
let data = "Hello from code";
fs.writeFile("x.txt", data, (err) => {
    if (!err) {
        console.log("Successfully written the content");
    }
})