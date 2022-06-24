import React from "react";
import { Button } from "../button";
import { CartItem } from "../cart-item";
import { calcTotalPrice } from "../utils";
import "./cart-menu.css";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__goods-list">
        {items.length > 0
          ? items.map((good) => (
              <CartItem
                key={good.title}
                price={good.price}
                title={good.title}
                id={good.id}
              />
            ))
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} b.p.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Офoрмить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};
