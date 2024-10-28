const numbers =[1,2,3,4,5,2,4,2]

const filterdNumbers = numbers.filter((element,index,array)=>{

    return array.indexOf(element)===index;

});

console.log(filterdNumbers);