// src/Labs/Lab3/ArrayFind.tsx

export default function ArrayFind() {
    const numbers = [1, 3, 5, 7, 8, 9];
    const firstEven = numbers.find((n) => n % 2 === 0);
  
    return (
      <div>
        <h3>Array Find</h3>
        <p><strong>Numbers:</strong> {numbers.join(", ")}</p>
        <p><strong>First even number:</strong> {firstEven}</p>
      </div>
    );
  }