// import React, { useState, useEffect } from 'react';
// import AppliedJob from '../AppliedJob/AppliedJob';

// const AppliedJobs = () => {
//     const [appliedJobs, setAppliedJobs] = useState([]);

//     useEffect(() => {
//         const storedJobs = JSON.parse(localStorage.getItem('appliedJobs') || '[]');
//         setAppliedJobs(storedJobs);
//     }, []);

//     return (
//         <div>
//             <h2 className="text-center">Applied Jobs</h2>
//             <div className="flex justify-end">
//                 <select className="select select-bordered w-full max-w-xs">
//                     <option disabled selected>Select Option to filter</option>
//                     <option value="onsite">On-site</option>
//                     <option vallue="remote">Remote</option>
//                 </select>
//             </div>
//             <div>
//                 {appliedJobs.map(job => (
//                     <AppliedJob key={job.job_id} job={job}></AppliedJob>
//                 ))}
//             </div>
//         </div >
//     );
// };

// export default AppliedJobs;



import React, { useState, useEffect } from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const storedJobs = JSON.parse(localStorage.getItem('appliedJobs') || '[]');
        setAppliedJobs(storedJobs);
    }, []);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    const filteredJobs = filter === '' ? appliedJobs : appliedJobs.filter(job => job.remote_or_onsite === filter);

    return (
        <div>
            <h2 className="text-center">Applied Jobs</h2>
            <div className="flex justify-end">
                <select className="select select-bordered w-full max-w-xs" onChange={handleFilterChange} value={filter}>
                    <option value="">Select Option to filter</option>
                    <option value="On-site">On-site</option>
                    <option value="Remote">Remote</option>
                </select>
            </div>
            <div>
                {filteredJobs.map(job => (
                    <AppliedJob key={job.job_id} job={job}></AppliedJob>
                ))}
            </div>
        </div >
    );
};

export default AppliedJobs;
