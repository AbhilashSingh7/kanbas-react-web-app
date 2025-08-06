// src/Labs/Lab5/WorkingWithObjectsAsynchronously.tsx
import { useEffect, useState } from "react";
import { fetchAssignment, updateAssignmentTitle } from "./client";

export default function WorkingWithObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<any>({});

  const fetchAndSetAssignment = async () => {
    const data = await fetchAssignment();
    setAssignment(data);
  };

  useEffect(() => {
    fetchAndSetAssignment();
  }, []);

  const updateTitle = async () => {
    const updated = await updateAssignmentTitle(assignment.title);
    setAssignment(updated);
  };

  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>

      <h4>Assignment</h4>
      <input
        value={assignment.title || ""}
        className="form-control mb-2"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <input
        value={assignment.due || ""}
        className="form-control mb-2"
        onChange={(e) =>
          setAssignment({ ...assignment, due: e.target.value })
        }
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          id="wd-completed"
          checked={assignment.completed || false}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        <label className="form-check-label" htmlFor="wd-completed">
          Completed
        </label>
      </div>
      <button onClick={updateTitle} className="btn btn-primary mb-3">
        Update Title
      </button>

      <pre>{JSON.stringify(assignment, null, 2)}</pre>
    </div>
  );
}
