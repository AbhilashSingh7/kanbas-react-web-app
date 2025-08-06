// src/Kambaz/AssignmentItem.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaClipboard, FaEllipsisV, FaTrash, FaEdit } from "react-icons/fa";
import "./AssignmentItem.css";

export interface AssignmentItemProps {
  id: number;
  name: string;
  dueDate: string;
  points: number;
  group: string;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void; // ✅ Added line
}

export default function AssignmentItem({
  id,
  name,
  dueDate,
  points,
  group,
  onDelete,
  onEdit, // ✅ Added line
}: AssignmentItemProps) {
  const [showActions, setShowActions] = useState(false);

  return (
    <div
      className="assignment-item d-flex justify-content-between align-items-start"
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Icon + Text Section */}
      <Link
        to={`/kambaz/courses/assignments/${id}`}
        className="assignment-content d-flex align-items-start gap-3 text-decoration-none"
      >
        <FaClipboard className="assignment-icon mt-1" />
        <div>
          <div className="assignment-title">{name}</div>
          <div className="assignment-subtext">
            Due {dueDate} · {points} pts
          </div>
        </div>
      </Link>

      {/* Hover Menu Icon */}
      <div className="assignment-menu text-end">
        {!showActions ? (
          <FaEllipsisV
            className="action-icon"
            onClick={() => setShowActions(true)}
          />
        ) : (
          <div className="action-buttons">
            <Link to={`/kambaz/courses/assignments/${id}`} className="action-link">
              <FaEdit className="me-1" />
              Edit
            </Link>
            <button
              onClick={() => onDelete(id)}
              className="action-link text-danger"
            >
              <FaTrash className="me-1" />
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
