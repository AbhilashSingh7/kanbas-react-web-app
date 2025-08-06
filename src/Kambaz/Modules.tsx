// src/Kambaz/Modules.tsx
import { useState } from "react";
import {
  FaLayerGroup,
  FaTrash,
  FaEdit,
  FaPlus,
  FaChevronDown,
  FaChevronRight,
  FaBookOpen,
} from "react-icons/fa";
import "./Modules.css";

interface Module {
  id: number;
  title: string;
  lessons: string[];
  expanded: boolean;
}

export default function Modules() {
  const [modules, setModules] = useState<Module[]>([
    {
      id: 1,
      title: "Module 1: Introduction",
      lessons: ["Lesson: Welcome", "Lesson: What is Kambaz?"],
      expanded: true,
    },
    {
      id: 2,
      title: "Module 2: Advanced React",
      lessons: ["Lesson: useEffect and useState", "Lesson: React Router"],
      expanded: true,
    },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newLesson, setNewLesson] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState("");

  const addModule = () => {
    if (!newTitle.trim()) return;
    const newModule: Module = {
      id: Date.now(),
      title: newTitle.trim(),
      lessons: [],
      expanded: true,
    };
    setModules([...modules, newModule]);
    setNewTitle("");
  };

  const deleteModule = (id: number) => {
    setModules(modules.filter((mod) => mod.id !== id));
  };

  const startEdit = (id: number, title: string) => {
    setEditingId(id);
    setEditedTitle(title);
  };

  const saveEdit = () => {
    setModules((prev) =>
      prev.map((mod) =>
        mod.id === editingId ? { ...mod, title: editedTitle } : mod
      )
    );
    setEditingId(null);
    setEditedTitle("");
  };

  const toggleExpand = (id: number) => {
    setModules((prev) =>
      prev.map((mod) =>
        mod.id === id ? { ...mod, expanded: !mod.expanded } : mod
      )
    );
  };

  const handleAddLesson = (id: number) => {
    if (!newLesson.trim()) return;
    setModules((prev) =>
      prev.map((mod) =>
        mod.id === id
          ? { ...mod, lessons: [...mod.lessons, newLesson.trim()] }
          : mod
      )
    );
    setNewLesson("");
  };

  return (
    <div className="modules-container">
      <h2 className="modules-title">
        <FaLayerGroup className="modules-icon" />
        Modules
      </h2>

      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="New module title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addModule}>
          <FaPlus className="me-1" /> Add Module
        </button>
      </div>

      {modules.map((mod) => (
        <div className="module-box" key={mod.id}>
          <div className="module-header d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <span
                className="expand-icon"
                onClick={() => toggleExpand(mod.id)}
              >
                {mod.expanded ? <FaChevronDown /> : <FaChevronRight />}
              </span>
              {editingId === mod.id ? (
                <input
                  className="form-control ms-2"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
              ) : (
                <h5 className="mb-0 ms-2">{mod.title}</h5>
              )}
            </div>

            <div>
              {editingId === mod.id ? (
                <>
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={saveEdit}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setEditingId(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-outline-light btn-sm me-2"
                    onClick={() => startEdit(mod.id, mod.title)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => deleteModule(mod.id)}
                  >
                    <FaTrash />
                  </button>
                </>
              )}
            </div>
          </div>

          {mod.expanded && (
            <>
              <ul className="lessons-list">
                {mod.lessons.map((lesson, index) => (
                  <li key={index} className="lesson-item d-flex align-items-center">
                    <FaBookOpen className="lesson-icon me-2" />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>

              <div className="input-group mt-2 mb-3">
                <input
                  className="form-control"
                  placeholder="New Lesson"
                  value={newLesson}
                  onChange={(e) => setNewLesson(e.target.value)}
                />
                <button
                  className="btn btn-success"
                  onClick={() => handleAddLesson(mod.id)}
                >
                  <FaPlus className="me-1" /> Add Lesson
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
