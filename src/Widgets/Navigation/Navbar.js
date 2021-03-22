import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import './Navbar.css';
import { MdSearch } from 'react-icons/md';
import { Logos } from '../../Assets';

const Navbar = ({navColor, logoBg}) => {


    const [showSearchBar, setShowSearchBar] = React.useState(false);
    const [showMenu, setShowMenu] = React.useState(false);
    

    const toggleSearch = () => {
        setShowSearchBar(prev => !prev);
    }
    
    
    let menu

    if(showMenu) {
        menu = <aside className='mobile-nav-container'>
            <header>
                <nav>
                    <div>
                        <Link to='/' style={{color:navColor}}>Logo</Link>
                    </div>
                    <ul>
                        <li>
                            <Link to='/' style={{color:navColor}}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/Projects' style={{color:navColor}}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to='/Explore' style={{color:navColor}}>
                                Explore
                            </Link>
                        </li>
                        <li>
                            <Link to='/Blog' style={{color:navColor}}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </aside>
    }



    // menuMask = <aside
    // className="mobile-menu-mask"
    // onClick={() => setShowMenu(false)}></aside>


    return (
        <>
            <header>
                <nav className='navbar-container'>
                    <div className='navbar-logo' style={{background:logoBg}}>
                        <Link to='/'>
                            <img src={Logos} alt='logo'/>
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
                        {showSearchBar ? <form className='navbar-search-input'>
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
        </>
    )
}

export { Navbar }
