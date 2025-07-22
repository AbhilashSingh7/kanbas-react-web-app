// src/Labs/Lab3/Arrays.tsx

export default function Arrays() {
    const fruits = ["Apple", "Banana", "Cherry"];
    const numbers = [10, 20, 30, 40];
  
    return (
      <div>
        <h3>Arrays</h3>
  
        <p><strong>Fruits:</strong> {fruits.join(", ")}</p>
        <p><strong>Numbers:</strong> {numbers.join(", ")}</p>
        <p><strong>First fruit:</strong> {fruits[0]}</p>
        <p><strong>Second number:</strong> {numbers[1]}</p>
      </div>
    );
  }