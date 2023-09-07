
import Cabecalho from "../../components/cabecalho";
import "./index.scss"

export default function Ingresso() {
  return (
    <div className="pagina-ingresso-concluido">
      <Cabecalho/>

      <div className="faixa">
        <img src="/assets/images/faixa.png" alt=""/>
      </div>

      <nav>
        <img src="/assets/images/ingresso.png" alt="" />
        <h2>Ingresso reservado com sucesso !!!
          Esperamos voce no dia 30/09</h2>
          <h2>Em nosso instituto</h2>
        
      </nav>


      <footer>
        <img src="/assets/images/background-quadrados.png" alt="" />
      </footer>

    </div>
  );
}


