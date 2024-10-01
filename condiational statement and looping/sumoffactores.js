function sumOfFactorial(num) {
    let answer = 0;

    for(let i =0;i<=num;i++){

        if(num%i===0)
            {
        answer=answer+i
            }
    }

return answer;
}

console.log(sumOfFactorial(6))