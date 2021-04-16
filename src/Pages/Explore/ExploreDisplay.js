import React from 'react';
import {  Loader, PreviousClients, ServicesCarousel, TestimoniesCarousel, PreviousProjects, TeamsCarousel } from '../../Components';
import './Explore.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import {Link} from 'react-router-dom';
import { Explore, Logo } from '../../Assets';
import '../../Components/Carousels/ProjectsCarousel/ProjectCarousel.css';
// import { useLocation } from "react-router-dom";
import { Footer } from '../../Widgets';


const ExploreDisplay = ({Talents}) => {
    AOS.init();

    const [ spinner, setSpinner ] = React.useState(true);
  
    React.useEffect(() => {
        setTimeout(() => setSpinner(false), 5000)
    },[setSpinner])

    // const { state } = useLocation();
   
   
    return (
        <>
        {spinner ? <Loader/> : (
            <main data-aos="fade-down"  data-aos-duration="2000">
                <section style={{ background: 'rgba(251, 248, 251, 1)'}}>
                <section className='explore-logo'  data-aos="fade-up"  data-aos-duration="2000">
        
                     <img src={Logo} alt='logo'/>
        
                </section>
                <section className='explore-display-intro'  data-aos="fade-up"  data-aos-duration="2000">
                    <div className='explore-display-intro-text'>
                        <ul>
                            <li>Hello, I'm</li>
                            <li>Rich Ude</li>
                            <li>Painter</li>
                        </ul>
                    </div>
                    <img src={Explore} alt='poster'  data-aos="fade-up"  data-aos-duration="2000"/>
                </section>
                </section>
                <section className='services-carousel'  data-aos="fade-up"  data-aos-duration="2000">
                    <div className='services-carousel-text'>
                        <span></span>
                        <h2>My Services</h2>
                    </div>
                    <div>
                        <ServicesCarousel/>
                    </div>
                </section>
                <section className='previous-projects-carousel-container'  data-aos="fade-up"  data-aos-duration="2000">
                <div className='previous-projects-carousel-text'>
                        <span></span>
                        <h2>Previous Projects</h2>
                    </div>
                    <PreviousProjects/>
                </section>
                <section className='testimonies-carousel-container'  data-aos="fade-up"  data-aos-duration="2000">
                    <TestimoniesCarousel/>
                </section>
                <section style={{background:'#fff', marginBottom:'30px'}}  data-aos="fade-up"  data-aos-duration="2000">
                <div className='previous-projects-carousel-text'>
                        <span></span>
                        <h2>Previous Clients</h2>
                    </div>
                    <PreviousClients/>
                </section>
                <section  data-aos="fade-up"  data-aos-duration="2000">
                    <TeamsCarousel/>
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