// function sumOfPrimeNumbers(limit) {
let limit =13;
let answer = 0; 
let i=2;

for(i;i<=limit;i++){

    let divisor = 0

    for(let j=1; j<=i; j++){
        if(i%j===0){
            divisor++
        }
    }
if(divisor === 2){
   answer=answer+i
   
}
}
console.log(answer)
