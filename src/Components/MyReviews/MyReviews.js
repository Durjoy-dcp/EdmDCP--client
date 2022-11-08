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

    const handleToDelete = (id) => {
        const proceed = window.confirm("Are You sure ,you want to cancel this order ?")
        console.log(id);
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = newreviewdb.filter(ordr => ordr._id != id)
                        setnewReviewDb(remaining)
                    }
                })
        }
    }
    return (
        <div className='services '>
            <div className='container py-2'>

                {
                    newreviewdb.map(rev => <MyReviewSingle key={rev._id} handleToDelete={handleToDelete} rev={rev}></MyReviewSingle>)

                }
            </div>

        </div>
    );
};

export default MyReviews;