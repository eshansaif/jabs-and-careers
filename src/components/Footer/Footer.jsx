import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content mt-16">
            <div>
                <Link to="/" className="font-extrabold text-lg text-white flex">
                    <img className="me-1" width="25px" src="/logo.png" alt="" /><span>Jobs & Careers</span></Link>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Products</span>
                <a className="link link-hover">Soft Skill</a>
                <a className="link link-hover">Making Resume</a>
                <a className="link link-hover">Job Placement</a>
                <a className="link link-hover">Grooming Employee</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title">Contact</span>
                <a className="link link-hover">524 Broadway,</a>
                <a className="link link-hover">NYC +1 777 - 978 - 5570</a>
                <a className="link link-hover">Phone: +22 885 4556</a>
            </div>
        </footer>
    );
};

export default Footer;