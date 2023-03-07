import React, { useContext, useState } from "react";
import shoeContext from "../context/shoes/shoeContext";
import "./Item.css";
import ShoeItem from "./ShoeItem";

function Item() {
  const context = useContext(shoeContext);
  const { state, allshoes } = context;

  const [imgState, setImgState] = useState(0);

  return (
    <>
      <div className="ItemCard">
        <div className="Images">
          <img className="ItemShoeImage" src={state.url[imgState]} alt="" />
          <div className="ShoeImagesOption">
            <div
              onClick={() => {
                setImgState(0);
              }}
              className="ShoeImage"
            >
              <img className="OptionImage" src={state.url[0]} alt="" />
            </div>
            <div
              onClick={() => {
                setImgState(1);
              }}
              className="ShoeImage"
            >
              <img className="OptionImage" src={state.url[1]} alt="" />
            </div>
            <div
              onClick={() => {
                setImgState(2);
              }}
              className="ShoeImage"
            >
              <img className="OptionImage" src={state.url[2]} alt="" />
            </div>
            <div
              onClick={() => {
                setImgState(3);
              }}
              className="ShoeImage"
            >
              <img className="OptionImage" src={state.url[3]} alt="" />
            </div>
            <div
              onClick={() => {
                setImgState(4);
              }}
              className="ShoeImage"
            >
              <img className="OptionImage" src={state.url[4]} alt="" />
            </div>
          </div>
        </div>
        <div className="ItemContent">
          <h1 className="ItemShoeTitle">{state.title}</h1>
          <p className="ItemShoeDescription">{state.description}</p>
          <span className="ItemRating">
            {state.rating === 4 ? "⭐" : "⭐⭐"}⭐⭐⭐
          </span>
          <div className="ItemOldAndNewprice">
            <h2 className="ItemOldShoePrice">{state.oldPrice}</h2>
            <h2 className="ItemShoePrice">
              <i className="fa-solid fa-indian-rupee-sign"></i> {state.price}
            </h2>
            <h2 className="ItemPercentage">
              {((state.oldPrice - state.price) * 100) / state.oldPrice}% off
            </h2>
          </div>
          <h3 className="ItemFreeDelivery">Free delivery</h3>
          <a
            className="pay"
            href="upi://pay?pa=7709468189@hdfcbank&pn=DHRUV GHARAT&cu=INR"
            id="__UPI_BUTTON__"
          >
            BUY NOW
          </a>
        </div>
        <div className="moreShoes">
          {allshoes && allshoes.length > 0
            ? allshoes.map((shoe) => {
                return <ShoeItem key={shoe.id} shoe={shoe} />;
              })
            : null}
        </div>
      </div>
    </>
  );
}

export default Item;
