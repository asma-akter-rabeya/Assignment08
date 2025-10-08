import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import Loading from './Loading';


const AllApps = () => {
    const { loading, apps } = useApps();
    const [search, setSearch] = useState('')

    if (loading) {
        return <Loading></Loading>
    };
    const term = search.trim().toLocaleLowerCase()
    const searchedApp = term ? apps.filter(app =>
        app.title.toLocaleLowerCase().includes(term)) : apps;


    return (
        <div className='my-5'>
            <div className='text-center space-y-3.5'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p className='text-sm text-gray-600 mb-3'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='w-11/12 mx-auto flex justify-between'>
                <h1 className='text-xl font-bold'>({searchedApp.length})Apps Found </h1>
                <div>
                    <label className="floating-label">
                        <span className='label'></span>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="🔎 search apps" className="input input-md" />
                    </label>
                </div>
            </div>
            <div className='w-11/12 mt-5 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 bg-gray-50 p-6'>
                {
                    searchedApp.length > 0 ? (
                        searchedApp.map(app => <AppCard key={app.id} app={app} />)
                    ) : (
                        <p className='col-span-full text-center text-gray-500 text-lg'>No apps found 😔</p>
                    )
                }

            </div>
        </div>
    );
};

export default AllApps;