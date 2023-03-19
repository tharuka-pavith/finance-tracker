import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux';
import { storeLogin } from '../redux/loginSlice';

import loginImage from '../imgs/login.jpg';
const useStyles = {
    position:'relative',
    backgroundImage: `url(${loginImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "78vh",
    marginTop: 0,
    width: '50%',
    left: '40%' 
    // height: 'auto'
}

const paperStyles = {
    backgroundColor: '#F9F7F7',
    margin: '50px',
    borderRadius: '10px',
    width: '75%',
    padding: "5px",
    mt: '100px',
    marginLeft: '20%'
}

const gridStyle = {
    margin: '10px',
    padding: '5px'
}


const buttonStyle = {
    width: '100%',
    mx: 'auto'
}

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //const [APIData, setAPIData] = useState([]);

    const navigate = useNavigate(); //for programmatical navigation
    const dispatch = useDispatch(); //redux dispatch

    
    const post = () => {
        // console.log(username);
        // console.log(password);
        axios.get(`http://localhost:3001/api/get/user/${username}/${password}`)
            .then(async (response) => {

                if (response.data[0] === undefined) {
                    //console.log("User doesn't exist");
                    alert("Invalid username or password!");
                } else {
                    console.log(response.data[0]);
                    await dispatch(
                        storeLogin({
                            name: response.data[0].name,
                            email: response.data[0].email,
                            password: response.data[0].password,
                            _id: response.data[0]._id,
                            __v: 0
                        })
                    );
                    navigate('/dashboard/'); //pass the state to dashboard
                }

            })
            .catch((error) => console.log(error));
    }

    return (
        <Paper elevation={0} sx={{margin: "7% 1% 1% 1% ", padding: "1%"}}>
        <Container maxWidth='sm' sx={{position: 'absolute', width: '100%', zIndex:1}}>
            <Paper elevation={10} sx={paperStyles}>
                <Typography variant='h4' textAlign={'center'} fontWeight="medium" color='#112D4E' sx={{ my: '10px' }}>Login</Typography>
                <Box sx={gridStyle}>

                    <Stack spacing={3} alignItems="center">
                        <Box><TextField value={username} size='small' label="Username" variant="outlined" onChange={(e) => { setUsername(e.target.value) }} /></Box>

                        <Box><TextField value={password} size='small' label="Password" type="password" variant="outlined" onChange={(e) => { setPassword(e.target.value) }} /></Box>
                    </Stack>

                    <Stack sx={{ mt: '20px' }} direction='row' spacing={2} alignItems="center" justifyContent="center">
                        <Box><Button size='medium' sx={buttonStyle} variant="contained" color='success' onClick={post}>Login</Button></Box>
                        <Box><Button size='medium' sx={buttonStyle} variant="outlined" color='error' onClick={() => navigate('/home')}>Cancel</Button></Box>
                    </Stack>

                </Box>
            </Paper>
        </Container>
        <Box style={useStyles}></Box>
        </Paper>
    );
}

export default Login;