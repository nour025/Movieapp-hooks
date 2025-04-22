import React, { useState } from "react";

const AddMovie = ({ handleAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.name === "rating" ? Number(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Movie title"
        value={newMovie.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Movie description"
        value={newMovie.description}
        onChange={handleChange}
      ></textarea>
      <input
        name="posterURL"
        type="text"
        placeholder="Image URL"
        value={newMovie.posterURL}
        onChange={handleChange}
      />
      <input
        placeholder="rating from 0 to 5"
        type="number"
        min="0"
        max="5"
        value={newMovie.rating}
        onChange={handleChange}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;

