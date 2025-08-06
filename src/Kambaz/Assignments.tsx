// src/Kambaz/Assignments.tsx
import { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
import "./Assignments.css";

interface Assignment {
  id: number;
  name: string;
  dueDate: string;
  points: number;
  group: string;
}

export default function Assignments() {
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: 1,
      name: "A1",
      dueDate: "2025-08-15",
      points: 100,
      group: "Assignments",
    },
    {
      id: 2,
      name: "A2",
      dueDate: "2025-08-15",
      points: 100,
      group: "Assignments",
    },
    {
      id: 3,
      name: "Quiz 1",
      dueDate: "2025-08-10",
      points: 50,
      group: "Quizzes",
    },
    {
      id: 4,
      name: "Midterm Exam",
      dueDate: "2025-08-20",
      points: 150,
      group: "Exams",
    },
    {
      id: 5,
      name: "Final Project",
      dueDate: "2025-08-25",
      points: 200,
      group: "Projects",
    },
  ]);

  const [groups, setGroups] = useState<string[]>([
    "Assignments",
    "Quizzes",
    "Exams",
    "Projects",
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const addAssignment = () => {
    const group = prompt("Enter assignment group (e.g. Quizzes, Exams):");
    const name = prompt("Enter assignment name:");
    const dueDate = prompt("Enter due date (YYYY-MM-DD):");
    const pointsStr = prompt("Enter points:");

    if (!name || !dueDate || !pointsStr || !group) return;

    const points = parseInt(pointsStr);
    const newAssignment: Assignment = {
      id: Date.now(),
      name,
      dueDate,
      points,
      group,
    };

    setAssignments([...assignments, newAssignment]);

    if (!groups.includes(group)) {
      setGroups([...groups, group]);
    }
  };

  const addGroup = () => {
    const newGroup = prompt("Enter new group name:");
    if (!newGroup) return;
    if (!groups.includes(newGroup)) {
      setGroups([...groups, newGroup]);
    }
  };

  const deleteAssignment = (id: number) => {
    setAssignments(assignments.filter((a) => a.id !== id));
  };

  const editAssignment = (id: number) => {
    const assignment = assignments.find((a) => a.id === id);
    if (!assignment) return;

    const newName = prompt("Edit name:", assignment.name);
    const newDueDate = prompt("Edit due date (YYYY-MM-DD):", assignment.dueDate);
    const newPoints = prompt("Edit points:", assignment.points.toString());

    if (!newName || !newDueDate || !newPoints) return;

    const updated: Assignment = {
      ...assignment,
      name: newName,
      dueDate: newDueDate,
      points: parseInt(newPoints),
    };

    setAssignments(assignments.map((a) => (a.id === id ? updated : a)));
  };

  const filteredAssignments = assignments.filter((assignment) =>
    assignment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="assignments-container">
      <div className="assignments-header">
        <FaClipboardList className="assignments-icon" />
        <h1 className="assignments-title">Assignments</h1>
      </div>

      <div className="assignments-controls">
        <button className="group-btn" onClick={addGroup}>
          +Group
        </button>
        <button className="assignment-btn" onClick={addAssignment}>
          +Assignment
        </button>
      </div>

      <div className="assignments-searchbar">
        <input
          type="text"
          placeholder="Search assignments"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="assignments-groups">
        {groups.map((group) => (
          <div key={group} className="assignment-group">
            <h2>{group}</h2>
            {filteredAssignments
              .filter((a) => a.group === group)
              .map((a) => (
                <AssignmentItem
                  key={a.id}
                  id={a.id}
                  name={a.name}
                  dueDate={a.dueDate}
                  points={a.points}
                  group={a.group}
                  onDelete={deleteAssignment}
                  onEdit={editAssignment}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
