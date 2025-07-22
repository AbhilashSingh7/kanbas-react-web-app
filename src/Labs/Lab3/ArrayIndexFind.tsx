// src/Labs/Lab3/ArrayIndexFind.tsx

export default function ArrayIndexFind() {
    const fruits = ["apple", "banana", "cherry", "date"];
    const index = fruits.findIndex((fruit) => fruit === "cherry");
  
    return (
      <div>
        <h3>Array Find Index</h3>
        <p><strong>Fruits:</strong> {fruits.join(", ")}</p>
        <p><strong>Index of "cherry":</strong> {index}</p>
      </div>
    );
  }