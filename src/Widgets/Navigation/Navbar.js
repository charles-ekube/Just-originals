import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import './Navbar.css';
import { MdSearch } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Navbar = ({navColor, logoBg}) => {
    AOS.init();

    const [showSearchBar, setShowSearchBar] = React.useState(false);
    const [showMenu, setShowMenu] = React.useState(false);
    

    const toggleSearch = () => {
        setShowSearchBar(prev => !prev);
    }
    
    
    let menu
    let menuMask

    if(showMenu) {
        menu = <aside className='mobile-nav-container' data-aos="fade-in-left"  data-aos-duration="2000">
            <header>
                <nav>
                    <ul className='mobile-menu-list'>
                        <li className='mobile-menu-list-item'>
                            <Link to='/' className='mobile-menu-list-item-content'>
                                Home
                            </Link>
                        </li>
                        <li className='mobile-menu-list-item'>
                            <Link to='/Projects' className='mobile-menu-list-item-content'>
                                Projects
                            </Link>
                        </li>
                        <li className='mobile-menu-list-item'>
                            <Link to='/Explore' className='mobile-menu-list-item-content'>
                                Explore
                            </Link>
                        </li>
                        <li className='mobile-menu-list-item'>
                            <Link to='/Blog' className='mobile-menu-list-item-content'>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </aside>

        
    menuMask = <aside
    className="mobile-menu-mask"
    onClick={() => setShowMenu(false)}></aside>

    }




    return (
        <>
            <header>
                <nav className='navbar-container'>
                    <div className='navbar-logo'>
                        <Link to='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.41 25.91" id="svg" style={{fill:logoBg}}>
                            <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                            <text class="cls-1" transform="translate(33.61 17.59)">Just</text>
                            <text class="cls-1" transform="translate(66.97 17.59)">Original</text>
                            <path class="cls-2" d="M22.76.15,9.41,0S7.79,16.09,5,17.86s-3.26,1.52-3.26,1.52L0,25.74s12.86,1.12,15.86-2.42S22.76.15,22.76.15"/><path class="cls-2" d="M19.8,4.89h3.87a5.94,5.94,0,0,1,5.91,5.92v3.87a5.93,5.93,0,0,1-5.91,5.92H19.8a5.93,5.93,0,0,1-5.92-5.92V10.81A5.94,5.94,0,0,1,19.8,4.89"/><path class="cls-3" d="M19.8,4.89h1.9L17.53,20c-.15.54-3.65-1.64-3.65-5.29V10.81A5.94,5.94,0,0,1,19.8,4.89"/></g></g></svg>
                        </Link>
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
                            <Link to='/Blog' style={{color:navColor}}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                    <div className='navbar-search'>
                        {showSearchBar ? <form className='navbar-search-input' data-aos="fade-in"  data-aos-duration="1000">
                            <input  type='text' placeholder='Search'/>
                            <button><MdSearch/></button>
                        </form> : null}
                        <span className='search-toggle'><FaSearch onClick={toggleSearch}/></span>
                    </div>
                    <div className='mobile-nav-btn'>
                        <FiMenu onClick={() => setShowMenu(!showMenu)}/>
                    </div>
                </nav>
            </header>
            {menu}
            {menuMask}
        </>
    )
}

export { Navbar }
