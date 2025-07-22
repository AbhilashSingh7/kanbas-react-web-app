// src/Labs/Lab3/CallbackFunction.tsx

export default function CallbackFunction() {
    const greetUser = (name: string) => {
      return `Hello, ${name}!`;
    };
  
    const handleGreet = (callback: (name: string) => string, userName: string) => {
      return callback(userName);
    };
  
    const message = handleGreet(greetUser, "Abhilash");
  
    return (
      <div>
        <h3>Callback Function</h3>
        <p><strong>Message:</strong> {message}</p>
      </div>
    );
  }