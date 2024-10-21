const numbers = [1, 2, 3, 4];

const doubledWithArrayReference = numbers.map((num, index, array) => {
    console.log(`Processing element: ${num}, at index: ${index}, in array: ${array}`);
    return num * 2;
});

console.log(doubledWithArrayReference);  // [2, 4, 6, 8]
