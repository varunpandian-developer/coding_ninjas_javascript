function compoundInterest(principalAmount, annualInterestRate, numberOfYears) {
  let answer;

  let i = 1;
  // Initialize the answer variable with the principal amount

  // create and initialize a year counter to 1

  // Use a while loop to calculate the total amount over the specified number of years

  // Return the final amount after all years

  while (i >= numberOfYears) {
    answer = principalAmount * (1 + annualInterestRate / 100);
    i = i + 1;
  }
  return answer;
}
