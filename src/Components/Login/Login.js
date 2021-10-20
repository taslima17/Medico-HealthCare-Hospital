import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';
import gitLogo from '../../github.png';
import googleLogo from '../../google.png';
const Login = () => {
    const { setUser, setError, error, googleSignin, login, logOut, Register, githubSignin } = useAuth();
    const [reg, setReg] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // route setup

    const history = useHistory();
    const location = useLocation();
    console.log('from', location.state?.from);
    const redirect_url = location.state?.from || '/home';


    // method implementation
    const handleGoogleSignin = () => {
        googleSignin().then(res => {
            const user = res.user;
            setUser(user)
            history.push(redirect_url);
        }).catch(e => setError(e.message))

    }
    const handleGithubSignin = () => {
        githubSignin()
            .then(res => {
                const user = res.user;
                setUser(user);
                console.log(user)
                history.push(redirect_url)
            }).catch(e => setError(e.message))

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('password must be 6 character');
        }
        reg ? handleLogin(email, password) : handleRegister(name, email, password);
        e.target.reset();

    }
    const handleLogin = (email, password) => {
        login(email, password).then(res => {
            const user = res.user;
            setUser(user);
            setError('Login Successful');
            console.log(user)
            history.push(redirect_url)
        }
        ).catch(e => {
            setError(e.message)
        }
        );
    }
    const handleRegister = (name, email, password) => {
        Register(name, email, password)
            .then(res => {
                const user = res.user;
                setError('Registration Successful');
                user.displayName = name;
                logOut();
            }).catch(e => {
                setError(e.message)

            }
            );

    }
    // data from input
    const HandleName = (e) => {
        const name = e.target.value;
        setName(name);
    }
    const HandleEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }
    const HandlePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }


    return (
        <div className="login-page p-lg-5 py-3">
            <div className="bg-white px-lg-5 py-3 px-2  m-lg-5 w-50 mx-auto ">
                <div className="mt-5 toggle-btn  d-flex justify-content-around mx-auto ">

                    {/* toggle buttons */}

                    <button onClick={() => { setReg(true); setError(''); }} className="catagory" style={{ background: "white", border: "0", fontSize: "1.5rem", color: reg ? "blue" : "black", borderBottom: reg ? "3px solid blue" : "3px solid white" }}>Login</button>
                    <button className="catagory" onClick={() => { setReg(false); setError(''); }} style={{ background: "white", border: "0px", fontSize: "1.5rem", color: !reg ? "blue" : "black", borderBottom: !reg ? "3px solid blue" : "3px solid white" }} >Register</button>

                </div>

                <Form className="  mt-5 mx-auto bg-white" onSubmit={handleSubmit}>

                    {!reg && <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={HandleName} type="text" placeholder="Enter Name" />
                    </Form.Group>}
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={HandleEmail} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={HandlePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    {!reg &&
                        <button onClick={() => setReg(true)} style={{ border: "0", background: "white", color: "black" }}>Already have an account?</button>}
                    <br />
                    {reg ?
                        <Button type="submit" variant="primary" className="">Login</Button> :
                        <Button type="submit" variant="primary" className="mt-2">Register</Button>}

                </Form> <br />
                {reg && <h6>OR</h6>}

                {/* sign in method */}
                {reg && <img className="m-2" onClick={handleGoogleSignin} src={googleLogo} width="30px" alt="" />}
                {reg && <img className="m-2" onClick={handleGithubSignin} src={gitLogo} width="30px" alt="" />}

                {/* {reg && <button type="btn" className="mt-3 w-25 mb-3 border-0  bg-secondary text-white fs-5" onClick={handleGoogleSignin}>Signin using Google  </button>}
<br /> <img src="" alt="" />
{reg && <button type="btn" className="w-25 mb-3 border-0  fs-5 bg-secondary text-white" onClick={handleGithubSignin}>Signin using Github </button>} */}
            </div>
        </div >
    );
};

export default Login;