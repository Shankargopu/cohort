const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
    if (!err) {
        console.log(data);
    }
})

let a=0;
for(let i=0; i<10000000000000; i++){
   a++;
}

console.log(a);

//o/p : first a, than file content.