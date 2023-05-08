import React from 'react'
import '../css/header.css';
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from "../images/logo.png";
import { useEffect } from 'react';
const Header = () =>
{

    // Sticky Menu Area
    useEffect(() =>
    {
        window.addEventListener('scroll', isSticky);
        return () =>
        {
            window.removeEventListener('scroll', isSticky);
        };
    });


    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) =>
    {
        const header = document.querySelector('.menu_wrapper');
        const scrollTop = window.scrollY;
        scrollTop ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };



    return (
        <>
            <section className='header_wrapper'>
                <div className='container'>
                    <div className='main_head'>
                        <ul className='social_links'>
                            <li>
                                <p>Follow Us</p>
                            </li>
                            <li>
                                <Link to='/'>
                                    <i className="fa-brands fa-facebook"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <i className="fa-brands fa-twitter"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <i className="fa-brands fa-instagram"></i>
                                </Link>
                            </li>

                        </ul>
                        <ul className='contact_us'>
                            <li>
                                <Link to='/'>
                                    Hot Line: + 880 180 999 147
                                </Link>
                            </li>
                        </ul>
                        <button className='btn'>
                            <i className="fa-solid fa-location-dot"></i>
                            Track Order
                        </button>
                    </div>
                </div>
            </section>

            <section className='menu_wrapper'>
                <div className='container'>
                    <Navbar collapseOnSelect expand="lg">
                        <Container className='px-0'>
                            <Navbar.Brand href="#home">
                                <img src={logo} alt='logo' />
                            </Navbar.Brand>
                            <div className='mobile_cart'>
                                <ul>
                                    <li>
                                        <NavLink to="/cart">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/cart">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/cart">
                                            <i className="fa-solid fa-user"></i>
                                        </NavLink>
                                    </li>
                                </ul>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                                    <i className="fa-solid fa-bars"></i>
                                </Navbar.Toggle>
                            </div>

                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link href="#features">Home</Nav.Link>
                                    <Nav.Link href="#pricing">About Us</Nav.Link>
                                    <NavDropdown title="Shop" className='nav_drop' id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.2">
                                            Mens

                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Women</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">
                                            Teen
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Pages" className='nav_drop' id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.2">
                                            Mens
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Women</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">
                                            Teen
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Blogs" className='nav_drop' id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.2">
                                            Mens
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Women</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">
                                            Teen
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#features">ContactUS</Nav.Link>

                                </Nav>
                                <Nav className='ms-auto d-none d-lg-flex'>
                                    <Nav.Link to="/cart">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </Nav.Link>
                                    <Nav.Link to="/e-commerce">
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </Nav.Link>
                                    <Nav.Link to="/e-commerce">
                                        <i className="fa-solid fa-user"></i>
                                    </Nav.Link>
                                </Nav>

                            </Navbar.Collapse>

                        </Container>
                    </Navbar>
                </div>

            </section>


        </>
    )
}

export default Header