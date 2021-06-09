import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import { Cards } from "../../Cards/Cards";
import { Modal } from "../../Modals/Modal";
import "./ProjectCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { Builder } from "../../../Assets";
import AOS from "aos";
import "aos/dist/aos.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ProjectCarousel = () => {
  AOS.init();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const [CarouselCards, setCarouselCards] = useState([]);

  useEffect(() => {
    const fetchCarouselCards = async () => {
      const response = await fetch(
        `https://just-original.herokuapp.com/api/v1/projects`
      );
      const data = await response.json();
      const item = data.data;
      if (item) {
        const lists = Object.values(item);
        setCarouselCards(lists);
      } else {
        return <div>No projects found</div>;
      }
    };
    fetchCarouselCards();
  }, []);

  const history = useHistory();
  const handleNext = (props) => {
    history.push({
      pathname: "/ProjectDisplay/:id",
    });
  };

  return (
    <>
      <section className="carousel-main-container">
        <div className="carousel-main-container-text">
          <span></span>
          <h2>Previous Projects</h2>
        </div>
        <div>
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            // navigation
            scrollbar={{ draggable: true }}
            pagination={{
              "clickable": true
            }}
            onSlideChange={() => console.log("slide-change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              // when window width is >= 768px
              880: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1200: {
                slidesPerView : 4,
                spaceBetween: 10
              }
            }}
          >
            {CarouselCards &&
              CarouselCards.map((carouselcard) => (
                <SwiperSlide key={carouselcard.id} style={{marginRight:'0', padding:'30px 0'}}>
                    <div className='home-pro-card'>
                      <div className='home-pro-card-img'>
                        <img src={carouselcard.avatar}  alt='poster' />
                      </div>
                      <div className='home-pro-card-footer'>
                        <h5>
                          {carouselcard.title}
                        </h5>
                      </div>
                    </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export { ProjectCarousel };
