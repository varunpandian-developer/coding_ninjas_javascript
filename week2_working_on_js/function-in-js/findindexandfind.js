const list =[2,3,4,5,6,66,55,44,33,22,11]

let findanswer = list.find((num) =>{

    return num ===66

})

console.log(findanswer);

//same for findindex

let findanswer1 = list.findIndex((num) =>{

    return num ===66