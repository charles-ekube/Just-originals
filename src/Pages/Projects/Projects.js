import React from 'react';
import './Projects.css';
import { GetInTouch, ProjectCards } from '../../Components'
import { Footer, Navbar } from '../../Widgets';

const Projects = () => {
    return (
        <>
        <Navbar navColor='black' logoBg='rgba(0,0,0,0.4)'/>
          <main className='projects-container'>
            <section className='projects-intro'>
                <span></span>
                <div className='projects-intro-text'>
                    <h1>Managed Projects</h1>
                    <p>
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
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
            </section>
          </main>
          <section>
            <GetInTouch/>
          </section>  
          <section>
              <Footer/>
          </section>
        </>
    )
}

export  {Projects}
