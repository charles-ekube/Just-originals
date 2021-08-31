import React, { useEffect } from 'react';
import './Projects.css';
import { GetInTouch, ProjectCards } from '../../Components'
import { Footer, Navbar } from '../../Widgets';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Done, Done2, Done3, Done4, Temp4, Temp8 } from '../../Assets';

const Projects = () => {
    AOS.init();

    useEffect(()=> {
        window.scrollTo(0,0);
    },[])

    return (
        <>

            <section data-aos="fade-down" data-aos-duration="2000">
                <Navbar navColor='black' logoBg='#000' />
                <main className='projects-container'>
                    <section className='projects-intro'>
                        <span></span>
                        <div className='projects-intro-text'>
                            <h1 data-aos="fade-right" data-aos-duration="1000">Managed Projects</h1>
                            <p data-aos="fade-left" data-aos-duration="1000">
                                lorem Lorem Ipsum dolor sit amet,
                                consentectur adipiscing et
                                Lorem Ipsum dolor sit amet,
                                consentectur adipiscing et
                                Lorem Ipsum dolor sit amet,
                                consentectur adipiscing et
                    </p>
                        </div>
                    </section>
                   
                        <section className='projects-grid '>
                            <ProjectCards  cardImage={Done}/>
                            <ProjectCards cardImage={Done2}/>
                            <ProjectCards cardImage={Temp8}/>
                            <ProjectCards cardImage={Temp4}/>
                        </section>
                  
                </main>
                <section>
                    <GetInTouch />
                </section>
                <section>
                    <Footer />
                </section>
            </section>

        </>
    )
}

export { Projects }
