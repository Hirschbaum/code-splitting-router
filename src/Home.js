import React from 'react';
import { Link } from 'react-router-dom';

function home() {
    return (
        <div>
            <Link className='links' to='/'>Home</Link>
            <Link className='links' to='/about'>About</Link>
            <Link className='links' to='/contact'>Contact</Link>

            <h3>Home</h3>
            <br />
            <p>This is Home</p>
        </div>
    )
}

export default home;
