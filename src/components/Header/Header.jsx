import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-bg-color">
            <div className="navbar flex md:flex-row flex-col md:justify-between items-center gap-3">
                <div className="flex">
                    <Link to="/" className="btn btn-ghost normal-case text-xl font-['Manrope'] font-extrabold tex-[32px] text-[#1A1919]">Jobs & Careers</Link>
                </div>
                <div className="">
                    <ul className="menu menu-horizontal px-1 text-[#757575]">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/statistics">Statistics</Link></li>
                        <li><Link to="/applied-jobs">Applied Jobs</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
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