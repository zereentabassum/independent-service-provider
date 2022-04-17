import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    return (
        <div className='form p-3'>
            <h1>Sign Up</h1>
            <Form className='w-25 mx-auto form-section'>
    <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
        <Form.Label className='text-start' >Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
        <Form.Label className='text-start' >Confirm Password:</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
    </Form.Group>
   
    <Button className='px-5 mt-2 mb-4' variant="primary" type="submit">
        Sign up
    </Button>
    <p>Already have an account? <Link className='text-decoration-none' to='/login'>Login</Link></p>

    </Form>
        </div>
    );
};

export default Signup;