/* Exercise 2: Union Types & Type Guards

Problem: Complete the processData function to handle different input types safely. 

Tasks:

A  Use typeof to distinguish between string and number.

B  Handle each case correctly.

*/

type StringOrNumber = string | number;

function processData(input: StringOrNumber): string {
  // Use a type guard to handle both string and number cases
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input.toFixed(2);
  }
}

// Test cases
console.log(processData("hello")); // "HELLO"
console.log(processData(3.1415));  // "3.14"