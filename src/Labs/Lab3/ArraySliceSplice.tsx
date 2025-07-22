// src/Labs/Lab3/ArraySliceSplice.tsx

export default function ArraySliceSplice() {
    const original = ["a", "b", "c", "d", "e"];
    const sliced = original.slice(1, 4); // ['b', 'c', 'd']
  
    const spliced = [...original]; // copy to preserve original
    spliced.splice(2, 1, "z"); // replaces 'c' at index 2 with 'z'
  
    return (
      <div>
        <h3>Array Slice and Splice</h3>
        <p><strong>Original Array:</strong> {original.join(", ")}</p>
        <p><strong>Sliced (1 to 4):</strong> {sliced.join(", ")}</p>
        <p><strong>Spliced (index 2 replaced with 'z'):</strong> {spliced.join(", ")}</p>
      </div>
    );
  }