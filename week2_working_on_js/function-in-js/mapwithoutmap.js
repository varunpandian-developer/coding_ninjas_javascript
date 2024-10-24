// List of employees with their current salaries
const employees = [
    { id: 1, name: "Alice", department: "sales", salary: 40000 },
    { id: 2, name: "Bob", department: "engineering", salary: 50000 },
    { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
    { id: 4, name: "David", department: "sales", salary: 35000 },
    { id: 5, name: "Emily", department: "engineering", salary: 55000 },
  ];
  
  // Function to increase salaries based on the department
  function increaseSalaries(employees) {
    // Create an empty array to hold the updated employee objects
    let updatedEmployees = [];
  
    // Use a for loop to iterate over each employee in the array
    for (let i = 0; i < employees.length; i++) {
      // Create a copy of the current employee
      const updatedEmployee = { ...employees[i] };
  
      // Update the salary based on the department
      switch (updatedEmployee.department) {
        case "sales":
          updatedEmployee.salary = (updatedEmployee.salary * 1.10).toFixed(1);
          break;
  
        case "engineering":
          updatedEmployee.salary = (updatedEmployee.salary * 1.15).toFixed(1);
          break;
  
        default:
          updatedEmployee.salary = (updatedEmployee.salary * 1.05).toFixed(1);
      }
  
      // Add the updated employee to the new array
      updatedEmployees.push(updatedEmployee);
    }
  
    // Return the new array of employees with updated salaries
    return updatedEmployees;
  }
  
  // You can call the function and log the result to check if the implementation is correct
  console.log(increaseSalaries(employees));
  