import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ShowCards from '../Shared/ShowCards/ShowCards';
import threePic from '../../assets/threepic.png'
import one_cover from '../../assets/one_cover.jpg'
import { AuthContext } from '../../UserContext/UserContext';

const Services = () => {

    const [services, setSerVices] = useState([]);
    const { loading, setLoading } = useContext(AuthContext);
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setSerVices(data)
                setLoading(false)
            })
    }, [])

    if (loading) {

        return <div className='w-100 d-flex '>

            <div className="spinner-border mx-auto my-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    }

    return (
        <div className='services'>
            <Container>
                <Row className='w-100'>
                    <Col xs={12} md={7} lg={10}>

                        <h2 className='my-3 fw-bold display-3'>Services</h2>
                        <Row className='g-4 py-5' xs={1} md={2} lg={3}>
                            {
                                services.map(service => <ShowCards key={service._id} service={service}></ShowCards>)
                            }

                        </Row>
                    </Col>
                    <Col xs={12} md={5} lg={2} >
                        <div className='w-100 py-5 text-center'>
                            <img src={threePic} style={{ maxWidth: "300px" }} alt="" />
                            <img src={one_cover} style={{ maxWidth: "300px" }} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Services;