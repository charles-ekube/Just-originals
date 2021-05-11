import React from 'react';
import { GetInTouch, IntroCarousel, JoinUs, Loader, ProjectCarousel } from '../../Components';
import { Navbar, Footer } from '../../Widgets';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 




const Home = () => {
    AOS.init();

    const [ spinner, setSpinner ] = React.useState(true);
  
    React.useEffect(() => {
        setTimeout(() => setSpinner(false), 5000)
    },[setSpinner])     
  

    return (
        <>
        {spinner ?  <Loader />  :   ( 
            <main data-aos="fade-down"  data-aos-duration="2000">
                 <Navbar navColor="white" logoBg="#fff"/>
                 <section className='home-container'>
                     <section className='home-text'>
                         <article>
                             <h1 data-aos="fade-up"  data-aos-duration="1000">
                                Operations keeps the lights on
                             </h1>
                             <p>
                                 We help you manage your businesses and give you a platform to show your products and services 
                             </p>
                         </article>
                     </section>
                     <section className='home-carousel'>
                         <div className='home-carousel-content' data-aos="fade-up"  data-aos-duration="2000">
                             <IntroCarousel/>
                         </div>
                     </section>
                 </section>
                 <section className='why-join-us-container'>
                         <JoinUs/>
                 </section>
                 <section>
                     <ProjectCarousel/>
                 </section>
                 <section>
                     <GetInTouch/>
                 </section>
                 <section>
                     <Footer/>
                 </section>

                 </main>
  )} 

            
         </>
    )
    
}

export {Home}
