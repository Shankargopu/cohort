/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let count=0;
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  for(let i=0 ; i<str1.length; i++){
    if(str2.includes(str1[i])){
       count++;
    }
  }
  if(count == str1.length && count == str2.length){
    return true;
  }
  return false;
}

module.exports = isAnagram;
