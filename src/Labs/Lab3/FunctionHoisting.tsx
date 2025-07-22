// src/Labs/Lab3/FunctionHoisting.tsx

export default function FunctionHoisting() {
    // Function declaration is hoisted
    const result = declaredFunction(10);
  
    // Function declaration
    function declaredFunction(x: number): number {
      return x * 2;
    }
  
    // Function expression is NOT hoisted
    // const result2 = expressedFunction(5); // This would cause an error
  
    const expressedFunction = function (x: number): number {
      return x + 2;
    };
  
    return (
      <div>
        <h3>Function Hoisting</h3>
        <p><strong>Declared Function (10 * 2):</strong> {result}</p>
        <p><strong>Expressed Function (5 + 2):</strong> {expressedFunction(5)}</p>
      </div>
    );
  }