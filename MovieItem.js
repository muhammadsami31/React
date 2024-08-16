import React from 'react';

export default function MovieItem({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span role="img" aria-label="year">🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}


