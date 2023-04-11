import React from 'react';

const Category = ({ category }) => {
    return (
        <div className="header-bg-color rounded-lg p-10">
            <img src={category.cat_logo} alt="Logo" />
            <h1 className="text-[#474747] font-bold text-lg mt-4">{category.cat_name}</h1>
            <p className="text-[#A3A3A3] text-base font-medium mt-2">{category.jobs_available}+ Jobs Available</p>
        </div>
    );
};

export default Category;