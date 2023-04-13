import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJob from '../SingleJob/SingleJob';


const FeaturedJobs = () => {

    const jobs = useLoaderData();
    const [showAllJobs, setShowAllJobs] = useState(false);

    const handleToggleAllJobs = () => {
        setShowAllJobs(!showAllJobs);
    }

    const viewDetailsHandler = (job) => {
        // console.log(job);
    }

    return (
        <div>
            <h1 className="text-[#1A1919] font-bold text-5xl text-center underline mt-16">Featured Jobs</h1>
            <p className="text-[#757575] text-base font-medium text-center mt-[20px]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid gap-4 lg:grid-cols-2 mt-8">
                {
                    jobs.map((job, index) => {
                        if (showAllJobs || index < 4) {
                            return <SingleJob key={job.id} job={job} viewDetailsHandler={viewDetailsHandler} />;
                        }
                    })
                }
            </div>
            <div className="flex justify-center items-center mt-8">
                <button onClick={handleToggleAllJobs} className="btn-start-applying px-5 py-3 text-white">
                    {showAllJobs ? 'Show Less Jobs' : 'See All Jobs'}
                </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;