num1 = 5;
num2 = 40;
num3 = 15;

let greator =
  num1 > num2 ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3;

console.log(greator);
