// Example: Getting user input until a valid response is given
let userInput;

do {
  userInput = prompt("Enter a number greater than 10:");
} while (userInput <= 10);

console.log(`You entered: ${userInput}`);
