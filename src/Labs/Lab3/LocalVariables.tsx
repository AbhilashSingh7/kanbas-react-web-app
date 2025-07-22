// src/Labs/Lab3/LocalVariables.tsx

export default function LocalVariables() {
    // Local variable inside the function
    const greeting = "Hello, welcome to Lab 3!";
    let counter = 5;
    const isComplete = false;
  
    return (
      <div>
        <h3>Local Variables</h3>
        <p><strong>Greeting:</strong> {greeting}</p>
        <p><strong>Counter:</strong> {counter}</p>
        <p><strong>Is Complete:</strong> {isComplete ? "Yes" : "No"}</p>
      </div>
    );
  }