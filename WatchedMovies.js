import React from 'react';
import WatchedMovieItem from './WatchedMovieItem';

const average = (arr) => arr.length ? arr.reduce((acc, cur) => acc + cur, 0) / arr.length : 0;

export default function WatchedMovies({ watched, isOpen2, setIsOpen2 }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen2(!isOpen2)}>
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <div className="summary">
            <h2>Movies you watched</h2>
            <div>
              <p>
                <span role="img" aria-label="number">#️⃣</span>
                <span>{watched.length} movies</span>
              </p>
              <p>
                <span role="img" aria-label="IMDB rating">⭐️</span>
                <span>{avgImdbRating.toFixed(1)}</span>
              </p>
              <p>
                <span role="img" aria-label="user rating">🌟</span>
                <span>{avgUserRating.toFixed(1)}</span>
              </p>
              <p>
                <span role="img" aria-label="runtime">⏳</span>
                <span>{avgRuntime.toFixed(0)} min</span>
              </p>
            </div>
          </div>
          <ul className="list list-watched">
            {watched.map((movie) => (
              <WatchedMovieItem key={movie.imdbID} movie={movie} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
