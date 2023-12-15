const fs = require("fs");

console.log('hello from start');

fs.readFile('a.txt', 'utf-8', function readDataFromFile(err, data) {
    console.log(data);
});

console.log('hello from middle');
let a=0;
for(let i=0; i<10000000;i++){
  a++;
}

console.log("a",a);

// o/p :
// hello from start
// hello from middle
// a 10000000  
// Hello from the file