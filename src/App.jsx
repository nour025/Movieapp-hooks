// App.js
import React, { useState } from "react";
import MovieList from "./components/MovieList.jsx";
import Filter from "./components/Filter.jsx";
import AddMovie from "./components/AddMovie.jsx";
import "./App.css";


const App = () => {
  // All the movies stored in one place (each is an object)
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Dom Cobb is a skilled thief who steals secrets from deep within the subconscious during the dream state, a dangerous art that has made him a fugitive. Offered a chance to have his criminal record erased, he must carry out the impossible: inception planting an idea deep within someone's mind.",
      posterURL: "/images/inception.webp",
      rating: 5,
    },
    
    {
      title: "Mr. & Mrs. Smith",
      description:
        "A married couple discovers they are both secretly assassins, working for competing agencies and their next assignment is to eliminate each other.",
      posterURL:
        "/images/MRSsmith.jpg",
      rating: 4.8,
    },

    {
      title: "the matrix",
      description:
        "Reality is just code. When a rogue programmer discovers the truth, he’s forced to fight against a perfectly simulated world, controlled by machines and freedom is a virus.",
      posterURL:
        "/images/the matrix.jpg",
      rating: 4.9,
    },
    
    {
      title: "the Genius",
      description:
        "In the underworld of Seoul, a quiet intelligence officer with a photographic memory uncovers a plot that reaches the highest levels of government. Betrayed by his own agency, he becomes the enemy of the state and the only one who can stop a looming war",
      posterURL:
        "/images/the genius.jpg",
      rating: 3.7,
    },

    {
      title: "24 HOURS",
      description:
        "With a ticking clock and a city on edge, an ex-agent must stop a digital apocalypse. One hour, one lead, one shot and the countdown never stops",
      posterURL:
        "/images/24hours.jpg",
      rating: 5,
    },

    {
      title: "StarWars",
      description:
        "In a galaxy on the edge of collapse, a young rebel discovers a hidden power within. As empires clash and stars burn, destiny calls from the shadows of the Force.",
      posterURL:
        "/images/starwars.webp",
      rating: 4.8,
    },


  ]);

  // These two states are used to filter what the user types/selects
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  // Function to add a new movie
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]); // Add new movie to the existing array
  };

  // Filter movies based on title and rating
  const filteredMovies = movies
    .filter((movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase())
    )
    .filter((movie) => movie.rating >= filterRating);

  return (
    <div className="container1">
      <h1 style={{ textAlign: "center" }} className="text1">The Movie App</h1>
      <Filter
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <AddMovie handleAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
