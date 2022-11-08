import React from 'react';

const SingleReview = ({ singlerev }) => {
    const { review, serviceId, img, name } = singlerev;

    return (
        <div>
            <div className='d-flex align-items-center my-2 '>

                <img src={img} className='rounded-circle' alt="" style={{ width: "40px", height: "40px" }} />
                <p className='fs-5 my-2 px-2'>{name}</p>
            </div>
            <p className='fw-bolder'>{review} </p>
            <hr />
        </div>
    );
};

export default SingleReview;