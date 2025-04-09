
/*
Problem:
Create a function that generates a dictionary (Record) mapping user IDs to their names.

*/

type Users = User[]

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

function createUserMap(users: Users): Record<number, string> {
    const result: Record<number, string> = {};
    users.forEach(user => {
        result[user.id] = user.name;
    });
    return result;
}

// Test case
const users: Users = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
    { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
];
const userMap = createUserMap(users);
console.log(userMap); // { 1: "Alice", 2: "Bob" }