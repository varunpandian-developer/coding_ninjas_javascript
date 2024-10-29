// Example: Printing key-value pairs of an object
const user = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  for (const key in user) {
    console.log(`${key}: ${user[key]}`);
  }
  // Output:
  // name: John
  // age: 30
  // city: New York
  