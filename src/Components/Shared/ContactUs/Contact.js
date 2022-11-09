import React from 'react';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='' >
            <div className=' p-2 container' style={{ maxWidth: "900px" }}>
                <h1 className='bebus-font display-1'>CONTACT</h1>
                <div className='d-flex '>

                    <a href="https://www.facebook.com/dcpmrpaul" className='fs-1 text-white m-1'><FaFacebook /></a>
                    <a href="https://www.instagram.com/dcpmrpaul" className='fs-1 text-white m-1'><FaInstagramSquare /></a>

                </div>
                <h5 className='p-2 border'>
                    Sign up to get my new releases, show dates, & announcements! <Link to='/signup'><button className='btn btn-info'>Sign Up</button></Link>
                </h5>
            </div>

        </div>
    );
};

export default Contact;