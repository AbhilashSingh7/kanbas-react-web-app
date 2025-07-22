// src/Labs/Lab3/ArrayFilter.tsx

export default function ArrayFilter() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const evenNumbers = numbers.filter((n) => n % 2 === 0);
    const listItems = evenNumbers.map((n) => <li key={n}>{n}</li>);
  
    return (
      <div>
        <h3>Array Filter</h3>
  
        <p><strong>Original:</strong> {numbers.join(", ")}</p>
        <p><strong>Even Numbers:</strong> {evenNumbers.join(", ")}</p>
  
        <ul>{listItems}</ul>
      </div>
    );
  }