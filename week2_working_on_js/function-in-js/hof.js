input=[1,2,3,4,5,6,7,8,9]
function operation(input,fn){
    const output =[]
    for (let num of input){
        output.push(fn(num));
    }
    return output;
}

function square(number){
    return number * number
}

console.log(operation(input,square));
