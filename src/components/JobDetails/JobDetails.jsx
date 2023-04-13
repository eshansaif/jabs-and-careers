import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import DynamicBanner from '../../assets/DynamicBanner';


const JobDetails = () => {
    const paramId = useParams();
    const id = paramId.jobId;

    const jobsData = useLoaderData();

    const [job, setJob] = useState({});

    useEffect(() => {
        const detailedData = jobsData.find(data => data.job_id === id);
        setJob(detailedData);
    }, [])

    const { job_description, responsibilities, educational_requirements, experiences, salary, job_title, phone, email, address } = job;

    const handleApplyNowClick = () => {
        const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs') || '[]');
        const isAlreadyApplied = appliedJobs.some(appliedJob => appliedJob.job_id === job.job_id);
        if (isAlreadyApplied) {
            swal("Relax!", "You Have Already Applied For this Post!", "error");
        } else {
            appliedJobs.push(job);
            localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
            swal("Good job!", "You have already applied to this Position Successfully!", "success");
        }
    }

    return (
        <div>
            <DynamicBanner pageTitle='Job Details'></DynamicBanner>
            <div className="grid md:grid-cols-3 gap-6 mt-16">
                <div className="md:col-span-2">
                    <h1 className="text-center text-[#1A1919] font-bold underline">{job.job_title}</h1>
                    <p className='text-base mb-3'><span className="text-[#1A1919] font-bold">Job Description: </span><span className='font-medium text-[#757575]'>{job_description}</span></p>
                    <p className='text-base mb-3'><span className="text-[#1A1919] font-bold">Job Responsibility: </span><span className='font-medium text-[#757575]'>{responsibilities}</span></p>
                    <p className='mb-3'>
                        <span className='text-[#1A1919] font-bold'>Educational Requirements:</span> <br />
                        <span className='font-medium text-[#757575]'>
                            {educational_requirements}
                        </span>
                    </p>
                    <p>
                        <span className='text-[#1A1919] font-bold'>Experiences:</span> <br />
                        <span className='font-medium text-[#757575]'>
                            {experiences}
                        </span>
                    </p>
                </div>
                <div className="md:col-span-1">
                    <div className='text-[#1A1919] font-bold pb-2 border-b-2'>Job Details</div> <br />

                    <div>
                        <span className='text-[#1A1919] font-bold'>Salary: </span> <span className='font-medium text-[#757575]'>{salary}</span> <br />
                        <span className='text-[#1A1919] font-bold'>Job Title: </span> <span className='font-medium text-[#757575]'>{job_title}</span>
                    </div>
                    <div>
                        <div className='text-[#1A1919] font-bold pb-2 border-b-2 mt-2'>Contact Information</div> <br />
                        <span className='text-[#1A1919] font-bold'>Phone: </span> <span className='font-medium text-[#757575]'>{phone}</span> <br />
                        <span className='text-[#1A1919] font-bold'>Email: </span> <span className='font-medium text-[#757575]'>{email}</span> <br />
                        <span className='text-[#1A1919] font-bold'>Address: </span> <span className='font-medium text-[#757575]'>{address}</span>
                    </div>
                    <button onClick={handleApplyNowClick} className="btn-start-applying px-5 py-3 text-white mt-4">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;