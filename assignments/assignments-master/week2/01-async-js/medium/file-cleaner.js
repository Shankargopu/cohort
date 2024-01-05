const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
    data = data.replace(/\s+/g, ' ');
    fs.writeFile("a.txt", data, (err) => {
        if (!err) {
            console.log("Data successfully written back to the file");
        }
    })
})