import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleClick(){
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar-container'>
            <nav>
                <div className="navbar-contents">
                    <a onClick={handleClick}  id="burger-link">
                        <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`} id="burger-menu" />
                    </a>
                    <a href='#' id='nav-name'> Grace <span>Dental</span> Care</a>
                </div>
            </nav>
            <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`} id="dropdown-menu">
                <div className="dropdown-contents">
                    <a href='#about' onClick={handleClick}><li>About Us</li></a>
                    <a href='#contact-container' onClick={handleClick}><li>Contacts</li></a>
                    <a href='#faq-container' onClick={handleClick}><li>FAQs</li></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
