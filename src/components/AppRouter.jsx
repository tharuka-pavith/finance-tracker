import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Welcome from '../pages/Welcome';
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

function AppRouter() {
    return (
        <Routes>
            <Route path="/home/" element={<Home />} >
                <Route path="/home/" element={<Welcome />} />
                <Route path="/home/login/" element={<Login />} />
                <Route path="/home/signup/" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
            </Route>

            {/* <Route path="/dashboard" element={<Dashboard />} >
                <Route path="newtask" element={<NewTask />} />
                <Route path="mytasks" element={<MyTask />} />
                <Route path="todotasks" element={<TodoTask />} />
                <Route path="history" element={<History />} />
                <Route path="admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
            </Route> */}


            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}

export default AppRouter;