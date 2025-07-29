// src/Kambaz/Modules.tsx
import { useState } from "react";
import { FaLayerGroup, FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import "./Modules.css";

export default function Modules() {
  const [modules, setModules] = useState([
    {
      id: 1,
      title: "Module 1: Introduction",
      lessons: ["Lesson: Welcome", "Lesson: What is Kambaz?"],
    },
    {
      id: 2,
      title: "Module 2: Advanced React",
      lessons: ["Lesson: useEffect and useState", "Lesson: React Router"],
    },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState("");

  const addModule = () => {
    if (newTitle.trim() === "") return;
    const newModule = {
      id: Date.now(),
      title: newTitle,
      lessons: [],
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
        <div className="mb-3 border rounded p-3 bg-dark text-light" key={mod.id}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            {editingId === mod.id ? (
              <>
                <input
                  className="form-control me-2"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <button className="btn btn-success btn-sm me-2" onClick={saveEdit}>
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
                <h4 className="mb-0">{mod.title}</h4>
                <div>
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
                </div>
              </>
            )}
          </div>

          {mod.lessons.length > 0 && (
            <ul className="ms-3">
              {mod.lessons.map((lesson, i) => (
                <li key={i}>{lesson}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}