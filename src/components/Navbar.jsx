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
                    <a onClick={handleClick}>
                        <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`} id="burger-menu" />
                    </a>
                    <a>Grace Dental Care</a>
                </div>
            </nav>
            <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`} id="dropdown-menu">
                <div className="dropdown-contents">
                    <a><li>About Us</li></a>
                    <a><li>Contacts</li></a>
                    <a><li>FAQs</li></a>
                </div>
            </div>
        </>
    );
}

export default Navbar
