let input = 7;

for (let num = 2; num < input; num++) {
  let isprime = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isprime = false;
      break;
    }
  }
  if (isprime) {
    console.log(num);
  }
  
}

