import React, { useState, useEffect } from 'react';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobs = JSON.parse(localStorage.getItem('appliedJobs') || '[]');
        setAppliedJobs(storedJobs);
    }, []);

    return (
        <div>
            <h2>Applied Jobs:</h2>
            <ul>
                {appliedJobs.map(job => (
                    <li key={job.job_id}>{job.job_title}</li>
                ))}
            </ul>
        </div>
    );
};

export default AppliedJobs;
