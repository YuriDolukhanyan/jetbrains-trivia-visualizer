import React from "react";

export const FilterBar = ({ categories, filteredCategory, onChange }) => {
  return (
    <div className="filter-bar">
      <label>Filter by Category: </label>
      <select
        value={filteredCategory}
        onChange={e => onChange(e.target.value)}
      >
        <option value="All">All</option>
        {categories.map((cat, i) => (
          <option key={i} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};
