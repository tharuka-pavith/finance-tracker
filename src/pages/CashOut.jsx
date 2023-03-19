import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

//Date picker
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import dayjs from 'dayjs';

//http requests
import axios from 'axios';

//redux store
import { store } from '../redux/store';

import { useNavigate } from 'react-router-dom';

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
    const bookId = store.getState().books.currentBook;
    const navigate = useNavigate();

    const [entryDate, setEntryDate] = useState('');
    const [entryTime, setEntryTime] = useState('');
    const [amount, setAmount] = useState(0.0);
    const [remark, setremark] = useState('');

    const today = dayjs();

    const postData = () => {
        const date = new Date(entryDate);
        const time = new Date(entryTime);
        const finalDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes());
        console.log(finalDate);
        axios.post(`http://localhost:3001/api/post/entry`, {
                "book_id": bookId,
                "date" : finalDate,
                "amount": amount,
                "remark": remark,
                "type": false //Cash Out1
            }).then((res) =>{
                console.log(res.data);
                navigate("/dashboard/cashbook");
            }).catch((error)=>{
                alert("Error saving data!");
                console.log(error);
            });
    }

    return (
        <Container maxWidth='sm'>
            <Paper variant='outlined' sx={paperStyles}>
                <Typography color='success' variant='h4' textAlign={'center'} fontWeight="medium" sx={{ my: '10px' }}>Cash Out Entry</Typography>
                <Box sx={gridStyle}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                        {/* <TextField id="outlined-basic" label="Date" variant="outlined" /> */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker value={entryDate} 
                                onChange={(e) => setEntryDate(e)} />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6}>
                        {/* <TextField id="outlined-basic1" label="Time" variant="outlined" /> */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopTimePicker value={entryTime}
                                onChange={(e) => setEntryTime(e)}/>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12}>
                        <TextField value={amount} required id="amount-id" label="Amount" variant="outlined" 
                            onChange={(e) => setAmount(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField value={remark} fullWidth id="description-id" label="Description" variant="outlined" 
                            onChange={(e) => setremark(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                        <Typography color='success' variant='subtitle2' textAlign={'left'} fontWeight="medium" sx={{ my: '10px' }}>Bill (Image): </Typography>
                        <Button variant='outlined'>Upload</Button>
                        </Grid>
                        <Grid item xs={6}>
                        <Button size={'large'} sx={buttonStyle} variant="outlined" color='error'
                                onClick={() => navigate("/dashboard/cashbook")}>Cancel</Button>
                        </Grid>
                        <Grid item xs={6}>
                        <Button size={'large'} sx={buttonStyle} variant="contained" color='success'
                                onClick={postData}>Save</Button> {/*TODO: handle onClick => http POST */}
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>

    );
}

export default CashOut;