inputs = [2,3,4,5,6]
const sum = inputs.reduce((total,sum)=>{
    console.log(total)
    return total+sum;

},0)

console.log(sum)

//sum only even
const inputs = [2, 3, 4, 5, 6];
const sum = inputs.reduce((total, num) => 
    {
        return total + (num % 2 === 0 ? num : 0)
    }, 0);

console.log(sum); // Output: 12 (2 + 4 + 6)
