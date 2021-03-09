import React from 'react';
import './Footer.css';


const Footer = () => {

    return (
        <>
        <footer className='footer-container'>
            <ul className='footer-content'>
                <li className='footer-logo'>
                    Logo
                </li>
                <li className='footer-quick-links-container'>
                    <ul className='footer-quick-links-content'>
                        <li>LINK</li>
                        <li>,LINK</li>
                        <li>DLINK</li>
                    </ul>
                </li>
                <li className='footer-base-container'>
                    <ul className='footer-base-content'>
                        <li>ENGLISH</li>
                        <li>
                            <ul>
                                <li>F</li>
                                <li>I</li>
                                <li>T</li>
                            </ul>
                        </li>
                        <li>2021</li>
                    </ul>
                </li>
            </ul>
            </footer>
        </>
    )
}

export {Footer};