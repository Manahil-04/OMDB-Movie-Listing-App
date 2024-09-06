import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../utils/api/api';
import MoviesDisplay from '../moviesDisplay/moviesDisplay.jsx';

const Movies = ({ movieName: propMovieName }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { movieId, movieName: urlMovieName } = useParams();
  const movieName = propMovieName || urlMovieName || '';

  const fetchMovieData = async (movieID = '', movieName = '') => {
    try {
      let params = {};

      if (movieID) {
        params.i = movieID;
      } else if (movieName) {
        params.s = movieName;
      }

      const response = await api.get('', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching movie data:', error);
      return null;
    }
  };

  useEffect(() => {
    const getMovieData = async () => {
      setLoading(true);
      try {
        const data = await fetchMovieData(movieId, movieName);
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

  return <MoviesDisplay moviesList={moviesList} />;
};

export default Movies;
