import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  if (!movie || !movie.title) return null;

  return (
    <div className="movie-card">
      <Link to={`/movie/${encodeURIComponent(movie.title.toLowerCase())}`}>
        <img src={movie.posterURL} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>⭐ {movie.rating}</p>
      </Link>
    </div>
  );
};

export default MovieCard;




