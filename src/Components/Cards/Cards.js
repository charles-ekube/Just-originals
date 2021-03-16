import React from 'react';
import { Builder, Tailor } from '../../Assets';
import './Cards.css';




export const ProjectCards = () => {

    return (
        <>
            <section className='project-card-container'>
                <div className='project-card-image'>
                <img src={Tailor} alt='poster' />
                </div>
                
                <div className='project-card-footer'>
                    <ul className='project-card-footer-links'>
                        <li>Projects</li>
                        <li>Numbers</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export const ExploreCards = () => {

    return (
        <>
            <section className='explore-card-container'>
                <div className='explore-card-image'>
                <img src={Builder} alt='poster' />
                </div>
                
                <div className='explore-card-footer'>
                    <ul className='explore-card-footer-links'>
                        <li>Projects</li>
                        <li>Numbers</li>
                    </ul>
                </div>
            </section>
        </>
    )
}


const Cards = () => {
    return (
        <>
            <section className='card-container' id='hoverable-card'>
                <div className='card-image-container'>
                    <img src={Tailor} alt='poster'/>
                </div>
                <div className='card-footer'>
                    <ul>
                        <li>Projects</li>
                        <li>Numbers</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export { Cards }
