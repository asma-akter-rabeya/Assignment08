import React from 'react';
import Banner from '../Components/Banner';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import { NavLink } from 'react-router';
import Loading from './Loading';

const Home = () => {

    const { loading, apps } = useApps()
    // console.log(apps)
    const featureApps = apps.slice(0, 8)
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div >
            <Banner></Banner>
            <div className='text-center space-y-2.5 mt-10'>
                <h2 className='text-3xl lg:text-4xl font-bold'>Trending Apps</h2>
                <p className='text-sm text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='w-11/12 mt-10 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 bg-gray-50 p-6'>
                {
                    featureApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }

            </div>
            <div className='text-center my-5'>
                <NavLink to={'/apps'}> <button className='btn  bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]'>Show All</button> </NavLink>
            </div>
        </div>
    );
};

export default Home;