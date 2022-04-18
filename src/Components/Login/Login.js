import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const loginEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const loginPasswordBlur = event =>{
        setPassword(event.target.value);
    }
  
    const handleLogin = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if(user){
        navigate(from, { replace: true });
    }
    let loadLogin;
    if (loading) {
        loadLogin = <p>Loading...</p>;
      }
      let loginError;
    // if (error) {
    //     loginError = (
    //       <div>
    //         <p style={{color:'red'}}>Error: {error.message}</p>
    //       </div>
    //     );
    //   }


    return (
        <div className='form p-3'>
            <h1>Log in</h1>
            <Form onClick={handleLogin} className='w-25 mx-auto login-section'>
    <Form.Group onBlur={loginEmailBlur} className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>
    </Form.Group>

    <Form.Group onBlur={loginPasswordBlur} className="mb-4 text-start" controlId="formBasicPassword">
        <Form.Label className='text-start' >Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
    </Form.Group>
    {loadLogin}    
    {loginError}
    <Button  className='px-5 mt-2 mb-2' variant="primary" type="submit">
        Login
    </Button>
    <p>Don't have an account? <Link className='text-decoration-none' to='/signup'>Sign up</Link></p>
    <div className='d-flex align-items-center'>
        <div style={{height:'1px'}} className='bg-primary w-50'></div>
        <h5 className='mt-2 px-2'>Or</h5>
        <div style={{height:'1px'}} className='bg-primary w-50'></div>
    </div>
  
    <GoogleLogin></GoogleLogin>
    
    </Form>
        </div>
    );
};

export default Login;