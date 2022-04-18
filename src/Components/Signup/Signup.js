import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const handleNameBlur = event => {
          setName(event.target.value);
      }

      const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handleSignup = event => {
        event.preventDefault();
       createUserWithEmailAndPassword(email, password);
    }
    if(user){
        navigate('/about');
    }
    let load;
    if (loading) {
        load = <p>Loading...</p>;
      }
      let errorMessage;
    if (error) {
        errorMessage = (
          <div>
            <p style={{color:'red'}}>Error: {error.message}</p>
          </div>
        );
      }
    

    return (
        <div className='form p-3'>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSignup} className='w-25 mx-auto form-section'>
            <Form.Control onBlur={handleNameBlur} type="text" placeholder="Your name" required/>
  <br />
    <Form.Group onBlur={handleEmailBlur} className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>
    </Form.Group>

    <Form.Group onBlur={handlePasswordBlur} className="mb-4 text-start" controlId="formBasicPassword">
        <Form.Label className='text-start' >Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
        <Form.Text className='text-success' id="passwordHelpBlock" >
    Password should be at least 6 characters or more. 
  </Form.Text>
    </Form.Group>
   
    {load}
    {errorMessage}
    <Button className='px-5 mt-2 mb-4' variant="primary" type="submit">
        Sign up
    </Button>
    <p>Already have an account? <Link className='text-decoration-none' to='/login'>Login</Link></p>

    </Form>
        </div>
    );
};

export default Signup;