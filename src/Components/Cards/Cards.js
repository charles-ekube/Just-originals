import React, {useState} from 'react';
import { Builder, Tailor } from '../../Assets';
import { Modal } from '../Modals/Modal';
import './Cards.css';
import AOS from 'aos';
import 'aos/dist/aos.css';




export const ProjectCards = () => {
    AOS.init();  
    return (
        <>
            <section className='project-card-container' data-aos="fade-up"  data-aos-duration="1000"   data-aos-mirror="true">
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
    AOS.init();
    return (
        <>
            <section className='explore-card-container' data-aos="fade-up"  data-aos-duration="1000">
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
    AOS.init();
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(prev => !prev);
    }
    
    return (
        <>
            <section className='card-container' data-aos="fade-up"  data-aos-duration="1000">
                <div className='card-image-container'>
                    <img src={Tailor} alt='poster'onClick={() =>toggleModal()} />                  
                </div>
                <div className='card-footer'>
                    <ul>
                        <li>Projects</li>
                        <li>Numbers</li>
                    </ul>
                </div>
            </section>
            <Modal showModal={showModal} setShowModal={setShowModal}/> 
        </>
    )
}

export { Cards }
