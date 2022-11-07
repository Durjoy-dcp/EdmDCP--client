import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ShowCards from '../Shared/ShowCards/ShowCards';
import threePic from '../../assets/threepic.png'
import one_cover from '../../assets/one_cover.jpg'

const Services = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div className='services'>
            <Container>
                <Row>
                    <Col xs={12} md={10}>
                        <Row className='g-4 py-5' xs={1} md={2} lg={3}>
                            {
                                services.map(service => <ShowCards key={service._id} service={service}></ShowCards>)
                            }

                        </Row>
                    </Col>
                    <Col xs={12} md={2}>
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