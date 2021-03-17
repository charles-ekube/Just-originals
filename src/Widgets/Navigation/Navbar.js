import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import './Navbar.css';

const Navbar = ({navColor}) => {

    const [showMenu, setShowMenu] = React.useState(false);
    let menu
    // let menuMask

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
                            <Link style={{color:navColor}}>
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
