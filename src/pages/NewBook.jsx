import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//import Grid from '@mui/material/Grid';

function NewBook() {

    return (
        <Container maxWidth="lg">
            <Paper elevation={0} sx={{ mt: '120px', width: '100%', mx: 'auto' }}>
                <Stack spacing={1}>
                    <Typography variant='h4' textAlign='left' fontWeight="medium" sx={{ my: '10px' }}>Create New Book</Typography>
                    <TextField label="Book Name" variant="outlined" sx={{ width: '50%' }} />
                    <Button size={'large'} variant="contained" color='success' sx={{width:'10%'}}>Add</Button>
                </Stack>
            </Paper>
        </Container >
    );
}


export default NewBook;






















// import TaskCard from '../components/TaskCard';

// const cards = [
//     { heading: "Cash voucher", details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
//     { heading: "Approval Letter", details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
//     { heading: "Verification Letter", details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
//     { heading: "Cash voucher", details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
//     { heading: "Cash voucher", details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
//     { heading: "Cash voucher", details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' }
// ];

// function createCard(card) {
//     return(
//         <Grid item xs={4}>
//         <TaskCard heading={card.heading} date={new Date().toDateString()} details={card.details} />
//     </Grid>
//     );
// }

// function MyTask() {
//     return (
//         <Container maxWidth="lg">
//             <Paper elevation={0} sx={{ mt: '120px', width: '100%', mx: 'auto' }}>
//                 <Typography variant='h5' textAlign='left' fontWeight="medium" sx={{ my: '10px' }}>My Tasks</Typography>

//                 <Grid container spacing={3}>
//                     <Grid item xs={4}>
//                         <TaskCard heading="Voucher" date={new Date().toDateString()} details="This is a cash voucher" />
//                     </Grid>

//                     {/* <Grid item xs={4}>
//                         <TaskCard heading="Voucher" details="This is a cash voucher" />
//                     </Grid>

//                     <Grid item xs={4}>
//                         <TaskCard heading="Voucher" details="This is a cash voucher" />
//                     </Grid>

//                     <Grid item xs={4}>
//                         <TaskCard heading="Voucher" details="This is a cash voucher" />
//                     </Grid> */}

//                     {cards.map(createCard)}
//                 </Grid>
//             </Paper>
//         </Container>
//     );
// }
