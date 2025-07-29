// Labs/Lab4/ToggleText.tsx
import { useState } from "react";

export default function ToggleText() {
  const [visible, setVisible] = useState(true);

  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Text</button>
      {visible && <p>This text can be toggled!</p>}
    </div>
  );
}