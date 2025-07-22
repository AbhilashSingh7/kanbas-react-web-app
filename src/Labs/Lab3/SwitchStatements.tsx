// src/Labs/Lab3/SwitchStatements.tsx

export default function SwitchStatements() {
    const grade: string = "B"; // Explicitly declare as string
  
    let feedback: string;
  
    switch (grade) {
      case "A":
        feedback = "Excellent work!";
        break;
      case "B":
        feedback = "Good job!";
        break;
      case "C":
        feedback = "You passed.";
        break;
      case "D":
        feedback = "You need improvement.";
        break;
      case "F":
        feedback = "Failed. Try again!";
        break;
      default:
        feedback = "Invalid grade.";
    }
  
    return (
      <div>
        <h3>Switch Statements</h3>
        <p><strong>Grade:</strong> {grade}</p>
        <p><strong>Feedback:</strong> {feedback}</p>
      </div>
    );
  }