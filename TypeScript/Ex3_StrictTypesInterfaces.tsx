/* Exercise 3: Strict Typing with Interfaces

Problem: Fix the type errors in the following code using TypeScript interfaces. 


Tasks:

A Define the User interface correctly.

B Ensure registerUser works without type errors.

C Make isAdmin optional.
    
*/

interface User {
    // Define proper types here
  }
  
  function registerUser(user: User): string {
    return `User ${user.name} (${user.age}) registered with email ${user.email}.`;
  }
  
  // Test case (should work after fixing the interface)
  const newUser = {
    name: "Alice",
    age: 28,
    email: "alice@example.com",
    isAdmin: false, // Optional
  };
  console.log(registerUser(newUser));