import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../../../Hooks/useFirebase';

import "./Header.css"

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={HashLink} to='/home'><span className='fw-bolder fs-1 text-warning'>DSM</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='navLink-style fw-bold' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='navLink-style fw-bold' as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className='navLink-style fw-bold' as={HashLink} to="/home#details">Details</Nav.Link>
                        <Nav.Link className='navLink-style fw-bold' as={HashLink} to="/workers">Workers</Nav.Link>
                        <Nav.Link className='navLink-style fw-bold' as={HashLink} to="/myOrders">MyOrders</Nav.Link>
                        <Nav.Link className='navLink-style fw-bold' as={HashLink} to="/aboutUs">About Us</Nav.Link>
                        {user?.email ?
                            <p ><Button className='mt-3 mx-3 pt-1' onClick={logOut} variant="danger">Logout </Button> </p> :
                            <Nav.Link className='navLink-style fw-bold' as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header
