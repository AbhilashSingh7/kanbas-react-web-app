// src/Kambaz/AssignmentEditor.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import "./AssignmentEditor.css";

export default function AssignmentEditor() {
  const { assignmentId } = useParams();
  const navigate = useNavigate();

  const [assignment, setAssignment] = useState({
    name: `Assignment ${assignmentId}`,
    description: "Enter assignment details here...",
    points: 100,
    group: "Assignments",
    gradeDisplay: "Percentage",
    submissionType: "Online",
    onlineEntryOptions: {
      text: true,
      website: false,
    },
    assignTo: "Everyone",
    dueDate: "2025-08-10",
    availableFrom: "2025-08-01",
    until: "2025-08-15",
  });

  const handleChange = (field: string, value: any) => {
    setAssignment((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (option: "text" | "website") => {
    setAssignment((prev) => ({
      ...prev,
      onlineEntryOptions: {
        ...prev.onlineEntryOptions,
        [option]: !prev.onlineEntryOptions[option],
      },
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Assignment saved!");
    navigate("/kambaz/courses/assignments");
  };

  return (
    <div className="assignment-editor-page">
      <div className="container py-4">
        <h2 className="text-danger mb-4">
          <FaEdit className="me-2" />
          Edit Assignment
        </h2>

        <div className="assignment-editor-form bg-white text-black p-4 rounded shadow-sm">
          <form onSubmit={handleSave}>
            <div className="mb-3">
              <label className="form-label">Assignment Name</label>
              <input
                type="text"
                className="form-control"
                value={assignment.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                value={assignment.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Points</label>
                <input
                  type="number"
                  className="form-control"
                  value={assignment.points}
                  onChange={(e) =>
                    handleChange("points", parseInt(e.target.value))
                  }
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Assignment Group</label>
                <select
                  className="form-control"
                  value={assignment.group}
                  onChange={(e) => handleChange("group", e.target.value)}
                >
                  <option>Assignments</option>
                  <option>Quizzes</option>
                  <option>Exams</option>
                  <option>Projects</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Display Grade As</label>
                <select
                  className="form-control"
                  value={assignment.gradeDisplay}
                  onChange={(e) => handleChange("gradeDisplay", e.target.value)}
                >
                  <option>Percentage</option>
                  <option>Points</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Submission Type</label>
                <select
                  className="form-control"
                  value={assignment.submissionType}
                  onChange={(e) =>
                    handleChange("submissionType", e.target.value)
                  }
                >
                  <option>Online</option>
                  <option>On Paper</option>
                  <option>No Submission</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Online Entry Options</label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="text"
                    checked={assignment.onlineEntryOptions.text}
                    onChange={() => handleCheckboxChange("text")}
                  />
                  <label htmlFor="text" className="form-check-label">
                    Text Entry
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="website"
                    checked={assignment.onlineEntryOptions.website}
                    onChange={() => handleCheckboxChange("website")}
                  />
                  <label htmlFor="website" className="form-check-label">
                    Website URL
                  </label>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Assign To</label>
                <input
                  type="text"
                  className="form-control"
                  value={assignment.assignTo}
                  onChange={(e) => handleChange("assignTo", e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Due Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={assignment.dueDate}
                  onChange={(e) => handleChange("dueDate", e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Available From</label>
                <input
                  type="date"
                  className="form-control"
                  value={assignment.availableFrom}
                  onChange={(e) => handleChange("availableFrom", e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Until</label>
              <input
                type="date"
                className="form-control"
                value={assignment.until}
                onChange={(e) => handleChange("until", e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-success px-4">
                Save Assignment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
