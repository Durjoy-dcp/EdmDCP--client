import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const MyReviewSingle = ({ rev, handleToDelete, handleToUpdate }) => {
    const { review, serviceId, img, name, date, title, _id } = rev;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const update = (event) => {
        event.preventDefault();
        handleToUpdate(_id, event.target.editreview.value);
        handleClose();

    }


    return (
        <div className='bg-dark bg-opacity-50 my-2 p-2  rounded'>
            <div className='d-flex align-items-center my-2 '>

                <img src={img} className='rounded-circle' alt="" style={{ width: "40px", height: "40px" }} />
                <p className='fs-5 my-1 px-2'>{name}</p>
            </div>
            <p className='fw-bolder px-2' style={{ overflowWrap: "break-word" }}>{review} </p>
            <div className='d-flex justify-content-between'>
                <div>
                    <button className='btn btn-outline-info mx-3 btn-sm my-1' onClick={handleShow}>Edit</button>
                    <button onClick={() => handleToDelete(_id)} className='btn btn-outline-danger btn-sm my-1'>DELETE</button>
                </div>
                <div>
                    <p className='p-1 fw-fold '>Commented On : <Link className='fw-bold text-warning' to={`/services/${serviceId}`}> {title}</Link> <small> <Moment fromNow>{date}</Moment></small> </p>

                </div>
            </div>


            <Modal className='p-3' show={show} centered onHide={handleClose}>
                <Form onSubmit={update}>

                    <Modal.Body> <textarea className='w-100 p-2 m-2 bg-dark text-white' defaultValue={review} style={{ resize: "none" }} maxLength="250" name="editreview" id="" rows="4"></textarea> </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div >
    );
};

export default MyReviewSingle;