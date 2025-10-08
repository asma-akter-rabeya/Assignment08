import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import { useParams } from 'react-router';
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import Loading from '../Pages/Loading';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { toast } from 'react-toastify';

const AppDetails = () => {
    const { loading, apps } = useApps();
    const { id } = useParams();
    const appID = parseInt(id)
    const app = apps.find(data => data.id === appID);
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
        const alreadyInstalled = stored.some(a => a.id === appID);
        setInstalled(alreadyInstalled);
    }, [appID]);



    if (loading) {
        return <Loading></Loading>
    }
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app || {};

    const handleInstall = () => {
        let stored = JSON.parse(localStorage.getItem("installedApps")) || [];

        if (!stored.some(a => a.id === appID)) {
            stored.push(app);
            localStorage.setItem("installedApps", JSON.stringify(stored));
            setInstalled(true);
            toast.success(`${title} has been installed successfully!`);
        } else {
            toast.error(`${title} is already installed.`);
        }
    };


    return (
        <div className='mt-2.5'>
            <div className=' md:flex items-center  w-11/12 mx-auto gap-7 border-b border-b-gray-400'>
                <div className=''>
                    <img className='max-w-[300px] max-h-[300px] p-9 bg-gray-100 shadow' src={image} />
                </div>
                <div className='p-9 space-y-2.5 '>
                    <div >
                        <h1 className='text-xl font-bold'>{title} </h1>
                        <p><span className='text-gray-500 text-sm'>Developed By</span> <span className='text-blue-600'>{companyName} </span></p>
                    </div>
                    <div className='flex gap-12 border-b border-t  border-t-gray-300 border-b-gray-300'>
                        <div className=' space-y-1.5 mt-5 mb-5'>
                            <p className='text-3xl text-green-600'> <LuDownload /> </p>
                            <p className='text-sm text-gray-500 '>Downloads </p> <br className='block lg:hidden' />
                            <p className='text-3xl font-bold '> {downloads} </p>
                        </div>
                        <div className=' space-y-1.5 mt-5 mb-5'>
                            <p className='text-3xl text-orange-400'> <FaStar />  </p>
                            <p className='text-sm text-gray-500 '>Average Ratings </p>
                            <p className='text-3xl font-bold '> {ratingAvg} </p>
                        </div>
                        <div className=' space-y-1.5 mt-5 mb-5'>
                            <p className='text-3xl text-blue-600'><MdReviews /> </p>
                            <p className='text-sm text-gray-500 '>Total Review</p>
                            <p className='text-3xl font-bold '> {reviews} </p>
                        </div>

                    </div>
                    <div>
                        <button
                            onClick={handleInstall}
                            className={`btn my-3  ${installed ? 'bg-gray-400 text-black cursor-not-allowed' : 'bg-green-400 text-white'}`}
                            disabled={installed}
                        >
                            {installed ? 'Installed' : `Install Now (${size} MB)`}
                        </button>
                    </div>
                </div>
            </div>
            {/* div for Charts */}
            <div className='w-11/12 mx-auto'>
                <div className='space-y-3'>
                    <h3 className='text-lg font-semibold py-3'>Ratings</h3>
                    <div className='bg-base-100 border-t border-b border-b-gray-400 border-t-gray-400 p-4 h-80'>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                layout="vertical"
                                width={500}
                                height={300}
                                data={ratings}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" dataKey="count" />
                                <YAxis type="category" dataKey="name" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey={"count"} fill="orange" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                            </BarChart>
                        </ResponsiveContainer>

                    </div>

                </div>

            </div>
            {/* description */}
            <div className='w-11/12 mx-auto space-y-2.5 mt-4'>
                <h1 className='text-2xl font-bold'>Description</h1>
                <p className='text-sm text-gray-500'>{description} </p>

            </div>


        </div>
    );
};

export default AppDetails;