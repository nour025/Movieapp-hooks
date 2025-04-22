import React from "react";

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div className="filter-form">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setFilterTitle(e.target.value)}
      />

      <select onChange={(e) => setFilterRating(Number(e.target.value))}>
        <option value="0">All Ratings</option>
        <option value="1">1 ⭐</option>
        <option value="2">2 ⭐</option>
        <option value="3">3 ⭐</option>
        <option value="4">4 ⭐</option>
        <option value="5">5 ⭐</option>
      </select>
    </div>
  );
};

export default Filter;
