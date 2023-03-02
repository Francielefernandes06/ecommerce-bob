import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Carrossel } from "../../components/Carrossel";
import { Tendencias } from "../../components/Tendencias";
import  Populares  from "../../components/Populares";


import './home.sass'
import { Link } from "react-router-dom";


export const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Nav/>
            <Carrossel/>
            <Tendencias/>
            <Populares/>
            <div>
        <Link to='/produtos' className="refresh-button">VER MAIS PRODUTOS</Link>
      </div>

            <Footer/>
            
        </div>
    );
    }