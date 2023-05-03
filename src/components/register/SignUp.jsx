import React, { useState } from 'react';
import registerBanner from '../images/registerbanner.png';
import ecomlogo from '../images/ecomlogo.png';
import { Link } from 'react-router-dom';
// import { AppContext } from '../../context/authContext';
const SignUp = ({ addUserLocal }) =>
{
    const [userDetail, setUserDetail] = useState({
        firstname: '',
        email: '',
        contact: '',
        city: '',
        state: '',
        pincode: '',
        password: ''
    })
    const handleInput = (e) =>
    {
        const userData = { ...userDetail }
        userData[e.target.name] = e.target.value;
        setUserDetail(userData);
    }
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        addUserLocal(userDetail);
    }
    return (
        <>
            <section className='register_wrapper'>
                <div className='container'>
                    <div className='login_section'>
                        <div className='img_Wrap'>
                            <img src={registerBanner} alt='registerBanner' />
                            <div className='img_ban_text'>
                                <h2>
                                    <p>
                                        Welcome to
                                    </p>
                                    <span>
                                        E-com
                                    </span>
                                </h2>
                                <h3>
                                    We Bring the good shopping
                                    to life.
                                </h3>
                                <Link to='/login'>Sign In</Link>
                            </div>
                        </div>
                        <div className='signup_form'>
                            <form onSubmit={handleSubmit}>
                                <div className='register_form_heading'>
                                    <img src={ecomlogo} alt='ecomlogo' />
                                    <h4>Continue To Sign Up</h4>
                                </div>
                                <div className='row gy-2'>
                                    <div className="form-group col-12">
                                        <label htmlFor="firstn">Full Name*</label>
                                        <i className="fa-solid fa-user"></i>
                                        <input type="text" className="form-control" value={userDetail.firstname} name='firstname' onChange={handleInput} id="firstn" placeholder="Jhon" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <i className='fa-solid fa-envelope' />
                                        <input type="email" className="form-control" id="inputEmail4" value={userDetail.email} name='email' placeholder="xyz@gmail.com" onChange={handleInput} />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="contact">Contact Number*</label>
                                        <i className="fa-solid fa-phone"></i>
                                        <input type="tel" className="form-control" id="contact" value={userDetail.contact} name='contact' placeholder="0000-00-0098" onChange={handleInput} />
                                    </div>
                                    <div className="form-group col-12">
                                        <label htmlFor="password">Password</label>
                                        <i className='fa-solid fa-lock' />
                                        <input type="password" className="form-control" id="password" value={userDetail.password} name='password' placeholder="XXXXXXXX" onChange={handleInput} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="city">City*</label>
                                        <i className="fa-solid fa-location-dot"></i>
                                        <input type="text" className="form-control" id="city" value={userDetail.city} name='city' placeholder="City" onChange={handleInput} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="state">State*</label>
                                        <i className="fa-solid fa-landmark"></i>
                                        <input type="text" className="form-control" id="state" value={userDetail.state} name='state' placeholder="State" onChange={handleInput} />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="pincode">Pincode*</label>
                                        <i className="fa-solid fa-map-pin"></i>
                                        <input type="tel" className="form-control" id="pincode" value={userDetail.pincode} name='pincode' placeholder="Pincode" onChange={handleInput} />
                                    </div>
                                </div>

                                <div className='term_text'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" disabled id="flexCheckChecked" checked />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            Agree to privacy & policy
                                        </label>
                                    </div>
                                    <Link to='/login'>Already have an account ?</Link>
                                </div>
                                <button className='btn mx-auto' type='submit'>Sign Up</button>

                            </form>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default SignUp