// src/Labs/Lab3/SpreadOperator.tsx

export default function SpreadOperator() {
    const originalArray = [1, 2, 3];
    const newArray = [...originalArray, 4, 5];
  
    const originalObject = { a: 1, b: 2 };
    const newObject = { ...originalObject, c: 3 };
  
    return (
      <div>
        <h3>Spread Operator</h3>
  
        <p><strong>Original Array:</strong> [{originalArray.join(", ")}]</p>
        <p><strong>New Array (with spread):</strong> [{newArray.join(", ")}]</p>
  
        <p><strong>Original Object:</strong> {JSON.stringify(originalObject)}</p>
        <p><strong>New Object (with spread):</strong> {JSON.stringify(newObject)}</p>
      </div>
    );
  }