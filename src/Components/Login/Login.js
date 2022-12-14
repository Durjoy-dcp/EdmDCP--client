import React, { useContext, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FaGoogle, FaGithub } from 'react-icons/fa'
import { AuthContext } from '../../UserContext/UserContext';
import { toast } from 'react-toastify';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const authInfo = useContext(AuthContext);
    const [errormsg, setErrorMsg] = useState('');
    const { SignInGoogle, SignInGithub, setLoading, logIn, loading } = authInfo;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useTitle('Login - Producer DCP')
    const handleToLogin = (event) => {
        setLoading(true)
        const form = event.target;
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;


        logIn(email, password)
            .then(result => {
                setErrorMsg("succssfully logged In");
                toast("succssfully logged In");
                const user = result.user;
                const currentuser = {
                    email: user.email
                }
                console.log(currentuser)
                fetch('https://edm-producerd-dcp-server.vercel.app/jwt', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentuser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        localStorage.setItem('accessToken', data.token)
                        setLoading(false)
                        navigate(from, { replace: true });


                    })
            }).catch(error => { setLoading(false); setErrorMsg(error.message); toast.error("Failed to Sign In") })


    }
    if (loading) {
        return <div className='w-100 d-flex '>

            <div className="spinner-border mx-auto my-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    }

    // const handleTosignwithGoogle = () => {
    //     SignInGoogle()
    //         .then(result => {
    //             setErrorMsg("succssfully logged In");
    //             toast("succssfully logged In");
    //             navigate(from, { replace: true });
    //             setLoading(false);
    //         }
    //         )
    //         .catch(error => { setErrorMsg(error.message); toast.error("Failed to Sign In") })
    // }

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
                <div className='text-center'>

                    <Button variant="outline-info" type="submit" >
                        Login
                    </Button>
                </div>
                {
                    errormsg !== '' && <p>{errormsg}</p>
                }
                <p className='my-3 p-2'><small>New here? <Link className='text-decoration-none' to="/signup"> create an account</Link> </small></p>
                {/* <Button onClick={handleTosignwithGoogle} variant="info" className="w-100 ">
                    Sign Up with Google <FaGoogle className='my-auto ms-1' />
                </Button> */}
                <SocialLogin></SocialLogin>

            </Form>
        </div>
    );
};

export default Login;