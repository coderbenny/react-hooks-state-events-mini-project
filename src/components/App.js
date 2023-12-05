import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [allItems, setAllItems] = useState(TASKS)
  console.log(allItems)

  function handleDeleteTask(updatedItems) {
    setAllItems(updatedItems)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm />
      <TaskList onTaskDelete={handleDeleteTask} tasks={allItems} />
    </div>
  );
}

export default App;
