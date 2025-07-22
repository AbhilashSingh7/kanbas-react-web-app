// src/Labs/Lab3/VariableAndConstants.tsx
const VariableAndConstants = () => {
    let variable1 = 42;
    const constant1 = 3.14;
    var variable2 = "Hello World";
  
    return (
      <div>
        <h3>Variables and Constants</h3>
        <ul>
          <li>variable1 (let): {variable1}</li>
          <li>constant1 (const): {constant1}</li>
          <li>variable2 (var): {variable2}</li>
        </ul>
      </div>
    );
  };
  
  export default VariableAndConstants;