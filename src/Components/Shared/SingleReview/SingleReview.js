import React from 'react';
import moment from 'moment'
import Moment from 'react-moment';
const SingleReview = ({ singlerev }) => {
    const { review, serviceId, img, name, date } = singlerev;

    return (
        <div className='p-3'>
            <div className='d-flex align-items-center my-2 '>

                <img src={img} className='rounded-circle' alt="" style={{ width: "40px", height: "40px" }} />
                <p className='fs-5 my-2 px-2'>{name}</p>
            </div>
            <p className='fw-bolder' style={{ overflowWrap: "break-word" }}>{review} </p>
            <div className='d-flex justify-content-end'>

                <p className='p-1'> <Moment fromNow>{date}</Moment></p>
            </div>
            <hr />
        </div>
    );
};

export default SingleReview;