import React from "react";
import Task from "./Task";

function TaskList({ tasks, onTaskDelete }) {

  function deleteTask(event) {
    const taskContainer = event.target.parentNode
    const itemName = taskContainer.querySelector(".text").textContent
    const updatedItems = tasks.filter((task) => task.text !== itemName)
    onTaskDelete(updatedItems)
  }

  return (
    <>
      <div className="tasks">
        {/* display a list of tasks using Task component */}
        <ul>
          {tasks.map((task) => {
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
