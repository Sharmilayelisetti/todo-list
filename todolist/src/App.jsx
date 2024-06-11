import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (todoInput.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: todoInput.trim(),
    };

    setTodos([...todos, newTodo]);
    setTodoInput('');
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm 
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        addTodo={addTodo}
      />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

const TodoForm = ({ todoInput, setTodoInput, addTodo }) => {
  return (
    <form onSubmit={addTodo} className="todo-form">
      <input 
        type="text" 
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

const TodoItem = ({ todo, removeTodo }) => {
  return (
    <li className="todo-item">
      {todo.text}
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default App;
