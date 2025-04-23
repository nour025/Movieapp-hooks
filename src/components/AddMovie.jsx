import React, { useState } from "react";

const AddMovie = ({ onAdd }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !newMovie.title.trim() ||
      !newMovie.description.trim() ||
      !newMovie.posterURL.trim() ||
      !newMovie.rating.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }

    onAdd({ ...newMovie, id: Date.now() }); // Adds a unique ID
    setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <input
        type="text"
        name="title"
        placeholder="Movie Title"
        value={newMovie.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Movie Description"
        value={newMovie.description}
        onChange={handleChange}
        rows={4}
      />
      <input
        type="text"
        name="posterURL"
        placeholder="Poster Image URL"
        value={newMovie.posterURL}
        onChange={handleChange}
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating (1-10)"
        value={newMovie.rating}
        onChange={handleChange}
        min="1"
        max="10"
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
