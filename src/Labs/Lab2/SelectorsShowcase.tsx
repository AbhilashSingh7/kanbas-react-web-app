// src/Labs/Lab2/SelectorsShowcase.tsx

import "./styles.css";

export default function SelectorsShowcase() {
  return (
    <div className="selectors-showcase">
      <h2>CSS Selectors Showcase</h2>
      <p className="selector-paragraph">This paragraph uses a class selector.</p>
      <p id="unique-paragraph">This paragraph uses an ID selector.</p>
      <p>This paragraph uses a type selector (default p tag).</p>
      <div>
        <p>
          <span className="nested-span">This span is styled with a descendant selector inside a paragraph.</span>
        </p>
      </div>
      <ul className="selector-list">
        <li>First item (uses pseudo-class :first-child)</li>
        <li>Second item (uses pseudo-class :nth-child)</li>
        <li>Third item</li>
      </ul>
    </div>
  );
}