
let arr=[1,6,8,3,5,20,10]
function sumOfArray(arr){
let sum = 0
  for(let i of arr)
  {

     if(i%5 === 0)
      {
        continue;
      }

      if(i%2===0){

        sum = sum+i
      }

      
  }
    return sum;
        
      }

console.log(sumOfArray(arr))