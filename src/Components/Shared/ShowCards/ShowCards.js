import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ShowCards = ({ service }) => {
    const { img, _id, price, name, details } = service;

    return (
        <Col>
            <Card className='' bg="dark" key="dark">
                <Card.Img variant="top" src={img} style={{ maxHeight: "200px" }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {
                            (details.length > 100) ? details.slice(0, 100) + '...' : details

                        }

                    </Card.Text>
                    <div>
                        <p>${price}</p>

                    </div>

                </Card.Body>
                <Card.Footer>
                    {/* <small className="text-muted">Last updated 3 mins ago</small>
                     */}
                    <Link to={`/services/${_id}`} ><Button className='w-100 bg-dark text-info'>Details</Button></Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ShowCards;