// Import React and useState hook for managing component state
import React, { useState } from 'react';

/**
 * AddTask component
 * @param {Function} addTask - Function passed from parent to add a new task
 *
 * This component renders a form with an input field and a submit button
 * to add new tasks to the task list.
 */
const AddTask = ({ addTask }) => {
  // State to store the current input value
  const [title, setTitle] = useState('');

  /**
   * Handle form submission
   * @param {Event} e - The form submission event
   *
   * Prevents default form behavior, checks if input is not empty,
   * calls addTask with the current title, and clears the input field.
   */
  const handleSubmit = (e) => {
    e.preventDefault();       // Prevent page reload on form submit
    if (!title) return;       // Do nothing if input is empty
    addTask(title);           // Call parent function to add the new task
    setTitle('');             // Clear input field after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field bound to title state, updates state on change */}
      <input
        type="text"
        value={title}
        placeholder="Add new task..."
        onChange={e => setTitle(e.target.value)}
      />
      {/* Submit button to add the task */}
      <button type="submit">Add</button>
    </form>
  );
};

// Export AddTask component for use in other parts of the application
export default AddTask;
