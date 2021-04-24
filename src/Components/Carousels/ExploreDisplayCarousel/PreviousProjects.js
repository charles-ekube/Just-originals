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

const PreviousProjects =  ({TalentProjects}) => {
    
    return (
      <>
     <Swiper 
        autoplay={{delay:5000}}
        slidesPerView={4}
        spaceBetween={20}
        Navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='previous-projects-carousel-main'
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          // when window width is >= 768px
          868: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1200: {
            slidesPerView : 4,
            spaceBetween: 10
          }
        }}
       
    >
    {TalentProjects && TalentProjects.map((talentproject) => (
        <SwiperSlide key={talentproject.id}>
            <div className='content-holder'>
                <img src={talentproject.projects.avatar} alt='poster' style={{width:'100%', height:'100%'}}/>
            </div>
    </SwiperSlide>
    ))}
    </Swiper> 
    </>
    )
}


export {PreviousProjects}