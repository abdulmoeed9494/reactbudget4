// TodoApp.js

import React, { useState } from 'react';

const TodoApp = () => {
  // To-Do items ko track karne ke liye state
  const [todos, setTodos] = useState([]);
  // Naya To-Do item input field ke liye state
  const [newTodo, setNewTodo] = useState('');

  // Naya To-Do item add karne wala function
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  // To-Do item ko remove karne wala function
  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  // JSX jo component ka UI represent karta hai
  return (
    <div>
      <h1>React Todo App</h1>
      {/* To-Do item input field */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new todo"
      />
      {/* Naya To-Do item add karne wala button */}
      <button onClick={addTodo}>Add Todo</button>
      {/* To-Do items ko list mein render karna */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            {/* Har To-Do item ke liye remove karne wala button */}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
