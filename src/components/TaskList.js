import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteTask}) {
  const taskList=tasks.map((task)=>(
      <Task
      key={task.text}
      test={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
      />
    ));
  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
