// src/Labs/Lab3/WorkingWithObjects.tsx

export default function WorkingWithObjects() {
    interface Assignment {
      id: number;
      title: string;
      dueDate: string;
      completed: boolean;
    }
  
    const assignment: Assignment = {
      id: 1,
      title: "CS5610 Assignment 3",
      dueDate: "2025-08-01",
      completed: false,
    };
  
    return (
      <div>
        <h3>Working With Objects</h3>
        <p>ID: {assignment.id}</p>
        <p>Title: {assignment.title}</p>
        <p>Due Date: {assignment.dueDate}</p>
        <p>Completed: {assignment.completed.toString()}</p>
      </div>
    );
  }