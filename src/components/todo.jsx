import React from "react";
import { useState } from "react";

export default function Todo({item, onUpdate, onDelete}){
  const [isEdit, setIsEdit] = useState(false);
  const [newValue, setNewValue] = useState(item.title);

  function handleSubmit(e){
    e.preventDefault();
  }

  function handleChange(e){
    const value = e.target.value;
    setNewValue(value);
  }

  function handleClickUpdateTodo(e){
    e.preventDefault();
    onUpdate(item.id, newValue);
    setIsEdit(false);
  }

  function FormEdit(){
    return(
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input 
          type="text"
          className="todoInput"
          onChange={handleChange} 
          value={newValue} />
        <button className="button" onClick={handleClickUpdateTodo}>Update</button>
      </form>
    )
  }

  function TodoElement(){
    return(
      <div className="todo">
        <div className="todoInfo">
          <span className="todoTitle">{item.title}</span>
          <button className="button" onClick={() => setIsEdit(true)}>Edit</button>
          <button className="button buttonDelete" onClick={(e) => onDelete(item.id)}>Delete</button>
        </div>
      </div>
    )
  }

  return(
    <div className="todo">
      {isEdit ? <FormEdit /> : <TodoElement /> }
    </div>
  )
}