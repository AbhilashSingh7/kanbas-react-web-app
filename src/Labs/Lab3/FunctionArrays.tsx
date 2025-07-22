// src/Labs/Lab3/FunctionArrays.tsx

function doubleNumbers(numbers: number[]): number[] {
    return numbers.map((n) => n * 2);
  }
  
  function shoutStrings(strings: string[]): string[] {
    return strings.map((s) => s.toUpperCase() + "!");
  }
  
  export default function FunctionArrays() {
    const numbers = [1, 2, 3, 4, 5];
    const strings = ["hello", "world"];
  
    return (
      <div>
        <h3>Functions with Arrays</h3>
        <ul>
          <li>Doubled Numbers: {doubleNumbers(numbers).join(", ")}</li>
          <li>Shouted Strings: {shoutStrings(strings).join(", ")}</li>
        </ul>
      </div>
    );
  }