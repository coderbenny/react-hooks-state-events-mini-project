import React, { useState } from "react";

function CategoryFilter({ categories }) {
  const [filterBy, setFilterBy] = useState("All");


  function handleClick(event) {
    const btnCategory = event.target.textContent
    setFilterBy(btnCategory)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}

      {categories.map((category) => {
        return (
          <button key={category} className={filterBy === category ? "selected " : ""} onClick={handleClick}>{category}</button>
        )
      })}

    </div>
  );
}

export default CategoryFilter;
