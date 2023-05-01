

import MenProductCard from './MenProductCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "../css/style.css";
import DataFetchLoader from '../Loaders/DataFetchLoader';
import Layout from '../reusable/Layout';
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
const MenProducts = () =>
{
  const defaultSelectValue = "Apply Filter"
  const [product, setProduct] = useState([]);
  const [selected, setSelected] = useState(defaultSelectValue)
  const dispatch = useDispatch();
  useEffect(() =>
  {
    const handleQuestion = async () =>
    {
      const res = await axios.get('https://fakestoreapi.com/products')
     .catch((err) =>
     {
       console.log(err);
     })
      dispatch(setProduct(res.data));
    };
    handleQuestion();
    // eslint-diabled-next-line
  }, []);

  return (
    <>
      <Layout>
        <section className='men_product_wrapper'>
          <div className='productsCard mt-4'>
            <h2 className='menheading'>
              Men Daily Use Product
            </h2>
            <div className="container">
              <div className='filter'>
                <p>Filter <i class="fa-solid fa-filter"></i>:</p>
                <select
                  id="filterValue"
                  name="filterValue"
                  defaultValue={selected}
                  style={{ color: selected === defaultSelectValue ? "gray" : "black" }}
                  onChange={e => setSelected(e.target.value)}
                >
                  <option>{defaultSelectValue}</option>
                  <option>Price : High to Low</option>
                  <option>Price : Low to High</option>
                  <option>Rating</option>
                  <option>Below $10</option>
                </select>
              </div>
              <div className='row g-3'>
                {product.length > 0 ?

                  product.map((index, id) =>
                  {
                    return (
                      <>
                        <div className='col-lg-3 col-md-4 mb-4' key={id}>
                          <Link to={`/product/${id}`}>
                            <MenProductCard data={index} />
                          </Link>
                        </div>
                      </>
                    )
                  })

                  :
                  <div className='d-flex justify-content-center'>
                    <DataFetchLoader />
                  </div>

                }
              </div >
            </div>
          </div>
        </section>
      </Layout>

    </>

  )
}

export default MenProducts;