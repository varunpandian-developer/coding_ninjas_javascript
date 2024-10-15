function greet(wish){
    console.log(`${wish()}, welcome varun`)
}

function hi(){
    return "hi"
}

function sayhello(){
    return "say Helo"
}

function goodmorning(){
    return "good morning"
}

greet(hi);
greet(sayhello);
greet(goodmorning);