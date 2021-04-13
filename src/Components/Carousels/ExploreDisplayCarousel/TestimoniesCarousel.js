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
      <SwiperSlide className='testiomines-carousel-container'>
        <section className='testimonies-carousel-content'>
            <div className='testiomones-carousel-img'>
                <img src={Builder} alt='poster' />
            </div>
            <div className='testimonies-carousel-text'>
            <p>
                    lorem dcjncdcjdcnjdcnjncdscid
                    dncjdcndjcdnjccd
                    dcnjdcnjdcndjcndjcndcjdncjdcnjdnc
                    dcjdcnjdncdjcdncjndcjdncjdnc
                    cjdcndjcndcjdncdjcndcscncncnsiowdc
                    dcjdncjdcndjcndjcndcjndcjaoceonweocdjncdjcdncjdc
                    cjdcjdicwocoscnsdcanlsdcndcudncdcs
                    dcdjcdnjcdjcdncjdncjscacaiwceicndcslcedoencoecneocnec
                    cdindcodcicnowcodicndcdcdjnvfvjnnslndsckdnvdlssnsd;sdvndvd
                </p>
                <div className='testimonies-carousel-text-footer'>
                    <img src={B} alt='poster'/>
                    <span>Your dad</span>
                </div>
            </div>
        </section>
        
      </SwiperSlide>
      <SwiperSlide className='testiomines-carousel-container'>
        <section className='testimonies-carousel-content'>
            <div className='testiomones-carousel-img'>
                <img src={Builder} alt='poster' />
            </div>
            <div className='testimonies-carousel-text'>
            <p>
                    lorem dcjncdcjdcnjdcnjncdscid
                    dncjdcndjcdnjccd
                    dcnjdcnjdcndjcndjcndcjdncjdcnjdnc
                    dcjdcnjdncdjcdncjndcjdncjdnc
                    cjdcndjcndcjdncdjcndcscncncnsiowdc
                    dcjdncjdcndjcndjcndcjndcjaoceonweocdjncdjcdncjdc
                    cjdcjdicwocoscnsdcanlsdcndcudncdcs
                    dcdjcdnjcdjcdncjdncjscacaiwceicndcslcedoencoecneocnec
                    cdindcodcicnowcodicndcdcdjnvfvjnnslndsckdnvdlssnsd;sdvndvd
                </p>
                <div className='testimonies-carousel-text-footer'>
                    <img src={B} alt='poster'/>
                    <span>Your dad</span>
                </div>
            </div>
        </section>
        
      </SwiperSlide>
      <SwiperSlide className='testiomines-carousel-container'>
        <section className='testimonies-carousel-content'>
            <div className='testiomones-carousel-img'>
                <img src={Builder} alt='poster' />
            </div>
            <div className='testimonies-carousel-text'>
            <p>
                    lorem dcjncdcjdcnjdcnjncdscid
                    dncjdcndjcdnjccd
                    dcnjdcnjdcndjcndjcndcjdncjdcnjdnc
                    dcjdcnjdncdjcdncjndcjdncjdnc
                    cjdcndjcndcjdncdjcndcscncncnsiowdc
                    dcjdncjdcndjcndjcndcjndcjaoceonweocdjncdjcdncjdc
                    cjdcjdicwocoscnsdcanlsdcndcudncdcs
                    dcdjcdnjcdjcdncjdncjscacaiwceicndcslcedoencoecneocnec
                    cdindcodcicnowcodicndcdcdjnvfvjnnslndsckdnvdlssnsd;sdvndvd
                </p>
                <div className='testimonies-carousel-text-footer'>
                    <img src={B} alt='poster'/>
                    <span>Your dad</span>
                </div>
            </div>
        </section>
        
      </SwiperSlide>
      <SwiperSlide className='testiomines-carousel-container'>
        <section className='testimonies-carousel-content'>
            <div className='testiomones-carousel-img'>
                <img src={Builder} alt='poster' />
            </div>
            <div className='testimonies-carousel-text'>
            <p>
                    lorem dcjncdcjdcnjdcnjncdscid
                    dncjdcndjcdnjccd
                    dcnjdcnjdcndjcndjcndcjdncjdcnjdnc
                    dcjdcnjdncdjcdncjndcjdncjdnc
                    cjdcndjcndcjdncdjcndcscncncnsiowdc
                    dcjdncjdcndjcndjcndcjndcjaoceonweocdjncdjcdncjdc
                    cjdcjdicwocoscnsdcanlsdcndcudncdcs
                    dcdjcdnjcdjcdncjdncjscacaiwceicndcslcedoencoecneocnec
                    cdindcodcicnowcodicndcdcdjnvfvjnnslndsckdnvdlssnsd;sdvndvd
                </p>
                <div className='testimonies-carousel-text-footer'>
                    <img src={B} alt='poster'/>
                    <span>Your dad</span>
                </div>
            </div>
        </section>
        
      </SwiperSlide>
      <SwiperSlide className='testiomines-carousel-container'>
        <section className='testimonies-carousel-content'>
            <div className='testiomones-carousel-img'>
                <img src={Builder} alt='poster' />
            </div>
            <div className='testimonies-carousel-text'>
                <p>
                    lorem dcjncdcjdcnjdcnjncdscid
                    dncjdcndjcdnjccd
                    dcnjdcnjdcndjcndjcndcjdncjdcnjdnc
                    dcjdcnjdncdjcdncjndcjdncjdnc
                    cjdcndjcndcjdncdjcndcscncncnsiowdc
                    dcjdncjdcndjcndjcndcjndcjaoceonweocdjncdjcdncjdc
                    cjdcjdicwocoscnsdcanlsdcndcudncdcs
                    dcdjcdnjcdjcdncjdncjscacaiwceicndcslcedoencoecneocnec
                    cdindcodcicnowcodicndcdcdjnvfvjnnslndsckdnvdlssnsd;sdvndvd
                </p>
                <div className='testimonies-carousel-text-footer'>
                    <img src={B} alt='poster'/>
                    <span>Your dad</span>
                </div>
            </div>
        </section>
        
      </SwiperSlide>
      
    </Swiper> 
        </>
    )
}

export {TestimoniesCarousel}
