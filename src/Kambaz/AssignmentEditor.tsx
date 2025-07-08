// src/Kambaz/AssignmentEditor.tsx
import { useParams } from "react-router-dom";

export default function AssignmentEditor() {
  const { assignmentId } = useParams();

  return (
    <div>
      <h2>Edit Assignment: {assignmentId}</h2>

      <form>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" defaultValue="Assignment Name" />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control" defaultValue="Assignment Description" />
        </div>

        <div className="mb-3">
          <label>Points</label>
          <input type="number" className="form-control" defaultValue={100} />
        </div>

        <div className="mb-3">
          <label>Assignment Group</label>
          <select className="form-control">
            <option>Assignments</option>
            <option>Quizzes</option>
            <option>Exams</option>
            <option>Projects</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Display Grade As</label>
          <select className="form-control">
            <option>Percentage</option>
            <option>Points</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Submission Type</label>
          <select className="form-control">
            <option>Online</option>
            <option>On Paper</option>
            <option>No Submission</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Online Entry Options</label>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="text" />
            <label htmlFor="text" className="form-check-label">Text Entry</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="website" />
            <label htmlFor="website" className="form-check-label">Website URL</label>
          </div>
        </div>

        <div className="mb-3">
          <label>Assign to</label>
          <input type="text" className="form-control" defaultValue="Everyone" />
        </div>

        <div className="mb-3">
          <label>Due Date</label>
          <input type="date" className="form-control" defaultValue="2025-07-30" />
        </div>

        <div className="mb-3">
          <label>Available From</label>
          <input type="date" className="form-control" defaultValue="2025-07-10" />
        </div>

        <div className="mb-3">
          <label>Until</label>
          <input type="date" className="form-control" defaultValue="2025-08-10" />
        </div>

        <button type="submit" className="btn btn-success">Save</button>
      </form>
    </div>
  );
}
