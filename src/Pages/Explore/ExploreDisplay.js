import React from 'react';
import {  Loader, ProjectCarousel, ServicesCarousel } from '../../Components';
import './Explore.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { B,  Explore,  Explorer, Logo } from '../../Assets';
// import Carousel from 'react-elastic-carousel';
import '../../Components/Carousels/ProjectsCarousel/ProjectCarousel.css';
// import { useLocation } from "react-router-dom";
import { ExploreCarousel, PreviousProjectCarousel } from '../../Components/Carousels/ExploreDisplayCarousel/ExploreCarousel'; 

import { ProjectCarouselItem } from '../../Components/Carousels/ProjectsCarousel/ProjectCarouselItem';
import { Footer } from '../../Widgets';


const ExploreDisplay = ({Talents}) => {
    AOS.init();

    const [ spinner, setSpinner ] = React.useState(true);
  
    React.useEffect(() => {
        setTimeout(() => setSpinner(false), 5000)
    },[setSpinner])

    // const { state } = useLocation();
   
    
    // const [current, setCurrent] = React.useState(0);
    // const length = Talents.length;

    return (
        <>
        {spinner ? <Loader/> : (
            <main>
                <section className='explore-logo'>
                    <img src={Logo} alt='logo'/>
                </section>
                <section className='explore-display-intro'>
                    <div className='explore-display-intro-text'>
                        <ul>
                            <li>Hello, I'm</li>
                            <li>Rich Ude</li>
                            <li>Painter</li>
                        </ul>
                    </div>
                    <img src={Explore} alt='poster'/>
                </section>
                <section className='services-carousel'>
                    <div className='services-carousel-text'>
                        <span></span>
                        <h2>My Services</h2>
                    </div>
                    <div>
                        <ServicesCarousel/>
                    </div>
                </section>
                <section>
                    <PreviousProjectCarousel/>
                </section>
                <section>
                    <Footer/>
                </section>
            </main>
        )}
        </>
    )

}

export {ExploreDisplay}