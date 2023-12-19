//callback we use nesting like this can lead to callback hell.

setTimeout(() => {
    console.log("Hi after 1 sec");
    setTimeout(() => {
        console.log("Hi after 3 sec");
        setTimeout(() => {
            console.log("Hi after 6 sec");
            setTimeout(() => {
                console.log("Hi after 10 sec");
            }, 4000)
        }, 3000)
    }, 2000)
}, 1000)


// we use promises just to add syntactic sugar. under the hood the working will be same they use callback functions only but using promises
// the syntax looks better


// promisify

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


