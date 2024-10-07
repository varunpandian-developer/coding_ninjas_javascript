// let str = "javascript is an amazing language"

// for( let i =0 ; i<str.length; i++)
//     {

//     console.log(str.charAt(i));
// }

//find the occurnce of the character in string

 let str = "javascript is an amazing language"
 let char= "a"
 let charcount=0

 for(let i =0; i<str.length; i++){
    
    if(str[i] === char)
    {
        charcount++

    }
    
 }

 console.log(charcount);
