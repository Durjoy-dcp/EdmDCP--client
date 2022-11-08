import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FaGoogle, FaGithub } from 'react-icons/fa'
import { AuthContext } from '../../UserContext/UserContext';
import { toast } from 'react-toastify';

const Login = () => {
    const authInfo = useContext(AuthContext);
    const [errormsg, setErrorMsg] = useState('');
    const { SignInGoogle, SignInGithub, setLoading, logIn } = authInfo;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleToLogin = (event) => {
        const form = event.target;
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;


        logIn(email, password)
            .then(result => {
                setErrorMsg("succssfully logged In");
                toast("succssfully logged In");
                navigate(from, { replace: true });
            }).catch(error => { setErrorMsg(error.message); toast.error("Failed to Sign In") })


    }

    const handleTosignwithGoogle = () => {
        SignInGoogle()
            .then(result => {
                setErrorMsg("succssfully logged In");
                toast("succssfully logged In");
                navigate(from, { replace: true });
                setLoading(false);
            }
            )
            .catch(error => { setErrorMsg(error.message); toast.error("Failed to Sign In") })
    }

    return (
        <div>
            <Form onSubmit={handleToLogin} style={{ maxWidth: "440px" }} className="mx-auto my-5 gray-text border border-info p-4 rounded" >
                <h2 className='my-3'>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                </Form.Group>
                <Button variant="outline-info" type="submit">
                    Login
                </Button>
                {
                    errormsg !== '' && <p>{errormsg}</p>
                }
                <p className='my-3 p-2'><small>New here? <Link className='text-decoration-none' to="/signup"> create an account</Link> </small></p>
                <Button onClick={handleTosignwithGoogle} variant="info" className="w-100 ">
                    Sign Up with Google <FaGoogle className='my-auto ms-1' />
                </Button>

            </Form>
        </div>
    );
};

export default Login;