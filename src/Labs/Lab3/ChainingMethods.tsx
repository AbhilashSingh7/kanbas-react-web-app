// src/Labs/Lab3/ChainingMethod.tsx

export default function ChainingMethod() {
    const numbers = [1, 2, 3, 4, 5, 6];
  
    const result = numbers
      .filter(n => n % 2 === 0)         // Even numbers: [2, 4, 6]
      .map(n => n * 2)                  // Double them: [4, 8, 12]
      .reduce((sum, n) => sum + n, 0);  // Sum: 24
  
    return (
      <div>
        <h3>Chaining Array Methods</h3>
        <p><strong>Original Numbers:</strong> {numbers.join(", ")}</p>
        <p><strong>Chained Result (Sum of Doubled Evens):</strong> {result}</p>
      </div>
    );
  }