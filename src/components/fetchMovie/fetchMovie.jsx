import React from 'react';

import api from '../../utils/api/api';


const FetchMovieData = async (movieID = '', movieName = '') => {
  try {
    let params = {}
    
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

export default FetchMovieData;
