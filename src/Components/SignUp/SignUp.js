import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../UserContext/UserContext';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import logo from '../../assets/logo/logo.png'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const authInfo = useContext(AuthContext);
    const [errormsg, setErrorMsg] = useState('');
    const { SignInGoogle, SignInGithub, setLoading, logIn, signUp, updateInfo } = authInfo;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [picurl, setPicurl] = useState('https://i.ibb.co/r5jVxKc/avatarimg1.png');
    useTitle('Sign Up - Producer DCP')

    useEffect(() => {
        // console.log(picurl);
    }, [picurl])

    const handleToSignUp = (event) => {
        const form = event.target;
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;

        if (name.split(' ').length < 2) {
            setErrorMsg('You should provide at least two words: First Name & Last Name ')
            return;
        }

        // console.log(email, password, url, name);

        signUp(email, password)
            .then(result => {


                handletoUpdate(name, picurl);
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
                        toast("succssfully logged In");

                        // console.log(data);
                        localStorage.setItem('accessToken', data.token)
                        navigate(from, { replace: true });
                        setLoading(false);

                    })

            }).catch(error => { setErrorMsg(error.message); toast.error("Failed to Sign In") })


    }
    const handletoUpdate = (name, photourl) => {
        const profile = {
            displayName: name,
            photoURL: photourl
        }
        updateInfo(profile)
            .then(() => { })
            .catch(er => { })
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
            <Container>

                <Form onSubmit={handleToSignUp} style={{ maxWidth: "440px" }} className="mx-auto my-5 gray-text border border-info p-4 rounded" >
                    <h2 className='my-3'>Reistration</h2>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="type" name='name' placeholder="Full name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />

                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formurl">
                        <Form.Label>Select your avatar</Form.Label>
                        {/* <Form.Control type="type" name="url" placeholder="url" required /> */}
                        <div className=' p-2 text-center'>

                            <img className={`p-1 ${picurl === 'https://i.ibb.co/r5jVxKc/avatarimg1.png' ? "border p-1" : ""}   `} style={{ height: "50px", width: "50px" }} onClick={() => setPicurl('https://i.ibb.co/r5jVxKc/avatarimg1.png')} src="https://i.ibb.co/r5jVxKc/avatarimg1.png" alt="" />
                            <img className={`p-1 ${picurl === 'https://i.ibb.co/P13PWrz/avatarimg2.png' ? "border p-1" : ""} `} style={{ height: "50px", width: "50px" }} onClick={() => setPicurl('https://i.ibb.co/P13PWrz/avatarimg2.png')} src="https://i.ibb.co/P13PWrz/avatarimg2.png" alt="" />
                            <img className={`p-1 ${picurl === 'https://i.ibb.co/m94zbXF/avatarimg3.png' ? 'border p-1 ' : ''}`} style={{ height: "50px", width: "50px" }} onClick={() => setPicurl('https://i.ibb.co/m94zbXF/avatarimg3.png')} src="https://i.ibb.co/m94zbXF/avatarimg3.png" alt="" />
                            <img className={`p-1 ${picurl === `https://i.ibb.co/h8tkbC1/avatarimg4.png` ? 'border p-1' : ""}`} style={{ height: "50px", width: "50px" }} onClick={() => setPicurl('https://i.ibb.co/h8tkbC1/avatarimg4.png')} src="https://i.ibb.co/h8tkbC1/avatarimg4.png" alt="" />

                        </div>



                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        {
                            errormsg !== '' && <p className='text-warning'>{errormsg}</p>
                        }
                    </Form.Group>
                    <div className='text-center'>

                        <Button variant="outline-info" type="submit">
                            Sign Up
                        </Button>
                    </div>
                    <p className='my-3 p-2'><small>Already have an account? <Link className='text-decoration-none' to="/login"> create an account</Link> </small></p>
                    <SocialLogin></SocialLogin>

                </Form>
            </Container>
        </div>
    );
};

export default SignUp;