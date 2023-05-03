import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import registerBanner from '../images/registerbanner.png';
import ecomlogo from '../images/ecomlogo.png';
const Login = ({ addUserLocal }) =>
{
  const [userDetail, setUserDetail] = useState({
    firstname: '',
    lastname: '',
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
  const navigate = useNavigate();
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    addUserLocal(userDetail);
    navigate('/home')
  }
  return (
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
                <br />
                to life.
              </h3>
              <Link to='/signup'>Sign Up</Link>
            </div>
          </div>
          <div className='signup_form'>
            <form onSubmit={handleSubmit}>
              <div className='register_form_heading'>
                <img src={ecomlogo} alt='ecomlogo' />
                <h4>Continue To Sign In</h4>
              </div>
              <div className='row gy-2'>
                <div className="form-group col-12">
                  <i className='fa-solid fa-envelope' />
                  <label htmlFor="inputEmail4">Email</label>

                  <input type="email" className="form-control" id="inputEmail4" value={userDetail.email} name='email' placeholder="xyz@gmail.com" onChange={handleInput} />
                </div>
                <div className="form-group col-12">
                  <label htmlFor="password">Password</label>
                  <i className='fa-solid fa-lock' />
                  <input type="password" className="form-control" id="password" value={userDetail.password} name='password' placeholder="XXXXXXXX" onChange={handleInput} />
                </div>
              </div>
              <div className='term_text'>
                <Link to='/forget-password'>Forget Password ?</Link>
                <Link to='/signup'>Don't have an account ?</Link>
              </div>
              <button className='btn mx-auto' type='submit'>Sign In</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Login