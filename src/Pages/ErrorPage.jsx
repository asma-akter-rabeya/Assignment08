import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import errImg from '../assets/error-404.png'
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto min-h-screen space-y-3.5'>
                <img className='w-fit mx-auto mt-8 mb-3' src={errImg} alt="" />
                <h1 className='text-center text-2xl font-bold'>Oops, page not found!</h1>
                <p className='text-center text-sm text-gray-500'>The page you are looking for is not available.</p>
                <div className='text-center'>
                    <NavLink to={'/'}><button className='btn text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]'> Go Back</button></NavLink>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ErrorPage;