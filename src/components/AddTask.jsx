import React, { useState } from 'react';
const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => { e.preventDefault(); if(!title) return; addTask(title); setTitle(''); };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} placeholder="Add new task..." onChange={e => setTitle(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};
export default AddTask;