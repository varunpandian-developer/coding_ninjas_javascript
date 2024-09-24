let input=6;
let isprime =true;

for(let i=2;i<input;i++){
    if(input%i===0){
        isprime = false;
        break;
    }
}

if(isprime){
    console.log(`given input number ${input} is prime number`)
}
else{
    console.log(`given input number ${input} is Not a prime number`)

}