//complete the reverseString Function.
//Do not alter the starter Code.
let string="hello";

function reverseString(str){
    //Implement Your function here
    let reversethechar =  str.split('').reverse().join('');
    return reversethechar;
    }
console.log(reverseString(string));
    //Output : "olleH"