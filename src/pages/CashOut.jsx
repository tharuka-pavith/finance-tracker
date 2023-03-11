import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const paperStyles = {
    margin: '50px',
    borderRadius: '10px',
    width: '75%',
    padding: "5px",
    mt: '200px'
}

const gridStyle = {
    margin: '10px',
    padding: '5px'
}


const buttonStyle = {
    width: '100%',
    mx: 'auto'
}

function CashOut() {
    return (
        <Container maxWidth='sm'>
            <Paper variant='outlined' sx={paperStyles}>
                <Typography color='success' variant='h4' textAlign={'center'} fontWeight="medium" sx={{ my: '10px' }}>Cash Out Entry</Typography>
                <Box sx={gridStyle}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Date" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField id="outlined-basic1" label="Time" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField id="outlined-basic2" label="Amount" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic2" label="Description" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                        <Typography color='success' variant='subtitle2' textAlign={'left'} fontWeight="medium" sx={{ my: '10px' }}>Bill (Image): </Typography>
                        <Button variant='outlined'>Upload</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button href='/dashboard/cashbook' size={'large'} sx={buttonStyle} variant="outlined" color='error'>Cancel</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button href='/dashboard/cashbook' size={'large'} sx={buttonStyle} variant="contained" color='success'>Save</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>

    );
}

export default CashOut;