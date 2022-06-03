import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignout = () =>{
        signOut(auth);
    }

    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto simple">
          <Navbar.Brand as={Link} to='/home' className='px-4 fs-4'>Home</Navbar.Brand>
          <Navbar.Brand as={Link} to='/blogs' className='px-4 fs-4'>Blogs</Navbar.Brand>
          <Navbar.Brand as={Link} to='/signup' className='px-4 fs-4'>Sign up</Navbar.Brand>
          {
                    user?
                    <Button onClick={handleSignout} className='btn btn-primary'>Sign out</Button>
                    :
          <Navbar.Brand as={Link} to='/login' className='px-4 fs-4'>Login</Navbar.Brand>
          }
          <Navbar.Brand as={Link} to='/about' className='px-4 fs-4'>About</Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
     
        </div>
    );
};

export default Header;