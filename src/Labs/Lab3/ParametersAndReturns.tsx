// src/Labs/Lab3/ParametersAndReturns.tsx

function square(n: number): number {
    return n * n;
  }
  
  function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  
  export default function ParametersAndReturns() {
    const num = 4;
    const name = "Abhilash";
  
    return (
      <div>
        <h3>Parameters and Return Types</h3>
        <ul>
          <li>
            square({num}) = {square(num)}
          </li>
          <li>{greet(name)}</li>
        </ul>
      </div>
    );
  }