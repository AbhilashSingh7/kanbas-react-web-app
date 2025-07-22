// src/Labs/Lab3/TemplateLiterals.tsx

export default function TemplateLiterals() {
    const firstName = "Abhilash";
    const lastName = "Singh";
    const age = 25;
    const greeting = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
  
    return (
      <div>
        <h3>Template Literals</h3>
        <p>{greeting}</p>
      </div>
    );
  }