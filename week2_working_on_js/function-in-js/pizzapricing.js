// Function to calculate the price of a pizza based on size, toppings, and quantity
function pizzaPricing(size) {
  
    // Create an object to store the base prices for each pizza size
      
    const pizzaPrice = {
        small: 8.00,
        medium: 10.00,
        large: 12.00
    };

    const price =pizzaPrice[size]
    
    return price
    // Return a function(curried function) that takes the selected toppings as a parameter
  
      // Return another function inside the curried function that takes the quantity as a parameter
    
  }

  function toppings(...toppings){
    let toppingsrate = 0

    for(let i =0;i<toppings.length;i++){
        toppingsrate=toppingsrate+1.50
    }

    return toppingsrate;

      
    }
     function quantity(quantity,value1,value2){
        return (value1+value2) * quantity
  }

  const pizzacalculator = pizzaPricing('large')

  const pizzacalculator1 = toppings('bacons','cheese')

  const pizzacalculator2 = quantity(1,pizzacalculator,pizzacalculator1)
  
  console.log(pizzacalculator2)