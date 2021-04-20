import React, {useState, useEffect} from 'react';
import { Tailor } from '../../Assets';
import { Modal } from '../Modals/Modal';
import './Cards.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useHistory} from 'react-router-dom';
import { ExploreDisplay } from '../../Pages/Explore/ExploreDisplay';




export const ProjectCards = () => {
    AOS.init();  

    const [ProjectCards, setProjectCards] = React.useState([]);

        useEffect(() => {
    
            const fetchProjectCards = async () => {
     
                const response = await fetch(`https://just-original.herokuapp.com/api/v1/projects`);
                const data = await response.json()
                const item = data.data ;
                const lists = Object.values(item);
                setProjectCards(lists);
            }
            fetchProjectCards();
        }, []);

    const history = useHistory();
    const handleChange = (props) => {
        history.push({
            pathname : '/ProjectDisplay/:id'
        })
    }

    return (
        <>
        {ProjectCards && ProjectCards.map(project  => (
            <section className='project-card-container' data-aos="fade-up"  data-aos-duration="1000"   data-aos-mirror="true" onClick={handleChange} key={project.id}>
                <div className='project-card-image'>
                <img src={project.avatar} alt='poster' />
                </div>
                
                <div className='project-card-footer'>
                    <ul className='project-card-footer-links'>
                        <li>{project.title}</li>
                        <li>3</li>
                    </ul>
                </div>
            </section>
              ))} 
        </>
    )
}

export const ProjectDisplayCards = () => {
    AOS.init();  
    return (
        <>
            <section className='project-card-container' data-aos="fade-up"  data-aos-duration="1000"   data-aos-mirror="true">
                <div className='project-card-image'>
                <img src={Tailor} alt='poster' />
                </div>
                
                <div className='project-card-footer'>
                    <ul className='project-card-footer-links'>
                        <li>Projects</li>
                        <li>Numbers</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export const ExploreCards = () => {
    AOS.init();

    const [Talents, setTalents] = React.useState([]);

    useEffect(() => {

        const fetchTalents = async () => {


            const response = await fetch(`https://just-original.herokuapp.com/api/v1/talents`);
            const data = await response.json()
            const item = data.data;
            const list = Object.values(item);

            console.log(list);
            setTalents(list);
        }
        fetchTalents();
    }, []);

    

    const history = useHistory();
    

    return (
        <>
        {Talents && Talents.map(talent => (
            <section className='explore-card-container' data-aos="fade-up"  data-aos-duration="1000" key={talent.id} onClick={(props) =>
                history.push({
                    pathname : `/exploredisplay/${talent.id}`,
                    state : {
                            title :  `${talent.name}`,
                            avatar : `${talent.avatar}`,
                            talent_id : `${talent.id}`,
                            services : `${talent.services}`
                            }
                })
            }>
                <div className='explore-card-image'>
                <img src={talent.avatar} alt='poster' />
                </div>
                
                <div className='explore-card-footer'>
                    <ul className='explore-card-footer-links'>
                        <li>{talent.name}</li>
                        <li>3</li>
                    </ul>
                </div>
            </section>
            ))}
            {/* <ExploreDisplay Talents={Talents}/> */}
        </>
    )
}


const Cards = (props) => {
    AOS.init();
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const toggleModal = () => {
        setShowModal(prev => !prev);
        
    }
    const [CarouselCards, setCarouselCards] = React.useState([]);

        useEffect(() => {
    
            const fetchCarouselCards = async (carouselcard) => {
     
                const response = await fetch(`https://just-original.herokuapp.com/api/v1/projects`);
                const data = await response.json()
                const item = data.data ;
                const lists = Object.values(item);
                setCarouselCards(lists);
                setSelectedProject(carouselcard)
            }
            fetchCarouselCards();
        }, []);

    const history = useHistory();
    const handleNext = (props) => {
        history.push({
            pathname : '/ProjectDisplay/:id'
        })
    }
    
    return (
        <>
        {CarouselCards && CarouselCards.map(carouselcard => (
            <section className='card-container' data-aos="fade-up"  data-aos-duration="1000">
                <div className='card-image-container'>
                    <img src={carouselcard.avatar} alt='poster' />
                    {/* onClick={() =>toggleModal()}                   */}
                </div>
                <div className='card-footer'>
                    <ul>
                        <li>{carouselcard.title}</li>
                        <li>3</li>
                    </ul>
                </div>
            </section>
            ))}
            <Modal showModal={showModal} setShowModal={setShowModal} handleNext={handleNext}  CarouselCards={selectedProject}/> 
        </>
    )
}

export { Cards }
