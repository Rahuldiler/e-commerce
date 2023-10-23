import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../reusable/Layout";

const ProductDetails = () =>
{
    const { id } = useParams()
    // const [color, setColor] = useState("blue")
    const [data, setData] = useState([]);
    const fetch = async () =>
    {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        try
        {
            const result = res.data;
            setData(result);
        } catch (error)
        {
            console.log("Something Error");
        }
    }
    useEffect(() =>
    {
        fetch();
        // eslint-disable-next-line
    }, [])


    return (
        <>
            <Layout>
                <div className="container mb-4">
                    <div className="product_wrapper">
                        <div className='card'>
                            <div className='row'>
                                <div className='col-lg-4 d-flex justify-content-end card_img'>
                                    <img src={data?.image} className='img-fluid' alt='productImg' />
                                </div>
                                <div className='col-lg-8'>
                                    <div className='card_text' key={data?.id}>
                                        <h2>
                                            {data?.title}
                                        </h2>
                                        <div className='rating'>
                                            <span className='d-flex'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </span>
                                        </div>
                                        <p className='price'>
                                            $ {data?.price}
                                        </p>
                                        <p className='description'>{data?.description}</p>                         
                                        <div className='add_to_cart'>
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
                                                    data?.productType
                                                }
                                            </p>
                                        </span>
                                        <span className='category'>
                                            <p>
                                                Category:
                                            </p>
                                            <p>
                                                {
                                                    data?.category
                                                }
                                            </p>
                                        </span>
                                        <span className='in_stock'>
                                            <p>
                                                {data?.available ? "In STock :" : " Out of stock :"}
                                            </p>
                                            {
                                                !data?.available ? <p>No</p> : null
                                            }
                                        </span>

                                    </div>


                                </div>
                            </div>


                            {/* <ImageInput /> */}
                        </div>
                    </div>
                </div>

            </Layout>

        </>
    )
}

export default ProductDetails