import React from 'react';
import '../styles/Header.css'
import { Link } from "react-router-dom";
import Search from './Search';
import logo from '../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (



        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home" >
                    <Link to="/" className='logo'><img className="ml-2" src={logo} alt="Logo" style={{ height: "40px" }} /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='w-100'>
                    <Nav
                        className="me-auto my-2 my-lg-0 top"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Search />
                       
                    </Nav>
                    <div className='topEnd'>
                            <Nav.Link href="#action1" className='text'>Login</Nav.Link>
                            <Nav.Link href="#action2" className='text'>Sign In</Nav.Link>
                    </div>



                </Navbar.Collapse>
            </Container>
        </Navbar>





    )
}

export default Header