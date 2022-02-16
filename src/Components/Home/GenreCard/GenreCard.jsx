import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./GenreCard.css";
import ReactStars from 'react-rating-stars-component'


export function GenreCard({results}) {
     console.log(results);
     const jas = results.slice(0, 12).map((item, index) => {
         return(
        <div key={index} className="col-lg-3 col-md-4 col-sm-12">
        <NavLink to={`/movie/${item.id}`}>
        <div className='poster-wrapper'>         
              {item.poster_path ?(
                 <img className="img-fluid" src = { `https://image.tmdb.org/t/p/w200${item.poster_path }` }
                         alt={`${item.title} Poster`}
         />
            ) : (
            // <div className='filler-poster'></div>
            <img className="img-fluid" src = { `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAOKPtU2f4GDh-QMNllDodvW-AZd7TLQkVDA&usqp=CAU`}
                         alt={`${item.title} Poster`}/>
             )
            }
        </div>

          {/* <img className="img-fluid" src={item.poster} alt={item.title}></img> */}
        
          <h4 className='release-date'>
                    {item.release_date ? item.release_date.substring(0, 4) : "-"}</h4>      
          <p className="text-center color-r">Рейтинг: 
          <div className="stars">
          <ReactStars count={item.rating} size={20} color={'#f4c10f'} ></ReactStars>
          </div>
          </p>
          
        </NavLink>
      </div>
         )
      }
         
    )
     

return(
   <>
  <div>
  <div className="container">
      <div className="row">
      {jas}
      </div>
  </div>
  </div>
   </> 
)

}

export default GenreCard;
