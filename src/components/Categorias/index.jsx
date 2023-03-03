import { Link } from "react-router-dom";
import "./categorias.sass";
import '../../styles/mixins.sass'




function Categorias() {
  
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   async function fetchProducts() {
  //     const response = await fetch('/api/products.json');
  //     const data = await response.json();
  //     setProducts(data);
  //   }

  //   fetchProducts();
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
          <Link to="/produtos" key={product.id} className="produto-categoria-item">
            <img src={product.photo} alt={product.name} />
            <div className="info-categoria">
            <h2>{product.name}</h2>
            <p>R$ {product.price}</p>

            </div>
           
          </Link>
        ))}
      </div>
      
    </div>
  );
}

export default Categorias;
