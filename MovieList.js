import React from 'react';
import MovieItem from './MovieItem';

export default function MovieList({ movies, query, isOpen1, setIsOpen1 }) {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen1(!isOpen1)}>
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        <ul className="list list-movies">
          {movies
            .filter((movie) =>
              movie.Title.toLowerCase().includes(query.toLowerCase())
            )
            .map((movie) => (
              <MovieItem key={movie.imdbID} movie={movie} />
            ))}
        </ul>
      )}
    </div>
  );
}
