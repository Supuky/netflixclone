import React, { useState, useEffect } from 'react';
import './Navbar.css';
import netflixIcon from '../assets/netflix-logo.png';
import icon from '../assets/0ddccae723d85a703b798a5e682c23c1.png';

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
            // console.log('removescroll');
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src={netflixIcon}
                alt="Netflix Logo"
            />

            <img 
                className="nav__avatar"
                src={icon} 
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Navbar;

