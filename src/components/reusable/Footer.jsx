import React from 'react'
import logo from '../images/footerlogo.png';
import "../css/footer.css";
import { Link } from 'react-router-dom';
const Footer = () =>
{
    return (
        <>
            <section className='newsletter'>

            </section>
            <section className='footer_wrapper'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 d-lg-flex mb-md-4 justify-content-center col-md-6'>
                            <div className='logo_sec'>
                                <img src={logo} alt="footer_logo" />
                                <p>
                                    World wide fashion store from 2021.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <h2>
                                    Add. 166/200, Jankapuri West,Dabri-Mor
                                    New-Delhi.
                                </h2>
                                <h2>
                                    <span>
                                        emailto:
                                    </span>
                                    <Link to="/e-commerce">
                                        toponsearch@gmail.com
                                    </Link>
                                </h2>
                            </div>
                        </div>
                        <div className='col-lg-2 d-md-flex mb-md-4 justify-content-center col-md-6'>
                            <div className='quick_links'>
                                <h3>
                                    Quick Links
                                </h3>
                                <ul>
                                    <li>
                                        <Link to="/e-commerce"> New Collection</Link>
                                    </li>
                                    <li>
                                        <Link to="/e-commerce">Women</Link>
                                    </li>
                                    <li>
                                        <Link to="/e-commerce">Men </Link>
                                    </li>
                                    <li>
                                        <Link to="/e-commerce">Arrivals </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-2 d-lg-flex mb-md-4 justify-content-center col-md-6'>
                            <div className='quick_links'>
                                <h3>
                                    Company
                                </h3>
                                <ul>
                                    <li>
                                        <Link to="/e-commerce">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/e-commerce">Returns</Link>
                                    </li>
                                    <li>
                                        <Link to="/e-commerce">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to="/e-commerce">Our Support</Link>
                                    </li>
                                    <li>
                                        <Link to="/e-commerce">Terms & Services</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-5 d-md-flex mb-md-4 justify-content-end col-md-6'>
                            <div>
                                <div className='payment_links'>
                                    <h3>
                                        We Accept:
                                    </h3>
                                    <ul className='mt-2 '>
                                        <li>
                                            <Link to="/e-commerce">
                                                <i className="fa-brands fa-cc-visa"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/e-commerce">
                                                <i className="fa-brands fa-cc-mastercard"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/e-commerce">
                                                <i className="fa-brands fa-cc-mastercard"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className='mt-2 mb-3'>
                                        <li>
                                            <Link to="/e-commerce">
                                                <i className="fa-brands fa-google-pay"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/e-commerce">
                                                <i className="fa-brands fa-amazon-pay"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/e-commerce">
                                                <i className="fa-brands fa-google-pay"></i>
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                                <div className='follow_link'>
                                    <h2>
                                        Follow Us:
                                    </h2>
                                    <ul>
                                        <li>
                                            <Link to="/e-commerce" className='ps-0'>
                                                <i className="fa-brands fa-instagram"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/e-commerce">
                                                <i className="fa-brands fa-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/e-commerce">
                                                <i className="fa-brands fa-pinterest"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/e-commerce">
                                                <i className="fa-brands fa-twitter"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer