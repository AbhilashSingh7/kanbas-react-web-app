// Labs/Lab4/EventObject.tsx
import { MouseEvent } from "react";

export default function EventObject() {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    alert(`Button clicked!\nEvent type: ${event.type}\nButton text: ${event.currentTarget.textContent}`);
    console.log("Event object:", event);
  };

  return (
    <div>
      <h3>Event Object Example</h3>
      <button onClick={handleClick}>Click to Inspect Event</button>
    </div>
  );
}