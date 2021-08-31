import React from 'react'
import {ImageTest, B, C, Temp6, Done, Temp3, Done2} from '../../../Assets';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './IntroCarousel.css';


const IntroCarousel = ({Clients}) => {

  const properties = {
    prevArrow: <div style={{display:'none'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
    nextArrow: <div style={{display:'none'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
  };

  


    return (
        <>
          <div className="slide-container">
      <Fade {...properties}>
        {/* {Clients && Clients.map(client => (
          <div className="each-fade">
            <div className='slide-text'>
              <h2>{client.bio}</h2>
            </div>
          <div className="image-container">
            <span className='name-holder'>
              <ul>
                <li className='first'>{client.name}</li>
                <li className='second'>{client.business_type}</li>
              </ul>
            </span>
            <img src={client.avatar} alt='poster'/>
          </div>
        </div>
        ))}  */}
        <div className="each-fade">
            <div className='slide-text'>
              <h2>From Concept Through Completion</h2>
            </div>
          <div className="image-container">
            <span className='name-holder'>
              <ul>
                <li className='first'>Renovation</li>
                <li className='second'>Renovation</li>
              </ul>
            </span>
            <img src={Temp6} alt='poster'/>
          </div>
        </div>
        <div className="each-fade">
            <div className='slide-text'>
              <h2>Making Your Vision Come True, That's What We Do</h2>
            </div>
          <div className="image-container">
            <span className='name-holder'>
              <ul>
              <li className='first'>Renovation</li>
                <li className='second'>Renovation</li>
              </ul>
            </span>
            <img src={Done} alt='poster'/>
          </div>
        </div>
        <div className="each-fade">
            <div className='slide-text'>
              <h2>No Job too Big. No Job Too Small</h2>
            </div>
          <div className="image-container">
            <span className='name-holder'>
              <ul>
              <li className='first'>Renovation</li>
                <li className='second'>Renovation</li>
              </ul>
            </span>
            <img src={Temp3} alt='poster'/>
          </div>
        </div>
        <div className="each-fade">
            <div className='slide-text'>
              <h2>No Loose Screws Here!</h2>
            </div>
          <div className="image-container">
            <span className='name-holder'>
              <ul>
              <li className='first'>Renovation</li>
                <li className='second'>Renovation</li>
              </ul>
            </span>
            <img src={Done2} alt='poster'/>
          </div>
        </div>
      </Fade>
    </div> 
        </>
    )
}

export {IntroCarousel}
