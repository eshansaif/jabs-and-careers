import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="flex justify-center items-center header-bg-color">
            <div className="lg:flex flex-col-reverse lg:flex-row  justify-between gap-4">

                <div className="lg:w-1/2 text-left p-6 md:order-1 order-2">
                    <h2 className="text-[60px] font-bold"><span className="mb-0">One Step</span> <br /> <span className="mb-[-5px]">Closer To Your</span> <br /> <span className="primary-bg">Dream Job</span> </h2>
                    <p className="text-[#757575] text-base font-medium  mb-5">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div className="card-actions justify-start">
                        <button className="btn-start-applying px-5 py-3 text-white">Get Started</button>
                    </div>
                </div>
                <figure className="h-full mx-auto md:order-2 order-1"><img className="md:h-96 ps-8" src="/banner-img.png" alt="banner image" /></figure>
            </div>
        </div >
    );
};

export default Banner;