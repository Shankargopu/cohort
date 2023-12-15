// 99% we create our own async functions that are just wrapper of other async functions.

// we can't create raw async function on our own.

//Here readAndUpdateFile becomes async function because it uses readFile and writeFile async methods of file.

//ex : 1

const fs = require("fs");

function readAndUpdateFile(cb) {
    fs.readFile('a.txt', 'utf-8', (err, data) => {
        data = data + " hello";
        fs.writeFile('a.txt', data, (err) => {
            if (!err) {
                cb("done");
            }
        })
    })

}

readAndUpdateFile((data) => {
    console.log(data);
})

console.log("Hello from code");





// ex : 2

function ownSetTimeout(fn, duration) {
    setTimeout(fn, duration);
}

ownSetTimeout(() => {
    console.log("Execute this after 10 sec");
}, 10000)


console.log("hello there");