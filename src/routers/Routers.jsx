import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AboutUs from '../pages/AboutUs';
import PrivateRoute from './PrivateRoute';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>} ></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path='/about' element={ <PrivateRoute><AboutUs></AboutUs></PrivateRoute> }></Route>
            
        </Routes>
    );
};

export default Routers;