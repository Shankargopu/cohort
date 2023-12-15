// Write a function that finds the sum of two numbers

// function findSum(num1, num2, fnToCall) {
//     const result = num1 + num2;
//     fnToCall(result);

// }

// function displaySum(data) {
//     console.log(`The sum of the result is ${data}`);
// }

// function displaySumPassive(data) {
//     console.log("Sum's result is",data);
// }

// findSum(5, 6, displaySum);   //callbacks : passing function as argument to other functions


function calcuateArithmetic(a,b, calcuateArithmeticFn){
  const ans = calcuateArithmeticFn(a,b);
  return ans;
}

function sum(a,b){
    return a+b;
}

const ans = calcuateArithmetic(2,3,sum);
console.log(ans);


