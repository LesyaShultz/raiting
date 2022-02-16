import "./MovieBlock.css";
import React, { useEffect, useState } from "react";
import { fetchGenre, fetchMovieByGenre, fetchPersons } from "../../Service/service";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

// .

function MovieBlock() {
  const [genres, setGenres] = useState([]); //вивожу фільми по замовчуванню
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [persons, setPersons] = useState([]);


  useEffect(() => {
    const fetchApi = async () => {
      setGenres(await fetchGenre()); //фільми по замовчуванню
      setMovieByGenre(await fetchMovieByGenre(28)); //фільми по запиту жанра
      setPersons(await fetchPersons());
    };
    fetchApi();
  }, []);

  const movieList = movieByGenre.slice(0, 12).map((item, index) => {
    return (
      <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <NavLink to={`/movie/${item.id}`}>
          <img className="img-fluid" src={item.poster} alt={item.title}></img>
          <div className="mt-3">
            <p style={{ fontWeight: "bolder" }}>{item.title}</p>
            <h4 className="release-date">
              {item.release_date ? item.release_date.substring(0, 4) : "-"}{" "}
            </h4>
            <p className="text-center color-r">Рейтинг:{item.rating} </p>
          </div>

          <div className="stars">
            <ReactStars
              count={item.rating}
              size={20}
              color={"#f4c10f"}
            ></ReactStars>
          </div>
        </NavLink>
      </div>
    );
  });

  const trendingPersons = persons.slice(0, 4).map((p, i) => {
    return (
      <div className="col-md-3 col-sm-6" key={i}>
        <img src={p.profileImg} alt={p.name} className="img-fluid mx-auto d-block" />
        <p className="font-weight-bold text-center"> {p.name} </p>
        
        <p className="font-weight-light text-center">Популярный в {p.known}</p>
      </div>
      
    )
  }

  )

  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id)); //фільми по запиту жанра
  };

  const genreList = genres.map((item, index) => {
    //вивожу список жанрів в button
    return (
      <NavLink to={`/movie/${item.id}`}>
        <li className="list-inline-item" key={index}>
          <Button
            className="item-name btn-outline-info"
            variant="outline-info"
            type="button"
            onClick={() => {
              handleGenreClick(item.id); //подія запит жанра   +
            }}
          >
            {item.name}
          </Button>
        </li>
      </NavLink>
    );
  });
  return (
    <>
      <div>
        {/* список жанрів */}
        <ul>{genreList}</ul>
      </div>
      <div className="container">
        {/* вивожу фільми по замовчуванню  */}
        <div className="row">{movieList}</div>

        <div className="container">
          <div className="row">
            <p className="font-weight-bold" style={{color: '#0DCAF0'}}>
ПОПУЛЯРНЫЕ АКТЕРЫ ЭТОЙ НЕДЕЛИ
            </p>
          </div>
        </div>

       <div className="wrapPerson row mt-3 ">{trendingPersons}</div>

      </div>
    </>
  );
}
export default MovieBlock;
