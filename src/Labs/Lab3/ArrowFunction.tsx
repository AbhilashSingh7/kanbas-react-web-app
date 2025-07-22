// src/Labs/Lab3/ArrowFunction.tsx

export default function ArrowFunction() {
    // Traditional function
    function add(a: number, b: number): number {
      return a + b;
    }
  
    // Arrow function
    const multiply = (a: number, b: number): number => a * b;
  
    return (
      <div>
        <h3>Arrow Function</h3>
        <p><strong>add(5, 3):</strong> {add(5, 3)}</p>
        <p><strong>multiply(5, 3):</strong> {multiply(5, 3)}</p>
      </div>
    );
  }