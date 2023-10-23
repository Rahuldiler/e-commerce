import React from 'react'
import '../css/header.css';
import { Link, NavLink } from 'react-router-dom';
import { Container, Dropdown,  Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from "../images/logo.png";
import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
const Header = () =>
{
    // const data = useSelector(state => state.items.items);

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
                                            {/* <i className="fa-solid fa-cart-shopping"></i>{data.length > 0 && <p>(data.length)</p>} */}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <Dropdown className='user_login'>
                                            <Dropdown.Toggle variant="transparent" className='border-0 p-0' drop="start" id="dropdown-basic" style={{ color: "rgba(0, 0, 0, 0.55)" }}>
                                                <i className="fa-solid fa-user"></i>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <NavLink to="/login">
                                                    <i className="fa-solid fa-right-to-bracket"></i> Sign In
                                                </NavLink>
                                                <button className='logout'>
                                                    <i className="fa-solid fa-right-to-bracket me-1"></i> Sign Out
                                                </button>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>

                                </ul>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                                    <i className="fa-solid fa-bars"></i>
                                </Navbar.Toggle>
                            </div>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link to="/">Home</Nav.Link>
                                    <Nav.Link to="/">About Us</Nav.Link>
                                    <NavDropdown title="Shop" className='nav_drop' id="collasible-nav-dropdown">
                                        <NavDropdown.Item to="/">
                                            Mens

                                        </NavDropdown.Item>
                                        <NavDropdown.Item to="/">Women</NavDropdown.Item>
                                        <NavDropdown.Item to="/">
                                            Teen
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Pages" className='nav_drop' id="collasible-nav-dropdown">
                                        <NavDropdown.Item to="/">
                                            Mens
                                        </NavDropdown.Item>
                                        <NavDropdown.Item to="/">Women</NavDropdown.Item>
                                        <NavDropdown.Item to="/">
                                            Teen
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Blogs" className='nav_drop' id="collasible-nav-dropdown">
                                        <NavDropdown.Item to="/">
                                            Mens
                                        </NavDropdown.Item>
                                        <NavDropdown.Item to="/">Women</NavDropdown.Item>
                                        <NavDropdown.Item to="/">
                                            Teen
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#features">ContactUS</Nav.Link>

                                </Nav>
                                <Nav className='ms-auto d-none d-lg-flex align-items-baseline'>
                                    <Nav.Link className='px-0 mx-3' to="/cart">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </Nav.Link>
                                    <Nav.Link className='px-0 mx-3' to="/cart">
                                        {/* <i className="fa-solid fa-cart-shopping"></i>{data.length > 0 && <p>(data.length)</p>} */}
                                    </Nav.Link>
                                    <Dropdown className='user_login mx-3 d-flex align-items-center'>
                                        <Dropdown.Toggle variant="transparent" className='border-0 p-0' id="dropdown-basic" style={{ color: "rgba(0, 0, 0, 0.55)" }}>
                                            <i className="fa-solid fa-user"></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <NavLink to="/login">
                                                <i className="fa-solid fa-right-to-bracket"></i> Sign In
                                            </NavLink>
                                            <button className='logout'>
                                                <i className="fa-solid fa-right-to-bracket me-1"></i> Sign Out
                                            </button>
                                        </Dropdown.Menu>
                                    </Dropdown>
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