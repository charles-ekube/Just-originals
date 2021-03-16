import React from 'react';
import './JoinUs.css';
import { IoBagSharp } from 'react-icons/io5'
import { BsArrowRight } from 'react-icons/bs'
import { Pool } from '../../Assets';
import {Link} from 'react-router-dom';

const JoinUs = () => {
    return (
        <>
            <section className='join-us-container'>
                <span></span>
                <h2>What would you get when you join us</h2>
                <section className='join-us-content'>
                    <article className='join-us-text'>
                        <div className='join-us-text-header'> 
                            <span><IoBagSharp/></span>
                            <h4>Project Management</h4>
                        </div>
                        <div>
                            <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.Lorem ipsum
                            </p>
                        </div>
                        <div className='join-us-text-footer' >
                            <Link to='/Projects'>Let's Manage You</Link>
                            <span><BsArrowRight/></span>
                        </div>
                    </article>
                    <article className='join-us-text'>
                        <div className='join-us-text-header'>
                             <span>
                                 <img src={Pool} alt='poster' width='23'/>
                             </span>
                            <h4>Talent Management</h4>
                        </div>
                        <div>
                            <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.Lorem ipsum
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
