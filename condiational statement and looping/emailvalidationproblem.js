let email = prompt("enter the email id")

let length = email.length

let lastDotIndex = email.lastIndexOf('.');

let atSymbolIndex = email.indexOf('@');

mimumcharacter= lastDotIndex -atSymbolIndex > 3

mimumcharacterafter = length - lastDotIndex > 2 && length - lastDotIndex <= 4;

if (length<11 && mimumcharacter && mimumcharacterafter )
{
    console.log("Email is valid")
}
else{
    console.log("Email is not valid")
}