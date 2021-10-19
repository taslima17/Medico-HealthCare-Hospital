import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { setUser, setError, error, googleSignin, login, logOut, Register, githubSignin } = useAuth();
    const [reg, setReg] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const location = useLocation();
    console.log('from', location.state?.from);
    const redirect_url = location.state?.from || '/home';
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
            }).catch(e => {
                setError(e.message)

            }
            );

    }

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
        <div className="login-page">
            <div className="mt-5 toggle-btn d-flex w-50 justify-content-around mx-auto">
                <button onClick={() => { setReg(true); setError(''); }} className="catagory" style={{ background: "white", border: "0", fontSize: "1.5rem", color: reg ? "red" : "black", borderBottom: reg ? "3px solid red" : "3px solid white" }}>Login</button>
                <button className="catagory" onClick={() => { setReg(false); setError(''); }} style={{ background: "white", border: "0px", fontSize: "1.5rem", color: !reg ? "red" : "black", borderBottom: !reg ? "3px solid red" : "3px solid white" }} >Register</button>

            </div>

            <Form className="w-50 m-5 mx-auto bg-white" onSubmit={handleSubmit}>

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
                    <Button type="submit" variant="danger" className="">Login</Button> :
                    <Button type="submit" variant="danger" className="mt-2">Register</Button>}

            </Form>

            {reg && <button type="btn" className="w-25 mb-3 border-0 p-3 bg-secondary text-white fs-5" onClick={handleGoogleSignin}>Signin using Google  </button>}
            <br />
            {reg && <button type="btn" className="w-25 mb-3 border-0 p-3 fs-5 bg-secondary text-white" onClick={handleGithubSignin}>Signin using Github </button>}
        </div >
    );
};

export default Login;