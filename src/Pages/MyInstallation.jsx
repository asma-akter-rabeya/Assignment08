import React, { useState } from 'react';
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { toast } from 'react-toastify';
import useApps from '../Hooks/useApps';
import Loading from './Loading';


const MyInstallation = () => {
    const [sortOrder, setSortOrder] = useState('none');
    const [saveApps, setSavedApps] = useState([]);
    const { loading } = useApps();

    const savedApps = JSON.parse(localStorage.getItem("installedApps"));

    if (loading) {
        return <Loading></Loading>
    }


    const sortedItem = (() => {
        if (sortOrder === 'size-ascending') {
            return [...savedApps].sort((item1, item2) => item1.size - item2.size)
        }
        else if (sortOrder === 'size-descending') {
            return [...savedApps].sort((item1, item2) => item2.size - item1.size)
        }
        else {
            return savedApps;
        }

    })()

    const handleRemove = (id) => {
        const list = JSON.parse(localStorage.getItem("installedApps"))
        let newList = list.filter(p => p.id !== id)
        setSavedApps(newList)
        localStorage.setItem("installedApps", JSON.stringify(newList))
        toast.success(`App has been uninstalled successfully!`);
    }


    return (
        <div className='w-11/12 mx-auto bg-gray-100'>
            <div className='my-4 space-y-3.5 p-6'>
                <h1 className='text-center text-3xl font-bold'>Your Installed Apps</h1>
                <p className='text-center text-sm text-gray-500'>Explore All Trending Apps on the Market developed by us</p>

            </div>
            <div>
                <div className='flex justify-between items-center py-5 mt-2.5 p-4'>
                    <h1 > <span className='text-xl font-bold'>({savedApps.length}) Apps Found </span>
                    </h1>

                    <label className='form-control w-full max-w-xs'>
                        <select className='select select-bordered ' value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} >
                            <option value="none">Sort by Size</option>
                            <option value="size-ascending">Low to High</option>
                            <option value="size-descending">High to Low</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className='space-y-3 p-4'>
                {
                    sortedItem.map(p => <div key={p.id} className='bg-white shadow '>
                        <div className='flex justify-between items-center'>
                            <div className='flex'>
                                <img className='w-[80px] h-[80px] p-4' src={p.image} alt="" />
                                <div className='space-y-2.5 py-4'>
                                    <h1 className='font-bold'>{p.title} </h1>
                                    <p className='flex items-center gap-3'>
                                        <span className='text-green-500'><LuDownload /></span>
                                        <span className='text-green-500'>{p.downloads}</span>
                                        <span className='text-orange-500'><FaStar /></span>
                                        <span className='text-orange-500'>{p.ratingAvg} </span>
                                        <span className='text-gray-500'>{p.size} MB </span>
                                    </p>
                                </div>
                            </div>
                            <div className='p-4 '>
                                <button
                                    onClick={() => handleRemove(p.id)}
                                    className='btn text-white bg-green-500'>Uninstall</button>
                            </div>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default MyInstallation;