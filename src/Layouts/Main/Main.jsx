import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Menu from '../../Pages/Shared/MenuBar/Menu';

const Main = () => {
    return (
        <div>
            <Menu />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;