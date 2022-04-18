import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
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
            <nav>
                <Link className='fs-4 text-decoration-none text-black  px-4' to='/home'>Home</Link>
                <Link className='fs-4 text-decoration-none text-black  px-4' to='/blogs'>Blogs</Link>
                <Link className='fs-4 text-decoration-none text-black  px-4' to='/signup'>Signup</Link>
                {
                    user?
                    <Button onClick={handleSignout} className='btn btn-primary'>Sign out</Button>
                    :
                <Link className='fs-4 text-decoration-none text-black  px-4' to='/login'>Login</Link>
                }
                <Link className='fs-4 text-decoration-none text-black  px-4' to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;