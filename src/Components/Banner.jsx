import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import bnrImg from '../assets/hero.png';


const Banner = () => {
    return (
        <div className='mt-4'>
            <div className='text-center space-y-3.5 p-5 md:p-10'>
                <h3 className='text-2xl md:text-5xl font-bold'>We Build <br /> <span className='bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] bg-clip-text text-transparent'>Productive</span> Apps</h3>
                <p className='text-sm text-gray-500'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br className='hidden md:block' />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='space-x-9'>
                    <a href="https://play.google.com/store/games?hl=en"
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className='btn'><FaGooglePlay className='text-green-600' /> Google Play</button></a>
                    <a href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className='btn'> <FaAppStoreIos className='text-blue-700' /> App Store</button></a>
                </div>
            </div>

            <div className='max-w-screen'>
                <img className='mx-auto w-[393px] ' src={bnrImg} alt="" />
                <section class="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] mt-0 text-white">
                    <div class="py-6 lg:py-[50px] px-3 lg:px-[135px] text-center  space-y-[40px]">
                        <h1 class="font-bold text-3xl">Trusted by Millions, Built for You</h1>
                        <div class="grid lg:grid-cols-3 gap-3 lg:gap-[50px]">
                            <div class="rounded-[25px] space-y-3 text-white">
                                <p class="text-sm  ">Total Downloads</p>
                                <p class="text-xl lg:text-4xl  font-bold">29.6M</p>
                                <p class="text-sm  ">21% more than last month</p>
                            </div>
                            <div class="rounded-[25px] space-y-3">
                                <p class="text-sm  text-gray-600">Total Reviews</p>
                                <p class="text-xl lg:text-3xl text-green-700 font-bold"><span>120</span>K+</p>
                                <p class="text-sm  text-gray-600">Communities Involved</p>
                            </div>
                            <div class="rounded-[25px] space-y-3">
                                <p class="text-sm  text-gray-600">Active Apps</p>
                                <p class="text-xl lg:text-3xl text-green-700 font-bold"><span>30</span>K+</p>
                                <p class="text-sm  text-gray-600">Countries Reached</p>
                            </div>

                        </div>
                    </div>

                </section>
            </div>
        </div>

        
    );
};

export default Banner;