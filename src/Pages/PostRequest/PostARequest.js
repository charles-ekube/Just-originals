import React from 'react';
import { Logo } from '../../Assets';
import { Footer } from '../../Widgets';
import './PostARequest.css';

const PostRequest = () => {

    return (
        <>
          <div className='post-request-logo'>
            <img src={Logo} alt='poster'/>
         </div>  
         <section className='post-request-content-container'>
             <div className='post-request-content-header'>
                 <span></span>
                 <h2>
                     What exactly do you want us to do for you?
                 </h2>
             </div>
             <div className='post-request-form-container'>
                <form className='post-request-form'>
                    <div className='post-request-form-input'>
                        <label>Describe required service - Please be detailed as possible </label>
                        <textarea data-max-words='2000'  data-announce='true'></textarea>
                    </div>
                    <div className='post-request-form-input'>
                        <input type="file" multiple  id='attach-files'/>
                    </div>
                    <div className='post-request-form-input'>
                        <label>
                            After the 24 hours response, when would you like your service to be resumed?
                        </label>
                        <button>Select Days</button>
                        <input type='number'/>
                    </div>
                    <div className='post-request-form-input'>
                        <label>
                            What is your estimated budget for this service?
                        </label>
                        <div>
                            <span></span>
                            <input type='text'/>
                        </div>
                    </div>
                    <div className='post-request-form-input'>
                            <button>
                                Submit
                            </button>
                    </div>
                </form>
            </div>
         </section>
         <section>
             <Footer/>
         </section>
        </>
    )
}

export {PostRequest}