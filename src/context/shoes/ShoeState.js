import React, { useState } from "react";
import ShoeContext from "./shoeContext";

function ShoeState(props) {
  const allshoes = [
    {
      title: "Downshifter",
      description:
        "These Laurel luxury sneakers are crafted from premium leather, mesh lining and padded leather footbed. Completed with a round toe and is secured with white laces and velcro fastening. The comfortable white and orange color Italian outsole scores high in terms of lightness and a cushioning effect",
      price: "4000",
      oldPrice: "5000",
      rating: "4.9",
      id: "1000",
      url: [
        "https://m.media-amazon.com/images/I/51YilosAHNL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/519dtSlDoWL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/414E7T0zMXL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/511UxNGrIxL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/61sHWCVemEL._UY695_.jpg",
      ],
    },
    {
      title: "Blaze Running Shoe",
      description:
        "These Laurel luxury sneakers are crafted from premium leather, mesh lining and padded leather footbed. Completed with a round toe and is secured with white laces and velcro fastening. The comfortable white and orange color Italian outsole scores high in terms of lightness and a cushioning effect.",
      price: "4000",
      oldPrice: "5000",
      rating: "4.4",
      id: "1001",
      url: [
        "https://m.media-amazon.com/images/I/5156yBDDwHL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/51Fkdo6LvLL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/51au+ipLIwL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/61OmVRlANeL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/6158SiLZn1L._UY695_.jpg",
      ],
    },
    {
      title: "Mesh Running Shoe",
      description:
        "These Laurel luxury sneakers are crafted from premium leather, mesh lining and padded leather footbed. Completed with a round toe and is secured with white laces and velcro fastening. The comfortable white and orange color Italian outsole scores high in terms of lightness and a cushioning effect.",
      price: "4000",
      oldPrice: "5000",
      rating: "5",
      id: "1002",
      url: [
        "https://m.media-amazon.com/images/I/51qcNLdzstL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/510iD+afLKL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/51sY8p-AIRL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/61GPo1y+GPL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/51hf96JIG2L._UY695_.jpg",
      ],
    },
    {
      title: "Mens Shoe Blue",
      description:
        "These Laurel luxury sneakers are crafted from premium leather, mesh lining and padded leather footbed. Completed with a round toe and is secured with white laces and velcro fastening. The comfortable white and orange color Italian outsole scores high in terms of lightness and a cushioning effect.",
      price: "4000",
      oldPrice: "5000",
      rating: "4.7",
      id: "1003",
      url: [
        "https://m.media-amazon.com/images/I/61hpVzJYP4L._UY695_.jpg",
        "https://m.media-amazon.com/images/I/61k1bLuBxgL._UX695_.jpg",
        "https://m.media-amazon.com/images/I/61rvOcn46sL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/612XP9HS12L._UY695_.jpg",
        "https://m.media-amazon.com/images/I/51dE3ce6P-L._UY695_.jpg",
      ],
    },
    {
      title: "Mens Running Shoe",
      description:
        "These Laurel luxury sneakers are crafted from premium leather, mesh lining and padded leather footbed. Completed with a round toe and is secured with white laces and velcro fastening. The comfortable white and orange color Italian outsole scores high in terms of lightness and a cushioning effect.",
      price: "3000",
      oldPrice: "4000",
      rating: "3.9",
      id: "1004",
      url: [
        "https://m.media-amazon.com/images/I/81m9uoTavrL._UX695_.jpg",
        "https://m.media-amazon.com/images/I/61k1bLuBxgL._UX695_.jpg",
        "https://m.media-amazon.com/images/I/61rvOcn46sL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/612XP9HS12L._UY695_.jpg",
        "https://m.media-amazon.com/images/I/51dE3ce6P-L._UY695_.jpg",
      ],
    },
    {
      title: "Men's Running Shoes",
      description:
        "These Laurel luxury sneakers are crafted from premium leather, mesh lining and padded leather footbed. Completed with a round toe and is secured with white laces and velcro fastening. The comfortable white and orange color Italian outsole scores high in terms of lightness and a cushioning effect.",
      price: "3000",
      oldPrice: "6000",
      rating: "4.9",
      id: "1005",
      url: [
        "https://m.media-amazon.com/images/I/91Uk1gb7NSL._UX695_.jpg",
        "https://m.media-amazon.com/images/I/61k1bLuBxgL._UX695_.jpg",
        "https://m.media-amazon.com/images/I/61rvOcn46sL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/612XP9HS12L._UY695_.jpg",
        "https://m.media-amazon.com/images/I/51dE3ce6P-L._UY695_.jpg",
      ],
    },
    {
      title: "Torrance Running Shoes",
      description:
        "These Laurel luxury sneakers are crafted from premium leather, mesh lining and padded leather footbed. Completed with a round toe and is secured with white laces and velcro fastening. The comfortable white and orange color Italian outsole scores high in terms of lightness and a cushioning effect.",
      price: "3000",
      oldPrice: "4000",
      rating: "4.1",
      id: "1006",
      url: [
        "https://m.media-amazon.com/images/I/81v-89KxLgL._UX695_.jpg",
        "https://m.media-amazon.com/images/I/61k1bLuBxgL._UX695_.jpg",
        "https://m.media-amazon.com/images/I/61rvOcn46sL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/612XP9HS12L._UY695_.jpg",
        "https://m.media-amazon.com/images/I/51dE3ce6P-L._UY695_.jpg",
      ],
    },
    {
      title: "Designer Shoes",
      description:
        "These Laurel luxury sneakers are crafted from premium leather, mesh lining and padded leather footbed. Completed with a round toe and is secured with white laces and velcro fastening. The comfortable white and orange color Italian outsole scores high in terms of lightness and a cushioning effect.",
      price: "4000",
      oldPrice: "5000",
      rating: "4.1",
      id: "1007",
      url: [
        "https://th.bing.com/th/id/OIP.WTGmXNsWwpbHIWnQo_gs-QHaE8?pid=ImgDet&w=…",
        "https://m.media-amazon.com/images/I/61k1bLuBxgL._UX695_.jpg",
        "https://m.media-amazon.com/images/I/61rvOcn46sL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/612XP9HS12L._UY695_.jpg",
        "https://m.media-amazon.com/images/I/51dE3ce6P-L._UY695_.jpg",
      ],
    },
    {
      title: "Shoe9",
      description:
        "These Laurel luxury sneakers are crafted from premium leather, mesh lining and padded leather footbed. Completed with a round toe and is secured with white laces and velcro fastening. The comfortable white and orange color Italian outsole scores high in terms of lightness and a cushioning effect.",
      oldPrice: "4000",
      rating: "4.1",
      price: "3000",
      id: "1008",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQy9ctFqy_RgMQHvMn348hpvOAVvviBu-rg&usqp=CAU",
        "https://m.media-amazon.com/images/I/61k1bLuBxgL._UX695_.jpg",
        "https://m.media-amazon.com/images/I/61rvOcn46sL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/612XP9HS12L._UY695_.jpg",
        "https://m.media-amazon.com/images/I/51dE3ce6P-L._UY695_.jpg",
      ],
    },
    {
      title: "Shoe10",
      description:
        "These Laurel luxury sneakers are crafted from premium leather, mesh lining and padded leather footbed. Completed with a round toe and is secured with white laces and velcro fastening. The comfortable white and orange color Italian outsole scores high in terms of lightness and a cushioning effect.",
      price: "3000",
      oldPrice: "4000",
      rating: "4.4",
      id: "1009",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pTGZlQFUe1aIIoIJzLxIUdoe8jwBBKY6SA&usqp=CAU",
        "https://m.media-amazon.com/images/I/61k1bLuBxgL._UX695_.jpg",
        "https://m.media-amazon.com/images/I/61rvOcn46sL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/612XP9HS12L._UY695_.jpg",
        "https://m.media-amazon.com/images/I/51dE3ce6P-L._UY695_.jpg",
      ],
    },
    {
      title: "Shoe11",
      description:
        "These Laurel luxury sneakers are crafted from premium leather, mesh lining and padded leather footbed. Completed with a round toe and is secured with white laces and velcro fastening. The comfortable white and orange color Italian outsole scores high in terms of lightness and a cushioning effect.",
      price: "3000",
      oldPrice: "4000",
      rating: "4.1",
      id: "1010",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRgmVNdXNxorc9uJvRBCBq9zjf6viHUModQ&usqp=CAU",
        "https://m.media-amazon.com/images/I/61k1bLuBxgL._UX695_.jpg",
        "https://m.media-amazon.com/images/I/61rvOcn46sL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/612XP9HS12L._UY695_.jpg",
        "https://m.media-amazon.com/images/I/51dE3ce6P-L._UY695_.jpg",
      ],
    },
    {
      title: "Running Shoes",
      description:
        "These Laurel luxury sneakers are crafted from premium leather, mesh lining and padded leather footbed. Completed with a round toe and is secured with white laces and velcro fastening. The comfortable white and orange color Italian outsole scores high in terms of lightness and a cushioning effect.",
      price: "4000",
      oldPrice: "5000",
      rating: "4.3",
      id: "1011",
      url: [
        "https://m.media-amazon.com/images/I/51picYedSFL._AC_UF480,480_SR480,480_.jpg",
        "https://m.media-amazon.com/images/I/61k1bLuBxgL._UX695_.jpg",
        "https://m.media-amazon.com/images/I/61rvOcn46sL._UY695_.jpg",
        "https://m.media-amazon.com/images/I/612XP9HS12L._UY695_.jpg",
        "https://m.media-amazon.com/images/I/51dE3ce6P-L._UY695_.jpg",
      ],
    },
  ];

  const [state, setState] = useState(allshoes[0]);

  const update = (idx) => {
    setState(allshoes[idx]);
  };

  return (
    <ShoeContext.Provider value={{ update, allshoes, state }}>
      {props.children}
    </ShoeContext.Provider>
  );
}

export default ShoeState;
