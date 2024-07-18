import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav>
                <div className="navbar-contents">
                    <a onClick={handleClick} href='#'>
                        <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`} id="burger-menu" />
                    </a>
                    <a href='#' id='nav-name'>Grace <span>Dental</span> Care</a>
                </div>
            </nav>
            <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`} id="dropdown-menu">
                <div className="dropdown-contents">
                    <a href='' onClick={handleClick}><li>About Us</li></a>
                    <a href='#contact-container' onClick={handleClick}><li>Contacts</li></a>
                    <a href='#faq-container' onClick={handleClick}><li>FAQs</li></a>
                </div>
            </div>
        </>
    );
}

export default Navbar
