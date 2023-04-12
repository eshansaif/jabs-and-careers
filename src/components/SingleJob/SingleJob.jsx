import React from 'react';
import './SingleJob.css';

const SingleJob = ({ job }) => {
    const { job_title, company_logo, company_name, remote_or_onsite, job_type, address, salary } = job;
    return (
        <div >

            <div className="card w-100 bg-base-100 border rounded">
                <div className="card-body">
                    <img className="w-36 h-11 " src={company_logo} alt={company_name} />
                    <h2 className="card-title text-[#474747] font-bold text-2xl  mt-4">
                        {job_title}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p className="text-[#757575] font-medium text-lg">{company_name}</p>
                    <div className="card-actions justify-start">
                        <div className="py-2 px-4 rounded job-type">{remote_or_onsite}</div>
                        <div className="py-2 px-4 rounded job-type">{job_type}</div>
                    </div>
                    <p className='text-[#757575] font-medium text-base'>{address}</p>
                    <p className='text-[#757575] font-medium text-base'>{salary}</p>
                    <div className="card-actions justify-start">
                        <button className="btn-start-applying px-5 py-3 text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleJob;