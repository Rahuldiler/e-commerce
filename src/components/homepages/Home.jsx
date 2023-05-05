import React from 'react'
import Layout from '../reusable/Layout'
import kidbanner from "../images/KIDSBANNER.png"
import "../css/home.css";
import "../css/homeProduct.css";
import { Link } from 'react-router-dom';
import HomeProduct from './HomeProduct';
const Home = () =>
{
  return (
    <Layout>
      <section className='home_ban'>
        <img src={kidbanner} alt='kids_banner' className='w-100' />
        <div className='breadcrumb_section'>
        </div>
        <div className='text_section'>
          <div>
            <h2>Shop Details</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/e-commerce">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Shop Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className='product_wrapper'>
        <HomeProduct />
      </section>
    </Layout>
  )
}

export default Home