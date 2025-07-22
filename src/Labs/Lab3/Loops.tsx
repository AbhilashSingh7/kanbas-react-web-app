// src/Labs/Lab3/Loops.tsx

export default function Loops() {
    const numbers = [1, 2, 3, 4, 5];
  
    // For loop
    const forLoopOutput: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
      forLoopOutput.push(numbers[i] * 2);
    }
  
    // While loop
    const whileLoopOutput: number[] = [];
    let j = 0;
    while (j < numbers.length) {
      whileLoopOutput.push(numbers[j] + 1);
      j++;
    }
  
    // For-of loop
    const forOfLoopOutput: string[] = [];
    for (const num of numbers) {
      forOfLoopOutput.push(`Value: ${num}`);
    }
  
    return (
      <div>
        <h3>Loops</h3>
  
        <p><strong>Original:</strong> {JSON.stringify(numbers)}</p>
        <p><strong>For Loop (*2):</strong> {JSON.stringify(forLoopOutput)}</p>
        <p><strong>While Loop (+1):</strong> {JSON.stringify(whileLoopOutput)}</p>
        <p><strong>For-of Loop:</strong> {JSON.stringify(forOfLoopOutput)}</p>
      </div>
    );
  }