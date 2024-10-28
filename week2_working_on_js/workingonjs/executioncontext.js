var userName = "tom";
var userAge = 10;

console.log(`username: ${userName}`);
console.log(`userage: ${userAge}`);

function greetUser(name){

    var greet = " i hope you are doing fine";

    console.log(`hello ${name},${greet}`);

    var currentYear = 2030;
    const year = currentYear - userAge;
    return `your birth are ${year}`

}

var birthyear = greetUser(userName);

console.log(birthyear);
