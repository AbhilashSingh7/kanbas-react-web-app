// src/Labs/Lab3/JSONOperations.tsx

export default function JSONOperations() {
    const user = {
      name: "Jane Doe",
      age: 28,
      email: "jane@example.com",
      hobbies: ["reading", "traveling"],
    };
  
    // Convert object to JSON string
    const jsonString = JSON.stringify(user, null, 2);
  
    // Parse JSON string back to object
    const parsedUser = JSON.parse(jsonString);
  
    return (
      <div>
        <h3>JSON Operations</h3>
  
        <h4>Original Object:</h4>
        <pre>{JSON.stringify(user, null, 2)}</pre>
  
        <h4>JSON String:</h4>
        <pre>{jsonString}</pre>
  
        <h4>Parsed Object:</h4>
        <pre>{JSON.stringify(parsedUser, null, 2)}</pre>
      </div>
    );
  }