import "./Header.css";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import GenreCard from '../Home/GenreCard/GenreCard'
import Search from '../Search/Search'



function Header() {
 
  
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <NavLink to="/">
        <i class="fa fa-film" aria-hidden="true"></i>
      </NavLink>
     {/* <Search/> */}
    </nav>
    {/* <GenreCard results={results}></GenreCard> */}
    </>
  );
}
export default Header;

