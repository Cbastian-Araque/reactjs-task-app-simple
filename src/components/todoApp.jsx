import React from "react";
import { useState } from "react";
import Todo from "./todo";
import './todoApp.css';

export default function TodoApp(){
  const [title, setTitle] = useState("First task");
  const [todos, setTodos] = useState([]);

  function handleChange(e){
    const value = e.target.value;
    setTitle(value);
  }

  function handleSubmit(e){
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    }

    const temp = [...todos];
    if(newTodo.title){
      temp.unshift(newTodo);
    }

    setTodos(temp);
    setTitle('');
  }

  function handleUpdate(id, value){
    const temp = [...todos];
    const item = temp.find(item => item.id === id);
    item.title = value;

    setTodos(temp)
  }

  function handleDelete(id){
    const temp = todos.filter( item => item.id !== id);

    setTodos(temp);
  }

  return(
    <div className="todoContainer">
      <h1 className="titleApp">Add Task</h1>

      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="Add todo"
          className="todoInput"
          value={title}
        />
        <input
          type="submit"
          onClick={handleSubmit}
          value="Create todo"
          className="buttonCreate"
        />

      </form>

      {todos.length > 0 ? (<h2 className="titleListing">Task list</h2>) : '' }

      <div className="todosContainer">
        {
          todos.map(item => (
            <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
          ))
        }
      </div>
    </div>
  )
}