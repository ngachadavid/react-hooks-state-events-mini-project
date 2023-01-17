import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteTask}) {
  const displayTask=tasks.map((task)=>{
    return (
      <Task
      key={task.text}
      test={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
      />
    )
  }
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
