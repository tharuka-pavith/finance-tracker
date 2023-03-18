import { Box, Typography, Button, Paper, Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

import welcomeImage from '../imgs/welcome.jpg';

const useStyles = {
    position:'relative',
    backgroundImage: `url(${welcomeImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "78vh",
    marginTop: 0,
    width: '60%',
    left: '40%' 
    // height: 'auto'
}

function Welcome() {
    const navigate = useNavigate(); 
    return (
        <Paper elevation={0} sx={{margin: "7% 1% 1% 1% ", padding: "1%"}} >
            <Box sx={{position: 'absolute', width: '100%', zIndex:1}}>
                <Typography variant='h2' textAlign='left' fontWeight="medium" sx={{ margin: '5% 1% 1% 1%' }} color='#112D4E'>Personal Finance Tracker</Typography>
                <Typography variant='h5' textAlign='left' fontWeight="medium" sx={{ margin: '1%', padding: '1%' }} color="#3F72AF" paddingBottom={10}>
                    <ul>
                        <li>Keep track of your incomes & expenses </li>
                        <li>Access from anywhere </li>
                        <li>Secure & privacy protected </li>
                        <li>Balance your cash without hassle </li>
                    </ul>
                </Typography>
                <Box sx={{ flexGrow: 1, display: 'flex', width: "100%", margin: '1%', padding: '1%' }}>
                    <Button size={'large'} variant="contained" color='primary' onClick={()=>navigate('/home/login/')} sx={{ mx: '5%', px: '5%' }}>
                        login</Button>
                    <Button size={'large'} variant="contained" color='success' onClick={()=>navigate('/home/signup/')} sx={{ mx: '5%', px: '5%' }}>signup</Button>
                </Box>
            </Box>

            <Box style={useStyles}></Box>

        </Paper>
    );
}

export default Welcome;