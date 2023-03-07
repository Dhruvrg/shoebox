import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/shoe-logo-design_639744-220.jpg?w=2000"
          alt=""
        />
        <h1 className="title">Shoebox</h1>
      </nav>
    </div>
  );
}

export default Navbar;
