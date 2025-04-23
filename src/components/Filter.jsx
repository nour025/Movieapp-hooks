import React from "react";
import "./Filter.css";

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by Title"
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <select onChange={(e) => setFilterRating(Number(e.target.value))}>
        <option value="0">Rating: All</option>
        <option value="1">Rating: 1+</option>
        <option value="2">Rating: 2+</option>
        <option value="3">Rating: 3+</option>
        <option value="4">Rating: 4+</option>
        <option value="5">Rating: 5+</option>
      </select>
    </div>
  );
};

export default Filter;
