import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Loading from '../Pages/Loading';
import { ToastContainer } from 'react-toastify';


const MainLayouts = () => {
    const navigation = useNavigation();
    // console.log(navigation.state)
    return (
        <div className='flex flex-col'>
            <Navbar></Navbar>
            {navigation.state === "loading" && (
                <Loading></Loading>
            )}
            <div className='max-w-screen w-full  lg:py-8 flex-1 min-h-screen mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                theme="colored"
            />

        </div>
    );
};

export default MainLayouts;