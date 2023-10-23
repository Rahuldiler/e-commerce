
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Home from './components/homepages/Home';
import Login from './components/register/Login';
import SignUp from './components/register/SignUp';
import CartItem from './components/cart/cartItem';
import ProductDetails from './components/products/productDetails';

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
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element={<CartItem />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </>
  );
}

export default App;
