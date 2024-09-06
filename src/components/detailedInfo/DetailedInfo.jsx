import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import api from '../../utils/api/api';

import { movieDetails } from '../../constants/movieDetails'; 
import './detailedInfo.css';


const DetailedInfo = () => {
  const { movieId } = useParams();
  let [movie, setMovie] = useState(null);
  let [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

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
        const data = await fetchMovieData(movieId);
        if (data && data.Response === 'False') {
          setError(data.Error);
          setMovie(null);
        } else {
          setMovie(data);
          setError(null);
        }
      } catch (error) {
        setError('An error occurred while fetching movie data.');
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };

    getMovieData();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="detailed-card">
      {movie ? (
        <>
          <div className="header">
            <h1>{movie.Title ? movie.Title : 'N/A'}</h1>
            <img
              src={
                movie.Poster ||
                'https://th.bing.com/th/id/OIP.uWo0YBQRuoinBSeEyl2noAAAAA?w=270&h=360&rs=1&pid=ImgDetMain'
              }
              alt={movie.Title}
            />
          </div>
          <div className="content">
            {movieDetails.map((detail) => (
              <p key={detail.propertyName}>
                <strong>{detail.name}:</strong> {movie[detail.propertyName] || 'N/A'}
              </p>
            ))}
          </div>
        </>
      ) : (
        <p>Movie data not available.</p>
      )}
    </div>
  );
}

export default DetailedInfo;
