import React from "react";
import About from "./Components/About";
import Item from "./Components/Item";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShoeState from "./context/shoes/ShoeState";
import Shoe from "./Components/Shoe";

function App() {
  return (
    <>
      <ShoeState>
        <Navbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Shoe />} />
            <Route exact path="/item" element={<Item />} />
          </Routes>
        </Router>
        <About />
      </ShoeState>
    </>
  );
}

export default App;
