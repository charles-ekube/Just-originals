import React from 'react';
import './ExploreCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { B, Builder, Explorer } from '../../../Assets';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const TeamsCarousel = ({TalentTeam}) => {
    return (
        <>
            <Swiper
        autoplay={{delay:5000}}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='teams-carousel-main-container'
    >

      {TalentTeam && TalentTeam.map((team) => (
          <SwiperSlide className='teams-carousel-container' key={team.id}>
          <section className='teams-carousel-content'>
            <div className='teams-carousel-header'>
              <span></span>
              <h2>Team</h2>
              <div className='teams-carousel-nametag'>
                  <ul>
                      <li>{team.team_member}</li>
                      <li>Painter</li>
                  </ul>
              </div>
            </div>
            <div className='teams-carousel-img'>
              <img src={Explorer} alt='poster'/>
            </div>
          </section>
        </SwiperSlide>
      ))}     
    </Swiper> 
        </>
    )
}

export {TeamsCarousel}
