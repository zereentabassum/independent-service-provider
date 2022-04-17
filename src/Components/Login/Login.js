import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    return (
        <div className='form p-5'>
            <h1>Log in</h1>
            <Form className='w-25 mx-auto login-section'>
    <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
        <Form.Label className='text-start' >Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>
   
    <Button className='px-5 mt-2' variant="primary" type="submit">
        Login
    </Button>
    </Form>
        </div>
    );
};

export default Login;