import React from 'react';
import { ExploreCards, GetInTouch } from '../../Components';
import { Footer, Navbar } from '../../Widgets';
import './Explore.css';


const Explore = () => {
    return (
        <>
        <Navbar navColor="black"/>
          <main className='explore-container'>
            <section className='explore-intro'>
                <span></span>
                <div className='explore-intro-text'>
                    <h1>Explore Talents</h1>
                    <p>
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
