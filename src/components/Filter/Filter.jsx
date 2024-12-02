import React from 'react';

const Filter = ({ categories, selectedCategory, onCategoryChange, onSortChange }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      {/* Filter by Category */}
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border px-4 py-2 rounded"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Sort Options */}
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="border px-4 py-2 rounded"
      >
        <option value="default">Sort By</option>
        <option value="price-low-to-high">Price: Low to High</option>
        <option value="price-high-to-low">Price: High to Low</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    </div>
  );
};

export default Filter;
