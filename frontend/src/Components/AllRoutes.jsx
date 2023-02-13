import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUser from "./AddUser";
import AllUser from "./AllUser";
import EditUser from "./EditUser";
import Login from "./Login";
import Navbar from "./Navbar";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
    return (
        <>
           
            <Routes>
                <Route path="/" element={<PrivateRoute> <AllUser />  </PrivateRoute>} />
                <Route path="/add" element={<PrivateRoute> <AddUser /></PrivateRoute>} />
                <Route path="/edit/:id" element={ <PrivateRoute><EditUser /></PrivateRoute> } />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
};

export default AllRoutes;
