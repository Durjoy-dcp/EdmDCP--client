import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Contact from '../Shared/ContactUs/Contact';
import Header from '../Shared/Header/Header';
import ShowCards from '../Shared/ShowCards/ShowCards';
import Biography from './Biography/Biography';
import ImageGalary from './ImageGalary/ImageGalary';
import WorkWithDcp from './WorkWithDcp/WorkWithDcp';

const Home = () => {
    const services = useLoaderData();
    useTitle('Home - Producer DCP')

    console.log(services);
    return (
        <div>
            <Header></Header>
            <div className='services '>
                <WorkWithDcp></WorkWithDcp>
                <div className='container'>

                    <h1 className='py-4  bebus-font '>  Explore Fresh Content</h1>
                    <hr />
                </div>
                <Container className="" style={{ maxWidth: "900px" }}>

                    <Row className='g-4 py-5' xs={1} md={2} lg={3}>
                        {
                            services.map(service => <ShowCards key={service._id} service={service}></ShowCards>)
                        }
                    </Row>
                    <div className="w-100 text-center pb-5">
                        <Link to='/services' className=''><button className='btn btn-info'>See More</button></Link>
                    </div>
                </Container>
            </div>
            <div className='services'>
                <ImageGalary ></ImageGalary>
                <Biography></Biography>

                <Contact></Contact>
            </div>

        </div>
    );
};

export default Home;