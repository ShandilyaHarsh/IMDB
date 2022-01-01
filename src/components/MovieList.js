import React from "react";
import "../styles/movie-list.css";
import MovieCard from "./MovieCard";

export default function MovieList({ movieList, isLoading }) {
  console.log(movieList);
  if (isLoading) {
    return "Loading Movies Please wait.";
  } else {
    return (
      <div className="movie-list">
        {/* loop over all movies */}

        {movieList.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    );
  }
}
