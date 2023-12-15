//async-await is just syntactic sugar again added to promises, callbacks.

//using promise chaining
function myownSetTimeout(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}

const prom = myownSetTimeout(1000);
console.log(prom);  //Promise {<pending>}
//promise chaining
prom.then(() => {
    console.log('ater first timeout 1sec');
    return myownSetTimeout(2000);
}).then(() => {
    console.log('ater first timeout 3 sec');
    return myownSetTimeout(3000);
}).then(() => {
    console.log('ater first timeout 6 sec');
    return myownSetTimeout(4000);
}).then(() => {
    console.log('ater first timeout 10 sec');
})


//using async-await
function myownSetTimeout(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}



async function main() {
    await myownSetTimeout(1000);
    console.log('time out after 1 sec');
    await myownSetTimeout(2000);
    console.log('time out after 3 sec');
    await myownSetTimeout(3000);
    console.log('time out after 6 sec');
    await myownSetTimeout(4000);
    console.log('time out after 10 sec');

}


main();