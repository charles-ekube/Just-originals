import React from 'react';
import {  Loader } from '../../Components';
// import { Footer } from '../../Widgets';
import { Slide } from 'react-slideshow-image';
import './Explore.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { B, Builder, C } from '../../Assets';
import Carousel from 'react-elastic-carousel';
import '../../Components/Carousels/ProjectsCarousel/ProjectCarousel.css';


const ExploreDisplay = () => {
    AOS.init();

    const [ spinner, setSpinner ] = React.useState(true);
  
    React.useEffect(() => {
        setTimeout(() => setSpinner(false), 5000)
    },[setSpinner])

    const properties = {
        arrows : false,
    }

    
  const breakPoints = [
    { width : 1, itemsToShow : 1},
    { width : 550, itemsToShow : 2},
    { width : 768, itemsToShow : 3},
    { width : 1200, itemsToShow : 4}
  ]

    return (
        <>
        {spinner ? <Loader/> : (
            <main>
                <section className='explore-display-intro'> 
                    {/* <img src={B} alt='poster'/> */}
                    <div className='explore-display-intro-text'>
                        <h5>Hello</h5>
                        <h2>Richard</h2>
                        <h5>Ola</h5>
                    </div>
                </section>
                <section className='services-carousel'>
                    <div>
                        <span></span>
                        <h2>My Services</h2>
                    </div>
                    <div className='services-slider'>
                        <Slide {...properties}>
                            <div className='each-slide'><img src={B} alt='poster'/></div>
                            <div className='each-slide'><img src={C} alt='poster'/></div>
                            <div className='each-slide'><img src={Builder} alt='poster'/></div>
                            <div className='each-slide'><img src={B} alt='poster'/></div>
                        </Slide>
                    </div>
                </section>
                <section className='carousel-main-container'>
          <div className='carousel-main-container-text'>
            <span></span>
            <h2>Previous Projects</h2>
          </div>
          <section className='carousel-mini-container'>
          <Carousel breakPoints={breakPoints}>

                <h1>dnjvdvj</h1>
                <h1>dnjvdvj</h1>
                <h1>dnjvdvj</h1>
                <h1>dnjvdvj</h1>
                <h1>dnjvdvj</h1>
                <h1>dnjvdvj</h1>
                <h1>dnjvdvj</h1>
            {/* <Cards/> */}
          
          </Carousel>
          {/* <Modal showModal={showModal} setShowModal={setShowModal}/> */}
          </section>
          </section> 

            </main>
        )}
        </>
    )

}

export {ExploreDisplay}