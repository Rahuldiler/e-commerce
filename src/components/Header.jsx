import React from 'react'
import { Link } from 'react-router-dom';
const Header = () =>
{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" href="#">Hidden brand</Link>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/latestProduct'>Latest</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/menProduct'>Men</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/womenProduct'>Women</Link>
                        </li>
                    </ul>
                    <ul className='navbar-nav'>
                        <li className="nav-item">
                            <Link className="nav-link" to='/menProduct'>Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/womenProduct'>Login</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header