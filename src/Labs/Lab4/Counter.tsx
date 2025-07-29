// Labs/Lab4/Counter.tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={increment} style={{ marginRight: "5px" }}>+</button>
      <button onClick={decrement} style={{ marginRight: "5px" }}>−</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}