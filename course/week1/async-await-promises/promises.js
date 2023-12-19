const fs = require("fs");

//without promises using callback function

// function readDataFromFile(cb) {
//     fs.readFile('a.txt', 'utf-8', function (err, data) {
//         cb(data);
//     })
// }

// function onDone(data) {
//     console.log(data);   //hello from the file
// }

// readDataFromFile(onDone)

//instead of this we can use promises wich is a better way to write the same code.


// function readDataFromFile() {
//     return new Promise(function (resolve, reject) {
//         fs.readFile("a.txt","utf-8",function(err,data){
//              resolve(data);
//         })

//         // resolve(a);
//     })
// }

// function onDone(data) {
//     console.log(data);   //hello from the file
// }

// var a= readDataFromFile();
// a.then(onDone);

//promise return syncronously but data handling inside promise returns asyncronously.
// let a = readDataFromFile();
// console.log(a);
// a.then(onDone);

// console.log("Y");

//o/p :
// promise<pending> 
// Y
// Hello from the file


// const d = new Promise(function(resolve,reject){
//      setTimeout(function(){
//         resolve("foo");
//      },1000)  
// })
// function onCall(){
//     console.log(d); //Promise { 'foo' }
// }
// console.log(d); //Promise { <pending> }
// d.then(onCall); 






function callSetTimeout() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000);
    })
}


const value = callSetTimeout();
console.log("Hello");
value.then(function () {
    console.log("world");
})





