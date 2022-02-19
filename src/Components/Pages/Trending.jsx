import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import './Trending';
import ReactStars from "react-rating-stars-component";
import film from "../../Img/film.jpg";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { NavLink } from "react-router-dom";
import SingleContent from '../SingleContent/SingleContent'
import CustomPagination from '../Pagination/CustomPagination'
import MovieInfo from '../MovieInfo/MovieInfo'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const KEY_API = "34f85537887d254751a7d6b41d4ef364";
const API_URL = "https://api.themoviedb.org/3";

const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] =useState(1);
  const [movieInform, onMovieInform] = useState("");

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `${API_URL}/trending/all/day`,
      {
        params: {
          api_key: KEY_API,
          language: "ru",
          page: page,
        },
      }
    );
    // console.log(data);
    setContent(data.results);
  };

 useEffect(() => {
    fetchTrending();
 }, [page])


  return (
    <div className=" container mt-4 container-series">
        {movieInform && <MovieInfo movieInform={movieInform} />}
    <div className='row'>
   
{content && content.map((movie) => 
    <SingleContent 
    key={movie.id} 
    id={movie.id}
    poster={movie.poster_path}
    title= {movie.title || movie.name}
    date={movie.first_air_date || movie.release_date}
    media_type={movie.media_type}
    vote_average={movie.vote_average}
    rating={movie.rating}
    onMovieInform={onMovieInform}
    key={movie.id} 
    movie={movie} 
    onMovieInform={onMovieInform}
    />
    
)}

       </div>
       <CustomPagination setPage={setPage}/>  
       </div>
     

  )
};
export default Trending;
