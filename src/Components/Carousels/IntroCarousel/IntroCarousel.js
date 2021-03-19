import React from 'react'
import {ImageTest, B, C} from '../../../Assets';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './IntroCarousel.css';

const IntroCarousel = () => {

  const properties = {
    prevArrow: <div style={{display:'none'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
    nextArrow: <div style={{display:'none'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
  };
    return (
        <>
         <div className="slidee-container">
      <Fade {...properties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={ImageTest} alt='poster'  width='100%'/>
            <span className='name-holder'>
            <h4>Erica Monica</h4>
              <p>Metal Bender</p>
            </span>
          </div>
          {/* <h2>First Slide</h2> */}
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={B} alt='poster'/>
            <span className='name-holder'>
            <h4>Erica Monica</h4>
              <p>Metal Bender</p>
            </span>
          </div>
          {/* <h2>Second Slide</h2> */}
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={C} alt='poster'/>
            <span className='name-holder'>
              <h4>Erica Monica</h4>
              <p>Metal Bender</p>
            </span>
          </div>
          {/* <h2>Third Slide</h2> */}
        </div>
      </Fade>
    </div>
        </>
    )
}

export {IntroCarousel}
