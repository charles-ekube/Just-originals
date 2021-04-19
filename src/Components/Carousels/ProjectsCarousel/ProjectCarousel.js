import React from 'react'
import Carousel from 'react-elastic-carousel';
import { Cards } from '../../Cards/Cards';
import { Modal } from '../../Modals/Modal';
import './ProjectCarousel.css';




const ProjectCarousel = () => {
 
 
    const breakPoints = [
      { width : 375, itemsToShow : 1},
      { width : 550, itemsToShow : 2},
      { width : 768, itemsToShow : 3},
      { width : 1200, itemsToShow : 4}
    ];

    

    const [showModal, setShowModal] = React.useState(false);
    const toggleModal = () => {
        setShowModal(true);
    }
    

    return (
        <>
        <section className='carousel-main-container'>
          <div className='carousel-main-container-text'>
            <span></span>
            <h2>Previous Projects</h2>
          </div>
          <section className='carousel-mini-container'>
          <Carousel breakPoints={breakPoints}>

            <Cards/>
            {/* s toggleModal={toggleModal} */}
          </Carousel>
          <Modal showModal={showModal} setShowModal={setShowModal}/>
          </section>
          </section>          
        </>
    )
}

export {ProjectCarousel}
