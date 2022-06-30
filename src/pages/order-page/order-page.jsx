import React from 'react';
import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/order-item';
import { calcTotalPrice, enumerate } from '../../components/utils';
import { Button } from "@mui/material"
import { Link } from "react-router-dom";
//import Popup from 'pop-up';
import './order-page.css';

export const OrderPage = () => {
    const items = useSelector((state) => state.cart.itemsInCart);
    
    if (items.length < 1) {
        return <h1>Ваша корзина пуста!</h1>
    }

    

    return (
        <div className="order-page">
            
            <div className="order-page__left">
                {items.map(good => <OrderItem good={good} />)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span className='order-page__text'>{items.length} {enumerate(items.length, ['товар', 'товара', 'товаров'])} на сумму {calcTotalPrice(items)} b.p.</span>
                    
                    <Button variant='outlined'><Link to="/">Купить!</Link></Button>


                </div>
            </div>
        </div>
    )
}
/*<p className='no-money'>У вас не достаточно b.p. для покупки :(</p>*/ 