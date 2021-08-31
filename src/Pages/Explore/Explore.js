import React, { useEffect } from 'react';
// import {useHistory} from 'react-router-dom'
import { ExploreCards, GetInTouch, Loader } from '../../Components';
import { Footer, Navbar } from '../../Widgets';
import './Explore.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Done, Done2, Temp4, Temp7 } from '../../Assets';


const Explore = () => {
    AOS.init();

    useEffect(()=> {
        window.scrollTo(0,0);
    },[])

    return (
        <>
        
        <section  data-aos="fade-down"  data-aos-duration="2000">
        <Navbar navColor="black" logoBg='#000'/>
          <main className='explore-container'>
            <section className='explore-intro'>
                <span></span>
                <div className='explore-intro-text'>
                    <h1 data-aos="fade-right"  data-aos-duration="1000">Explore Talents</h1>
                    <p data-aos="fade-left"  data-aos-duration="1000">
                        lorem Lorem Ipsum dolor sit amet,
                        consentectur adipiscing et
                        Lorem Ipsum dolor sit amet,
                        consentectur adipiscing et
                        Lorem Ipsum dolor sit amet,
                        consentectur adipiscing et
                    </p>
                </div>
            </section>
            
            <section className='explore-grid'>
                    <ExploreCards exploreImage={Done} />
                    <ExploreCards  exploreImage={Done2}/>
                    <ExploreCards exploreImage={Temp7}/>
                    <ExploreCards exploreImage={Temp4}/>
                    
            </section>  
            
        </main>  
          <section>
                <GetInTouch/>
            </section>
            <section>
                <Footer/>
            </section>
            </section>
        
        </>
    )
}

export  {Explore}
