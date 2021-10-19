import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Mayo Clinic</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>

                        <Nav.Link as={Link} to="/teams">Our Teams</Nav.Link>
                        <Nav.Link as={Link} to="/appointment" oncl>Make an Appointment</Nav.Link>
                        {
                            user.email ? <Nav.Link onClick={logOut}>Logout {user.displayName}</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;