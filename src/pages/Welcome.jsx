import { Box, Typography, Button } from '@mui/material'
import React from 'react'

function Welcome(){
    return(
        <Box>
        <Box sx={{margin: '10%', marginTop: '15%'}}>
        <Typography variant='h3' textAlign='left' fontWeight="medium" sx={{ my: '10px' }} color='#112D4E'>Personal Finance Tracker</Typography>
        <Typography variant='h5' textAlign='left' fontWeight="medium" sx={{ my: '10px' }} color="#3F72AF" paddingBottom={10}>
            <ul>
                <li>Keep track of your incomes & expenses </li>
                <li>Access from anywhere </li>
                <li>Secure & privacy protected </li>
                <li>Balance your cash without hassle </li>
            </ul>
        </Typography>

        <Box sx={{ flexGrow: 1, display: 'flex', width: "100%"}}>
        <Button href='/home/login/' size={'large'} variant="contained" color='primary' sx={{mx: '5%', px: '5%'}}>
            login</Button>
        <Button href='/home/signup' size={'large'} variant="contained" color='primary' sx={{mx: '5%', px: '5%'}}>signup</Button>
        </Box>
        </Box>
    </Box>
    );
}

export default Welcome;