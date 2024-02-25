
import React from "react";

const Task = ({ task, onDelete, onComplete }) => {
  const taskStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    marginBottom: "20px",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const descriptionStyle = {
    fontSize: "1rem",
    marginBottom: "10px",
  };

  const btnStyle = {
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const deleteBtnStyle = {
    ...btnStyle,
    backgroundColor: "#ff5252",
    color: "#fff",
  };

  const completeBtnStyle = {
    ...btnStyle,
    backgroundColor: "#4caf50",
    color: "#fff",
  };

  return (
    <div style={taskStyle} className={task.completed ? "completed" : ""}>
      <div>
        <h3 style={titleStyle}>{task.title}</h3>
        <p style={descriptionStyle}>{task.description}</p>
      </div>
      <div>
        <button
          style={completeBtnStyle}
          onClick={() => onComplete(task.id)}
        >
          {task.completed ? "Completed" : "Mark Complete"}
        </button>
        <button
          style={deleteBtnStyle}
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
