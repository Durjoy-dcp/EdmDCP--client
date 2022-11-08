import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
import MyReviewSingle from '../MyReviewSingle/MyReviewSingle';


const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [newreviewdb, setnewReviewDb] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myreview?email=${user.email}`)
            .then(res => res.json())
            .then(data => setnewReviewDb(data))
    }, [])
    return (
        <div className='services '>
            <div className='container py-2'>

                {
                    newreviewdb.map(rev => <MyReviewSingle key={rev._id} rev={rev}></MyReviewSingle>)

                }
            </div>

        </div>
    );
};

export default MyReviews;