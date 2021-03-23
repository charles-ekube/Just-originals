import React from 'react'
import { Logo } from '../../Assets'
import './Loader.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Loader = () => {
    AOS.init();
    return (
        <div className="loader-container" data-aos="fade-up"  data-aos-duration="1000">
            <img src={Logo} alt='logo' className='animate__animated animate__pulse animate__infinite	infinite
'/>  
        </div>
    )
}

export  {Loader}
