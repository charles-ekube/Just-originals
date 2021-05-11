import React from 'react';
import './signup.css';



const SignUp = () => {

    return (
        <>
        <section className='main-form-container'>
            <section className='signup-header'>
                <h2>Sign Up</h2>
            </section>
            <section className='signup-form-container'>
                <form>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input 
                         type="email" 
                         placeholder="Enter Email"
                         value=''
                         name="email"
                         id="email"
                         class="form-control" 
                         aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">Please enter a valid email</div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input 
                        type="password" 
                        placeholder="Enter Password"
                        value=''
                        name="password"
                        id="password"                        
                        class="form-control"
                        aria-describedby="passwordHelp"/>
                        <div id="passwordHelp" class="form-text">Password must be more than 6 characters</div>
                    </div>
                    
                    <button 
                      type="submit"
                      variant="primary"
                      className="signup-btn"
                      class='btn btn-primary'
                    >
                      Sign Up
                    </button>
                </form>
            </section>
        </section>    
        </>
    )
}

export {SignUp};