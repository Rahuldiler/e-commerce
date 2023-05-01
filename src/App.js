
import './App.css';
import { Routes, Route } from "react-router-dom";
import MenProducts from './components/men/MenProducts';
import WomenProducts from './components/women/WomenProducts';
import LatestProducts from './components/latest/LatestProducts';
import Home from './components/Home';
import ProductDetail from './components/men/ProductDetail';
function App()
{
  return (
    <>
      <Routes>
        <Route exact path='/e-commerce' element={<Home/>} />
        <Route path="/menProduct" element={<MenProducts />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/womenProduct" element={<WomenProducts />} />
        <Route path="/latestProduct" element={<LatestProducts />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
