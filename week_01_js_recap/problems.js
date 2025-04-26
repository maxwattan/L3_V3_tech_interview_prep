// Reverse a string
function reverseString(str) {
// return str.split("").reverse().join("")

//init new string
let str2 = ""
//loop through string reverse i start at the back of string then decrement
for(let i = str.length-1; i >= 0; i--) {
//add to new string
str2 += str[i]
}
return str2
}
console.log(reverseString("hello"))
  
// Find max in array
function findMax(arr) {
// return Math.max(...arr)

//init max
let max = 0

//loop through array, if it is greater than max then set it
 for (const number of arr){
    if (number > max){
        max = number
    }
 }
 return max
}
console.log(findMax([1, 5, 3, 9]));

// Check if palindrome
function isPalindrome(word) {
// let reverse = word.split("").reverse().join("");

// if (reverse === word){
//     return true
// } else {
//     return false
// }

  //check if first letter of word matches the last if so continue
  //init new string
  let reverse = "";
//   //loop through string reverse i start at the back of string then decrement
  for (let i = word.length - 1; i >= 0; i--) {
//     //add to new string
    reverse += word[i];
  }
  if (reverse === word){
    return true
  }
  else{
    return false
  }
}
console.log(isPalindrome("racecar"));

module.exports = { reverseString, findMax, isPalindrome };