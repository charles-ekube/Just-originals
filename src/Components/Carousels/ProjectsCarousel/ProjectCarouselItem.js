import React from 'react'
import Carousel from 'react-elastic-carousel';
import { Tailor } from '../../../Assets';
import { Cards } from '../../Cards/Cards';
import { Modal } from '../../Modals/Modal';
import './ProjectCarousel.css';




const ProjectCarouselItem = () => {
 
 
    const breakPoints = [
      { width : 1, itemsToShow : 1},
      { width : 550, itemsToShow : 2},
      { width : 768, itemsToShow : 3},
      { width : 1200, itemsToShow : 4}
    ];

    

    return (
        <>
        <section className='carousel-main-container'>
          <div className='carousel-main-container-text'>
            <span></span>
            <h2>Previous Client</h2>
          </div>
          <section className='carousel-mini-container'>
          <Carousel breakPoints={breakPoints}>
                <img src={Tailor} alt='poster' style={{height:'300px', width:'300px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}/>
                <img src={Tailor} alt='poster' style={{height:'300px', width:'300px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}/>
                <img src={Tailor} alt='poster' style={{height:'300px', width:'300px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}/>
                <img src={Tailor} alt='poster' style={{height:'300px', width:'300px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}/>
                <img src={Tailor} alt='poster' style={{height:'300px', width:'300px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}/>
                <img src={Tailor} alt='poster' style={{height:'300px', width:'300px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}/>
                <img src={Tailor} alt='poster' style={{height:'300px', width:'300px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}/>
                <img src={Tailor} alt='poster' style={{height:'300px', width:'300px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}/>
                <img src={Tailor} alt='poster' style={{height:'300px', width:'300px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}/>
                <img src={Tailor} alt='poster' style={{height:'300px', width:'300px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}/>
                <img src={Tailor} alt='poster' style={{height:'300px', width:'300px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}/>
                <img src={Tailor} alt='poster' style={{height:'300px', width:'300px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}/>
          </Carousel>
          </section>
          </section>          
        </>
    )
}

export {ProjectCarouselItem}
