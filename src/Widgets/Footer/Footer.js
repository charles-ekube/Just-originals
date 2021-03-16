import React from 'react';
import './Footer.css';
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";



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
                        <li>Project Management</li>
                        <li>Talent Management</li>
                        <li>Get in Touch</li>
                    </ul>
                </li>
                <li className='footer-base-container'>
                    <ul className='footer-base-content'>
                        <li>ENGLISH</li>
                        <li>
                            <ul className='footer-base-social-links'>
                                <li><FaFacebookF/></li>
                                <li><FaInstagram/></li>
                                <li><FaTwitter/></li>
                            </ul>
                        </li>
                        <li>
                            <ul className='footer-base-copyright'>
                                <li>C</li>
                                <li>JUST ORIGINAL</li>
                                <li>2020</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            </footer>
        </>
    )
}

export {Footer};