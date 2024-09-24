let randimnumber = Math.round(Math.random()*10);

console.log(randimnumber);

let guessdnum ;

 do{
    guessdnum = prompt("enter the number to guess correctly");

    if(guessdnum==randimnumber){
        console.log("guessed correct")
    }
    else{
        console.log('Take another guess')
    }

 }while(guessdnum != randimnumber);