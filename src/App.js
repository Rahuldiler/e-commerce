
import './App.css';
// import Login from './components/register/Login';
// import SignUp from './components/register/SignUp';
// import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Home from './components/homepages/Home';
import Login from './components/register/Login';
import SignUp from './components/register/SignUp';

function App()
{
  // const [user, setLoginUser] = useState({});

  // const getUserLocal = () =>
  // {
  //   let user = localStorage.getItem("myUser");
  //   if (user)
  //   {
  //     return JSON.parse(localStorage.getItem("myUser"))
  //   } else
  //   {
  //     return []
  //   }
  // }
  // const addUserLocal = (user) =>
  // {
  //   localStorage.setItem("myUser", JSON.stringify(user));
  //   setLoginUser(user);
  // };


  // useEffect(() =>
  // {
  //   addUserLocal()
  // }, [])
  return (
    <>
      <Routes>
        <Route exact path='/e-commerce' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        {/* <Route path='/login' element={<Login users={user} getUserLocal={getUserLocal} addUserLocal={addUserLocal} />} />
        <Route path='/signup' element={<SignUp users={user} addUserLocal={addUserLocal} />} /> */}
   
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </>
  );
}

export default App;
