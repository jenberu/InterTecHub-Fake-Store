import React from "react";

const SortOptions = ({ onSortChange }) => {
  return (
    <div className="sort-options">
      <h4 className="sort-title">Sort By</h4>
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="sort-dropdown"
      >
        <option value="default">Default</option>
        <option value="price-low-to-high">Price: Low to High</option>
        <option value="price-high-to-low">Price: High to Low</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    </div>
  );
};

export default SortOptions;
