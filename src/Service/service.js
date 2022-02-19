// import axios from "axios";

// const KEY_API = "34f85537887d254751a7d6b41d4ef364";
// const API_URL = "https://api.themoviedb.org/3";

// // const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${KEY_API}`;
// // const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${KEY_API}`;

// //Список жанрів
// const GENRE_URL = `${API_URL}/genre/movie/list`;

// //Всі фільми
// const MOVIES_URL = `${API_URL}/discover/movie/`;

// const SEARCH_URL = `${API_URL}/search/movie/`;

// //
// const NOW_PLAYNG_URL = `${API_URL}/movie/now_playing`;

// //один фільм
// const MOVIE_URL = `${API_URL}/movie`;

// //актори
// const PERSON_URL = `${API_URL}/trending/person/week`;


// //картинка
// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"; //картинки
// const IMAGE_W500_URL = "https://image.tmdb.org/t/p/w500"

// export const fetchMovies = async () => {
//   try {
//     const { data } = await axios.get(NOW_PLAYNG_URL, {
//       params: {
//         api_key: KEY_API,
//         language: "ru-US",
//         page: 1,
//       },
//     });

//     const modifiedData = data["results"].map((m) => ({
//       id: m["id"],
//       backPoster: IMAGE_BASE_URL + m["backdrop_path"],
//       popularity: m["popularith"],
//       title: m["title"],
//       poster: IMAGE_BASE_URL + m["poster_path"],
//       overview: m["overview"],
//       rating: m["vote_average"],
//       release_date: m["release_date"]
//     }));
//     return modifiedData;
//   } catch (error) {}
// };

// export const fetchGenre = async () => {
//   try {
//     const { data } = await axios.get(GENRE_URL, {
//       params: {
//         api_key: KEY_API,
//         language: "ru",
//         page: 1,
//       },
//     });
//     const modifiedData = data["genres"].map((g) => ({
//       id: g["id"],
//       name: g["name"],
//     }));
//      return modifiedData;
//   } catch (error) { }
// };

// // export const fetchSearch = async (search) => {
// //   try {
// //     const { data } = await axios.get( SEARCH_URL, {
// //       params: {
// //         api_key: KEY_API,
// //         language: "ru",
// //         page: 1,
// //         query: "search"
// //       }
      
// //     });
    
// //     const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"; //картинки

// //     const modifiedData = data["results"].map((s) => ({
// //       id: s["id"],
// //       backPoster: IMAGE_BASE_URL + s["backdrop_path"],
// //       popularity: s["popularith"],
// //       title: s["title"],
// //       poster: IMAGE_BASE_URL + s["poster_path"],
// //       overview: s["overview"],
// //       rating: s["vote_average"],
// //       release_date: s["release_date"]
      
// //     }));
    
// //      return modifiedData;
// //   } catch (error) {}
  
// // };


 
// export const fetchMovieByGenre = async (genre_id) => {
//   try {
//     const { data } = await axios.get(MOVIES_URL, {
//       params: {
//         api_key: KEY_API,
//         language: "ru",
//         page: 1,
//         with_genres: genre_id
//       }
//     });
//     const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"; //картинки

//     const modifiedData = data["results"].map((m) => ({
//       id: m["id"],
//       backPoster: IMAGE_BASE_URL + m["backdrop_path"],
//       popularity: m["popularith"],
//       title: m["title"],
//       poster: IMAGE_BASE_URL + m["poster_path"],
//       overview: m["overview"],
//       rating: m["vote_average"],
//       release_date: m["release_date"]
    
//     }));
//      return modifiedData;
//   } catch (error) { }
// };

// export const fetchPersons = async () => {
//   try {
//     const { data } = await axios.get(PERSON_URL, {
//       params: {
//         api_key: KEY_API,
//         language: "ru",
//         // language: "ru",
//       }
//     })
//       const modifiedData = data['results'].map((p) => ({
//         id: p['id'],
//         popularity: p['popularity'],
//         name: p['name'],
//         profileImg: 'http://image.tmdb.org/t/p/w200' + p['profile_path'],
//         known: p['known_for_department']
//       })) 
//       return modifiedData;
//   } catch (error) { }
// };

// export const fetchTopRatedMovie = () => {};

// export const fetchMovieDetail = async (id) => {
//   try {
//     const { data } = await axios.get(`${MOVIE_URL}/${id}`, {
//       params: {
//         api_key: KEY_API,
//         language: "ru",
        
//       }
//     });
 
// return data;
//   } catch (error) { }
// };

// export const fetchMovieVideos = async(id) => {
//   try {
// const {data} = await axios.get(`${MOVIE_URL}/${id}/videos`,{
//   params: {
//     api_key: KEY_API,
    
//   }
// })
// return data['results'][0];
//   }catch(error) { }
// };

// export const fetchCasts = () => {};

// export const fetchSimilarMovie = () => {};
