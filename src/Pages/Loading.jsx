import React from 'react';
import logo from '../assets/logo.png'

const Loading = () => {
    return (
        <div className='w-11/12 '>
            <img className='mx-auto animate-spin transition-transform duration-300' src={logo} alt="loading" />
            <h1 className='text-7xl font-bold my-3 text-center'>Loading...</h1>
        </div>
    );
};

export default Loading;