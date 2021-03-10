import React from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
    return (
        <>
          <section className='get-in-touch-container'>
            <article className='get-in-touch-text'>
                <span></span>
                <h2>Get In Touch</h2>
                <p>
                    For more inquiries,
                     get in touch with us so that we could answer all your questions. 
                    We will get back to you within 24 hours.
                </p>
            </article>
            <form className='get-in-touch-form'>
                <div>
                <input type='text' placeholder='Full Name'/>
                </div>
                <div>
                <input type='text' placeholder='Email address'/>
                </div>
                <div>
                <textarea placeholder='Message'></textarea>
                </div>
                <div>
                <input type='tel' placeholder='Phone Number'/>
                </div>
                <button>
                    SEND A MESSAGE
                </button>
            </form>
          </section>  
        </>
    )
}

export {GetInTouch}
