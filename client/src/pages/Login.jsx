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
                <div className='row row-user'>
                    <input type='text' className='username' id='username' placeholder='' autoComplete='off' required/> 
                    <label htmlFor='username' className='un_label'>Username</label>
                </div>
                <div className='row'>
                    <input type='password' className='pass' id='pass' placeholder='' autoComplete='off' required/> 
                    <label htmlFor='pass' className='pw_label'>Password</label>
                </div>
                <div className='row'>
                    <p> Don't have an account yet?<a href='link'> Sign up here!</a></p>
                </div>

                <Button/>
            </form>

            
        </div>
      
      </Container>
        
        
    </div>
  )
}

export default Login

