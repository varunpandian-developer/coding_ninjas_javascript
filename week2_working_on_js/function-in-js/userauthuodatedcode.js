function main() {
    let userAuth = (function () {
      // Create an empty array to store user data.
      const registeredUsers = [];
  
      // Define the registerUser function.
      function registerUser(username, password) {
        if (checkCredentials(username)) {
          return ("The user is already registered");
        } else {
          // If not registered, push the user to the array
          let user = {
            username: username,
            password: password,
          };
          registeredUsers.push(user);
          return ("The user has been added to the registeredUsers array");
        }
      }
  
      // Define the checkCredentials function.
      function checkCredentials(username) {
       
        for (let i = 0; i < registeredUsers.length; i++) {
          if (registeredUsers[i].username === username) {
            return true; // User found
          }
        }
        return false; // User not found
      }
  
      // Return the functions as an object
      return {
        registerUser: registerUser,
        checkCredentials: checkCredentials,
      };
    })();
  
    // Example usage
    userAuth.registerUser("user1", "password1243");
    // Output: "The user has been added to the registeredUsers array"
    userAuth.registerUser("user1", "password123");
    // Output: "The user is already registered"
  
    return userAuth;
  }
  
  