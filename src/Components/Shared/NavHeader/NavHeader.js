import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
const NavHeader = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" className="px-4">


                <Link to='/'><img src={logo} style={{ maxWidth: "70px" }} alt=""></img> </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <Link to='/services' className='nav-link'>Services</Link>
                        <Link to='/login' className='nav-link'>Login</Link>
                        <Link to='/signup' className='nav-link'>Sign Up</Link>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default NavHeader;