import React from "react";
import { useParams } from "react-router-dom";
import "./MovieDescription.css";

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title.toLowerCase() === title.toLowerCase());

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="movie-description">
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieDescription;
