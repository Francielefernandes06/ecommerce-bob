import { Link } from "react-router-dom";
import "./categorias.sass";
import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function Categorias() {
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
    <div className="produto-categoria">
      

      <div className="produto-categoria-grid">
        {produtos.map((product) => (
          <div key={product.id} className="produto-categoria-item">
            <img src={product.photo} alt={product.name} />
            <div className="info-categoria">
            <h2>{product.name}</h2>
            <p>R$ {product.price}</p>

            </div>
           
          </div>
        ))}
      </div>
      <div>
        <Link className="refresh-button">VER MAIS PRODUTOS</Link>
      </div>
    </div>
  );
}

export default Categorias;
