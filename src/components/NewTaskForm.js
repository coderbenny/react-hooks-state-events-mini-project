import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const newCategories = categories.filter((category) => category !== "All")

  const [inputText, setInputText] = useState("")
  const [optionText, setOptionText] = useState("Code")
  // console.log(inputText)

  function handleInputChange(event) {
    const newInputText = event.target.value;
    setInputText(newInputText)
  }

  function handleSelectChange(event) {
    const newOption = event.target.value
    setOptionText(newOption)
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    const newItem = {
      text: inputText,
      category: optionText,
    }
    onTaskFormSubmit(newItem)
  }

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleInputChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleSelectChange}>
          {/* render <option> elements for each category here */}
          {newCategories.map((category) => {
            return (
              <option key={category} value={category}>{category}</option>
            )
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
