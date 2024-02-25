
import React from "react";

const Task = ({ task, onDelete, onComplete }) => {
  return (
    <div className="flex items-center justify-between bg-red-100 p-4 rounded-md shadow-md mb-4">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div>
        <button
          className={`px-3 py-1 mr-2 ${
            task.completed ? "bg-gray-500" : "bg-green-500"
          } text-white rounded-md`}
          onClick={() => onComplete(task.id)}
        >
          {task.completed ? "Completed" : "Mark Complete"}
        </button>
        <button
          className="px-3 py-1 bg-red-500 text-white rounded-md"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
