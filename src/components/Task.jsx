// Import React library for building UI components
import React from 'react';

/**
 * Task component
 * @param {Object} task - The individual task object containing id, title, completed status, etc.
 * @param {Function} toggleTask - Function to toggle the completion status of this task
 * @param {Function} deleteTask - Function to delete this task
 *
 * This component renders a single task with its title and a delete button.
 * The task's visual style changes if it is completed.
 */
const Task = ({ task, toggleTask, deleteTask }) => (
  // Apply 'completed' class if the task is marked as completed
  <div className={`task ${task.completed ? 'completed' : ''}`}>
    
    {/* Clicking on the task title toggles its completion status */}
    <span onClick={() => toggleTask(task.id)}>
      {task.title}
    </span>
    
    {/* Delete button calls the deleteTask function with the task's id */}
    <button onClick={() => deleteTask(task.id)}>
      Delete
    </button>
  </div>
);

// Export Task component for use in other parts of the application
export default Task;
