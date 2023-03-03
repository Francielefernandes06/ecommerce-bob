import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './footer.sass'


export const Footer = () =>{
    return ( 
        <footer className='footer__container'>             
           <article>
                <div className='card__container'>
                    
                    <ul>
                        <li><Link>CONTATO</Link></li>
                        <li><Link>FRETES E ENTREGAS</Link></li>
                        <li><Link>COMO COMPRAR</Link></li>
                        <li><Link>TROCAS E DEVOLUÇÕES</Link></li>
                        
                    </ul>
                </div>
                
                <div  className='card__container'>
                <ul>
                        <li><Link>SOBRE</Link></li>
                        <li><Link>NA MÍDIA</Link></li>
                        <li><Link>SEGURANÇA</Link></li>
                        <li><Link>POLITICAS</Link></li>
                        
                    </ul>
                </div>
  
                <div className='card__bottom'>
                    <div>
                        <p>CADASTRE-SE E RECEBA NOSSAS NOVIDADES</p>
                          
                    </div>
                    
                   <div>
                       <button>
                        <Link>CADASTRAR</Link>
                        </button>
                   </div>
                </div>
           </article>  
            <hr />
           
               <div className='footer-row'>
                    <div className='col-one'>COPYRIGHT © 2023</div>
                    <div className='col-two'>
                        <Link>FAQ</Link>
                        <Link>MINHA CONTA</Link>
                        <Link>MEUS PEDIDOS</Link>
                    </div>
                    <div className='col-three'>
                        <AiFillFacebook/>
                        <AiFillTwitterCircle/>
                        <AiFillInstagram/>
                        <AiFillYoutube/>
                        <BsPinterest/>

                    </div>
               </div>

               
        
        </footer>
    )
}