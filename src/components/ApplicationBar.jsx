import React, { memo } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/system/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';

import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { storeLogin } from '../redux/loginSlice';
import { storeBooks } from '../redux/booksSlice';
import { store } from '../redux/store';

function ApplicationBar() {
    const navigate = useNavigate();
    //const username = useSelector(state => state.login.name);
    const username = store.getState().login.name;
    const dispatch = useDispatch();
    console.log(`Application bar: ${username}`);

    const logMeOut =() =>{
        dispatch(
            storeLogin({
                name: "",
                email: "",
                password: "",
                _id: "",
                __v: 0
            })
        );
        dispatch(
            storeBooks({
                books: []
            })
        )
    }

    return (
        <Box sx={{ flexGrow: 1, display: 'flex', width: "100%", zIndex: 'tooltip', position: 'fixed', top: 0, marginX: 0}}>
            <AppBar position="static" sx={{ padding: "1rem", backgroundColor: "#3F72AF" }} elevation={1}>
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}

                    <Stack spacing={0.1} sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" component="div">
                            LedgerSoft
                        </Typography>
                    </Stack>

                    <Tooltip title={ (username === "")? 'Login' : "Logout" }>
                    <Button  color="inherit" 
                    onClick={()=>{
                        if (username ===  ""){
                            navigate("/home/login")
                        }else{ 
                            navigate("/home/");
                            logMeOut();}}}>
                        { (username ===  "")? 'login' : username }
                    </Button>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box>

    );
}

export default ApplicationBar;
