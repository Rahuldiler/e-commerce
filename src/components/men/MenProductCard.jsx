
import React from "react";
const MenProductCard = (props) =>
{
    return (
        <>
            <div className="card productCardDetail">

                <div className="card-img">
                    <img src={props.data.image} alt="" />

                </div>
                <div className="card-body">
                    <div className="d-flex align-items-baseline justify-content-between">
                        <h4>{props.data.title.length > 20
                            ? props.data.title.substring(0, 15) + '...'
                            : props.data.title}</h4>

                    </div>
                    <p>
                        {props.data.description.length > 50
                            ?
                            props.data.description.substring(0, 50) + '...'
                            : props.data.description
                        }
                    </p>
                </div>
                <div className='rating'>
                    <p>
                        <span>
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <span>
                            {props.data.rating.rate}
                        </span>
                    </p>
                    <p className="text-end">
                        <span>
                            {props.data.rating.count}
                        </span>
                        <span>
                            Reviews
                        </span>
                    </p>
                </div>
                <button className="add_fav">
                    <i class="fa-regular fa-heart"></i>
                </button>
                <div className="card-footer">
                    <div className="cart_add_btn">
                        <button className="btn">
                            Add To Beg
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                        <p>
                            ${props.data.price}
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MenProductCard