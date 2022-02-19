import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Works from "./Components/Works/Works";
import SimpleBottomNavigation from './Components/Navigation/Navigation'
import MovieInfo from "./Components/MovieInfo/MovieInfo";
import Trending from './Components/Pages/Trending'
import Movies from './Components/Pages/Movies'
import Series from './Components/Pages/Series'
import CarouselComp from './Components/Carousel/CarouselComp'

export function App() {
  return(
    <>
    
    <Routes>
      <Route path="/" element={<Works/>}/>
      <Route path="/trending" element={<Trending/>}/>
      {/* <Route path="/movies" element={<CarouselComp />}/> */}
      <Route path="/series" element={<Series/>}/>
      <Route path="/movie/:id" element={<MovieInfo/>}/>
    </Routes>
    <SimpleBottomNavigation/>
    
    </>
  )
}
export default App;
