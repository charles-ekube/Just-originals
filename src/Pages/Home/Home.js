import React from 'react';
import { GetInTouch, IntroCarousel, JoinUs, ProjectCarousel } from '../../Components';
import { Navbar, Footer } from '../../Widgets';
import './Home.css';

const Home = () => {
    return (
        <>
        <Navbar navColor="white"/>
            <section className='home-container'>
                <section className='home-text'>
                    <article>
                        <h1>
                        Operations keeps the lights on, strategy provides a light at the end of the tunnel.
                        {/* but project management is the train engine that moves the organization forward.”  */}
                        {/* ~ Joy Gumz */}
                        </h1>
                    </article>
                </section>
                <section className='home-carousel'>
                    <div className='home-carousel-content'>
                        <IntroCarousel/>
                    </div>
                </section>
            </section>
            <section className='why-join-us-container'>
                    <JoinUs/>
            </section>
            <section>
                <ProjectCarousel/>
            </section>
            <section>
                <GetInTouch/>
            </section>
            <section>
                <Footer/>
            </section>
        </>
    )
}

export {Home}