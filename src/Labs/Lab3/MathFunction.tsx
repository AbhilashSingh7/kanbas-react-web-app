// src/Labs/Lab3/MathFunction.tsx

export default function MathFunction() {
    const value = 9.49;
  
    const rounded = Math.round(value);      // 9
    const floored = Math.floor(value);      // 9
    const ceiled = Math.ceil(value);        // 10
    const squareRoot = Math.sqrt(value);    // ~3.08
    const power = Math.pow(2, 4);           // 16
    const random = Math.random();           // Between 0 and 1
  
    return (
      <div>
        <h3>Math Functions</h3>
        <p><strong>Original Value:</strong> {value}</p>
        <p><strong>Rounded:</strong> {rounded}</p>
        <p><strong>Floored:</strong> {floored}</p>
        <p><strong>Ceiled:</strong> {ceiled}</p>
        <p><strong>Square Root:</strong> {squareRoot.toFixed(2)}</p>
        <p><strong>2^4 (Power):</strong> {power}</p>
        <p><strong>Random Number:</strong> {random.toFixed(4)}</p>
      </div>
    );
  }