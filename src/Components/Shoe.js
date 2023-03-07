import React, { useContext } from "react";
import ShoeItem from "./ShoeItem";
import "./Shoe.css";
import shoeContext from "../context/shoes/shoeContext";

function Shoe() {
  const context = useContext(shoeContext);
  const { allshoes } = context;

  return (
    <>
      <h1 className="text">Shoebox - If You Like It Don't Think Order It</h1>
      <div className="shoeBox">
        {allshoes && allshoes.length > 0
          ? allshoes.map((shoe) => {
              return <ShoeItem key={shoe.id} shoe={shoe} />;
            })
          : null}
      </div>
    </>
  );
}

export default Shoe;
