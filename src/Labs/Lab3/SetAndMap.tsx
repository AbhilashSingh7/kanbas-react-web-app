// src/Labs/Lab3/SetAndMap.tsx

export default function SetAndMap() {
    // Working with Set
    const numberSet = new Set<number>();
    numberSet.add(1);
    numberSet.add(2);
    numberSet.add(2); // Duplicate will be ignored
    numberSet.add(3);
  
    const setItems = Array.from(numberSet);
  
    // Working with Map
    const studentGrades = new Map<string, number>();
    studentGrades.set("Alice", 95);
    studentGrades.set("Bob", 87);
    studentGrades.set("Charlie", 92);
  
    return (
      <div>
        <h3>Set and Map</h3>
  
        <p><strong>Set Elements:</strong> {setItems.join(", ")}</p>
  
        <h4>Student Grades (Map)</h4>
        <ul>
          {Array.from(studentGrades.entries()).map(([name, grade]) => (
            <li key={name}>{name}: {grade}</li>
          ))}
        </ul>
      </div>
    );
  }