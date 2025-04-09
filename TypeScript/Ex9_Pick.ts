
/*

Problem:
Create a function that extracts only name and email from a User object using Pick<T, K>.
*/

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

const utente = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 25,
};

function getUserContactInfo(user: User): Pick<User, "name" | "email"> { // Pick<User, "name" & "email">
    return {
        name: user.name,
        email: user.email,
    };
}

// Test case
const contactInfo = getUserContactInfo(utente);
console.log(contactInfo); // { name: "Alice", email: "alice@example.com" }