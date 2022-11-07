import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import ShowCards from '../Shared/ShowCards/ShowCards';

const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <Header></Header>
            <div className='services my-4'>

                <Container className="">
                    <Row className='g-4 ' xs={1} md={2} lg={3}>
                        {
                            services.map(service => <ShowCards key={service._id} service={service}></ShowCards>)
                        }
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default Home;