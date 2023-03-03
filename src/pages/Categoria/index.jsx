import Categorias from "../../components/Categorias";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Link } from "react-router-dom";
import "./categoria.sass";
import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import '../../styles/mixins.sass'

export const Categoria = () => {
  return (
    <div>
      <Header />
      <Nav />
      <div className="container-categoria">
        <div className="topo-categorias">
          <h2>BLUSAS</h2>
          <p>Home - Blusas e Camisas - Blusas</p>
        </div>

        <div className="links-categorias">
          <Link className="active">FEMININO</Link>
          <Link>MASCULINO</Link>
          <Link>ACESSÓRIOS</Link>
        </div>
        <div className="dados-page-categoria">
          <p>
            ORDENAR: <span>NAME</span>
          </p>
          <p>
            VISUALIZAR: <span>9</span>
          </p>
          <p>
            VIEW{" "}
            <span>
              <BsFillGridFill />
            </span>
            <span>
              <FaList className="inativo" />
            </span>
          </p>
        </div>
        
      </div>

      <Categorias />
      
      <Footer />
    </div>
  );
};
