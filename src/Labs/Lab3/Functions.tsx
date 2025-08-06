// src/Labs/Lab3/Functions.tsx

function add(a: number, b: number): number {
    return a + b;
  }
  
  const subtract = (a: number, b: number): number => {
    return a - b;
  };
  
  const multiply = (a: number, b: number): number => a * b;
  
  export default function Functions() {
    const a = 7;
    const b = 3;
  
    return (
      <div id="wd-functions">
        <h4>Functions</h4>
        {a} + {b} = {add(a, b)} <br />
        {a} - {b} = {subtract(a, b)} <br />
        {a} * {b} = {multiply(a, b)}
      </div>
    );
  }
  