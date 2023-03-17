import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from '@mui/material/Box';
import { Link, Outlet, useNavigate } from "react-router-dom"

/*------------------Icons-------------------*/
import CreateIcon from '@mui/icons-material/Create';
import TaskIcon from '@mui/icons-material/Task';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HistoryIcon from '@mui/icons-material/History';


import axios from 'axios';
import { useEffect, useState } from "react";

import { store } from '../redux/store';
import { useDispatch } from "react-redux";
import { storeBooks, storeCurrentBook } from '../redux/booksSlice';


function AppDrawer() {
    const [bookList, setBookList] = useState([]);
    const user_id = store.getState().login._id;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/api/get/book/${user_id}`)
            .then((response) => {
                var bookArray = [];
                (response.data).forEach(element => {

                    bookArray.push({ key: element._id, name: element.name, id: element._id })
                });
                setBookList(bookArray);
                dispatch(
                    storeBooks({
                        books: bookArray
                    })
                )
            })
            .catch((error) => console.log(error));
    }, [user_id]);

    return (
        <Box>
            <Drawer variant="permanent" open sx={{ width: '100%' }}>
                <Toolbar variant="regular" sx={{ marginTop: '30px' }} />
                <ListItem disablePadding>
                    <ListItemButton color="success" component="a" to="/dashboard/newbook" sx={{ height: "4rem" }}>
                        <ListItemText primary="New Book" />
                        <ListItemIcon>
                            <CreateIcon sx={{ marginX: '30%' }} />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>

                {bookList.map((element) => {
                    console.log('render component');
                    return (
                        <ListItemButton to='/dashboard/cashbook' id={element.id} key={element.key} component="a" sx={{ maxHeight: "4rem" }}  
                        onClick={ async ()=>{
                            //console.log(element.id);
                            await dispatch(
                                storeCurrentBook(
                                    {currentBook : element.id}
                                )
                            );
                            console.log(element.id);
                            //navigate("/dashboard/cashbook");
                        }}>
                            <ListItemText primary={element.name} />
                        </ListItemButton>);
                })}

            </Drawer>
        </Box>
    );
}

export default AppDrawer;