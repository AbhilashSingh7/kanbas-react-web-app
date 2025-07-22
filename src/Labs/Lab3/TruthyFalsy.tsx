// src/Labs/Lab3/TruthyFalsy.tsx

export default function TruthyFalsy() {
    const values = [0, 1, "", "hello", null, undefined, NaN, [], {}, "false"];
  
    const results = values.map((val, index) => {
      const truthy = !!val;
      return (
        <li key={index}>
          <code>{JSON.stringify(val)}</code> is{" "}
          <strong>{truthy ? "Truthy" : "Falsy"}</strong>
        </li>
      );
    });
  
    return (
      <div>
        <h3>Truthy and Falsy Values</h3>
        <p>
          The following values are evaluated in a Boolean context using double
          negation (<code>!!value</code>):
        </p>
        <ul>{results}</ul>
      </div>
    );
  }