import React, { useState, useEffect } from 'react';
import '../styles/Login.css';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'

const Login = () => {

  return (

    <div className='main-container'>

       <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh"}}>
        
          <div className='form-card'>
            <form >
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
      
      </Container>
        
        
    </div>
  )
}

export default Login

