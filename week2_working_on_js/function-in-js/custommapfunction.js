function main() {
    const array = [2, 4, 6, 2, 7, 8];

    function customMap(inputArray, callbackFn) {
        const result = [];
        for (let i = 0; i < inputArray.length; i++) {
            const modifiedValue = callbackFn(inputArray[i]);
            result.push(modifiedValue);
        }
        return result;
    }

    return customMap;
}

// Example callback function to double each element
function double(num) {
    return num * 2;
}

// Another callback to square each element
function square(num) {
    return num * num;
}

const customMap = main();
console.log(customMap([2, 4, 6], double)); // Output: [4, 8, 12]
console.log(customMap([2, 4, 6], square)); // Output: [4, 16, 36]
