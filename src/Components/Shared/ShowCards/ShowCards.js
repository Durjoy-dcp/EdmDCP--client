import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaStar } from "react-icons/fa";
const ShowCards = ({ service }) => {
    const { img, _id, price, rating, name } = service;

    return (
        <Col>
            <Card className='' bg="dark" key="dark">
                <Card.Img variant="top" src={img} style={{ maxHeight: "200px" }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    {/* <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.

                    </Card.Text> */}
                    <div>
                        <p>${price}</p>
                        <div className='d-flex align-items-center'>
                            <p><FaStar className='text-warning' /></p>
                            <p>{rating}</p>
                        </div>
                    </div>

                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ShowCards;