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

export const PreviousProjectCarousel =  () => {
    return (
      <>
     <Swiper
        autoplay={{delay:5000}}
        slidesPerView={4}
        spaceBetween={50}
        Navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1200: {
            width : 1200,
            slidesPerView : 3
          }
        }}
    >
      <SwiperSlide>
        <img src={Builder} alt='poster' style={{width:'100%', height:'500px'}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Builder} alt='poster' style={{width:'100%', height:'500px'}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Builder} alt='poster' style={{width:'100%', height:'500px'}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Builder} alt='poster' style={{width:'100%', height:'500px'}}/>
      </SwiperSlide>
      
    </Swiper> 
    </>
    )
}

const ServicesCarousel = () => {
 
  return (
    <>
     <Swiper
        autoplay={{delay:5000}}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide style={{width:'100%'}}>
        <img src={Builder} alt='poster' style={{width:'100%', height:'500px'}}/>
      </SwiperSlide>
      <SwiperSlide style={{width:'100%'}}>
        <img src={Builder} alt='poster' style={{width:'100%', height:'500px'}}/>
      </SwiperSlide>
      <SwiperSlide style={{width:'100%'}}>
        <img src={Builder} alt='poster' style={{width:'100%', height:'500px'}}/>
      </SwiperSlide>
      <SwiperSlide style={{width:'100%'}}>
        <img src={Builder} alt='poster' style={{width:'100%', height:'500px'}}/>
      </SwiperSlide>
      
    </Swiper> 
    </>
  )
}

export {ServicesCarousel}
