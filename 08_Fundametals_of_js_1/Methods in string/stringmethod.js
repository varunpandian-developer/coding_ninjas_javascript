// String wrapper object 
let str = "javascript iS wonderfull";
let str2 = "it is dynamically typed"; // Corrected spelling

// Prototype of the string object
console.log(str.__proto__); // Logs the prototype of the String object

// Character at specific positions
console.log(str.charAt(0)); // Logs 'j'
console.log(str.charAt(20)); // Logs 'l'

// Concatenate strings
console.log(str.concat(str2)); // Concatenates and logs "javascript iS wonderfullit is dynamically typed"
console.log(str2.concat(str)); // Concatenates and logs "it is dynamically typedjavascript iS wonderfull"

// String length
console.log(str.length); // Logs 23

// Index of first occurrence of a character
console.log(str.indexOf("s")); // Logs 4

// Index of first occurrence of 'l'
console.log(str.indexOf("l")); // Logs 21

// Index of first occurrence of 'r' after index 7
console.log(str.indexOf("r", 7)); // Logs 9

// Index of last occurrence of 's' in str2
console.log(str2.lastIndexOf('s')); // Logs 5 (because the last 's' is at index 5 in str2)

// Character at index 15
let message = "hello world hello world hello world";
console.log(message.charAt(15)); // Logs a space ' '

// Last index of 'l' in message
console.log(message.lastIndexOf('l')); // Logs 35

const sentence = " Hello world";
const charToFind='o';
const indexofchar = sentence.indexOf(charToFind).toUpperCase().charAt(1);
console.log(indexofchar)