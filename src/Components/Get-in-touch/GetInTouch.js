import React, {useState} from 'react';
import axios from 'axios';
import './GetInTouch.css';

const GetInTouch = () => {


  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const user = { email, message, phone, sender };
    // send the username and password to the server
    const response = await axios.post(
      "https://just-original.herokuapp.com/api/v1/messages",
      user
    );
    // set the state of the user
    setUser(response.data)
    // store the user in localStorage
    localStorage.setItem('user', response.data) 
    // let userInfo = response.data
  };


  if(user) {
      return `<div>Done</div>`;
  }
 


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
            <form className='get-in-touch-form' onSubmit={handleSubmit}>
                <div>
                     <input 
                     type='text' 
                     placeholder='Full Name'
                     name='sender'
                     value={sender}
                     onChange={({ target }) => setSender(target.value)}
                     />
                </div>
                <div>
                     <input 
                      type='text'
                      placeholder='Email address'
                      name='email'
                      value={email}
                      onChange={({ target }) => setEmail(target.value)}
                      />
                </div>
                <div>
                    <textarea 
                    placeholder='Message'
                    name='message'
                    value={message}
                    onChange={({ target }) => setMessage(target.value)}
                    ></textarea>
                </div>
                <div>
                    <input 
                    type='tel' 
                    placeholder='Phone Number'
                    name='phone'
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
                    />
                </div>
                {isLoading ? 
                <button>
                  Sending...
                </button>  :
                <button>
                  Send
                </button>
              }
            </form>
          </section>  
        </>
    )
}

export {GetInTouch}
