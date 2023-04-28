
import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import MenProducts from './components/men/MenProducts';
import WomenProducts from './components/women/WomenProducts';
import LatestProducts from './components/latest/LatestProducts';
import Home from './components/Home';
function App()
{
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path="/menProduct" element={<MenProducts />} />
        <Route exact path="/womenProduct" element={<WomenProducts />} />
        <Route exact path="/latestProduct" element={<LatestProducts />} />
      </Routes>
    </>
  );
}

export default App;
