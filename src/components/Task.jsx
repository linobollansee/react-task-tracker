import React from 'react';
const Task = ({ task, toggleTask, deleteTask }) => (
  <div className={`task ${task.completed ? 'completed' : ''}`}>
    <span onClick={() => toggleTask(task.id)}>{task.title}</span>
    <button onClick={() => deleteTask(task.id)}>Delete</button>
  </div>
);
export default Task;