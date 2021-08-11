import React, { useRef } from "react";
//import {AuthContext} from "context"
// Styling
import './sign-up.styles.css';
function Signup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  return (
    <>
    <h1>Create account</h1>
    <div className='sign-up-container'>
      <form className='sign-up-form'>
        <label htmlFor="email">Email</label><br/>
        <input type='email' ref={emailRef} placeholder='Enter your email'></input><br/>
        <label htmlFor="password">Password</label><br/>
        <input id='email'type='text' ref={passwordRef} placeholder='Enter your password'></input><br/>
        <label htmlFor="passwordConfirmation">Confirm Password</label><br/>
        <input id='emailConfirmation'type='text' ref={confirmPasswordRef} placeholder='Confirm password'></input><br/>
        <button>Submit</button>
      </form>
    </div>
    </>
  );
}


export default Signup;