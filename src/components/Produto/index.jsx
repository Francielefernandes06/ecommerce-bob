import "./produto.sass";
import { useState } from "react";
import { Link } from "react-router-dom";

function Produto() {
  const [contador, setContador] = useState(0);

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="container-produto">
      <div className="imagens-produto">
        <div className="imagem-principal">
          <img src="/public/img/principal.png" alt="" />
        </div>
        <div className="imagens-secundarias">
          <div className="img-second">
            <img src="/public/img/imagem-1.png" alt="" />
          </div>
          <div className="img-second">
            <img src="/public/img/imagem-2.png" alt="" />
          </div>
          <div className="img-second">
            <img src="/public/img/imagem-3.png" alt="" />
          </div>
          <div className="img-second">
            <img src="/public/img/imagem-4.png" alt="" />
          </div>
        </div>
      </div>
      <div className="informacoes-produto">
        <div className="dados-produto">
          <div className="header-produto-dado">
            <h2>Product Est Quis Euismod</h2>
            <p className="preco-produto">R$ 155.99</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="body-produto-dado">
            <div className="cores-produto">
              <h2>
                CORES <span>*</span>
              </h2>
              <div className="cores">
                <div className="cor azul"></div>
                <div className="cor vermelho "></div>
                <div className="cor roxo"></div>
                <div className="cor verde active"></div>
              </div>
            </div>

            <div className="tamanho-produto">
              <h2>TAMANHO </h2>
              <div className="tamanhos">
                <div className="tamanho">P</div>
                <div className="tamanho active">M</div>
                <div className="tamanho">G</div>
                <div className="tamanho">XG</div>
                <div className="tamanho">XXG</div>
              </div>
            </div>

            <div className="buttons-produto">
              <div className="spinner-container ">
                <button id="decrement" onClick={decrementar}>
                  -
                </button>
                <input
                  type="text"
                  className="spinner"
                  value={contador}
                  min="0"
                  max="10"
                />
                <button id="increment" onClick={incrementar}>
                  +
                </button>
              </div>
              <button> <Link to='/carrinho'>Comprar</Link></button>
            </div>
          </div>
          <div className="descrição-produto">
            <div className="descricao">
              <h2>DESCRIÇÃO</h2>
              <span>-</span>
            </div>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="especificacao-produto">
            <div className="especificacao">
              <h2>ESPECIFICAÇÕES</h2>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produto;
