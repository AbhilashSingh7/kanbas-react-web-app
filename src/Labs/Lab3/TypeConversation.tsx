// src/Labs/Lab3/TypeConversation.tsx

export default function TypeConversation() {
    const strNumber = "42";
    const convertedToNumber = Number(strNumber);
    const parsedInt = parseInt("101", 10);
    const parsedFloat = parseFloat("3.14");
    const num = 99;
    const convertedToString = String(num);
    const booleanValue = Boolean("non-empty");
  
    return (
      <div>
        <h3>Type Conversion</h3>
        <p><strong>String "42" to Number:</strong> {convertedToNumber}</p>
        <p><strong>parseInt("101"):</strong> {parsedInt}</p>
        <p><strong>parseFloat("3.14"):</strong> {parsedFloat}</p>
        <p><strong>Number 99 to String:</strong> {convertedToString}</p>
        <p><strong>Boolean("non-empty"):</strong> {booleanValue.toString()}</p>
      </div>
    );
  }