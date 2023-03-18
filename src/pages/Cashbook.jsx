import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@mui/material';

import { Link, Outlet, useNavigate } from "react-router-dom"

import { store } from '../redux/store';

//For http get request
import { useEffect } from 'react';
import axios from 'axios';

const columns = [
    { id: 'date', label: 'Date', minWidth: 170 },
    { id: 'time', label: 'Time', minWidth: 100 },
    {
        id: 'amount',
        label: 'Amount',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'description',
        label: 'Description',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'type',
        label: 'Type',
        minWidth: 50,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

// function createData(date, time, amount, description, type) {
    
//     return { date, time, amount, description, type };
// }

function createRow(data){
    var dateObj = new Date(data.date);
    console.log(dateObj);
    var date = `${dateObj.getFullYear()} - ${dateObj.getMonth()+1} - ${dateObj.getDate()-2}`;
    var time = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
    var amount = data.amount;
    var description = data.remark;
    var type = data.type? "cash In" : "cash Out";

    return { date, time, amount, description, type};
}

// const rows = [
    // createData('Date', 'time', 1324171354, 'description', 'type' ),
    // createData('China', 'CN', 1403500365, 9596961),
    // createData('Italy', 'IT', 60483973, 301340),
    // createData('United States', 'US', 327167434, 9833520),
    // createData('Canada', 'CA', 37602103, 9984670),
    // createData('Australia', 'AU', 25475400, 7692024),
    // createData('Germany', 'DE', 83019200, 357578),
    // createData('Ireland', 'IE', 4857000, 70273),
    // createData('Mexico', 'MX', 126577691, 1972550),
    // createData('Japan', 'JP', 126317000, 377973),
    // createData('France', 'FR', 67022000, 640679),
    // createData('United Kingdom', 'GB', 67545757, 242495),
    // createData('Russia', 'RU', 146793744, 17098246),
    // createData('Nigeria', 'NG', 200962417, 923768),
    // createData('Brazil', 'BR', 210147125, 8515767),
// ];

function CashBook() {
    const navigate = useNavigate();

    const [rows, setRows] = useState([]);

    const bookId = store.getState().books.currentBook;
    const bookObj = store.getState().books.books.find((obj) => obj.id === bookId); //get book object (required in line 87)

    useEffect(() => {
        axios.get(`http://localhost:3001/api/get/entry/${bookId}`) //get all entries relevant to bookId
            .then((response) => {
                // console.log(response.data)
                //setRows(response.data)
                const arr = response.data.map((e) => {return createRow(e)})
                setRows(arr.reverse());

            })
            .catch((error) => console.log(error));
    }, [bookId]);

    /**Section : Creating table */
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <Container maxWidth="lg">
            <Paper elevation={0} sx={{ mt: '120px', width: '100%', mx: 'auto' }}>
                <Paper variant='outlined' sx={{padding: '1%'}}>
                <Typography variant='h5' textAlign='left' fontWeight="medium" sx={{ my: '10px' }}>Book : {bookObj.name}</Typography>
                    <Typography variant='h6' textAlign='left' fontWeight="medium" sx={{ my: '10px' }}>Summary</Typography>
                    <Stack direction='row' spacing={5}>
                        <Stack >
                        <Paper variant='outlined' sx={{padding: '5%', margin: '5%', width: '200px'}} >
                            <Typography variant='subtitle1'>CashIn</Typography>
                            <Typography variant='h5'>100, 000</Typography>
                        </Paper>
                        </Stack>
                        <Stack >
                        <Paper variant='outlined' sx={{padding: '5%', margin: '5%', width: '200px'}}>
                            <Typography variant='subtitle1'>CashOut</Typography>
                            <Typography variant='h5'>20, 000</Typography>
                        </Paper>
                        </Stack>
                        <Stack>
                            <Button sx={{marginTop: '10%'}} size='large' variant='contained' color="success" 
                            onClick={()=> navigate("/dashboard/cash-in")}>Cash  In</Button>
                        </Stack>
                        <Stack>
                            <Button sx={{marginTop: '10%'}} size='large' variant='contained' color="error"
                            onClick={()=> navigate("/dashboard/cash-out")} >Cash Out</Button>
                        </Stack>
                    </Stack>
                </Paper>

                <Typography variant='h6' textAlign='left' fontWeight="medium" sx={{ my: '10px' }}>Details</Typography>
                <TableContainer sx={{ maxHeight: 500 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="button" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[5,10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Container >
    );
}

export default CashBook;