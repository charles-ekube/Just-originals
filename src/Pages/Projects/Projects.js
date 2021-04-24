import React from 'react';
import './Projects.css';
import { GetInTouch, ProjectCards } from '../../Components'
import { Footer, Navbar } from '../../Widgets';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    AOS.init();


    const [spinner, setSpinner] = React.useState(false);

    React.useEffect(() => {
        setSpinner(true);
    }, [setSpinner])
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
                    {spinner ? <div className='loader' style={{ top: '50%', left: '45%' }}></div> : (
                        <section className='projects-grid'>
                            <ProjectCards />

                        </section>
                    )}
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
