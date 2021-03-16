import React from 'react'
import Carousel from 'react-elastic-carousel';
import { Cards } from '../../Cards/Cards';
import './ProjectCarousel.css';

const ProjectCarousel = () => {
 
 
    const breakPoints = [
      { width : 1, itemsToShow : 1},
      { width : 550, itemsToShow : 2},
      { width : 768, itemsToShow : 3},
      { width : 1200, itemsToShow : 4}
    ]
      
    return (
        <>
        <section className='carousel-main-container'>
          <div className='carousel-main-container-text'>
            <span></span>
            <h2>Previous Projects</h2>
          </div>
          <section className='carousel-mini-container'>
          <Carousel 
          // renderArrow={myArrow}
          breakPoints={breakPoints}>

            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
          </Carousel>
          </section>
          </section>          
        </>
    )
}

export {ProjectCarousel}
