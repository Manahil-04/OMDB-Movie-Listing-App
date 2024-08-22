import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

import FetchMovieData from '../fetchMovie/fetchMovie.jsx';
import MoviesDisplay from '../moviesDisplay/moviesDisplay.jsx';


const Movies = ({movieName: propMovieName}) => {
  let [moviesList, setMoviesList] = useState([]);
  let [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  let {movieId, movieName: urlMovieName} = useParams();
  const movieName = propMovieName || urlMovieName || '';

  useEffect(() => {
    const getMovieData = async () => {
      setLoading(true); 
      try {
        const data = await FetchMovieData(movieId, movieName);
        console.log('Fetched Movie Data:', data);
        if (data && data.Response === 'False') {
          setError(data.Error);
          setMoviesList([]);
        } else {
          setMoviesList(data.Search ? data.Search : [data]);
          setError(null);
        }
      } catch (error) {
        setError('An error occurred while fetching movie data.');
        setMoviesList([]);
      } finally {
        setLoading(false);
      }
    };

    getMovieData();
  }, [movieId, movieName]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <MoviesDisplay moviesList={moviesList} />
  )
}

export default Movies;
