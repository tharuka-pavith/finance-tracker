import { Box } from '@mui/material';
import React from 'react';
import { Link, Outlet } from "react-router-dom"

import ApplicationBar from '../components/ApplicationBar';
import Welcome from './Welcome';

function Home(){
    return(
        <Box>
        <ApplicationBar />
        <Outlet />
        </Box>
    );
}

export default Home;