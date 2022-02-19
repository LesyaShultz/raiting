import axios from "axios"
import { useEffect } from "react";
const API_URL = "https://api.themoviedb.org/3";
const KEY_API = "34f85537887d254751a7d6b41d4ef364";


const Genres = () => {
const fetchGenres = async () => {
    const {data} = await axios.get(
        `${API_URL}/genre/${type}/list`, {
            params: {
              api_key: KEY_API,
              language: "US",
              page: page,
            },
          }
         
    );
    // console.log(genres);
    setGenres(data.genres);
}

useEffect(()=>{
    fetchGenres();

    return() => {
        setGenres({})  
    }
}, [])
    return(
        <>
        
        </>
    )
}