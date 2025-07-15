// src/Labs/Lab2/PositioningDemo.tsx

import "./styles.css";

export default function PositioningDemo() {
  return (
    <div className="positioning-demo">
      <h2>CSS Positioning Demo</h2>

      {/* Static positioning */}
      <div className="position-box static-box">Static Position (default)</div>

      {/* Relative positioning */}
      <div className="position-box relative-box">Relative Position</div>

      {/* Absolute positioning */}
      <div className="position-wrapper">
        <div className="position-box absolute-box">Absolute Position</div>
      </div>

      {/* Fixed positioning */}
      <div className="position-box fixed-box">Fixed Position</div>

      {/* Sticky positioning */}
      <div className="sticky-container">
        <div className="position-box sticky-box">Sticky Position</div>
      </div>

      {/* Some scrollable content */}
      <div className="scroll-space">
        Scroll down to see how sticky and fixed elements behave.
      </div>
    </div>
  );
}