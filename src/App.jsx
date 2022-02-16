import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {MovieDetail} from './Components/Home/MovieDetail/MovieDetail';
import {CarouselComp} from './Components/Home/CarouselComp/CarouselComp';
import MovieBlock from '../src/Components/MovieBlock/MovieBlock'
import {GenreCard} from './Components/Home/GenreCard/GenreCard';
import Header from './Components/Header/Header'


export function App() {
  return (
    <>
    <Header/>
    <main >
      <div className='container-block'>
       {/* <MovieDetail/> */}
      {/* <   MovieBlock/>  */}
   
     <Routes>
       <Route path="/" element={<CarouselComp/>}/>
       {/* <Route path="/movie/:id" element={<MovieBlock/>}/> */}
       {/* <Route path="/movie/:id" element={<MovieDetail/>}/> */}
       {/* <Route path="/movie/:id" element={<GenreCard/>}/> */}
       
    </Routes> 
     <MovieBlock/>
     
     </div>
    </main>
    </>
  );
}

export default App;
