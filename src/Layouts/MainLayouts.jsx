import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    return (
        <div className='flex flex-col'>
            <Navbar></Navbar>
            <div className='max-w-screen w-full  lg:py-8 flex-1 min-h-screen mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayouts;