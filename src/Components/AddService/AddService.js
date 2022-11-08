import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddService = () => {
    let navigate = useNavigate();
    const handleToadd = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.thumbnailurl.value;
        const details = form.details.value;
        const price = form.price.value;
        const service = {
            name, img, details, price
        }
        console.log(service);
        fetch('http://localhost:5000/addservice', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    // console.log("successfull")
                    toast("Successfully Added");
                    navigate('/services', { replace: true });
                    // const insertedreview = reviewDb;
                    // insertedreview._id = data.insertedId;
                    // const newReview = [insertedreview, ...newreviewdb];
                    // console.log(data.insertedId);
                    // setnewReviewDb(newReview);

                }

            })

    }
    return (
        <div className='services p-5'>
            <Form onSubmit={handleToadd} style={{ maxWidth: "540px" }} className="mx-auto  gray-text border border-info p-4 rounded" >
                <h2 className='my-3'>Add Service</h2>
                <Form.Group className="mb-3" controlId="formBasictitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control className='bg-dark text-white' type="text" name='name' placeholder="Title" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicdescription">
                    <Form.Label>Description</Form.Label>
                    <textarea className='w-100 p-2 m-2 bg-dark text-white' placeholder='Give details in 550 characters' style={{ resize: "none" }} maxLength="550" name="details" id="" rows="11" required></textarea>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasictitle">
                    <Form.Label>Price</Form.Label>
                    <Form.Control className='bg-dark text-white' type="number" name='price' placeholder="price" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasictitle">
                    <Form.Label>Thumbnail Url</Form.Label>
                    <Form.Control className='bg-dark text-white' type="text" name='thumbnailurl' placeholder="Thumbnail Url" required />

                </Form.Group>
                <div className='text-center'>

                    <Button variant="outline-info" type="submit" >
                        Add
                    </Button>
                </div>


            </Form>
        </div>
    );
};

export default AddService;