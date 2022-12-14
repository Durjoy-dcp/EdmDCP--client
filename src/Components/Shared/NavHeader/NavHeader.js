import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
import { AuthContext } from '../../../UserContext/UserContext';
import { FaUserAlt } from 'react-icons/fa';
const NavHeader = () => {
    const { user, logOut, loading, setLoading } = useContext(AuthContext);
    // console.log(user);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handletoLogOut = () => {
        logOut()
            .then(result => {

                console.log("Logged Out")
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" className="px-4">


                <Link to='/'><img src={logo} style={{ maxWidth: "70px" }} alt=""></img> </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <NavLink to='/services' className='nav-link'>Services</NavLink>
                        <NavLink to='/blog' className='nav-link'>Blog</NavLink>

                        {/* <Link to='/login' className='nav-link'>Login</Link>
                        <Link to='/signup' className='nav-link'>Sign Up</Link> */}
                        {
                            (user && user.uid) ? <>
                                <NavLink to='/myreview' className="nav-link">My Reviews</NavLink>
                                <NavLink to='/addservice' className="nav-link">Add Services</NavLink>

                                {
                                    (user?.photoURL) ? <Image className='my-auto mx-3 ' roundedCircle style={{ width: "30px", height: "30px" }} src={user?.photoURL} alt={user?.displayName} title={user?.displayName} /> :
                                        <FaUserAlt className='my-auto mx-3' />
                                }


                                <button onClick={handletoLogOut} className="nav-link btn btn-outline-danger mx-4">Sign Out</button>

                            </>
                                :
                                <>
                                    <NavLink to='/login' className="nav-link">Login</NavLink>
                                    <NavLink to='/signup' className="nav-link">Sign Up</NavLink>
                                </>
                        }


                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default NavHeader;