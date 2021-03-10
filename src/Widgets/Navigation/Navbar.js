import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
          <header>
            <nav className='navbar-container'>
                <div className='navbar-logo'>
                    <a>Logo</a>
                </div>
                <ul className='navbar-links'>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Explore</li>
                    <li>Blog</li>
                </ul>
                <div className='navbar-search'>
                    <span></span>
                    <form>
                        <input/>
                    </form>
                </div>
            </nav>
          </header>  
        </>
    )
}

export {Navbar}
