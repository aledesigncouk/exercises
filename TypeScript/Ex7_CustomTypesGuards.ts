/* Exercise 5: Custom Type Guards

Problem: Implement a type guard to check if an object is of type Car. 


Tasks:

  A  Check if obj has all required properties of Car.

  B  Return obj is Car for proper type inference.

*/

interface Car {
  brand: string;
  speed: number;
  isElectric: boolean;
}

function isCar(obj: any): obj is Car {
  // Implement this type guard

  return (
    typeof obj.brand === "string" &&
    typeof obj.speed === "number" &&
    typeof obj.isElectric === "boolean"
  );
}

// Test cases
const tesla = { brand: "Tesla", speed: 250, isElectric: true };
const bike = { type: "Bicycle", wheels: 2 };

console.log(isCar(tesla)); // true
console.log(isCar(bike));  // false