import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import './footer.sass'


export const Footer = () =>{
    return ( 
        <footer className='footer__container'>             
           <article>
                <div className='card__container'>
                    
                    <ul>
                        <li><span>CONTATO</span></li>
                        <li><span>FRETES E ENTREGAS</span></li>
                        <li><span>COMO COMPRAR</span></li>
                        <li><span>TROCAS E DEVOLUÇÕES</span></li>
                        
                    </ul>
                </div>
                
                <div  className='card__container'>
                <ul>
                        <li><span>SOBRE</span></li>
                        <li><span>NA MÍDIA</span></li>
                        <li><span>SEGURANÇA</span></li>
                        <li><span>POLITICAS</span></li>
                        
                    </ul>
                </div>
  
                <div className='card__bottom'>
                    <div>
                        <p>CADASTRE-SE E RECEBA NOSSAS NOVIDADES</p>
                          
                    </div>
                    
                   <div>
                       <button>CADASTRAR</button>
                   </div>
                </div>
           </article>  
            <hr />
           
               <div className='footer-row'>
                    <div className='col-one'>COPYRIGHT © 2023</div>
                    <div className='col-two'>
                        <span>FAQ</span>
                        <span>MINHA CONTA</span>
                        <span>MEUS PEDIDOS</span>
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