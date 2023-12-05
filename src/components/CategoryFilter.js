import React from "react";

function CategoryFilter({ categories, onCategoryChange, filter }) {

  function handleClick(event) {
    const btnCategory = event.target.textContent
    onCategoryChange(btnCategory)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}

      {categories.map((category) => {
        return (
          <button key={category} className={filter === category ? "selected " : ""} onClick={handleClick}>{category}</button>
        )
      })}

    </div>
  );
}

export default CategoryFilter;
