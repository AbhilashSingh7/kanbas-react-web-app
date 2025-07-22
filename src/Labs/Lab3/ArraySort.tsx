// src/Labs/Lab3/ArraySort.tsx

export default function ArraySort() {
    const numbers = [42, 7, 19, 103, 5];
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
  
    return (
      <div>
        <h3>Array Sort</h3>
        <p><strong>Original Numbers:</strong> {numbers.join(", ")}</p>
        <p><strong>Sorted Numbers:</strong> {sortedNumbers.join(", ")}</p>
      </div>
    );
  }