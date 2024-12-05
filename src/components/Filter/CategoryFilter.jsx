import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="category-filter">
      <ul>
        <li
          onClick={() => onCategoryChange("")}
          className={`category-item ${
            selectedCategory === "" ? "active" : ""
          }`}
        >
          All Categories
        </li>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`category-item ${
              selectedCategory === category ? "active" : ""
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
