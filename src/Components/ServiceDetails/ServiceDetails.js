import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaStar, FaRegClock, FaMoneyBillAlt, FaArrowCircleLeft, FaPrint } from 'react-icons/fa';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import dcp from '../../assets/threepic.png'
import logo from '../../assets/logo/logo.png'
import cover from '../../assets/one_cover.jpg'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Reviews from '../Shared/Reviews/Reviews';
import { AuthContext } from '../../UserContext/UserContext';
import SingleReview from '../Shared/SingleReview/SingleReview';
import useTitle from '../../hooks/useTitle';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    let location = useLocation();
    const [newreviewdb, setnewReviewDb] = useState([])
    useTitle('Service Details - Producer DCP')
    useEffect(() => {
        fetch(`https://edm-producerd-dcp-server.vercel.app/review/${service._id}`)
            .then(res => res.json())
            .then(data => setnewReviewDb(data))
    }, [])

    const handleToReview = (event) => {
        const form = event.target;
        event.preventDefault();
        const review = form.review.value;
        const reviewDb = {
            email: user.email,
            review,
            serviceId: service._id,
            img: user.photoURL,
            name: user.displayName,
            title: service.name
        }
        form.reset();
        // console.log(reviewDb)
        fetch('https://edm-producerd-dcp-server.vercel.app/review', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewDb)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    const insertedreview = reviewDb;
                    insertedreview._id = data.insertedId;
                    const newReview = [insertedreview, ...newreviewdb];
                    console.log(data.insertedId);
                    setnewReviewDb(newReview);

                }

            })
    }
    console.log(service);
    return (
        <div className='services'>
            <Row className='py-5 w-100'>
                <Col xs={12} md={7} lg={10}>
                    <div className='container d-flex m-3  coursesContainer'>
                        <div className='   p-4 container rounded ' >
                            <div className='d-lg-flex'>
                                <div>
                                    <PhotoProvider>
                                        <PhotoView src={service.img}>
                                            <img src={service.img} alt="" style={{ maxWidth: "280px " }} className="rounded img-fluid" />
                                        </PhotoView>
                                    </PhotoProvider >

                                </div>
                                <div className='px-3 my-1'>
                                    <div className=' '>
                                        <h1 className='bebus-font display-4'>{service.name}</h1>

                                    </div>

                                    <p>{service.details}</p>


                                    <div className='d-flex justify-content-between m-0'>

                                        <p className='gray-text  ' ><FaMoneyBillAlt className='text-success me-2 ' />${service.price}</p>

                                    </div>
                                    <div className=' '>
                                        <Link className='' to={`/services`} ><button className='rounded btn btn-outline-info m-3'><FaArrowCircleLeft /></button></Link>

                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                    <div className='w-100 my-2'>
                        <Row>
                            <Col xs={12} md={4}>
                                <img src={cover} className="px-4 img-fluid" alt="" />

                            </Col>
                            <Col xs={12} md={8}>
                                <h2 className='bebus-font  fs-1 my-2 px-2 py-1'>Reviews</h2>
                                {
                                    (user && user.uid) ?
                                        <>
                                            <form onSubmit={handleToReview}>


                                                <textarea className='w-100 p-2 m-2 bg-dark text-white' placeholder='Write your review in 250 characters' style={{ resize: "none" }} maxLength="250" name="review" id="" rows="4"></textarea>
                                                <div className='d-flex justify-content-end'>

                                                    <button type='submit' className='btn btn-info '>Add Review</button>
                                                </div>

                                            </form>
                                        </> : <>
                                            <h5 className='fw-bold border p-3'> Please <Link state={{ from: location }} className='text-decoration-none ' to='/login'>Login</Link> to add a review</h5>

                                        </>

                                }
                                {/* <Reviews></Reviews>
                                <Reviews></Reviews> */}
                                {/* <h1>total review:{newreviewdb.length}</h1> */}
                                {
                                    newreviewdb.map(singlerev => <SingleReview key={singlerev._id} singlerev={singlerev}></SingleReview>)
                                }

                            </Col>
                        </Row>
                    </div>
                </Col>




                <Col xs={12} md={5} lg={2}>
                    <div className='container px-2  '>
                        <div className='text-center'>

                            <img className='rounded-circle d-block mx-auto' style={{ maxWidth: "200px" }} src={dcp} alt='dcp' />
                            <img className=' px-3 my-2 d-block mx-auto' style={{ maxWidth: "100px" }} src={logo} alt='dcp' />
                        </div>
                        {/* <h1 className='fw-bold display-3 text-center'>DCP</h1> */}
                        <hr />
                        <div className=' text-justify p-3'>

                            <p className="bebus-font  fs-4">Go your Music Production on High Level With DCP</p>
                            <p>Music production is the process of developing, creating and refining recorded music for public presentation. Music production can refer to the entire lifecycle of a piece of music—from songwriting and composition to recording and sound design to mixing and mastering.

                                Despite the broad definition, every workflow in modern music production has one thing in common—digital tools.

                                Thanks to today’s technology, music production is more accessible than ever before.

                                For the lowest price in history any musician can set up a home studio and get started producing music.</p>

                        </div>
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default ServiceDetails;