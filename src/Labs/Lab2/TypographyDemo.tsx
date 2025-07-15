// src/Labs/Lab2/TypographyDemo.tsx

import "./styles.css";

export default function TypographyDemo() {
  return (
    <div className="typography-demo">
      <h2>Typography Demo</h2>
      <p className="font: serif">This paragraph uses a serif font.</p>
      <p className="font: sans">This paragraph uses a sans-serif font.</p>
      <p className="font: monospace">This paragraph uses a monospace font.</p>

      <p className="font: large">This paragraph is large text (24px).</p>
      <p className="font: small">This paragraph is small text (12px).</p>

      <p className="font: bold">This paragraph uses bold font-weight.</p>
      <p className="font: italic">This paragraph uses italic style.</p>
      <p className="font: underlined">This paragraph is underlined.</p>

      <p className="text: left">This paragraph is left-aligned.</p>
      <p className="text: center">This paragraph is center-aligned.</p>
      <p className="text: right">This paragraph is right-aligned.</p>
    </div>
  );
}