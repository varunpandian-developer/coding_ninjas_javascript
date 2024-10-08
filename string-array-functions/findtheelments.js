let arr=[23,43,67,89,62,29]
let ele= 672
function findTheNumber(arr,ele) {
    let answer = -1;

    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]===ele)
        {
            return i;

        }

        

    }
    

    
 
    return answer;
}

console.log(findTheNumber(arr,ele))