import React from 'react';

const CategoryDropdown = ({ onSelectCategory }) => {
  const handleCategoryChange = (event) => {
    onSelectCategory(event.target.value);
  };

  return (
    <select onChange={handleCategoryChange}>
      <option value="general">General</option>
      <option value="sports">Sports</option>
      <option value="entertainment">Entertainment</option>
    </select>
  );
};

export default CategoryDropdown;
