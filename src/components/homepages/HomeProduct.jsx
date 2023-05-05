import React, { useState } from 'react'
import productImg from "../images/womenshirt.jpg"
import NavPills from '../reusable/NavPills';
import CarouselComp from '../reusable/Carousel';
const HomeProduct = () =>
{




    const cardArray = [
        {
            id: 1,
            title: 'Ghost ManeQuin Winter Dress',
            price: '41.86',
            reviews: '32',
            color: [
                "#000", "#0624d6", "#d60638"
            ],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid   voluptatibus numquam aperiam praesentium cumque commodi suscipit cum temporibus    alias architecto incidunt eius earum perspiciatis, quod quas, nihil sint culpa.',
            productType: 'women winter dress',
            category: 'clothing,hoddies',
            available: '89 Items',
            size: [
                "M", "L",
                "XL", "XXL"
            ]
        }
    ]
    const [color, setColor] = useState(cardArray.color);
    return (
        <>
            <div className='container'>
                <div className='card'>
                    <div className='row'>
                        <div className='col-lg-4 d-flex justify-content-end card_img'>
                            <img src={productImg} className='img-fluid' alt='productImg' />
                        </div>
                        <div className='col-lg-8'>
                            {
                                cardArray.map((index, id) =>
                                {
                                    return (
                                        <div className='card_text' key={id}>
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
                                            <p className='color_choose'>
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
                                            </p>
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
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className='product_details'>
                        <div className='product_heading'>
                            <h2>
                                Product Details
                            </h2>
                            <NavPills />
                        </div>
                    </div>
                    <div className='related_products'>
                        <div className='related_heading'>
                            <h2>
                                Best Related Product
                            </h2>
                            <CarouselComp />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeProduct