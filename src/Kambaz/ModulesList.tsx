// src/Kambaz/ModulesList.tsx
import { useState } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

export default function ModulesList() {
  const [modules, setModules] = useState([
    {
      id: 1,
      title: "Week 1: Introduction",
      lessons: ["Lesson 1: Welcome & Overview", "Lesson 2: Syllabus & Expectations"],
    },
    {
      id: 2,
      title: "Week 2: Fundamentals",
      lessons: ["Lesson 1: HTML Basics", "Lesson 2: CSS Introduction"],
    },
  ]);

  const [newModuleTitle, setNewModuleTitle] = useState("");
  const [newLesson, setNewLesson] = useState("");
  const [editingModuleId, setEditingModuleId] = useState<number | null>(null);
  const [editingLessonIndex, setEditingLessonIndex] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedLesson, setEditedLesson] = useState("");

  const addModule = () => {
    if (!newModuleTitle.trim()) return;
    setModules([
      ...modules,
      { id: Date.now(), title: newModuleTitle, lessons: [] },
    ]);
    setNewModuleTitle("");
  };

  const deleteModule = (id: number) => {
    setModules(modules.filter((mod) => mod.id !== id));
  };

  const addLesson = (id: number) => {
    if (!newLesson.trim()) return;
    setModules(
      modules.map((mod) =>
        mod.id === id
          ? { ...mod, lessons: [...mod.lessons, newLesson] }
          : mod
      )
    );
    setNewLesson("");
  };

  const deleteLesson = (modId: number, index: number) => {
    setModules(
      modules.map((mod) =>
        mod.id === modId
          ? {
              ...mod,
              lessons: mod.lessons.filter((_, i) => i !== index),
            }
          : mod
      )
    );
  };

  const startEditingModule = (id: number, title: string) => {
    setEditingModuleId(id);
    setEditedTitle(title);
  };

  const saveModuleEdit = () => {
    setModules(
      modules.map((mod) =>
        mod.id === editingModuleId ? { ...mod, title: editedTitle } : mod
      )
    );
    setEditingModuleId(null);
    setEditedTitle("");
  };

  const startEditingLesson = (index: number, content: string) => {
    setEditingLessonIndex(index);
    setEditedLesson(content);
  };

  const saveLessonEdit = (modId: number) => {
    setModules(
      modules.map((mod) =>
        mod.id === modId
          ? {
              ...mod,
              lessons: mod.lessons.map((l, i) =>
                i === editingLessonIndex ? editedLesson : l
              ),
            }
          : mod
      )
    );
    setEditingLessonIndex(null);
    setEditedLesson("");
  };

  return (
    <div>
      <h3 className="text-white">Modules List</h3>

      <div className="input-group mb-3">
        <input
          value={newModuleTitle}
          onChange={(e) => setNewModuleTitle(e.target.value)}
          className="form-control"
          placeholder="New Module Title"
        />
        <button className="btn btn-primary" onClick={addModule}>
          <FaPlus className="me-1" /> Add Module
        </button>
      </div>

      {modules.map((mod) => (
        <div className="mb-4 border rounded p-3 bg-dark text-light" key={mod.id}>
          <div className="d-flex justify-content-between align-items-center">
            {editingModuleId === mod.id ? (
              <>
                <input
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="form-control me-2"
                />
                <button className="btn btn-success btn-sm me-2" onClick={saveModuleEdit}>
                  Save
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setEditingModuleId(null)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h4>{mod.title}</h4>
                <div>
                  <button
                    className="btn btn-outline-light btn-sm me-2"
                    onClick={() => startEditingModule(mod.id, mod.title)}
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

          <ul className="ms-3 mt-2">
            {mod.lessons.map((lesson, index) => (
              <li key={index} className="d-flex justify-content-between align-items-center mb-2">
                {editingLessonIndex === index ? (
                  <>
                    <input
                      value={editedLesson}
                      onChange={(e) => setEditedLesson(e.target.value)}
                      className="form-control me-2"
                    />
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => saveLessonEdit(mod.id)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setEditingLessonIndex(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <span>{lesson}</span>
                    <div>
                      <button
                        className="btn btn-outline-light btn-sm me-2"
                        onClick={() => startEditingLesson(index, lesson)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => deleteLesson(mod.id, index)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="input-group mt-2">
            <input
              className="form-control"
              placeholder="New Lesson"
              value={newLesson}
              onChange={(e) => setNewLesson(e.target.value)}
            />
            <button className="btn btn-primary" onClick={() => addLesson(mod.id)}>
              <FaPlus className="me-1" /> Add Lesson
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}