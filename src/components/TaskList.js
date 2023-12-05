import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {

  return (
    <>
      <div className="tasks">
        {/* display a list of tasks using Task component */}
        <ul>
          {tasks.map((task) => {
            return (
              <Task key={task.text} category={task.category} text={task.text} />
            )
          })}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
