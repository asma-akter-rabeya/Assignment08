import React from 'react';

const Footer = () => {
    return (
        <div className=''>
            <footer className="bg-black text-gray-300 px-8 py-12 ">

                <div className='flex flex-col lg:flex-row gap-12'>

                    <div className='lg:w-[25%]'>
                        <h3 className="text-white font-semibold mb-2">
                            CS — Ticket System
                        </h3>
                        <p className="text-sm">
                            This project is a React-based Customer Support Zone <br className="hidden sm:block" />
                            designed to display customer tickets, track progress, <br className="hidden sm:block" />
                            and mark them as resolved. It follows a Figma design and <br className="hidden sm:block" />
                            includes additional features like status management,<br className="hidden sm:block" />
                            responsiveness, and toast notifications using React-Toastify
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:w-[75%]">

                        <div>
                            <h4 className="text-white font-semibold mb-2">University</h4>
                            <ul className="space-y-2 text-sm">
                                <li>About Us</li>
                                <li>Our Mission</li>
                                <li>Contact Sale</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-2">Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li>Product & Services</li>
                                <li>Customer Services</li>
                                <li>Download Apps</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-2">Information</h4>
                            <ul className="space-y-2 text-sm">
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Join Us</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-2">Social Links</h4>
                            <ul className="space-y-2 text-sm">
                                <li className='flex gap-2'> <span>@CS — Ticket System</span></li>
                                <li className='flex gap-2'><span>@CS — Ticket System</span></li>
                                <li className='flex gap-2'><span>@CS — Ticket System</span></li>
                                <li className='flex gap-2'><span>support@cst.com</span></li>
                            </ul>
                        </div>
                    </div>

                </div>


                <div className=" text-center text-gray-500  mt-6">
                    © 2025 CS -- Ticket System
                    <br className="block md:hidden" /> All rights reserved.
                </div>
            </footer>

        </div>
    );
};

export default Footer;