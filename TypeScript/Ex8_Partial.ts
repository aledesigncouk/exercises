/*

Problem:
Create a function that updates a User object, but only changes the provided fields (all optional). Use Partial<T>.

*/

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

function updateUserB(user: User, updates: Partial<User>): User {
    return { ...user, ...updates };
}

// Test case
const user_B: User = { id: 1, name: "Alice", email: "alice@example.com", age: 25 };
const updatedUser_B = updateUserB(user_B, { age: 26 }); // Should work
console.log(updatedUser_B); // { id: 1, name: "Alice", email: "alice@example.com", age: 26 }