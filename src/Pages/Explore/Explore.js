import React from 'react';
import { ExploreCards, GetInTouch } from '../../Components';
import { Footer, Navbar } from '../../Widgets';
import './Explore.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Explore = () => {
    AOS.init();
    return (
        <>
        <Navbar navColor="black" logoBg='rgba(0,0,0,0.4)'/>
          <main className='explore-container'>
            <section className='explore-intro'>
                <span></span>
                <div className='explore-intro-text'>
                    <h1 data-aos="fade-right"  data-aos-duration="1000">Explore Talents</h1>
                    <p data-aos="fade-left"  data-aos-duration="1000">
                        lorem Lorem Ipsum dolor sit amet,
                        consentectur adipiscing et
                        Lorem Ipsum dolor sit amet,
                        consentectur adipiscing et
                        Lorem Ipsum dolor sit amet,
                        consentectur adipiscing et
                    </p>
                </div>
            </section>
            <section className='explore-grid'>
                    <ExploreCards/>
                    <ExploreCards/>
                    <ExploreCards/>
                    <ExploreCards/>
                    <ExploreCards/>
                    <ExploreCards/>
                    <ExploreCards/>
                    <ExploreCards/>
            </section>  
          </main>  
          <section>
                <GetInTouch/>
            </section>
            <section>
                <Footer/>
            </section>
        </>
    )
}

export  {Explore}
