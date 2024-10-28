const numbers = [1, -2, 3, -4, 5];
const positiveNumbers = numbers.filter(number => number > 0);

console.log(positiveNumbers);  // Output: [1, 3, 5]

//function to pass to argument
function negativenum(num){
    return num < 0;
}

const negativeNumbers = numbers.filter(negativenum);
