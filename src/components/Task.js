import React from "react";
function Task({category, text, onDeleteTask}) {
  function handleClick() {
    onDeleteTask(text);
  }
  return (
      <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button onClick = {handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
