/* Exercise 2: Generics

Problem: Implement a generic stack class with push, pop, and peek methods. */

class Stack<T> {
  private elements: T[] = [];

  push(element: T): void {
    // Implement this method
    this.elements.push(element);
  }

  pop(): T | undefined {
    // Implement this method
    return this.elements.pop();
  }

  peek(): T | undefined {
    // Implement this method
    return this.elements[this.elements.length - 1];
  }
}

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.peek()); // 20
console.log(numberStack.pop());  // 20
console.log(numberStack.peek()); // 10