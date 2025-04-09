/* 
Problem:
Create a function that returns a User object without the email field using Omit<T, K>.
*/

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const user_A = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 25,
};

function getUserWithoutEmail(user: User): Omit<User, "email"> { // does really check the parameters?
  const { email, ...rest } = user;
  return rest;
}

// Test case
const userWithoutEmail = getUserWithoutEmail(user_A);
console.log(userWithoutEmail); // { id: 1, name: "Alice", age: 25 }