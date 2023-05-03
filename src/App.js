
import './App.css';
import Home from './components/Home';
import ProductDetail from './components/products/ProductDetail';
import Login from './components/register/Login';
import SignUp from './components/register/SignUp';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from './components/products/Products';
// import { AppContext } from './context/authContext';
// import './components/css'
function App()
{
  const [user, setLoginUser] = useState({});

  const getUserLocal = () =>
  {
    let user = localStorage.getItem("myUser");
    if (user)
    {
      return JSON.parse(localStorage.getItem("myUser"))
    } else
    {
      return []
    }
  }

  // set user in localStorage
  const addUserLocal = (user) =>
  {
    localStorage.setItem("myUser", JSON.stringify(user));
    setLoginUser(user);
  };


  useEffect(() =>
  {
    addUserLocal()
  }, [])
  return (
    <>
      <Routes>
        <Route exact path='/e-commerce' element={<Home />} />
        <Route path='/login' element={<Login users={user} getUserLocal={getUserLocal} addUserLocal={addUserLocal} />} />
        <Route path='/signup' element={<SignUp users={user} addUserLocal={addUserLocal} />} />
        <Route path="/products" element={<Products users={user} addUserLocal={addUserLocal} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>

    </>
  );
}

export default App;
