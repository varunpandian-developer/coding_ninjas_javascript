let array=[23, 45, 78, 12, 67,100,88,69,59,86,99,101,29,25,15,10,26,30]
const evennumber=[]

for( let i of array)
{
    if(i%2 !== 0){

        continue;

    }
    evennumber.push(i);

    if(evennumber.length===5)
        {
            break;
        }
}


console.log(evennumber)