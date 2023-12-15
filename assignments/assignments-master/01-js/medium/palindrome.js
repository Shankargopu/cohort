/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // str = str.toLowerCase();
  // let j = str.length-1;
  // let i = 0;
  // let flag = true;
  // // for (let i = 0; i < str.length; i++) 
  // while (i <= j) {
  //   if (str[i] != str[j]) {
  //     flag = false;
  //     break;
  //   } else {
  //     i++;
  //     j--;
  //     // flag = true;
  //   }
  // }
  // return flag;
  const cleanedString = str.toLowerCase().replace(/[\W_]/g, '');
  return cleanedString === cleanedString.split('').reverse().join('');

}

module.exports = isPalindrome;
