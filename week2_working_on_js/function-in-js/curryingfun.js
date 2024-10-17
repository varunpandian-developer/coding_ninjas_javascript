function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;

const addThenMultiply = compose(multiply3, add2);
console.log(addThenMultiply(5)); // Outputs: 21 (first adds 2, then multiplies by 3)
