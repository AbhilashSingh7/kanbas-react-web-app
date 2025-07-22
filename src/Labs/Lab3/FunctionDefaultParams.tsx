// src/Labs/Lab3/FunctionDefaultParams.tsx

export default function FunctionDefaultParams() {
    const greet = (name: string = "Guest") => {
      return `Welcome, ${name}!`;
    };
  
    const greeting1 = greet("Abhilash");
    const greeting2 = greet(); // Will use default
  
    return (
      <div>
        <h3>Function with Default Parameters</h3>
        <p><strong>Greeting 1:</strong> {greeting1}</p>
        <p><strong>Greeting 2:</strong> {greeting2}</p>
      </div>
    );
  }