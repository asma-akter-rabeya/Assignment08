import React from 'react';
// import image from '../assets/demo-app (1).webp'
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';


const AppCard = ({ app }) => {
    const {id, image, title, downloads, ratingAvg } = app;
    // console.log(image)
    return (
        <Link to={`/apps/${id}`}>
            <div className='bg-white shadow-lg p-3 hover:scale-105 transition ease-in-out'>
                <img className='rounded-md mx-auto h-[150px] lg:h-[280px] w-36 lg:w-56 object-contain' src={image} />
                <h1 className='text-lg font-semibold p-2'>{title} </h1>
                <div className='flex justify-between p-2'>
                    <p className='flex text-green-600 items-center gap-1.5'> <MdOutlineFileDownload />{downloads} </p>
                    <p className='flex text-orange-500 items-center gap-1.5'> <FaStar />{ratingAvg} </p>
                </div>

            </div>
        </Link>
    );
};

export default AppCard;