import React, { useEffect, useState } from "react";
import "./TaskModal.css";

const TaskModal = ({ isOpen, onClose, onAddTask, isEdit }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (isEdit) {
      setTask(isEdit.task);
      setDescription(isEdit.description);
      setDate(isEdit.date);
    }
  }, [isEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && description.trim()) {
      onAddTask({ task, description, date });
      setTask("");
      setDescription("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{isEdit ? "Update Task" : "Add Task"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task name"
            required
          />

          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          />
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Description"
            required
          />
          <div className="modal-actions">
            <button type="submit" className="add">
              Save
            </button>
            <br />
            <button type="button" onClick={onClose} className="cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
