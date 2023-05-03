import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () =>
{
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="header">
            <NavLink className="navbar-brand" to='/e-commerce'>E-COM</NavLink>
            <ul className="desktop_links">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/e-commerce'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to='/latestProduct'>Latest</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/products'>Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/signup'>Sign Up</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/login'>Login</NavLink>
                </li>
            </ul>
            <div className="nav-mobile">
                {
                    !toggle ? <button
                        className="open_nav"
                        onClick={() => setToggle(true)}
                    >
                        <GiHamburgerMenu />
                    </button>
                        :
                        <button
                            className="close_navlinks"
                            onClick={() => setToggle(false)}
                        >
                            <MdOutlineClose />
                        </button>
                }


                {toggle && (
                    <div className="nav-mobile-div slide-bottom">
                        <ul className="nav-mobile-links">
                            <li className="nav-item">
                                <NavLink className="nav-link" onClick={() => setToggle(false)} to='/e-commerce'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" onClick={() => setToggle(false)} aria-current="page" to='/latestProduct'>Latest</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" onClick={() => setToggle(false)} to='/products'>Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" onClick={() => setToggle(false)} to='/signup'>Sign Up</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" onClick={() => setToggle(false)} to='/login'>Login</NavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

        </nav>
    )
}

export default Header