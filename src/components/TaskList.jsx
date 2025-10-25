// Import React library for building UI components
import React from 'react';

// Import the Task component which represents an individual task
import Task from './Task';

/**
 * TaskList component
 * @param {Array} tasks - Array of task objects to display
 * @param {Function} toggleTask - Function to toggle the completion status of a task
 * @param {Function} deleteTask - Function to delete a task
 *
 * This component renders a list of Task components. If there are no tasks,
 * it displays a message indicating that no tasks are available.
 */
const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  
  // If the tasks array is empty, render a message
  if (tasks.length === 0) return <p>No tasks available.</p>;

  // Map through the tasks array and render a Task component for each task
  // Pass the task object, toggleTask function, and deleteTask function as props
  return (
    <div>
      {tasks.map(task => (
        <Task 
          key={task.id}          // Unique key required for list rendering in React
          task={task}            // The individual task object
          toggleTask={toggleTask} // Function to toggle task completion
          deleteTask={deleteTask} // Function to delete the task
        />
      ))}
    </div>
  );
};

// Export TaskList component to be used in other parts of the application
export default TaskList;
