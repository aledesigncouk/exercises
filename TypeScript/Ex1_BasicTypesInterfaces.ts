/* Exercise 1: Basic Types and Interfaces

Problem: Create a Person interface and a function that greets a person.*/

// Complete the Person interface and the greet function
interface Person {
  name: string;
  age: number;
}

function greet(person: Person): string {
  // Implement this function
  return "Hello, " + person.name + "! You're " + person.age + " years old.";
}

// Test cases
const john = { name: "John", age: 30 };
console.log(greet(john)); // Should output: "Hello, John! You're 30 years old."