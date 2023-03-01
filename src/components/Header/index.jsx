import { Link } from 'react-router-dom';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsHandbag } from 'react-icons/bs';
import './header.sass'

export const Header =() =>{
    return (
        <div className="menu">
        
        <Link end to='/'><AiOutlinePhone/> 11 4191 4399</Link>
        <span>AVIATO</span>
        <Link to="/login" end id="buttonAccount"><BsHandbag/> (0) - <span>R$0,00</span></Link>
      </div>
    )
}