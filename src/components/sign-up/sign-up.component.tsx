import React from "react";
//import {AuthContext} from "context"
// Styling
import './sign-up.styles.css';
function Signup() {

  return (
    <>
    <h1>Create account</h1>
    <div className='sign-up-container'>
      
      <form className='sign-up-form'>
        <label htmlFor="email">Email</label><br/>
        <input type='text' placeholder='Enter your email'></input><br/>
        <label htmlFor="password">Password</label><br/>
        <input id='email'type='text' placeholder='Enter your password'></input><br/>
        <button>Submit</button>
      </form>
    </div>
    </>
  );
}


export default Signup;