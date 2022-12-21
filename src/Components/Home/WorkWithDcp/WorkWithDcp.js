import React from 'react';
import { Col, Row } from 'react-bootstrap';

const WorkWithDcp = () => {
    return (
        <div className='m-0 container mx-auto '>
            <Row className='align-items-center' >
                <Col md={12} lg={6} data-aos="fade-right">
                    <h1 className='py-4  bebus-font '> Do Music Production from DCP</h1>
                    <p>Join and you’ll gain access to hours of exclusive video content from DCP, your favorite EDM artists, and other select educators. New tutorials are added weekly.

                    </p>
                </Col>
                <Col md={12} lg={6} data-aos="fade-left" >
                    <Row>
                        <Col md={12} lg={6} >
                            <ul>
                                <li>    100+ Videos</li>
                                <li>    New Videos Added Weekly</li>
                                <li>    50% off Exclusive Sample Packs</li>
                            </ul>
                        </Col >
                        <Col md={12} lg={6} >
                            <ul>
                                <li>    100+ Videos</li>
                                <li>    New Videos Added Weekly</li>
                                <li>    50% off Exclusive Sample Packs</li>
                            </ul>
                        </Col>

                    </Row>

                </Col>
            </Row>


        </div>
    );
};

export default WorkWithDcp;