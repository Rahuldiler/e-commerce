import React from 'react'
import GoogleLogin from 'react-google-login'

const Login = () =>
{
  const responseGoogle = (res) =>
  {
    console.log(res);
  }
  return (
    <GoogleLogin
      clientId="xxxxx07ob6g1g8sst63nsfnjed734xxxxx.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />

  )
}

export default Login