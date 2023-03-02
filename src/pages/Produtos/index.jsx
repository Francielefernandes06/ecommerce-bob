import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import Produto from "../../components/Produto";
import Categorias from "../../components/Categorias";
import "./produtos.sass";

export const Produtos = () => {
  return (
    <div className="produtos-container">
      <Header />
      <Nav />
      <div className="topo-produtos">
        <p>Home - Blusas e Camisas - Gravida Est Quis Euismod</p>
      </div>
      <Produto />
      
      <div className="produtos-relacionados">
        <h2>PRODUTOS RELACIONADOS</h2>
        
      </div>
      <Categorias />

      

      <Footer />
    </div>
  );
};
