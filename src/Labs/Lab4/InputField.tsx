// Labs/Lab4/InputField.tsx
import { useState } from "react";

export default function InputField() {
  const [text, setText] = useState("");

  return (
    <div>
      <h3>Controlled Input Field</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
}