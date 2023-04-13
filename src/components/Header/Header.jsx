import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { HomeModernIcon, BarsArrowDownIcon, BriefcaseIcon, EyeIcon } from '@heroicons/react/24/solid';

const Header = () => {
    return (
        <div className="header-bg-color">
            <div className="navbar flex lg:flex-row flex-col md:justify-between items-center gap-3">
                <div className="flex">
                    <Link to="/" className="btn btn-ghost normal-case text-xl font-['Manrope'] font-extrabold tex-[32px] text-[#1A1919]">
                        <img className="me-1" width="25px" src="/logo.png" alt="" />Jobs & Careers</Link>
                </div>
                <div className="">
                    <ul className="menu menu-horizontal px-1 text-[#757575] flex md:flex-row flex-col">
                        <li><Link to="/"><HomeModernIcon className='h-5 w-5' />Home</Link></li>
                        <li><Link to="/statistics"><BarsArrowDownIcon className='h-5 w-5' />Statistics</Link></li>
                        <li><Link to="/applied-jobs"><BriefcaseIcon className='h-5 w-5' />Applied Jobs</Link></li>
                        <li><Link to="/blogs"><EyeIcon className='h-5 w-5' /> Blogs</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="menu menu-horizontal px-1">
                            <button className="btn-start-applying px-5 py-3 text-white">Start Applying</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;