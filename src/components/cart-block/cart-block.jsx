import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from '../items-in-cart';
import { calcTotalPrice } from '../utils';
import "./cart-block.css";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();
  const handleGoToOrderClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate('/order');
  }, [navigate]);


  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <FaShoppingCart
        
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-bonus"> {totalPrice} b.p.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleGoToOrderClick} />}
    </div>
  );
};
