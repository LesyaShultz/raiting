import React from "react";
import "./Works.css";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { NavLink } from "react-router-dom";
import CarouselComp from "../Carousel/CarouselComp";
import MovieInfo from "../MovieInfo/MovieInfo";
import CustomPagination from '../Pagination/CustomPagination'
import Movies from '../Pages/Movies'
import Header from "../Header/Header";
import SimpleBottomNavigation from '../Navigation/Navigation'
const API_URL = "https://api.themoviedb.org/3";
const KEY_API = "34f85537887d254751a7d6b41d4ef364";

export function Works() {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [movieInform, onMovieInform] = useState("");
  const [page, setPage] =useState(1);

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: KEY_API,
        query: searchKey,
        language: "ru-US",
        page: page,
      },
    });
    setMovies(results);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  const renderMovies = () =>
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} onMovieInform={onMovieInform} />
    ));

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  return (
    <>
    
    <Header setSearchKey={setSearchKey} NavLink={NavLink}  searchMovies={searchMovies} />
     
    {movieInform && <MovieInfo movieInform={movieInform} />}
      <div className="wrap-car container">
        <CarouselComp />
      </div>
      <div className=" container mt-4 ">
        <div className="row">{renderMovies()}</div>
      </div>
      <CustomPagination setPage={setPage}/>
     

    </>
  );
}

export default Works;
