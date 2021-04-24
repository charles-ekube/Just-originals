import React from 'react'
import './ExploreCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Builder } from '../../../Assets';



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ServicesCarousel = () => {
 
  return (
    <>
     <Swiper
        autoplay={{delay:5000}}
        slidesPerView={1}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        className='services-carousel-container'
    >
      <SwiperSlide className='services-carousel-content'>
        <img src={Builder} alt='poster' />
      </SwiperSlide>
      <SwiperSlide className='services-carousel-content'>
        <img src={Builder} alt='poster' />
      </SwiperSlide>
      <SwiperSlide className='services-carousel-content'>
        <img src={Builder} alt='poster' />
      </SwiperSlide>
      <SwiperSlide className='services-carousel-content'>
        <img src={Builder} alt='poster' />
      </SwiperSlide>
      
    </Swiper> 
    </>
  )
}

export {ServicesCarousel}
