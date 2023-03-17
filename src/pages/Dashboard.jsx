import Box from "@mui/material/Box";
import React, { memo } from "react";
import Grid from '@mui/material/Grid';
import { Link, Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom";

import ApplicationBar from '../components/ApplicationBar';
import AppDrawer from '../components/AppDrawer';
import { useSelector } from "react-redux";

function Dashboard() {
    
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box>
                    <ApplicationBar/>
                </Box>
            </Grid>

            <Grid item xs={1}>
                <Box>
                    <AppDrawer/>
                </Box>
            </Grid>

            <Grid item xs={11}> {/*Contain different pages*/}
                <Box>
                    <Outlet />
                </Box>
            </Grid>
        </Grid>
    );
}

export default Dashboard;