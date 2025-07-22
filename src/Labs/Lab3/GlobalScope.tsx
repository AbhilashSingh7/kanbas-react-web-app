// src/Labs/Lab3/GlobalScope.tsx

// Global variable declared outside the component
let globalCounter = 0;

export default function GlobalScope() {
  globalCounter += 1;

  return (
    <div>
      <h3>Global Scope</h3>
      <p>
        This component demonstrates a global variable being incremented each time the component is rendered.
      </p>
      <p><strong>Global Counter:</strong> {globalCounter}</p>
    </div>
  );
}