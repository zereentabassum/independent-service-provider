import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <Link className='fs-4 text-decoration-none text-black  px-4' to='/home'>Home</Link>
                <Link className='fs-4 text-decoration-none text-black  px-4' to='/blogs'>Blogs</Link>
                <Link className='fs-4 text-decoration-none text-black  px-4' to='/login'>Login</Link>
                <Link className='fs-4 text-decoration-none text-black  px-4' to='/signup'>Signup</Link>
                <Link className='fs-4 text-decoration-none text-black  px-4' to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;