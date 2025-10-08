import React from 'react';
import { FaSearch } from "react-icons/fa";
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';


const AllApps = () => {
    const {apps} = useApps()
    return (
        <div className='my-5'>
            <div className='text-center space-y-3.5'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p className='text-sm text-gray-600 mb-3'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='w-11/12 mx-auto flex justify-between'>
                <h1 className='text-xl font-bold'>({apps.length})Apps Found </h1>
                <div>
                    <label className="floating-label">    
                        <input type="search" placeholder="🔎 search apps" className="input input-md" />
                    </label>
                </div>
            </div>
             <div className='w-11/12 mt-5 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 bg-gray-50 p-6'>
                {
                    apps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }

            </div>
        </div>
    );
};

export default AllApps;