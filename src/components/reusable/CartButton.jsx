import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addItem } from '../../redux/actions/cartActions';
const Button = styled.button`
 font-size: 18px;
    width: 40px;
    height: 40px;
    justify-content: center;
    display: flex;
    background-color: #fff;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #707070;
`;
const CartButton = ({ selectedData }) =>
{
    console.log(selectedData);
    const dispatch = useDispatch();

    const handleCart = () =>
    {
        dispatch(addItem(selectedData));
    };

    return (
        <Button className='btn' onClick={()=>handleCart()}>
            <i className="fa-solid fa-cart-shopping"></i>
        </Button>
    );
};

export default CartButton;