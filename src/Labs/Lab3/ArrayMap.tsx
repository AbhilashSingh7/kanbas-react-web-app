// src/Labs/Lab3/ArrayMap.tsx

export default function ArrayMap() {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((n) => n * 2);
    const listItems = numbers.map((n) => <li key={n}>{n}</li>);
  
    return (
      <div>
        <h3>Array Map</h3>
  
        <p><strong>Original:</strong> {numbers.join(", ")}</p>
        <p><strong>Doubled:</strong> {doubled.join(", ")}</p>
  
        <ul>{listItems}</ul>
      </div>
    );
  }