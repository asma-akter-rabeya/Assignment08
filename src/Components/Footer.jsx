import React from 'react';
import { BsTwitterX } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
    return (
        <div className=''>
            <footer className="bg-black text-gray-300 px-8 py-12 ">

                <div className='flex flex-col lg:flex-row gap-12'>

                    <div className='lg:w-[25%]'>
                        <h3 className="text-white font-semibold mb-2">
                            Hero IO — Explore, Compare & Download Apps Smarter
                        </h3>
                        <p className="text-sm">
                            Hero IO — Explore, Compare & Download Apps Smarter
                            Hero IO is your go-to destination for discovering the most popular and trending apps around the world.
                            We bring together detailed app insights, authentic reviews, and user ratings — all in one clean interface.
                            From productivity tools to social platforms, Hero IO helps you choose the best apps for your lifestyle.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:w-[75%]">

                        <div>
                            <h4 className="text-white font-semibold mb-2">Explore</h4>
                            <ul className="space-y-2 text-sm">
                                <li>Top Free Apps</li>
                                <li>Trending Now</li>
                                <li>Editor's Choice</li>
                                <li>New Releases</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-2">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li>About Hero IO</li>
                                <li>Careers</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-2">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Cookies Settings</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-2">Follow Us</h4>
                            <ul className="space-y-2 text-sm">
                                <li className='flex gap-2 items-center'><BsTwitterX /><a href="">@HeroIO</a> </li>
                                <li className='flex gap-2 items-center'><FaInstagramSquare /><a href="">@HeroIO_Official</a> </li>
                                <li className='flex gap-2 items-center'><FaYoutube /><a href="">HeroIO Channel</a> </li>
                                <li className='flex gap-2 items-center'><MdOutlineMail /><a href="">support@heroio.com</a> </li>
                                
                            </ul>
                        </div>
                    </div>

                </div>


                <div className=" text-center text-gray-500  mt-6">
                    © 2025 Hero IO. All rights reserved.
                </div>
            </footer>

        </div>
    );
};

export default Footer;