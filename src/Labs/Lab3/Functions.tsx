// src/Labs/Lab3/Functions.tsx

const add = (a: number, b: number): number => {
    return a + b;
  };
  
  const multiply = (a: number, b: number): number => {
    return a * b;
  };
  
  export default function Functions() {
    const a = 5;
    const b = 3;
  
    return (
      <div>
        <h3>Functions</h3>
        <ul>
          <li>
            add({a}, {b}) = {add(a, b)}
          </li>
          <li>
            multiply({a}, {b}) = {multiply(a, b)}
          </li>
        </ul>
      </div>
    );
  }