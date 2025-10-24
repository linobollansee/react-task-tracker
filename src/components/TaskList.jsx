import React from 'react';
import Task from './Task';
const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  if (tasks.length === 0) return <p>No tasks available.</p>;
  return (<div>{tasks.map(task => <Task key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />)}</div>);
};
export default TaskList;