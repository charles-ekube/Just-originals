import React from 'react';
// import {useHistory} from 'react-router-dom'
import { ExploreCards, GetInTouch, Loader } from '../../Components';
import { Footer, Navbar } from '../../Widgets';
import './Explore.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Explore = () => {
    AOS.init();
    
    const [ spinner, setSpinner ] = React.useState(true);
  
    React.useEffect(() => {
        setSpinner(false);
    },[setSpinner])


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
            {spinner ? <div className='loader' style={{ top: '50%', left: '45%', marginBottom:'50px' }}></div> : (
            <section className='explore-grid'>
                    <ExploreCards />
            </section>  
            )}
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
