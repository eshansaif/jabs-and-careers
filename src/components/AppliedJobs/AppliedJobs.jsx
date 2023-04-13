import React, { useState, useEffect } from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobs = JSON.parse(localStorage.getItem('appliedJobs') || '[]');
        setAppliedJobs(storedJobs);
    }, []);

    return (
        <div>
            <h2 className="text-center">Applied Jobs</h2>
            <ul>
                {appliedJobs.map(job => (
                    <AppliedJob key={job.job_id} job={job}></AppliedJob>
                ))}
            </ul>
        </div >
    );
};

export default AppliedJobs;
