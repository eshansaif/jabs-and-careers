import React from 'react';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg1.png';

const DynamicBanner = ({ pageTitle }) => {
    return (
        <div className="hero mb-16" style={{ backgroundImage: `url("https://t3.ftcdn.net/jpg/03/51/51/28/360_F_351512882_2kFH8IaSe4lyA7SXBLzEXyGKNEgbO1iH.jpg")` }}>
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