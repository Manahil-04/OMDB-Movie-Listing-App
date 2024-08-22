import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

import DetailedCard from '../detailedCard/detailedCard.jsx';
import FetchMovieData from '../fetchMovie/fetchMovie.jsx';


const DetailedInfo = () => {
  const { movieId } = useParams();
  let [movie, setMovie] = useState(null);
  let [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const getMovieData = async () => {
      setLoading(true); 
      try {
        const data = await FetchMovieData(movieId);
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
    <DetailedCard movie={movie} />
  )
}

export default DetailedInfo;
