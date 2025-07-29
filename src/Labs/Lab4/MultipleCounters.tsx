// Labs/Lab4/MultipleCounters.tsx
import { useState } from "react";

export default function MultipleCounters() {
  const [counters, setCounters] = useState<number[]>([0, 0, 0]);

  const increment = (index: number) => {
    const newCounters = [...counters];
    newCounters[index]++;
    setCounters(newCounters);
  };

  const decrement = (index: number) => {
    const newCounters = [...counters];
    newCounters[index]--;
    setCounters(newCounters);
  };

  const reset = (index: number) => {
    const newCounters = [...counters];
    newCounters[index] = 0;
    setCounters(newCounters);
  };

  return (
    <div>
      <h3>Multiple Counters</h3>
      {counters.map((count, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <strong>Counter {index + 1}: {count}</strong><br />
          <button onClick={() => increment(index)} style={{ marginRight: "5px" }}>+</button>
          <button onClick={() => decrement(index)} style={{ marginRight: "5px" }}>−</button>
          <button onClick={() => reset(index)}>Reset</button>
        </div>
      ))}
    </div>
  );
}