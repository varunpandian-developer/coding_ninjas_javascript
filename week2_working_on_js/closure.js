let a= 'Global';

function outerprint(){
    let b = "outerprint";

    function innerPrint(){
        let c =" inner print";
        return `${a}-> ${b}-> ${c}`;
    }
    const show = innerPrint();
    console.log(show);
}
outerprint();