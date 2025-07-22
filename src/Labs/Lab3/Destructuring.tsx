// src/Labs/Lab3/Destructuring.tsx

export default function Destructuring() {
    const student = {
      name: "Abhilash Singh",
      course: "CS5610",
      assignment: "A3",
      score: 95,
    };
  
    const { name, course, assignment, score } = student;
  
    return (
      <div>
        <h3>Destructuring</h3>
        <p>Name: {name}</p>
        <p>Course: {course}</p>
        <p>Assignment: {assignment}</p>
        <p>Score: {score}</p>
      </div>
    );
  }