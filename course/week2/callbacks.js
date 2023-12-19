//callbacks

const fs = require("fs");

function square(a) {
    return a * a;
}

function cube(a) {
    return a * a * a;
}

function main(a, fn) {
    const res = fn(a);
    return res;
}

const ans = main(6, cube); //callback (function passing as an argument).
console.log(ans);  //216


//readFileSync is the synchronous method.

// const data = fs.readFileSync("a.txt", "utf-8");
// console.log(data);

function readDataFromFile(cb) {
    //readFile is the asynchronous method it will not block the main thread until file reads.
    fs.readFile("a.txt", "utf-8", (err, data) => {
        if (!err) {
            cb(data);
        }
    })

}

readDataFromFile((data) => {
    console.log(data);
});


console.log('Hi there');

//async function
setTimeout(() => {
    console.log("Hi from setTimeout");
}, 1000)


//o.p :
// Hi there
// Hi from the file
// Hi from setTimeout

























