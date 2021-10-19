import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { error, googleSignin, login, logOut, Register, githubSignin } = useAuth();
    const [reg, setReg] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
    const handleReset = (e) => {
        e.target.reset();
    }

    return (
        <div className="login-page">
            <div className="mt-5 toggle-btn d-flex w-50 justify-content-around mx-auto">
                <button onClick={() => setReg(true)} className="catagory" style={{ background: "white", border: "0", fontSize: "1.5rem", color: reg ? "red" : "black", borderBottom: reg ? "3px solid red" : "3px solid white" }}>Login</button>
                <button className="catagory" onClick={() => setReg(false)} style={{ background: "white", border: "0px", fontSize: "1.5rem", color: !reg ? "red" : "black", borderBottom: !reg ? "3px solid red" : "3px solid white" }} >Register</button>

            </div>

            <Form className="w-50 m-5 mx-auto bg-white ">

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
                <p>{error}</p>
                {!reg && <button onClick={() => setReg(true)} style={{ border: "0", background: "white", color: "black" }}>Already have an account?</button>}  <br />
                {reg ? <Button variant="danger" className="" onClick={() => login(email, password)}>Login</Button> : <Button variant="danger" className="mt-2" onClick={() => { Register(name, email, password); setEmail(''); setName(''); setPassword('') }}>Register</Button>}

            </Form>

            {reg && <button type="btn" className="w-25 mb-3 border-0 btn-warning text-dark fs-5" onClick={googleSignin}>Signin using Google </button>}
            <br />
            {reg && <button type="btn" className="w-25 mb-3 border-0 btn-warning text-dark fs-5" onClick={githubSignin}>Signin using Github </button>}
        </div >
    );
};

export default Login;