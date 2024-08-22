import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import './moviesDisplay.css';


const MoviesDisplay = ({ moviesList }) => {
  const [navigateTo, setNavigateTo] = useState(null);

  const handleCardClick = (imdbID) => {
    setNavigateTo(`/movie/${imdbID}`);
  };

  if (navigateTo) {
    return <Navigate to={navigateTo} />;
  }

  console.log('MoviesList receives moviesList', moviesList);
  
  return (
    <div className='movie-grid'>
      {moviesList && moviesList.length > 0 ? (
        moviesList.map((movie) => (
          <div
            key={movie.imdbID}
            onClick={() => handleCardClick(movie.imdbID)}
            className='movie-card'
          >
            <img
              src={movie.Poster || 'https://th.bing.com/th/id/OIP.uWo0YBQRuoinBSeEyl2noAAAAA?w=270&h=360&rs=1&pid=ImgDetMain'}
              alt={movie.Title}
            />
            <h2>{movie.Title}</h2>
            <h4>{movie.Year}</h4>
            <p>{movie.Type}</p>
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}

export default MoviesDisplay;
