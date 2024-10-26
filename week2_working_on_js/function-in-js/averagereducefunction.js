let numbers = [2, 3, 4, 5, 6];

let sum = 0;  // Initialize sum
let count = numbers.length; // Get the number of elements in the array

// Iterate over the array to calculate the sum
for (let i = 0; i < count; i++) {
    sum += numbers[i];  // Add each number to the sum
}

const average = sum / count;  // Calculate the average

console.log("Average:", average); // Output: Average: 4


//using reduce funciton

let numbers = [2, 3, 4, 5, 6];

// Calculate the sum of the numbers using reduce
const sum = numbers.reduce((total, num) => {
    return total + num; // Add the current number to the total
}, 0); // Initialize the total as 0

// Calculate the average
const average = sum / numbers.length; // Divide the total sum by the number of elements

console.log("Average:", average); // Output: Average: 4
