import React, {useState, useEffect} from 'react';
import './Blog.css';
import {Footer, Navbar} from '../../Widgets';
import { Link } from 'react-router-dom';
import {Builder} from '../../Assets';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Loader } from '../../Components';

const Blog = () => {
    AOS.init();

    const [Blogs, setBlogs] = useState([]);
  const [EmptyState, setEmptyState] = useState("");
  useEffect(()=> {
    window.scrollTo(0,0);
},[])


  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(
        `https://just-original.herokuapp.com/api/v1/blogs`
      );
      const data = await response.json();
      const item = data.data;
      if (item) {
        const lists = Object.values(item);
        setBlogs(lists);
      }
      if (!item) {
        setEmptyState("No Blogs Found.");
      }
    };
    fetchBlogs();
  }, []);


    return (
        <>
           
        <section  data-aos="fade-down"  data-aos-duration="2000">
            <Navbar navColor='black' logoBg='#000'/>
            <main className='blog-main-container'>
                <section className='recent-blog-container'>

                    {Blogs && Blogs.map(blog => (
                        <article className='recent-blog-post-content' data-aos="fade-right"  data-aos-duration="1000">
                        <div className='recent-blog-post-image'>
                            <img src={blog.avatar} alt='poster'/>
                        </div>
                        <div className='recent-blog-post-text'>
                            <ul>
                                <li>{blog.created_at}</li>
                                <li>{blog.writer}</li>
                            </ul>
                            <p>
                                {blog.title}
                            </p>
                            <Link to='/blogpage'>
                                Read Article
                            </Link>
                        </div>
                        </article>
                    ))}
                    
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
                            <Link to='/blogpage'>
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
                            <Link to='/blogpage'>
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
                            <Link to='/blogpage'>
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
                            <Link to='/blogpage'>
                                Read Article
                            </Link>
                        </div>
                    </article>
                </section>
            </main>       
            <section>
                <Footer/>
            </section>
            </section>
                
        </>
    )
}

export {Blog}
