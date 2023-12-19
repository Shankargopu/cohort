
//normal function

// function sum(a,b){
//    const sum = a+b;
//    return sum;
// }

//arrow function

// const sum = (a, b) => {
//     const sum = a + b;
//     return sum;
// }

//if only one line is present in function

// const sum = ((a,b) => a+b);

// const ans = sum(2, 3);



// map : transforms array into new array
//filters : filters the array

//map : multiply every element with 
const a = [5,6,3,4,5]

const transformedArr= a.map((ele)=> ele * 2);

console.log(transformedArr);   // [ 10, 12, 6, 8, 10 ]


// filter : return all the even number

const evenArr = a.filter((ele)=> ele%2 === 0);
console.log(evenArr);   // [6,4]


