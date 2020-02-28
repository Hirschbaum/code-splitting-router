import React from 'react';
import { Link } from 'react-router-dom';

function contact() {
    return(
        <div>
            <Link className='links' to='/'>Home</Link>
                <Link className='links' to='/about'>About</Link>
                <Link className='links' to='/contact'>Contact</Link>
                <h3>Contact</h3>
                <br></br>
                <p>email@email.com</p>
                <p>Tel. 0123 456 78</p>
                <p>55 555 City, That Street 13</p>
        </div>
    )
}

export default contact;