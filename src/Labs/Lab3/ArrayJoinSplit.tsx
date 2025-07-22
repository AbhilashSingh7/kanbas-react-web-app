// src/Labs/Lab3/ArrayJoinSplit.tsx

export default function ArrayJoinSplit() {
    const fruits = ["apple", "banana", "cherry"];
    const joined = fruits.join(" | ");
    const split = joined.split(" | ");
  
    return (
      <div>
        <h3>Array Join and Split</h3>
        <p><strong>Original Array:</strong> {fruits.join(", ")}</p>
        <p><strong>Joined String:</strong> {joined}</p>
        <p><strong>Split Back to Array:</strong> {split.join(", ")}</p>
      </div>
    );
  }