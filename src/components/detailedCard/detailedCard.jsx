import React from 'react';

import './DetailedCard.css';


const DetailedCard = ({ movie }) => {
    console.log('movie obj:', movie);

    return (
        <div className="detailed-card">
            {movie ? (
                <>
                    <div className="header">
                        <h1>{movie.Title ? movie.Title : "N/A"}</h1>
                        <img
                            src={movie.Poster || 'https://th.bing.com/th/id/OIP.uWo0YBQRuoinBSeEyl2noAAAAA?w=270&h=360&rs=1&pid=ImgDetMain'}
                            alt={movie.Title}
                        />
                    </div>
                    <div className="content">
                        <p><strong>Year:</strong> {movie.Year || "N/A"}</p>
                        <p><strong>Type:</strong> {movie.Type || "N/A"}</p>
                        <p><strong>Rated:</strong> {movie.Rated || "N/A"}</p>
                        <p><strong>Released:</strong> {movie.Released || "N/A"}</p>
                        <p><strong>Runtime:</strong> {movie.Runtime || "N/A"}</p>
                        <p><strong>Genre:</strong> {movie.Genre || "N/A"}</p>
                        <p><strong>Director:</strong> {movie.Director || "N/A"}</p>
                        <p><strong>Writer:</strong> {movie.Writer || "N/A"}</p>
                        <p><strong>Actors:</strong> {movie.Actors || "N/A"}</p>
                        <p><strong>Plot:</strong> {movie.Plot || "N/A"}</p>
                        <p><strong>Language:</strong> {movie.Language || "N/A"}</p>
                        <p><strong>Country:</strong> {movie.Country || "N/A"}</p>
                        <p><strong>Awards:</strong> {movie.Awards || "N/A"}</p>
                        <p><strong>IMDB Rating:</strong> {movie.imdbRating || "N/A"}</p>
                        <p><strong>IMDB Votes:</strong> {movie.imdbVotes || "N/A"}</p>
                        <p><strong>IMDB ID:</strong> {movie.imdbID || "N/A"}</p>
                        <p><strong>DVD:</strong> {movie.DVD || "N/A"}</p>
                        <p><strong>BoxOffice:</strong> {movie.BoxOffice || "N/A"}</p>
                        <p><strong>Production:</strong> {movie.Production || "N/A"}</p>
                        <p><strong>Website:</strong> {movie.Website || "N/A"}</p>
                    </div>
                </>
            ) : (
                <p>Movie data not available.</p>
            )}
        </div>
    );
};

export default DetailedCard;
