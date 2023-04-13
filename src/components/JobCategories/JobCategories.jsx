import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import AOS from 'aos';
import 'aos/dist/aos.css';

const JobCategories = () => {
    AOS.init();
    const [categories, setCategories] = useState([]);
    // console.log(categories);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/eshansaif/my-data/master/categories-data.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mt-20'>
            <h1 className="text-[#1A1919] font-bold text-5xl text-center underline">Job Category List</h1>
            <p className="text-[#757575] text-base font-medium text-center mt-[20px]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-[28px] gap-5 ">
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategories;