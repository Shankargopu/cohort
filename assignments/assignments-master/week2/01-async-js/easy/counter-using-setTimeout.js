
let counter = 0;

function counterfn() {
    counter++;
    console.log(counter);
    setTimeout(counterfn, 1000);
}

counterfn();