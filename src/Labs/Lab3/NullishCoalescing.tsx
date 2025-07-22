// src/Labs/Lab3/NullishCoalescing.tsx

export default function NullishCoalescing() {
    const value1 = null;
    const value2 = undefined;
    const value3 = 0;
    const value4 = "";
  
    const fallback = "Default";
  
    const result1 = value1 ?? fallback;
    const result2 = value2 ?? fallback;
    const result3 = value3 ?? fallback;
    const result4 = value4 ?? fallback;
  
    return (
      <div>
        <h3>Nullish Coalescing (??)</h3>
        <p><strong>null ?? "Default":</strong> {result1}</p>
        <p><strong>undefined ?? "Default":</strong> {result2}</p>
        <p><strong>0 ?? "Default":</strong> {result3}</p>
        <p><strong>"" ?? "Default":</strong> {result4}</p>
      </div>
    );
  }