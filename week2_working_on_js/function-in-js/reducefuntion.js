inputs = [2,3,4,5,6]
const sum = inputs.reduce((total,sum)=>{
    console.log(total)
    return total+sum;

},0)

console.log(sum)