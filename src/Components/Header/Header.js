import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="white" className="py-3 ">
            <Container>
                <Navbar.Brand href="/home" className="d-flex align-items-center">
                    <img
                        src="https://metrocitymedicalclinic.ca/wp-content/uploads/2018/03/M-logo-2-copy.jpg"
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />{' '}
                    <h3 className="text-primary ps-3"> MAYO CLINIC</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home" className="link">Home</Nav.Link>

                        <Nav.Link as={Link} to="/teams" className="link">Our Teams</Nav.Link>
                        <Nav.Link as={Link} to="/appointment" className="link" oncl>Make an Appointment</Nav.Link>
                        {
                            user.email ? <Nav.Link onClick={logOut} className="link">Logout {user.displayName}</Nav.Link> : <Nav.Link as={Link} to="/login" className="link">Login</Nav.Link>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;