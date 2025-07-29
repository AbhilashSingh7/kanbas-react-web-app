// Labs/Lab4/ClickEvent.tsx
import { useState } from "react";

export default function ClickEvent() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {clicked && <p>You clicked the button!</p>}
    </div>
  );
}