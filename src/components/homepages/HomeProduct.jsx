import React from 'react'
import Products from '../products/Products';
// import ImageInput from '../reusable/ImageInput';
const HomeProduct = () =>
{

    return (
        <>
            <div className='container'>
                <div className='related_products'>
                    <div className='related_heading'>
                        <h2>
                            Best Related Product
                        </h2>
                        <Products />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeProduct