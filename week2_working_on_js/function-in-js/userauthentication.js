function main() {
  let userAuth = (function () {
    // Create an empty array to store user data.
    const registeredUser = [];

    // Define the registerUser function.
    function registerUser(username, password) {
      let userExist = false;

      for (let i = 0; i < registeredUser.length; i++) {
        if (
            registeredUser[i].name === username &&
            registeredUser[i].password === password
        ) {
          userExist = true;
          break;
        }
      }

      if (userExist) {
        console.log("The user is already registerd");
      } else {
        let user = {
          name: username,
          password: password,
        };

        registeredUser.push(user);
        console.log("The user have been added to the registeredUser array");
      }

    }

    // Define the checkCredentials function.

    function checkCredentials(username,password){
        for(let i=0;i<registeredUser.length;i++)
        {
            if(registeredUser[i].name === username && registeredUser[i].password=== password){
                return true
            }

        }
        return false
    }

    // Return the functions as an object

    return{
        registerUser:registerUser,
        checkCredentials:checkCredentials
    }
  })();

  // Example usage
  console.log(userAuth.registerUser("user1", "password123"));
  // Output: "The user have been added to the registeredUser array"
  console.log(userAuth.registerUser("user1", "password123"));
  // Output: "The user is already registered"

  return userAuth;
}
