import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    const navigation = useNavigation();
    return (
        <div className='flex flex-col'>
            <Navbar></Navbar>
            {navigation.state === "loading" && (
                <div className="flex justify-center py-3">
                    <span className="loading loading-spinner text-violet-600"></span>
                </div>
            )}
            <div className='max-w-screen w-full  lg:py-8 flex-1 min-h-screen mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default MainLayouts;