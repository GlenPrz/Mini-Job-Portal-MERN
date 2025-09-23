import React, { useState, useEffect } from 'react';
import '../styles/Login.css';


const Login = () => {
  return (
    <div className='main-container'>
        <div className='form-card'>
            <h1>Login</h1>
            <form className=''>
                <div className='row'>
                    <input type='text' className='username' id='username' autoComplete='off' /> 
                    <label for='username' className='un_label'>Username</label>
                </div>
                <div className='row'>
                    <input type='password' className='pass' id='pass' autoComplete='off' /> 
                    <label for='pass' className='pw_label'>password</label>
                </div>
                <div className='row'>
                    <p> Don't have an account yet?<a href='link'> Sign up here!</a></p>
                </div>
            </form>

            
        </div>
        
    </div>
  )
}

export default Login