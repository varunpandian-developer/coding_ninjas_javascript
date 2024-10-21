// Function to calculate the price of a pizza based on size, toppings, and quantity
function pizzaPricing(size) {
  
    // Create an object to store the base prices for each pizza size
      
    const pizzaPrice = {
        small: 8.00,
        medium: 10.00,
        large: 12.00
    };
    
    // Return a function(curried function) that takes the selected toppings as a parameter
  
      // Return another function inside the curried function that takes the quantity as a parameter
      return function(...toppings){
        let toppingsrate = 0

        for(let i =0;i<toppings.length;i++){
            toppingsrate=toppingsrate+1.50
        }

          return function(quantity){
            return (pizzaPrice[size]+toppingsrate) * quantity
        }
      }
    
  }

  const pizzacalculator = pizzaPricing('large')

  const pizzacalculator1 = pizzacalculator('bacons','cheese')

  const pizzacalculator2 = pizzacalculator1(1)
  
  console.log(pizzacalculator2)