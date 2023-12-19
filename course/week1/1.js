
// greet preson given their first name and last name.

// const firstName = "Bhavani";
// const lastName = "Shankar";
// const gender = "male";

// console.log(`Hi ${firstName} ${lastName}! How are you?`);

// greet preson if he is male.

// if (gender === "male") {
//     console.log(`Hi ${firstName} ${lastName}! How are you?`)
// }

// write a program to count from 0-1000.
// let count = 0;
// for (let i = 0; i <= 1000; i++) {
//     count += i;
// }
// console.log(count);


// Write a program prints all the even numbers in an array

// const arr = [4, 5, 6, 1, 10, 8, 9, 23];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
//     }
// }

// Write a program to print the biggest number in an arry

// const arr = [4, 5, 6, 1, 10, 8, 9, 23];
// let maxEle = arr[0];
// for(let i=0; i<arr.length; i++){
//      if(arr[i] > maxEle){
//         maxEle = arr[i];
//      }
// }

// console.log(maxEle);



// Write a program that reverses all the elements of an array

//using the own logic
// const arr = [4, 5, 6, 1, 10, 8, 9, 23];

// let j = arr.length-1;
// let i = 0;
// while(i <= j){
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp; 
//     i++;
//     j--;
// }

// console.log(arr);

//using array method

// const arr = [4, 5, 6, 1, 10, 8, 9, 23];
// arr.reverse() // reverses the array

// console.log(arr)


// Write a program that prints all the male people’s first name given a complex object

const users = [{
    firstName: "user1",
    gender: "male",
    age: 11
},
{
    firstName: "user2",
    gender: "female",
    age: 18
},
{
    firstName: "user3",
    gender: "female",
    age: 21
},

{
    firstName: "user4",
    gender: "male",
    age: 23
}
]



for (let i = 0; i < users.length; i++) {
    if (users[i].gender === "male") {
        console.log(users[i].firstName);
    }
}







