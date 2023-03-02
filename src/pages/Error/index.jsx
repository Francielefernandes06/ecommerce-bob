import { Link } from "react-router-dom";
import "./error.sass";



export const Error = ()=>{
    return (
        <div className="container-error">
        <div className="img__box">
          <img src="/src/img/error.png" alt="Error" />
        </div>
        <div className="content__error">
          <h1>ERROR 404</h1>
          <p>
            A página que você está procurando não existe ou foi movida.

          </p>
          <Link to="/" id="button">PÁGINA INICIAL</Link>
        </div>
      </div>
    )
}