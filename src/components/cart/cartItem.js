import React  from 'react';
import {  useSelector } from 'react-redux';
import Layout from '../reusable/Layout';
const CartItem = () =>
{
    const data = useSelector(state => state.cartReducer.items);
    return (
        <Layout>
            {
                data?.map((index) =>
                {
                    return (
                        <div className='row' key={index.id}>
                            <div className='col-lg-4 d-flex justify-content-end card_img'>
                                <img src={index?.img} className='img-fluid' alt='productImg' />
                            </div>
                            <div className='col-lg-8'>
                                <div className='card_text'>
                                    <div className='rating'>
                                        <span className='d-flex'>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </span>
                                        <span className='ms-2'>
                                            <p>
                                                ({index.reviews} reviews)
                                            </p>
                                        </span>
                                    </div>
                                    <h2>
                                        {index.title}
                                    </h2>
                                    <p className='price'>
                                        $ {index.price}
                                    </p>
                                    <p className='description'>{index.description}</p>
                                    {/* <p className='color_choose'>
                                        Color :
                                        {
                                            index.color.map((curColor, i) =>
                                            {
                                                return (
                                                    <button key={i} style={{ backgroundColor: curColor }}
                                                        onClick={() => setColor(curColor)}
                                                        className={color === curColor ? "btnStyle active" : "btnStyle"}>
                                                        {color === curColor ? <i className="fa-solid fa-check"></i> : null}
                                                    </button>
                                                )
                                            })
                                        }
                                    </p> */}
                                    <p className='choose_size'>
                                        Size:
                                        {
                                            index.size.map((curSize, i) =>
                                            {
                                                return (
                                                    <button key={i}
                                                        className="btnSize">
                                                        {curSize}
                                                    </button>
                                                )
                                            })
                                        }
                                    </p>
                                    <div className='add_to_cart'>
                                        {/* <input type='number'  min='1'/> */}
                                        <button className='btn'>
                                            <i className="fa-solid fa-cart-shopping"></i>
                                            Add To Cart
                                        </button>
                                    </div>
                                    <span className='product_type'>
                                        <p>
                                            Product Type:
                                        </p>
                                        <p>
                                            {
                                                index.productType
                                            }
                                        </p>
                                    </span>
                                    <span className='category'>
                                        <p>
                                            Category:
                                        </p>
                                        <p>
                                            {
                                                index.category
                                            }
                                        </p>
                                    </span>
                                    <span className='in_stock'>
                                        <p>
                                            {index.available ? "In STock :" : " Out of stock :"}
                                        </p>
                                        {
                                            index.available ? <p>{index.available}</p> : null
                                        }
                                    </span>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Layout>

    );
};

export default CartItem;
