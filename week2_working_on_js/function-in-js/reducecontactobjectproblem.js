const contacts = [
    { name: "Alice", company: "ABC Inc." },
    { name: "Bob", company: "XYZ Corp." },
    { name: "Charlie", company: "ABC Inc." }
  ];
  
  function mapContactsToCompanies(contacts) {
    // The goal is to return an object where each "key" is a company name, and the "value" is an array of names of people who work at that company.
  
    // Use the reduce method to iterate through each contact in the array.
  
    // The reduce method takes two arguments:
    // 1. A callback function (with two parameters: the accumulator (obj) and the current item (contact)).
    // 2. An initial value for the accumulator (in this case, an empty object {}).
  
    // For each contact:
    // 1. Check if the company name already exists as a key in the object.
    // 2. If it doesn't exist, create a new array for that company.
    // 3. Add the contact name to the array of names for that company
    // 4. Return the object(accumulator) after processing all contacts.
  
    // Implement your function logic below and return the object as described.

    let answer=contacts.reduce((obj,contact)=>{

        if(!obj[contact.company]){
            obj[contact.company]=[]
        }

        obj[contact.company].push(contact.name)

        return obj

    },{})
    return answer
  }
  
  /// without reduce function 

  const contacts = [
    { name: "Alice", company: "ABC Inc." },
    { name: "Bob", company: "XYZ Corp." },
    { name: "Charlie", company: "ABC Inc." }
  ];
  
  function mapContactsToCompanies(contacts) {
    // Initialize an empty object to hold the result
    let result = {};
  
    // Iterate over each contact in the array
    for (let i = 0; i < contacts.length; i++) {
      let contact = contacts[i]; // Current contact
  
      // Check if the company already exists as a key in the result object
      if (!result[contact.company]) {
        // If it doesn't exist, create a new array for that company
        result[contact.company] = [];
      }
  
      // Add the contact's name to the array for that company
      result[contact.company].push(contact.name);
    }
  
    // Return the final object
    return result;
  }
  
  // Call the function and log the result
  console.log(mapContactsToCompanies(contacts));
  

  //using destructuring

  const contacts = [
    { name: "Alice", company: "ABC Inc." },
    { name: "Bob", company: "XYZ Corp." },
    { name: "Charlie", company: "ABC Inc." }
  ];
  
  function mapContactsToCompanies(contacts) {
    const answer = {}; // Initialize an empty object
  
    // Use a traditional for loop to iterate over the contacts
    for (let i = 0; i < contacts.length; i++) {
      const { name, company } = contacts[i]; // Destructuring to extract name and company
  
      // Check if the company already exists in the answer object
      if (!answer[company]) {
        answer[company] = []; // Create an array for the company if it doesn't exist
      }
      answer[company].push(name); // Add the name to the company's array
    }
  
    return answer; // Return the final object
  }
  
  console.log(mapContactsToCompanies(contacts));
  