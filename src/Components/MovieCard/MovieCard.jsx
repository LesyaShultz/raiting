import React from "react";
import ReactStars from "react-rating-stars-component";
import film from "../../Img/film.jpg";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import './MovieCard.css';

import { NavLink } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const MovieCard = ({ movie ,onMovieInform }) => {
  // console.log(onMovieInform);
  return (
    
    <div className="wrap-card col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3" onClick={() => onMovieInform(movie.id)}>
      {/* <NavLink to={`/movie/${item.id}`}> */}
      

      <NavLink to={`/movie/${movie.id}`}>
      {movie.poster_path ? (
        <img
          className="img-fluid"
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt="movie.title"
        />
      ) : (
        <img src={film} alt="movie.title" width="200px" />
      )}
      {/* <img className="img-fluid" src={movie.poster} alt={movie.title}></img> */}
      <div className="content-box" >
    <p style={{ fontWeight: "bolder", height: 35, marginBottom: '3px', fontSize: 16 }} className='color-r text-center title'>{movie.title.substring(0, 22)}</p>
        
        <div className="container-rating">
        <h4 className="release-date color-r">
          {movie.release_date ? movie.release_date.substring(0, 4) : "-"}{" "}
        </h4>
        <p className="text-center color-r mb-1">Рейтинг:{movie.rating} {movie.vote_average}</p>
        
        </div>
        <div className="stars">
        <ReactStars
          count={movie.rating}
          size={20}
          color={"#f4c10f"}
        ></ReactStars>
      </div>
      </div>
      </NavLink>
      </div>
    
   
  );
 
};

export default MovieCard;
