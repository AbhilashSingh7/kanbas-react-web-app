// src/Labs/Lab3/ArrayReduce.tsx

export default function ArrayReduce() {
    const numbers = [1, 2, 3, 4, 5];
  
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    const product = numbers.reduce((accumulator, current) => accumulator * current, 1);
  
    return (
      <div>
        <h3>Array Reduce</h3>
        <p><strong>Numbers:</strong> {numbers.join(", ")}</p>
        <p><strong>Sum:</strong> {sum}</p>
        <p><strong>Product:</strong> {product}</p>
      </div>
    );
  }