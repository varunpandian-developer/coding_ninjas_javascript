function Composite(number) {
    let answer; // This variable will store the result (true or false)
  
    // Initialize a variable to count the number of factors
  let counter =0;
    // Loop through all integers from 1 up to 'number'.
    // Increment the count for each integer that is a divisor of 'number'.
  for(let i=1;i<=number;i++){
      if(number%i===0){
          counter=counter+1
      }
  }

  console.log(`Total number of divisors: ${counter}`); 
    // After the loop, check if the count of factors is more than 2
  if(counter >2){
      answer = true;
  
  }
      else{
          answer =`given ${number} is not a composite`;
      }
    // Return the result
    return answer;
  }

console.log(Composite(5));
