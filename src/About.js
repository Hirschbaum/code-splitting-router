import {Link} from 'react-router-dom';
import React from 'react';

function about() {
    
        return (
            <div>
                <Link className='links' to='/'>Home</Link>
                <Link className='links' to='/about'>About</Link>
                <Link className='links' to='/contact'>Contact</Link>
                <h3>About us</h3>
                <br></br>
                <p>Some text, bla bla bla</p>
            </div>
        )
}

export default about;