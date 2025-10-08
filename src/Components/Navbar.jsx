import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start md:ml-6">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li> <NavLink to={'/'}>Home</NavLink> </li>
                        <li> <NavLink to={'/apps'}>Apps</NavLink> </li>
                        <li> <NavLink to={'/install'}>Installation</NavLink> </li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-8  h-8 md:ml-4' src={logo} alt="" />
                    <Link to={'/'} className="btn btn-ghost text-xl bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] bg-clip-text text-transparent">HERO.IO</Link>
                </div>
            </div>

            <div className="navbar-center ">
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    <li> <NavLink to={'/'}> Home</NavLink> </li>
                    <li> <NavLink to={'/apps'}>Apps</NavLink> </li>
                    <li> <NavLink to={'/install'}>Installation</NavLink> </li>
                </ul>
            </div>
            <div className='navbar-end md:mr-6'>
                <a href="https://github.com/asma-akter-rabeya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]"><FaGithub /> Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;