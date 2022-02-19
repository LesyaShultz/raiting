import servise from '../../Service/service'
import film from '../../Img/film.jpg'
// import {IMAGE_BASE_URL} from '../../Service/service'
import ReactStars from "react-rating-stars-component";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { NavLink } from 'react-router-dom';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const SingleContent = ({
 movie ,
 onMovieInform ,
    key, 
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
    rating
}) => {
    // onClick={() => onMovieInform(movie.id)}
    return(
      
   <div className="wrap-card col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3" >
      {/* <NavLink to={`/movie/${item.id}`}> */}
      <NavLink to={`/movie/${movie.id}`} >

      {/* <NavLink to={`/movie/${movie.id}`}> */}
      {poster ? (
        <img
          className="img-fluid"
          src={`${IMAGE_BASE_URL}${poster}`}
          alt={title}
        />
      ) : (
        <img src={film} alt={title} width="200px" />
      )}
      {/* <img className="img-fluid" src={movie.poster} alt={movie.title}></img> */}
      <div className="content-box" >
    <p style={{ fontWeight: "bolder", height: 35, marginBottom: '3px', fontSize: 16 }} className='color-r text-center title'>{title.substring(0, 22)}</p>
        
        <div className="container-rating">
        <h4 className="release-date color-r">
          {date ? date.substring(0, 4) : "-"}{" "}
        </h4>
        <p className="text-center color-r mb-1">Рейтинг:{rating} {vote_average}</p>
        
        </div>
        <div className="stars">
        <ReactStars
          count={rating}
          size={20}
          color={"#f4c10f"}
        ></ReactStars>
      </div>
      </div>
      {/* </NavLink> */}
      
<div/> 
</NavLink>

        </div>
       
    )
}
export default SingleContent;