
import React from 'react'
import Carousel from 'react-grid-carousel'
import productimg from "../images/womenshirt.jpg";
import "../css/carousel.css";
const CarouselComp = () =>
{
    return (
        <Carousel cols={4} rows={1} gap={10} loop>
            <Carousel.Item >
                <div style={{ position: "relative", boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.2)" }} >
                    <img width="100%" src={productimg} alt='productimg' />
                    <div className='related_card_text'>
                        <ul>
                            <li className='my-2'>
                                <button className='btn'>
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                            </li>
                            <li className='my-2'>
                                <button className='btn'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                            </li>
                        </ul>
                        <h3>
                            Women Sports Suit
                        </h3>
                    </div>
                </div>

            </Carousel.Item>
            <Carousel.Item >
                <div style={{ position: "relative", boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.2)" }} >
                    <img width="100%" src={productimg} alt='productimg' />
                    <div className='related_card_text'>
                        <ul>
                            <li className='my-2'>
                                <button className='btn'>
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                            </li>
                            <li className='my-2'>
                                <button className='btn'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                            </li>
                        </ul>
                        <h3>
                            Women Sports Suit
                        </h3>
                    </div>
                </div>

            </Carousel.Item>
            <Carousel.Item >
                <div style={{ position: "relative", boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.2)" }} >
                    <img width="100%" src={productimg} alt='productimg' />
                    <div className='related_card_text'>
                        <ul>
                            <li className='my-2'>
                                <button className='btn'>
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                            </li>
                            <li className='my-2'>
                                <button className='btn'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                            </li>
                        </ul>
                        <h3>
                            Women Sports Suit
                        </h3>
                    </div>
                </div>

            </Carousel.Item>
            <Carousel.Item >
                <div style={{ position: "relative", boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.2)" }} >
                    <img width="100%" src={productimg} alt='productimg' />
                    <div className='related_card_text'>
                        <ul>
                            <li className='my-2'>
                                <button className='btn'>
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                            </li>
                            <li className='my-2'>
                                <button className='btn'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                            </li>
                        </ul>
                        <h3>
                            Women Sports Suit
                        </h3>
                    </div>
                </div>

            </Carousel.Item>
            <Carousel.Item >
                <div style={{ position: "relative", boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.2)" }} >
                    <img width="100%" src={productimg} alt='productimg' />
                    <div className='related_card_text'>
                        <ul>
                            <li className='my-2'>
                                <button className='btn'>
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                            </li>
                            <li className='my-2'>
                                <button className='btn'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                            </li>
                        </ul>
                        <h3>
                            Women Sports Suit
                        </h3>
                    </div>
                </div>

            </Carousel.Item>
            <Carousel.Item >
                <div style={{ position: "relative", boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.2)" }} >
                    <img width="100%" src={productimg} alt='productimg' />
                    <div className='related_card_text'>
                        <ul>
                            <li className='my-2'>
                                <button className='btn'>
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                            </li>
                            <li className='my-2'>
                                <button className='btn'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                            </li>
                        </ul>
                        <h3>
                            Women Sports Suit
                        </h3>
                    </div>
                </div>

            </Carousel.Item>
        </Carousel >
    )
}
export default CarouselComp