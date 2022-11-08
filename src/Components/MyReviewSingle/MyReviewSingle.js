import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const MyReviewSingle = ({ rev }) => {
    const { review, serviceId, img, name, date, title } = rev;

    return (
        <div className='bg-dark bg-opacity-50 my-2 p-2  rounded'>
            <div className='d-flex align-items-center my-2 '>

                <img src={img} className='rounded-circle' alt="" style={{ width: "40px", height: "40px" }} />
                <p className='fs-5 my-1 px-2'>{name}</p>
            </div>
            <p className='fw-bolder px-2' style={{ overflowWrap: "break-word" }}>{review} </p>
            <div className='d-flex justify-content-between'>
                <div>
                    <button className='btn btn-outline-info mx-3 btn-sm'>Edit</button>
                    <button className='btn btn-outline-danger btn-sm'>DELETE</button>
                </div>
                <div>
                    <p className='p-1 fw-fold '>Commented On : <Link className='fw-bold text-warning' to={`/services/${serviceId}`}> {title}</Link> <small> <Moment fromNow>{date}</Moment></small> </p>

                </div>
            </div>

        </div >
    );
};

export default MyReviewSingle;