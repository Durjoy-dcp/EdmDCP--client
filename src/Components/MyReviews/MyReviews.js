import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
import MyReviewSingle from '../MyReviewSingle/MyReviewSingle';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [newreviewdb, setnewReviewDb] = useState([])
    const { loading, setLoading } = useContext(AuthContext);

    useTitle('My Reviews - Producer DCP')

    const handleToUpdate = (id, editcomment) => {
        // console.log(id, editcomment);
        fetch(`http://localhost:5000/review/${id}`, {
            method: 'PATCH', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ review: editcomment })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = newreviewdb.filter(ord => ord._id != id)
                    const thatcomment = newreviewdb.find(ord => ord._id == id)
                    thatcomment.review = editcomment;
                    const newOrder = [thatcomment, ...remaining]

                    setnewReviewDb(newOrder)
                }
            })
    }

    useEffect(() => {

        fetch(`http://localhost:5000/myreview?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                setnewReviewDb(data)


            })
    }, [user?.email, logOut])
    if (loading) {

        return <div className='w-100 d-flex '>

            <div className="spinner-border mx-auto my-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    }

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
                        toast('Deleted');
                        setnewReviewDb(remaining)
                    }
                })
        }
    }
    return (
        <div className='services '>

            <div className='container py-2'>


                {newreviewdb.length == 0 ? <div className=' position-absolute top-50  start-50 translate-middle'> <h1 className='text-center w-100 bebus-font display-1 '>No reviews were added</h1> </div> :
                    newreviewdb.map(rev => <MyReviewSingle key={rev._id} handleToDelete={handleToDelete} handleToUpdate={handleToUpdate} rev={rev}></MyReviewSingle>)

                }
            </div>


        </div>
    );
};

export default MyReviews;