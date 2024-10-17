function withLogging(fn) {
    // HOF that wraps the original function 'fn'
    return function (...args) {
      console.log("Start executing");  // Pre-execution log
      const result = fn(...args);      // Call the original function with its arguments
      console.log("Done executing");   // Post-execution log
      return result;                   // Return the result of the original function
    };
  }
  
  function sum(a, b) {
    return a + b;  // Simple sum logic
  }
  
  const loggedSum = withLogging(sum);  // Wrap 'sum' with logging
  console.log(loggedSum(2, 3));  // Call the wrapped function with arguments (2, 3), logs around sum
  