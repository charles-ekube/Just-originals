import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({navColor}) => {
    return (
        <>
            <header>
                <nav className='navbar-container'>
                    <div className='navbar-logo'>
                        <Link to='/' style={{color:navColor}}>Logo</Link>
                    </div>
                    <ul className='navbar-links'>
                        <li className='navbar-links-item'>
                            <Link to='/' style={{color:navColor}}>
                                Home
                            </Link>
                        </li>
                        <li className='navbar-links-item'>
                            <Link to='/Projects' style={{color:navColor}}>
                                Projects
                            </Link>
                        </li>
                        <li className='navbar-links-item'>
                            <Link to='/Explore' style={{color:navColor}}>
                                Explore
                            </Link>
                        </li>
                        <li className='navbar-links-item'>
                            <Link style={{color:navColor}}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                    <div className='navbar-search'>
                        <span></span>
                        <form>
                            <input />
                        </form>
                    </div>
                </nav>
            </header>
        </>
    )
}

export { Navbar }
