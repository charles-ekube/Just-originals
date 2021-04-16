import React from 'react';
import './ExploreCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { B, Builder } from '../../../Assets';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const TestimoniesCarousel = () => {
    return (
        <>
            <Swiper
        autoplay={{delay:5000}}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='testimonies-carousel-main-container'
    >
      <SwiperSlide className='testimonies-carousel-container'>
        <section className='testimonies-carousel-content'>
            <div className='testimonies-carousel-img'>
                <img src={Builder} alt='poster' />
            </div>
            <div className='testimonies-carousel-text'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <div className='testimonies-carousel-text-footer'>
                    <img src={B} alt='poster'/>
                    <span>Your dad</span>
                </div>
                <div className='testimonies-svg'>
                    <svg width="108" height="179" viewBox="0 0 108 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M108 107.143H54.4286L90.1432 178.571H36.5718L0.857262 107.143V0H108V107.143Z" fill="#7C14FF"/>
                    </svg>
                    <svg width="108" height="179" viewBox="0 0 108 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M108 107.143H54.4286L90.1432 178.571H36.5718L0.857262 107.143V0H108V107.143Z" fill="#7C14FF"/>
                    </svg>
                </div>
            </div>
        </section>
        
      </SwiperSlide>
      <SwiperSlide className='testimonies-carousel-container'>
        <section className='testimonies-carousel-content'>
            <div className='testimonies-carousel-img'>
                <img src={Builder} alt='poster' />
            </div>
            <div className='testimonies-carousel-text'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <div className='testimonies-carousel-text-footer'>
                    <img src={B} alt='poster'/>
                    <span>Your dad</span>
                </div>
                <div className='testimonies-svg'>
                    <svg width="108" height="179" viewBox="0 0 108 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M108 107.143H54.4286L90.1432 178.571H36.5718L0.857262 107.143V0H108V107.143Z" fill="#7C14FF"/>
                    </svg>
                    <svg width="108" height="179" viewBox="0 0 108 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M108 107.143H54.4286L90.1432 178.571H36.5718L0.857262 107.143V0H108V107.143Z" fill="#7C14FF"/>
                    </svg>
                </div>
            </div>
        </section>
        
      </SwiperSlide>
      <SwiperSlide className='testimonies-carousel-container'>
        <section className='testimonies-carousel-content'>
            <div className='testimonies-carousel-img'>
                <img src={Builder} alt='poster' />
            </div>
            <div className='testimonies-carousel-text'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <div className='testimonies-carousel-text-footer'>
                    <img src={B} alt='poster'/>
                    <span>Your dad</span>
                </div>
                <div className='testimonies-svg'>
                    <svg width="108" height="179" viewBox="0 0 108 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M108 107.143H54.4286L90.1432 178.571H36.5718L0.857262 107.143V0H108V107.143Z" fill="#7C14FF"/>
                    </svg>
                    <svg width="108" height="179" viewBox="0 0 108 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M108 107.143H54.4286L90.1432 178.571H36.5718L0.857262 107.143V0H108V107.143Z" fill="#7C14FF"/>
                    </svg>
                </div>
            </div>
        </section>
        
      </SwiperSlide>
      <SwiperSlide className='testimonies-carousel-container'>
        <section className='testimonies-carousel-content'>
            <div className='testimonies-carousel-img'>
                <img src={Builder} alt='poster' />
            </div>
            <div className='testimonies-carousel-text'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <div className='testimonies-carousel-text-footer'>
                    <img src={B} alt='poster'/>
                    <span>Your dad</span>
                </div>
                <div className='testimonies-svg'>
                    <svg width="108" height="179" viewBox="0 0 108 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M108 107.143H54.4286L90.1432 178.571H36.5718L0.857262 107.143V0H108V107.143Z" fill="#7C14FF"/>
                    </svg>
                    <svg width="108" height="179" viewBox="0 0 108 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M108 107.143H54.4286L90.1432 178.571H36.5718L0.857262 107.143V0H108V107.143Z" fill="#7C14FF"/>
                    </svg>
                </div>
            </div>
        </section>
        
      </SwiperSlide>
      <SwiperSlide className='testimonies-carousel-container'>
        <section className='testimonies-carousel-content'>
            <div className='testimonies-carousel-img'>
                <img src={Builder} alt='poster' />
            </div>
            <div className='testimonies-carousel-text'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <div className='testimonies-carousel-text-footer'>
                    <img src={B} alt='poster'/>
                    <span>Your dad</span>
                </div>
                <div className='testimonies-svg'>
                    <svg width="108" height="179" viewBox="0 0 108 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M108 107.143H54.4286L90.1432 178.571H36.5718L0.857262 107.143V0H108V107.143Z" fill="#7C14FF"/>
                    </svg>
                    <svg width="108" height="179" viewBox="0 0 108 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M108 107.143H54.4286L90.1432 178.571H36.5718L0.857262 107.143V0H108V107.143Z" fill="#7C14FF"/>
                    </svg>
                </div>
            </div>
        </section>
        
      </SwiperSlide>
      
    </Swiper> 
        </>
    )
}

export {TestimoniesCarousel}
