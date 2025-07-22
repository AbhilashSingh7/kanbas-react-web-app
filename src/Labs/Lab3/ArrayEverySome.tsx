// src/Labs/Lab3/ArrayEverySome.tsx

export default function ArrayEverySome() {
    const numbers = [4, 8, 12, 16];
  
    const allEven = numbers.every((n) => n % 2 === 0);
    const someGreaterThanTen = numbers.some((n) => n > 10);
  
    return (
      <div>
        <h3>Array Every and Some</h3>
        <p><strong>Numbers:</strong> {numbers.join(", ")}</p>
        <p><strong>Every element is even:</strong> {allEven ? "Yes" : "No"}</p>
        <p><strong>Some elements are greater than 10:</strong> {someGreaterThanTen ? "Yes" : "No"}</p>
      </div>
    );
  }