import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Welcome from '../pages/Welcome';
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import NewBook from "../pages/NewBook";
import CashBook from "../pages/Cashbook";
import CashIn from "../pages/CashIn";
import CashOut from '../pages/CashOut';

function AppRouter() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} >
                <Route path="/home/" element={<Welcome />} />
                <Route path="/home/login/" element={<Login />} />
                <Route path="/home/signup/" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/dashboard" element={<Dashboard />} >
                <Route path="/dashboard/newbook/" element={<NewBook />} />
                <Route path="/dashboard/cashbook/" element={<CashBook />} />
                <Route path="/dashboard/cash-in/" element={<CashIn />} />
                <Route path="/dashboard/cash-out/" element={<CashOut />} />
                <Route path="*" element={<NotFound />} />
            </Route>


            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}

export default AppRouter;