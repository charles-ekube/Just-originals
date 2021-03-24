import React from 'react';
import './JoinUs.css';
import { IoBagSharp } from 'react-icons/io5'
import { BsArrowRight } from 'react-icons/bs'
import { Pool } from '../../Assets';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const JoinUs = () => {
    AOS.init();
    
    return (
        <>
            <section className='join-us-container'>
                <span></span>
                <h2>What would you get when you join us</h2>
                <section className='join-us-content'>
                    <article className='join-us-text' data-aos="fade-up"  data-aos-duration="1000">
                        <div className='join-us-text-header'> 
                            <span><IoBagSharp/></span>
                            <h4>Project Management</h4>
                        </div>
                        <div>
                            <p>
                            As the digital era continues to refashion the way we do things, 
                            Just Original is set to deliver into innovative services such as partnerships, '
                            content production, talent management and marketing.
                            </p>
                        </div>
                        <div className='join-us-text-footer' >
                            <Link to='/Projects'>Let's Manage You</Link>
                            <span><BsArrowRight/></span>
                        </div>
                    </article>
                    <article className='join-us-text' data-aos="fade-up"  data-aos-duration="1000">
                        <div className='join-us-text-header'>
                             <span>
                                 <img src={Pool} alt='poster' width='23'/>
                             </span>
                            <h4>Talent Management</h4>
                        </div>
                        <div>
                            <p>
                            Talent management is a business strategy and you must
                             fully integrate it within all of the employee-related 
                             processes of the organization. 
                            Just Original identifies available talents and 
                             set their career path for available opportunities
                            </p>
                        </div>
                        <div className='join-us-text-footer'>
                            <Link to='/Explore'>Explore</Link>
                            <span><BsArrowRight/></span>
                        </div>
                    </article>
                </section>
            </section>
           
        </>
    )
}

export { JoinUs }
