import React, { useContext } from "react";
import "./ShoeItem.css";
import { Link } from "react-router-dom";
import shoeContext from "../context/shoes/shoeContext";

function ShoeItem(props) {
  const context = useContext(shoeContext);
  const { shoe } = props;

  const moreAboutProduct = () => {
    context.update(shoe.id - 1000);
  };

  return (
    <>
      <Link to="/item" shoe={shoe} style={{ textDecoration: "none" }}>
        <div className="card" onClick={moreAboutProduct}>
          <img className="shoeImage" src={shoe.url} alt="" />
          <h4 className="shoeTitle">{shoe.title}</h4>
          <div className="shoeDescription">{shoe.description}</div>
          <div className="OldAndNewprice">
            <p className="oldShoePrice">{shoe.oldPrice}</p>
            <h4 className="shoePrice">
              <i className="fa-solid fa-indian-rupee-sign"></i> {shoe.price}
            </h4>
            <h4 className="percentage">
              {((shoe.oldPrice - shoe.price) * 100) / shoe.oldPrice}% off
            </h4>
          </div>
          <p className="FreeDelivery">Free delivery</p>
          <span className="rating">{shoe.rating}⭐</span>
        </div>
      </Link>
    </>
  );
}

export default ShoeItem;
