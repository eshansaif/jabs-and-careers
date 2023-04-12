import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FeaturedJobs = () => {
    const jobs = useLoaderData();

    const showFourJobs = jobs.slice(0, 4);


    console.log(showFourJobs);
    return (
        <div>
            <h1>This is featured jobs</h1>
        </div>
    );
};

export default FeaturedJobs;