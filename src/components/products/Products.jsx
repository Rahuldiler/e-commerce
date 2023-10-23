
import React, { useEffect } from 'react';
import "../css/carousel.css";
import { useNavigate } from "react-router-dom";
import CartButton from '../reusable/CartButton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/apiActions';
import { useState } from 'react';
const Products = () =>
{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedData,setSelectedData] = useState({})
    const products = useSelector(state => state.products.products);

    const handleRedirect = (productId) =>
    {
        navigate(`product/${productId}`);
    };
    useEffect(() =>
    {
        dispatch(fetchProducts());
    }, [dispatch]);

    const getData = (ele) =>
    {
        setSelectedData(ele);
    }
    
    return (
        <div className='container'>
            <div className='row gy-3'>
                {
                    products?.map((ele) =>
                    {
                        return (
                            <div className='col-xl-3 col-md-4 col-sm-6' key={ele.id} >
                                <div className='product_listing' onClick={() => handleRedirect(ele.id)}>
                                    <h3>{ele.title.slice(0, 20)}</h3>
                                    <div className='prdct_img'>
                                        <img src={ele?.image} alt='productimg' />
                                    </div>

                                    <div className='related_card_text'>

                                        <div className='price_section'>
                                            <p>{ele?.price.toLocaleString("en-IN", {
                                                style: "currency",
                                                currency: "INR",
                                            })}</p>
                                            <button className='btn' onClick={()=>getData(ele)}>
                                                <i className="fa-regular fa-heart"></i>
                                            </button>
                                            <CartButton slectedData={selectedData} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        </div>


    )
}
export default Products