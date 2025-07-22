// src/Labs/Lab3/RestParameters.tsx

export default function RestParameters() {
    const sumAll = (...numbers: number[]): number => {
      return numbers.reduce((acc, num) => acc + num, 0);
    };
  
    const total1 = sumAll(1, 2, 3);
    const total2 = sumAll(5, 10, 15, 20);
  
    return (
      <div>
        <h3>Rest Parameters</h3>
        <p><strong>Sum 1:</strong> {total1}</p>
        <p><strong>Sum 2:</strong> {total2}</p>
      </div>
    );
  }