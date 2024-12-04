import React, { useState } from 'react';

function Todo() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  // Handle input change
  const handleInput = (value) => {
    setInput(value);
  };

  // Handle adding a task
  const handleTask = () => {
      setList([...list, input]);
      setInput(''); // Clear input field after adding the task
  };

  let handleDelete = (i) => {
    let filterList = list.filter((ele)=> ele != list[i]);
    // console.log(filterList)
    setList(filterList)
  }

  return (
    <div className="App">
      <h2>Todo App</h2>
      <div className="container">
        <div className="input-box">
          <input
            type="text"
            value={input}
            placeholder="Enter a task..."
            onChange={(e) => handleInput(e.target.value)}
          />
          <button onClick={handleTask}>Add Task</button>
        </div>
        <div className="list">
          <ul>
            {list.map((item, i) => (
              <li key={i} onClick={()=>handleDelete(i)}>{item}❌</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;


