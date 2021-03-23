import React from 'react';
import './Blog.css';
import {Footer, Navbar} from '../../Widgets';
import { Link } from 'react-router-dom';
import {Builder} from '../../Assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
    AOS.init();
    return (
        <>
            <Navbar navColor='black' logoBg='rgba(0,0,0,0.4)'/>
            <main className='blog-main-container'>
                <section className='recent-blog-container'>
                    <article className='recent-blog-post-content' data-aos="fade-right"  data-aos-duration="1000">
                        <div className='recent-blog-post-image'>
                            <img src={Builder} alt='poster'/>
                        </div>
                        <div className='recent-blog-post-text'>
                            <ul>
                                <li>Dec 20, 2021</li>
                                <li>Painting</li>
                            </ul>
                            <p>
                                How to mix several colors to achieve a 
                                unique color for painting.
                            </p>
                            <Link>
                                Read Article
                            </Link>
                        </div>
                    </article>
                    <article className='recent-blog-post-content' data-aos="fade-right"  data-aos-duration="1000">
                        <div className='recent-blog-post-image'>
                            <img src={Builder} alt='poster'/>
                        </div>
                        <div className='recent-blog-post-text'>
                            <ul>
                                <li>Dec 20, 2021</li>
                                <li>Painting</li>
                            </ul>
                            <p>
                                How to mix several colors to achieve a 
                                unique color for painting.
                            </p>
                            <Link>
                                Read Article
                            </Link>
                        </div>
                    </article>
                    <article className='recent-blog-post-content' data-aos="fade-right"  data-aos-duration="1000">
                        <div className='recent-blog-post-image'>
                            <img src={Builder} alt='poster'/>
                        </div>
                        <div className='recent-blog-post-text'>
                            <ul>
                                <li>Dec 20, 2021</li>
                                <li>Painting</li>
                            </ul>
                            <p>
                                How to mix several colors to achieve a 
                                unique color for painting.
                            </p>
                            <Link>
                                Read Article
                            </Link>
                        </div>
                    </article>
                </section>
                <section className='old-blog-post-main-container'>
                <article className='old-blog-post-content' data-aos="fade-right"  data-aos-duration="1000">
                        <div className='old-blog-post-image'>
                            <img src={Builder} alt='poster'/>
                        </div>
                        <div className='old-blog-post-text'>
                            <ul>
                                <li>Dec 20, 2021</li>
                                <li>Painting</li>
                            </ul>
                            <p>
                                How to mix several colors to achieve a 
                                unique color for painting.
                            </p>
                            <Link>
                                Read Article
                            </Link>
                        </div>
                    </article>
                    <article className='old-blog-post-content' data-aos="fade-right"  data-aos-duration="1000">
                        <div className='old-blog-post-image'>
                            <img src={Builder} alt='poster'/>
                        </div>
                        <div className='old-blog-post-text'>
                            <ul>
                                <li>Dec 20, 2021</li>
                                <li>Painting</li>
                            </ul>
                            <p>
                                How to mix several colors to achieve a 
                                unique color for painting.
                            </p>
                            <Link>
                                Read Article
                            </Link>
                        </div>
                    </article>
                    <article className='old-blog-post-content' data-aos="fade-right"  data-aos-duration="1000">
                        <div className='old-blog-post-image'>
                            <img src={Builder} alt='poster'/>
                        </div>
                        <div className='old-blog-post-text'>
                            <ul>
                                <li>Dec 20, 2021</li>
                                <li>Painting</li>
                            </ul>
                            <p>
                                How to mix several colors to achieve a 
                                unique color for painting.
                            </p>
                            <Link>
                                Read Article
                            </Link>
                        </div>
                    </article>
                    <article className='old-blog-post-content' data-aos="fade-right"  data-aos-duration="1000">
                        <div className='old-blog-post-image'>
                            <img src={Builder} alt='poster'/>
                        </div>
                        <div className='old-blog-post-text'>
                            <ul>
                                <li>Dec 20, 2021</li>
                                <li>Painting</li>
                            </ul>
                            <p>
                                How to mix several colors to achieve a 
                                unique color for painting.
                            </p>
                            <Link>
                                Read Article
                            </Link>
                        </div>
                    </article>
                </section>
            </main>       
            <section>
                <Footer/>
            </section>     
        </>
    )
}

export {Blog}
