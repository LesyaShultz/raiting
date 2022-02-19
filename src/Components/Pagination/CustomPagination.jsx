import React from "react";
import Pagination from '@mui/material/Pagination';
import './CustomPagination.css';
import {createTheme} from '@material-ui/core';
import { ThemeProvider } from "@emotion/react";

const darkTheme = createTheme({
    palette:{
        type:'dark',
    }
})
const CustomPagination = ({setPage, numOfPages=10 }) => {
    const HandlePage = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };
    return(
<div className="container">
    <div className="row pb-5 pt-3">
<ThemeProvider theme={darkTheme}>
<Pagination 
variant="outlined" 
// color="primary"
hideNextButton
hidePrevButton
count={numOfPages} 
onChange={(e) => HandlePage(e.target.textContent)}/>
</ThemeProvider>
</div>
</div>
    )
}

export default CustomPagination;