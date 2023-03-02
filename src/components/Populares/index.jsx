import { Link } from "react-router-dom";
import Categorias from "../Categorias";
import "./populares.sass";
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function Populares() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get('https://bob-teste-front-end.herokuapp.com/api/products.json');
  //     console.log(result.data);
  //     setData(result.data);
  //   };

  //   fetchData();
  // }, []);

  const produtos = [
    {
      id: 1,
      name: "Creative Adidas T-shirts",
      category: "Women",
      price: 150.55,
      available: true,
      photo:
        "https://bob-teste-front-end.herokuapp.com/images/products/001.png",
    },
    {
      id: 2,
      name: "Mango-Navy",
      category: "Women",
      price: 190.99,
      available: true,
      photo:
        "https://bob-teste-front-end.herokuapp.com/images/products/002.png",
    },
    {
      id: 3,
      name: "Gravida Est Quis Euismod",
      category: "Women",
      price: 150.55,
      available: true,
      photo:
        "https://bob-teste-front-end.herokuapp.com/images/products/003.png",
    },
    {
      id: 4,
      name: "Donec Condimentum Fer",
      category: "Women",
      price: 310.05,
      available: true,
      photo:
        "https://bob-teste-front-end.herokuapp.com/images/products/004.png",
    },
    {
      id: 5,
      name: "Creative Adidas T-shirts",
      category: "Women",
      price: 150.55,
      available: true,
      photo:
        "https://bob-teste-front-end.herokuapp.com/images/products/005.png",
    },
    {
      id: 6,
      name: "Mango-Navy",
      category: "Women",
      price: 190.99,
      available: true,
      photo:
        "https://bob-teste-front-end.herokuapp.com/images/products/006.png",
    },
    {
      id: 7,
      name: "Gravida Est Quis Euismod",
      category: "Women",
      price: 150.55,
      available: true,
      photo:
        "https://bob-teste-front-end.herokuapp.com/images/products/007.png",
    },
    {
      id: 8,
      name: "Donec Condimentum Fer",
      category: "Women",
      price: 310.05,
      available: true,
      photo:
        "https://bob-teste-front-end.herokuapp.com/images/products/008.png",
    },
  ];

  return (
    <section className="product-list">
      <h2>POPULARES</h2>
      <Categorias/>
    </section>
  );
}

export default Populares;
