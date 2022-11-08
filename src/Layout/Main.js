import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavHeader from '../Components/Shared/NavHeader/NavHeader';
import 'react-toastify/dist/ReactToastify.css';
const Main = () => {
    return (
        <div>
            <NavHeader></NavHeader>
            <ToastContainer />
            <Outlet></Outlet>

        </div>
    );
};

export default Main;