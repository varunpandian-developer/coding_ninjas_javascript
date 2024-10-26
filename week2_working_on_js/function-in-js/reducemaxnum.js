const numbers = [3, 7, 2, 9, 5];
const max = numbers.reduce((currentMax, num) => {
    return num > currentMax ? num : currentMax;
}, numbers[0]); // `numbers[0]` is used as the initial value
console.log("Maximum value:", max); // Output: 9
