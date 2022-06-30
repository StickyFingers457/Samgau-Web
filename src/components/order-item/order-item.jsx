import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GoodCover } from '../good-cover/good-cover';
import './order-item.css';
import { deleteItemFromCart } from '../../redux/cart/reducer';

export const OrderItem = ({ good }) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(good.id))
    }
    return (
        <div className="order-item">
            <div className="order-item__cover">
                <GoodCover image={ good.image }/>
            </div>
            <div className="order-item__title">
                <span> { good.title } </span>
            </div>
            <div className="order-item__price">
                <span>{ good.price } b.p..</span>
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item__delete-icon"
                    onClick={handleDeleteClick}
                />
            </div>
        </div>
    )
}