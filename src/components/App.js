import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [allItems, setAllItems] = useState(TASKS)
  const [filterBy, setFilterBy] = useState("All")
  // console.log(allItems)

  function handleDeleteTask(updatedItems) {
    setAllItems(updatedItems)
  }

  function handleCategoryChange(btnCategory) {
    setFilterBy(btnCategory)
    const filteredItems = allItems.filter((item) =>
      btnCategory === "All" ? allItems : item.category === btnCategory
    )
    setAllItems(filteredItems)
  }

  function handleTaskSubmit(newItem) {
    const updatedItem = [...allItems, newItem]
    setAllItems(updatedItem)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onCategoryChange={handleCategoryChange} categories={CATEGORIES} filter={filterBy} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskSubmit} />
      <TaskList onTaskDelete={handleDeleteTask} tasks={allItems} />
    </div>
  );
}

export default App;
