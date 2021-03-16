import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Cards } from '../../Cards/Cards';
import './ProjectCarousel.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ProjectCarousel = () => {

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        prevArrow: <div className='prevArrow'><MdKeyboardArrowLeft/></div>,
        nextArrow: <div className='nextArrow'><MdKeyboardArrowRight/></div>,
        indicators: true,
        items: 3,

        // indicators: <div className="indicator">s</div>
      };
      
    return (
        <>
    <section className="slide-container">
        <Slide {...properties} easing="ease">
          <div className="each-slide">
            <Cards/>
          </div>
          <div className="each-slide">
          <Cards/>
          </div>
          <div className="each-slide">
          <Cards/>
          </div>
        </Slide>
      </section>
            
        </>
    )
}

export {ProjectCarousel}
