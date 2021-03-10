import React from 'react';
import { IntroCarousel } from '../../Components';
import './Home.css';

const Home = () => {
    return (
        <>
            <section className='home-container'>
                <section className='home-text'>
                    <article>
                        <h1>
                            Lorem Ipsum dolor sit amet,
                            consentectur adipiscing et
                        </h1>
                    </article>
                </section>
                <section className='home-carousel'>
                    <div className='home-carousel-content'>
                        <IntroCarousel/>
                    </div>
                </section>
            </section>
        </>
    )
}

export {Home}
