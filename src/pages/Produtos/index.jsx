import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import './produtos.sass'

export const Produtos= ()=>{
    return (
        <div>
            <Header/>
            <Nav/>
            <div className="topo-produtos">
                <p>Home - Blusas e Camisas - Gravida Est Quis Euismod</p>
            </div>
            
            <Footer/>
        </div>
    )
}