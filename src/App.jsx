// Import the React library and the useState hook for managing component state.
import React, { useState } from 'react';

// Import child components that make up the app's structure.
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

// Import CSS styles specific to this component.
import './App.css';

// Main application component.
function App() {
  // Define the 'tasks' state variable and its updater 'setTasks'.
  // This array holds a list of task objects, each with an id, title, and completion status.
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a project', completed: true },
  ]);

  // Function to add a new task.
  // Creates a new task object with a unique ID and adds it to the existing list.
  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Function to toggle the completion status of a task.
  // Finds the matching task by ID and flips its 'completed' property.
  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task by filtering it out of the task list.
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Render the main app layout.
  // Includes the Header, AddTask input form, and the TaskList display.
  return (
    <div className="App">
      <Header />
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

// Export the App component as the default export of this module.
export default App;
