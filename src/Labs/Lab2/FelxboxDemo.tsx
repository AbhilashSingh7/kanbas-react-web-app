// src/Labs/Lab2/FlexboxDemo.tsx

import "./styles.css";

export default function FlexboxDemo() {
  return (
    <div className="flexbox-demo">
      <h2>Flexbox Layout Demo</h2>

      {/* Row layout */}
      <div className="flex-row">
        <div className="flex-item">Item 1</div>
        <div className="flex-item">Item 2</div>
        <div className="flex-item">Item 3</div>
      </div>

      {/* Column layout */}
      <div className="flex-column">
        <div className="flex-item">Column 1</div>
        <div className="flex-item">Column 2</div>
        <div className="flex-item">Column 3</div>
      </div>

      {/* Space-between layout */}
      <div className="flex-space-between">
        <div className="flex-item">Start</div>
        <div className="flex-item">Middle</div>
        <div className="flex-item">End</div>
      </div>

      {/* Wrapping items */}
      <div className="flex-wrap">
        <div className="flex-item">Wrap 1</div>
        <div className="flex-item">Wrap 2</div>
        <div className="flex-item">Wrap 3</div>
        <div className="flex-item">Wrap 4</div>
        <div className="flex-item">Wrap 5</div>
        <div className="flex-item">Wrap 6</div>
      </div>
    </div>
  );
}