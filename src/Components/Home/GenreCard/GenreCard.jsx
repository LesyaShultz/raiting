import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchMovieByGenre, fetcMovies } from "../../../Service/service";
import "./GenreCard.css";
import ReactStars from 'react-rating-stars-component'


 function GenreCard() {
  const [movieByGenre, setMovieByGenre] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setMovieByGenre(await fetchMovieByGenre());
    };

    fetchApi();
  }, []);

  const movieList = movieByGenre.slice(0, 16).map((item, index) => {
    return (
      <div key={index} className="wrap">
        <NavLink to={`/movie/${item.id}`}>
          <img className="img-fluid" src={item.poster} alt={item.title}></img>
          <p className="text">Рейтинг: 
          <ReactStars count={item.rating} size={20} color={'#f4c10f'}></ReactStars>
          </p>
        </NavLink>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row row-cols-4">{movieList}</div>
    </div>

  );
}

export default GenreCard;
