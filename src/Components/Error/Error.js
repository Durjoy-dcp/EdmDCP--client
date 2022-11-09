import React from 'react';
import { FaSadTear } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='services'>
            <h4 className='text-danger display-1 text-center my-5'>404 NOT FOUND</h4>
            <h1 className='text-danger display-1 text-center my-5'><FaSadTear /></h1>
            <div className='d-flex justify-content-center'>
                <Link to='/'><button className='btn btn-outline-info '>Go Home</button></Link>

            </div>
        </div>
    );
};

export default Error;