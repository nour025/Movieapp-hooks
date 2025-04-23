import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDescription from "./components/MovieDescription";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Dom Cobb is a skilled thief...",
      posterURL: "/images/inception.webp",
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      title: "Mr. & Mrs. Smith",
      description: "A married couple discovers...",
      posterURL: "/images/MRSsmith.jpg",
      rating: 4.8,
      trailer: ""
    },
    {
      title: "the matrix",
      description: "A married couple discovers...",
      posterURL: "/images/the matrix.jpg",
      rating: 4.8,
      trailer: "https://www.youtube.com/embed/2Rfa4HixkRQ"
    },

  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies
    .filter((movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase())
    )
    .filter((movie) => movie.rating >= filterRating);

  return (
    <Router>
      <div className="container1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="text1" style={{ textAlign: "center" }}>
                  The Movie App
                </h1>
                <Filter
                  setFilterTitle={setFilterTitle}
                  setFilterRating={setFilterRating}
                />
                <AddMovie onAdd={handleAddMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:title" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

