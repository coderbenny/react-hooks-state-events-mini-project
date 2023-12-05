import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {

  const [allTasks, setAllTasks] = useState(tasks)

  function deleteTask(event) {
    const taskContainer = event.target.parentNode
    const itemName = taskContainer.querySelector(".text").textContent
    const updatedItems = allTasks.filter((task) => task.text !== itemName)
    setAllTasks(updatedItems)
  }

  return (
    <>
      <div className="tasks">
        {/* display a list of tasks using Task component */}
        <ul>
          {allTasks.map((task) => {
            return (
              <Task key={task.text} handleDelete={deleteTask} category={task.category} text={task.text} />
            )
          })}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
