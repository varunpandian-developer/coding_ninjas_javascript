// Complete the totalOrderValue function
// Do not alter the starter code

const orders = [
    {
      orderNumber: 1,
      items: [
        { name: "Cappuccino", price: 3.5 },
        { name: "Chocolate Croissant", price: 2.5 }
      ]
    },
    {
      orderNumber: 2,
      items: [
        { name: "Latte", price: 4.0 },
        { name: "Blueberry Muffin", price: 2.75 }
      ],
      discountCode: "COFFEELOVER"
    }
  ];
  
  // Function to calculate the total value of all orders
  // Apply discounts if applicable
  function totalOrderValue(orders, applyDiscount) {
    // Map over each order to calculate its total value
      let calculatePrice = orders.map((price)=>{
          
          const orderTotal =price.items.reduce((acc,currentElement)=>{
              
              return acc+currentElement.price
              
          },0);
          
          return applyDiscount(price.discountCode,orderTotal)
          
          
      })
      
     
      
      let totalPrice = calculatePrice.reduce((acc,currentElement)=>{
          return acc+currentElement
          
      },0)
    // Use the reduce method to sum the prices of all items in the order
    // Check if a discountCode is present and apply the discount using the provided callback function
  
    // Your implementation should:
    // 1. Calculate the total value for each order
    // 2. Apply the discount (if any) using the applyDiscount callback
    // 3. Sum up the totals for all orders
    // 4. Return the final grand total rounded to 2 decimal places
  return totalPrice.toFixed(2); 
      
  }
  
  // Define your callback function here to calculate the discount
  // The function should take two parameters: a discountCode and a total value
  // Apply the discount based on the problem statement
  // Return the discounted total
  
  const applyDiscount = (discountCode, total) => {
    // Implement discount logic here
    // For example:
    // - If discountCode is "COFFEELOVER", apply a 10% discount
    // - If discountCode is "TEALOVER", apply a 20% discount
    // - If no discountCode or an unknown code, return the total without discount
      switch(discountCode){
              case "COFFEELOVER":
              return total*0.9;
              case "TEALOVER":
              return total*0.8;
          default:
              return total;
      }
  };
  