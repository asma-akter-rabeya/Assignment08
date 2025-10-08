import React from 'react';
import Navbar from '../Components/Navbar';
// import { useRouteError } from 'react-router';

const ErrorPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div>
                <h1>Page Not Found</h1>
            </div>
        </>
    );
};

export default ErrorPage;