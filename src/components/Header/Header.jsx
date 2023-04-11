import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-bg-color">
            <div className="navbar flex md:flex-row flex-col md:justify-between items-center gap-3">
                <div className="flex">
                    <a className="btn btn-ghost normal-case text-xl font-['Manrope'] font-extrabold tex-[32px] text-[#1A1919]">Jobs & Careers</a>
                </div>
                <div className="">
                    <ul className="menu menu-horizontal px-1 text-[#757575]">
                        <li><a>Statistics</a></li>
                        <li><a>Applied Jobs</a></li>
                        <li><a>Blog</a></li>
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