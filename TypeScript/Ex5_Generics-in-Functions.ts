/* Exercise 3: Generics in Functions

Problem: Make the mergeArrays function generic so it works with any array type. 

Tasks:

   A Use generics (<T>) to make the function work with any array type.

   B Return a new array containing all elements from arr1 and arr2.

*/

function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
    // Implement this function
    return [];
  }
  
  // Test cases
  const numbers = mergeArrays([1, 2], [3, 4]); // [1, 2, 3, 4]
  const strings = mergeArrays(["a", "b"], ["c", "d"]); // ["a", "b", "c", "d"]
  console.log(numbers, strings);