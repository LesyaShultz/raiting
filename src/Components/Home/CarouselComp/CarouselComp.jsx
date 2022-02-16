import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../../Service/service";
import { Carousel } from "react-bootstrap";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "./CarouselComp.css";

export function CarouselComp() {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setNowPlaying(await fetchMovies());
    };

    fetchApi();
  }, []);

  const movies = nowPlaying.slice(0, 5).map((item, index) => {
    return (
      <Carousel.Item
        key={index}
        interval={2000}
        style={{ maxHeight: 400 }}
        // fade={true}
      >
        <img
          src={item.backPoster}
          alt={item.title}
          className="d-block w-100"
          // style={{ width: "100%", height: "100%" }}
        />

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
        <Carousel >{movies}</Carousel>
      </div>
    </div>
  );
}

export default CarouselComp;
