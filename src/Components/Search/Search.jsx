// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import {SEARCH_URL, API_URL, KEY_API} from '../../Service/service'

// export function Search() {
// const [searchValue, setSerchValue] = useState([]);
// const [timeoutId, setTimeoutId] = useState();
// // const [movieListSearch, setMovieListSearch] = useState([]);

// const fetchSearch = async(searchString) => {
//   const response = await axios.get(` https://api.themoviedb.org/3/search/movie/?query=${searchString}&api_key=34f85537887d254751a7d6b41d4ef364`)
//  console.log(response);
// }

// const onText =(e) => {
//   clearTimeout(timeoutId);
//   setSerchValue(e.target.value);
// const timeout = setTimeout(() => fetchSearch(e.target.value), 500)
// setTimeoutId(timeout)
// }

//    return(
//      <>
      
//       <form class="form-inline-block my-2 my-lg-0">
//         <input
//           class="form-control mr-sm-2"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//           value= {searchValue}
//           onChange= {onText}
//           // value={query}
//           // onChange={onChange}
//         />

//         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
//           Поиск
//         </button>
//       </form>

//       <div>
      
//       </div>
     
//      </>
//    )
//   }
  
//   export default Search;
  