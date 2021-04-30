import React from 'react';
import {  Loader, PreviousClients, ServicesCarousel, TestimoniesCarousel, PreviousProjects, TeamsCarousel } from '../../Components';
import './Explore.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Explore, Logo } from '../../Assets';
import '../../Components/Carousels/ProjectsCarousel/ProjectCarousel.css';
import { useLocation } from "react-router-dom";
import { Footer, Navbar } from '../../Widgets';


const ExploreDisplay = (props) => {
    AOS.init();


    const { state } = useLocation();
    let query = state?.talent_id;

    

   
    const [Teams, setTeams] = React.useState([]);

    React.useEffect(() => {

        const fetchTeams = async () => {
        
            const response = await fetch(`https://just-original.herokuapp.com/api/v1/talents/${query}/teams`);
            const data = await response.json()
            const item = data.data ;
            const lists = Object.values(item);
            setTeams(lists);
        }
        fetchTeams();
    }, []);
   
    const [TalentProjects, setTalentProjects] = React.useState([]);

    React.useEffect(() => {

        const fetchTalentProjects = async () => {
        
            const response = await fetch(`https://just-original.herokuapp.com/api/v1/talents/${query}/projects`);
            const data = await response.json()
            const item = data.data ;
            const lists = Object.values(item);
            setTalentProjects(lists);
            console.log(lists);
        }
        fetchTalentProjects();
    }, []);
   
    const [TalentTestimonies, setTalentTestimonies] = React.useState([]);

    React.useEffect(() => {

        const fetchTalentTestimonies = async () => {
        
            const response = await fetch(`https://just-original.herokuapp.com/api/v1/talents/${query}/testimonies`);
            const data = await response.json()
            const item = data.data ;
            const lists = Object.values(item);
            setTalentTestimonies(lists);
        }
        fetchTalentTestimonies();
    }, []);
   
   
    return (
        <>
        
            <section>
                <Navbar navColor="black" logoBg='#000'/>
            
            <main data-aos="fade-down"  data-aos-duration="2000">
                <section style={{ background: 'rgba(251, 248, 251, 1)'}}>
                <section className='explore-display-intro'  data-aos="fade-up"  data-aos-duration="2000">
                    <div className='explore-display-intro-text'>
                        <ul>
                            <li>Hello, I'm</li>
                            <li>{state?.title}</li>
                            <li>Painter</li>
                        </ul>
                    </div>
                    <div>
                        <img src={state?.avatar} alt='poster'  data-aos="fade-up"  data-aos-duration="2000"/>
                        </div>
                </section>
                </section>
                <section className='services-carousel'  data-aos="fade-up"  data-aos-duration="2000">
                    <div className='services-carousel-text'>
                        <span></span>
                        <h2>My Services</h2>
                    </div>
                    <div>
                        <ServicesCarousel/>
                    </div>
                </section>
                <section className='previous-projects-carousel-container'  data-aos="fade-up"  data-aos-duration="2000">
                <div className='previous-projects-carousel-text'>
                        <span></span>
                        <h2>Previous Projects</h2>
                    </div>
                    <PreviousProjects TalentProjects={TalentProjects}/>
                </section>
                <section className='testimonies-carousel-container'  data-aos="fade-up"  data-aos-duration="2000">
                    <TestimoniesCarousel TalentTestimonies={TalentTestimonies}/>
                </section>
                <section style={{background:'#fff', padding:'30px 10px'}}  data-aos="fade-up"  data-aos-duration="2000">
                <div className='previous-projects-carousel-text'>
                        <span></span>
                        <h2>Previous Clients</h2>
                    </div>
                    <PreviousClients TalentProjects={TalentProjects}/>
                </section>
                <section  data-aos="fade-up"  data-aos-duration="2000">
                    <TeamsCarousel TalentTeam={Teams}/>
                </section>
                <section>
                    <Footer/>
                </section>
            </main>
            </section>
        
        </>
    )

}

export {ExploreDisplay}