function commonDigits(num1,num2)
{
    function commonnumber(num)
    {
        let count = 0
        while(num > 0){
            num=Math.floor(num/10)
            count++
        }
    
        return count;


    }

    let commonnum1 = commonnumber(num1)
    let commonnum2 = commonnumber(num2)

    let answer = (commonnum1 === commonnum2);

    return answer;

}

console.log(commonDigits(12345, 6789)); 