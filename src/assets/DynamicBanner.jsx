import React from 'react';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg1.png';

const DynamicBanner = ({ pageTitle }) => {
    return (
        <div className="hero mb-16" style={{ backgroundImage: `url("${bg1}"), url("${bg2}")` }}>
            <div className="hero-overlay bg-opacity-60" style={{ backgroundColor: '#f9f8ff', color: 'black' }}></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold text-slate-900">{pageTitle}</h1>
                </div>
            </div>
        </div>
    );
};

export default DynamicBanner;