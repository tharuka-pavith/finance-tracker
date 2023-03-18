import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import loginImage from '../imgs/signup.jpg';
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
    margin: "32px",
    marginTop: "90px",
    borderRadius: '10px',
    // height: "600px",
    padding: "5px"
}

const gridStyle = {
    margin: '10px',
    padding: '5px'
}

const textFieldStyle = {
    width: "100%",
    mx: 'auto'
}

const buttonStyle = {
    width: '100%',
    mx: 'auto'
}

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const navigate = useNavigate();

    const postData = () => { //Function to post data
        // console.log(username); 
        // console.log(email);
        // console.log(password);
        if (password !== passwordConfirm) {
            alert("Please check password");
        } else {
            axios.post(`http://localhost:3001/api/post/user`, {
                "name": username,
                "email": email,
                "password": password  
            }).then((res) =>{
                console.log(res.data);
                navigate("/home");
            }).catch((error)=>{
                console.log(error);
            });
        }
    }

    return (
        <Paper elevation={0} sx={{margin: "7% 1% 1% 1% ", padding: "1%"}}>
        <Container maxWidth="sm" sx={{position: 'absolute', width: '100%', zIndex:1}}>
            <Paper elevation={4} sx={paperStyles}>
                <Typography variant='h4' textAlign={'center'} fontWeight="medium" color='#112D4E' sx={{ my: '10px' }}>Signup</Typography>
                <Box sx={gridStyle}>
                    <Grid container={true} spacing={4} >
                        {/* <Grid item xs={6}>
                            <TextField sx={textFieldStyle}  label="First Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={textFieldStyle}  label="Last Name" variant="outlined" />
                        </Grid> */}
                        <Grid item xs={8}>
                            <TextField label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
                        </Grid>
                        <Grid item xs={7}>
                            <TextField sx={textFieldStyle} label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                        </Grid>
                        {/* <Grid item xs={7}>
                            <TextField sx={textFieldStyle}  label="Mobile" variant="outlined" />
                        </Grid> */}
                        <Grid item xs={6}>
                            <TextField sx={textFieldStyle} type={'password'} label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={textFieldStyle} type={'password'} label="Confirm Password" variant="outlined" onChange={(e) => setPasswordConfirm(e.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <Button size={'large'} sx={buttonStyle} variant="contained" color='success' onClick={postData}>Signup</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button size={'large'} sx={buttonStyle} variant="outlined" color='error' onClick={()=>navigate('/home/')}>Cancel</Button>
                        </Grid>
                    </Grid>


                </Box>

            </Paper>

        </Container>
        <Box style={useStyles}></Box>
        </Paper>
    );
}

export default Signup;