var x = 5;  // Global scope variable

function outer() {
  var x = 10;  // Local scope variable that shadows the global `x`
  
  function inner() {
    var x = 15;  // Local scope variable that shadows the `x` in `outer()`
    console.log(x);  // Prints 15
  }
  
  inner();
  console.log(x);  // Prints 10, because the local `x` in `outer()` shadows the global `x`
}

outer();
console.log(x);  // Prints 5, because the global `x` is still accessible outside the function
