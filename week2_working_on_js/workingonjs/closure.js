let a= 'Global';

function outerprint(){
    let b = "outerprint";

    return function innerPrint(){
        let c =" inner print";
        return `${a}-> ${b}-> ${c}`;
    }
    const show = innerPrint();
    console.log(show);
}
const show =outerprint();
console.log(show);
 const printinner = show();
console.log(printinner);