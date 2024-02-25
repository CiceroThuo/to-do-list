
import React, { useState } from "react";
import TaskList from "./components/TaskList";
import '/src/App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Finish KUCCPS Application", description: "Choose your 5 best courses that you will want to do.", completed: false },
    { id: 2, title: "Go for Practice", description: "Run 5 laps,work on left hand layup and shot perfection.", completed: false },
    { id: 3, title: "Buy new laptop and phone", description: "Get a Macbook or Dell and Samsung or Iphone.", completed: true },
    { id: 4, title: "Prepare presentation slides", description: "Finalize slides for the presentations.", completed: false },
    { id: 5, title: "Finish clearance at Nairobi School", description: "Repay the lost books.", completed: false },
  ]);

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <TaskList tasks={tasks} onDelete={deleteTask} onComplete={completeTask} />
    </div>
  );
};

export default App;
