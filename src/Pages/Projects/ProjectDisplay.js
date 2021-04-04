import React from 'react';
import './Projects.css';
import { GetInTouch, Loader, ProjectDisplayCards } from '../../Components'
import { Footer, Navbar } from '../../Widgets';
import AOS from 'aos';
import 'aos/dist/aos.css';



const ProjectDisplay = () => {

    AOS.init();

    
    const [ spinner, setSpinner ] = React.useState(true);
  
    React.useEffect(() => {
        setTimeout(() => setSpinner(false), 5000)
    },[setSpinner]) 

    return (
        <>
          {spinner ? <Loader/> : (
                <section>
                    <Navbar navColor='black'/>
                    <main className='projects-container'>
            <section className='projects-intro'>
                <span></span>
                <div className='projects-intro-text'>
                    <h1 data-aos="fade-right"  data-aos-duration="1000">DJ</h1>
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
            <section className='projects-grid'>
                <ProjectDisplayCards/>
                <ProjectDisplayCards/>
                <ProjectDisplayCards/>
                <ProjectDisplayCards/>
            </section>
          </main>
          <section>
            <GetInTouch/>
          </section>  
          <section>
              <Footer/>
          </section>
                </section>





          )}  
        </>

    )
}

export  {ProjectDisplay}
