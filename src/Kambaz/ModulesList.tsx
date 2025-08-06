import { useState } from "react";
import { FaLayerGroup, FaPlus, FaTrash, FaEdit, FaCaretDown, FaCaretRight, FaBookOpen } from "react-icons/fa";
import "./Modules.css";

interface ModulesListProps {
  className?: string;
}

export default function ModulesList({ className = "" }: ModulesListProps) {
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
  const [expandedModules, setExpandedModules] = useState<number[]>([]);
  const [editingModuleId, setEditingModuleId] = useState<number | null>(null);
  const [editingLessonIndex, setEditingLessonIndex] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedLesson, setEditedLesson] = useState("");

  const toggleModule = (id: number) => {
    if (expandedModules.includes(id)) {
      setExpandedModules(expandedModules.filter((modId) => modId !== id));
    } else {
      setExpandedModules([...expandedModules, id]);
    }
  };

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

  const addLesson = (modId: number) => {
    if (!newLesson.trim()) return;
    setModules(
      modules.map((mod) =>
        mod.id === modId
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
    <div className={`modules-container ${className}`}>
      <h2 className="modules-title">
        <FaLayerGroup className="modules-icon" />
        Modules
      </h2>

      <div className="input-group mb-4">
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
        <div className="module-card" key={mod.id}>
          <div className="module-header" onClick={() => toggleModule(mod.id)}>
            <div className="d-flex align-items-center">
              {expandedModules.includes(mod.id) ? <FaCaretDown /> : <FaCaretRight />}
              {editingModuleId === mod.id ? (
                <>
                  <input
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="form-control ms-2"
                  />
                  <button
                    className="btn btn-success btn-sm ms-2"
                    onClick={saveModuleEdit}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-secondary btn-sm ms-2"
                    onClick={() => setEditingModuleId(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <h4 className="ms-2">{mod.title}</h4>
              )}
            </div>

            <div>
              <button
                className="btn btn-outline-light btn-sm me-2"
                onClick={(e) => {
                  e.stopPropagation();
                  startEditingModule(mod.id, mod.title);
                }}
              >
                <FaEdit />
              </button>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteModule(mod.id);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </div>

          {expandedModules.includes(mod.id) && (
            <div className="module-lessons">
              {mod.lessons.map((lesson, index) => (
                <div key={index} className="lesson-row">
                  {editingLessonIndex === index ? (
                    <>
                      <input
                        value={editedLesson}
                        onChange={(e) => setEditedLesson(e.target.value)}
                        className="form-control me-2"
                      />
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => saveLessonEdit(mod.id)}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary btn-sm ms-2"
                        onClick={() => setEditingLessonIndex(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <span>
                        <FaBookOpen />
                        {lesson}
                      </span>
                      <div className="lesson-actions">
                        <button
                          className="btn btn-outline-light btn-sm"
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
                </div>
              ))}

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
          )}
        </div>
      ))}
    </div>
  );
}
