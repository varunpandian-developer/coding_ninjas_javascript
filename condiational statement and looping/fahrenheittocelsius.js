//Write the program to convert tempF to into celcius and also to detect fever.
//Assign the final answer in result variable.
//Do not alter anything else given in the starter code

function main(tempF) {
  let result;

  // Step 1: Convert the temperature from Fahrenheit to Celsius.
    let tocelsius = (tempF - 32) * 5/9;
    
     let converttodecimal = tocelsius.toFixed(1);
 
  // Step 2: Store the converted temperature in a new variable. 
   if(converttodecimal >= 37){
       
      result = `Temperature: ${converttodecimal}°C - Fever`;
       
   }
    else{
       result = `Temperature: ${converttodecimal}°C - No Fever`;
    }
  // Step 3: Check if the rounded temperature is 37°C or higher with the help of if and else condition
  // Use the toFixed() method to format converted temperature in celcius to one decimal place.

  return result;
}

console.log(main(98.5))