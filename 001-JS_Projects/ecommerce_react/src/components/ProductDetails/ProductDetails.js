import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../store/reducers/actions";

import { Content } from "./styled";

export default function ProductDetails() {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  const sendProductToCart = () => {
    dispatch(actions.isEmpty());
  };

  const decrease = () => {
    if (count <= 1) return;
    setCount(count - 1);
    localStorage.setItem("count", count);
  };

  const increase = () => {
    setCount(count + 1);
    localStorage.setItem("count", count);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[1].value);
    dispatch(actions.values(e.target[1].value));
  };

  const handleChanged = (e) => {
    const keyUpdated = e.target.value;
    setCount(keyUpdated);
  };
  return (
    <Content>
      <div className="subTitle">Sneaker Company</div>
      <h1>Fall Limited Edition Sneakers</h1>
      <div>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll with stand everything
          the weather can offer.
        </p>
      </div>

      <div className="price-content">
        <div className="mainPrice-content">
          <div className="price">
            $<span>125.00</span>
          </div>
          <span className="discount">50%</span>
        </div>
        <div className="old-value">$250.00</div>
      </div>

      <form onSubmit={(e) => handleSubmit(e)} action="./">
        <div className="button-group">
          <button onClick={decrease} type="button">
            <img src="./assets/images/icon-minus.svg" alt="icon-minus" />
          </button>
          <input
            type="number"
            min={count}
            onChange={(e) => handleChanged(e)}
            value={count}
            id="amount"
          />
          <button onClick={increase} type="button">
            <img src="./assets/images/icon-plus.svg" alt="icon-plus" />
          </button>
        </div>
        <button
          onClick={sendProductToCart}
          className="add-button"
          type="submit"
        >
          <img
            src="./assets/images/icon-cart-white.svg"
            alt="icon-cart-white"
          />
          Add to cart
        </button>
      </form>
    </Content>
  );
}
