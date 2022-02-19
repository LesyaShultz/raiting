import React, {useEffect, useState} from "react";
// import { NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom"
 import { useParams } from "react-router-dom";
 import axios from "axios";
 import './MovieInfo.css'
 const API_URL = "https://api.themoviedb.org/3";
const KEY_API = "34f85537887d254751a7d6b41d4ef364";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"; //картинки

function MovieInfo () {
     const params = useParams()
     //  const {id} = useParams;

    const [movieCard, setMovieCard] = useState([]);
const fetchInfo = async () => {

const {data} = await axios.get(
    `${API_URL}/movie/${params.id}`,{
          params: {
            api_key: KEY_API,
            language: "ru-US",
            id: 'id'
          }} 
          )
          console.log(data);
          setMovieCard(data)
        } 
        useEffect(() => {
          fetchInfo();
        },[])
    
    return (
      <>
      <div className="wrapper-card">
  <div class="movie_card" id="tomb">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src={`${IMAGE_BASE_URL}/${movieCard.poster_path}`}/>
      <h1>{movieCard.title}</h1>
      <h4 className="title-data">{movieCard.release_date}
       {/* {movieCard.production_companies.origin_country}  */}
       </h4>
      <span class="minutes">{movieCard.runtime} мин</span>
      {/* <p class="type">{movieCard.genre_ids}</p> */}
    </div>
    <div class="movie_desc">
      <p class="text">
      {movieCard.overview}
      </p>
    </div>
  </div>
  <div class="blur_back tomb_back" style={{backgroundImage: `url(${IMAGE_BASE_URL}${movieCard.poster_path})`}}></div>
  </div>
  </div>
  </>
   )
 }
  
         {/* src={`${IMAGE_BASE_URL}/${movieCard.poster_path}`}          alt="movie.title"         />
     {movieCard.title}
     {movieCard.release_date}
      {movieCard.runtime}      
       {movieCard.overview}
   */}

    

 export default MovieInfo;