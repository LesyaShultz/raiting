import React, { useEffect, useState } from "react";
import film from "../../Img/film.jpg";
import { Carousel } from "react-bootstrap";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "./CarouselComp.css";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const KEY_API = "34f85537887d254751a7d6b41d4ef364";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"; //картинки

function CarouselComp( ) {
  const [moviePopular, setMoviePopular] = useState([]);
  const fetchMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/movie/popular`, {
      params: {
        api_key: KEY_API,
        // query: searchKey,
        language: "ru-US",
        page: 1,
      },
    });
   
    setMoviePopular(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const movies = moviePopular.slice(0, 5).map((item, index) => {
    //   console.log(moviePopular);
    return (
      <Carousel.Item key={index} interval={2000} style={{ maxHeight: 400 }}>
        {item.backdrop_path ? (
          <img
            className="img-fluid"
            src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
            alt="movie.title"
          />
        ) : (
          <img src={film} alt="movie.title" width="200px" />
        )}
        {/* //   alt={item.title}
            //   className="d-block w-100"
              // style={{ width: "100%", height: "100%" }} */}

        <div className="carousel-center">
          <i
            className="fa-solid fa-circle-play"
            style={{ fontSize: 100, color: "yellow", cursor: "pointer" }}
          ></i>
        </div>
        <Carousel.Caption>
          <h3>{item.title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <div>
      <div className="wrap-carousel">
        <Carousel>{movies}</Carousel>
      </div>
    </div>
  );
}

export default CarouselComp;
