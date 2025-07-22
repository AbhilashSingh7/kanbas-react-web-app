// src/Labs/Lab3/BooleanLogic.tsx

export default function BooleanLogic() {
    const a = true;
    const b = false;
    const and = a && b;
    const or = a || b;
    const notA = !a;
  
    return (
      <div>
        <h3>Boolean Logic</h3>
        <p>a: {a.toString()}</p>
        <p>b: {b.toString()}</p>
        <p>a AND b: {and.toString()}</p>
        <p>a OR b: {or.toString()}</p>
        <p>NOT a: {notA.toString()}</p>
      </div>
    );
  }