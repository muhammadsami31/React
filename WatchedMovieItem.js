import React from 'react';

export default function WatchedMovieItem({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.PPoster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span role="img" aria-label="IMDB rating">⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span role="img" aria-label="user rating">🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span role="img" aria-label="runtime">⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
}
