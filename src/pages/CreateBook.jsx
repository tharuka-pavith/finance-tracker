import { Box,Typography } from '@mui/material';
import React from 'react';
import { Link, Outlet } from "react-router-dom"

import ApplicationBar from '../components/ApplicationBar';
//import Welcome from './Welcome';

import loginImage from '../imgs/newbook.jpg';
const useStyles = {
    position:'absolute',
    backgroundImage: `url(${loginImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "80vh",
    marginTop: 0,
    width: '40%',
    left: '35%',
    top: "20%" 
    // height: 'auto'
}

function CreateBook(){
    return(
        <Box>
            {/* <Typography textAlign={'center'} sx={{mt:"9%", zIndex:1}} variant="h4">Lets create a new book!</Typography> */}
            <Box style={useStyles}></Box>

        </Box>
    );
}

export default CreateBook;