// instead of promises/callbacks we can use async-await for better syntax. Still under the hood they uses promises
const fs = require("fs");
function readDataFromFile() {

    return new Promise(function (resolve, reject) {
        fs.readFile("a.txt", "utf-8", function (err, data) {
            resolve(data);
        })
    })
}

async function main() {
    const data = await readDataFromFile();
    console.log(data);
    console.log("Hello there");  //this will be logged after data arrives. it is not blocking the thread but just waiting promise to be reolved.
//it is just similiar to writing promise.then(function(data){console.log(data); console.log(Hello there);})

//It does not block main thread

// As there is async keyword in the beginning of the function, JavaScript will move this method execution from call stack to web API 
// and continue to execute other tasks
}

main();
test();
function test(){
    console.log("Hello");  
}


// o/p:
// Hello
// Hello from the file
// Hello there