import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import Carousel from 'react-elastic-carousel';
import { Cards } from '../../Cards/Cards';
import { Modal } from '../../Modals/Modal';
import './ProjectCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Builder } from '../../../Assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);









// const Cards = (props) => {
  
//   return (
//       <>
//       {CarouselCards && CarouselCards.map(carouselcard => (
//           <section className='card-container' data-aos="fade-up"  data-aos-duration="1000">
//               <div className='card-image-container'>
//                   <img src={carouselcard.avatar} alt='poster' />
//                   {/* onClick={() =>toggleModal()}                   */}
//               </div>
//               <div className='card-footer'>
//                   <ul>
//                       <li>{carouselcard.title}</li>
//                       <li>3</li>
//                   </ul>
//               </div>
//           </section>
//           ))}
//           <Modal showModal={showModal} setShowModal={setShowModal} handleNext={handleNext}  CarouselCards={selectedProject}/> 
//       </>
//   )
// }




const ProjectCarousel = () => {
     
    AOS.init();
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const toggleModal = () => {
        setShowModal(prev => !prev);
        
    }
    const [CarouselCards, setCarouselCards] = useState([]);
  
        useEffect(() => {
    
            const fetchCarouselCards = async (carouselcard) => {
     
                const response = await fetch(`https://just-original.herokuapp.com/api/v1/projects`);
                const data = await response.json()
                const item = data.data ;
                if(item) {
                    const lists = Object.values(item);
                    setCarouselCards(lists);
                    setSelectedProject(carouselcard);
                    
                  }
                  else {
                      return <div>No projects found</div>
                  }
                // const lists = Object.values(item);
                // setCarouselCards(lists);
                // setSelectedProject(carouselcard)
            }
            fetchCarouselCards();
        }, []);
  
    const history = useHistory();
    const handleNext = (props) => {
        history.push({
            pathname : '/ProjectDisplay/:id'
        })
    }
   
    return (
        <>
        <section className='carousel-main-container'>
          <div className='carousel-main-container-text'>
            <span></span>
            <h2>Previous Projects</h2>
          </div>
          <Swiper
        autoplay={{delay:5000}}
        slidesPerView={3}
        spaceBetween={20}
        scrollbar={{draggable:true}}
        pagination={{clickable:true}}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
      {CarouselCards && CarouselCards.map(carouselcard => (
       <SwiperSlide key={carouselcard.id} className='slide'>
          <section className='card-container' data-aos="fade-up"  data-aos-duration="1000">
              <div className='card-image-container'>
                  <img src={carouselcard.avatar} alt='poster' />
                  {/* onClick={() =>toggleModal()}                   */}
              </div>
              <div className='card-footer'>
                  <ul>
                      <li>{carouselcard.title}</li>
                      <li>3</li>
                  </ul>
              </div>
          </section>
        </SwiperSlide>
          ))}



    </Swiper> 
        </section>          
        </>
    )
}

export {ProjectCarousel}
