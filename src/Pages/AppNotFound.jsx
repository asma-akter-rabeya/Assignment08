import React from 'react';
import error from '../assets/App-Error.png'
import { NavLink } from 'react-router';

const AppNotFound = () => {
    return (
        <div className='min-w-[90vw] mx-auto min-h-screen space-y-3.5'>
            <img className='w-fit mx-auto mt-8 mb-3' src={error} alt="error" />
            <h1 className='text-center text-2xl font-bold'>OPPS!! APP NOT FOUND</h1>
            <p className='text-center text-sm text-gray-500'>The App you are requesting is not found on our system.  please try another apps</p>
            <div className='text-center'>
                <NavLink to={'/'}><button className='btn text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]'> Go Back</button></NavLink>
            </div>
        </div>
    );
};

export default AppNotFound;


