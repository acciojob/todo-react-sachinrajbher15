
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [task, setTask] = useState("");
  const [todoTasks, setTodoTask] = useState([]);

  const handleChange = (e) =>{
    setTask(e.target.value);
  }
  const handleClick = () => {
    if(task.trim() != ""){
      setTodoTask([...todoTasks, task]);
      setTask("");
    }
  }
  const handleDelete = (index) => {
    const updatedTask = todoTasks.filter((_,i) => i!== index);
    setTodoTask(updatedTask);
  }

  return (
    <div className="container">
      <div className="header">
        <h2>To-Do List</h2>
      </div>
      <div className="add-task-section">
        <input id="input-field" type="text" onChange={handleChange} value={task}></input>
        <button id="add-btn" onClick={handleClick}>Add Todo</button>
      </div>

      <div className="tasks-container">
        <ul>
          {todoTasks.map((currentTask, index) => (
            <li key={index}>
              {currentTask}
              <button id="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
